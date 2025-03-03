import styles from "./styles.module.css";

import Heading from "@/app/_ui/Heading";
import Features from "../Features";
import RoomSlider from "../RoomSlider";
import RoomBookingForm from "../RoomBookingForm";
import RoomDescription from "../RoomDescription";
import Facilities from "../Facilities";
import BookingPolicy from "../BookingPolicy";
// import { getRoomById, getRoomImages } from "@/app/_lib/supabase/rooms";
import { notFound, redirect } from "next/navigation";
import { bookingSchema } from "@/app/_lib/zodSchemas";
import { cookies } from "next/headers";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;
const room_dummy = {
  name: "Mahogany Room",
  description:
    "Leading on from Rancamaya Golf and Country Club, The Mahogany Room doubles up as an elegant boardroom or private dining room, ideal for corporate meetings or small lunch and dinner parties. The delightful Mahogany room can accommodate up to 120 guests for a round table set up dinner. This stately room epitomises the modern stylish of the house and the soaring windows fill the room with natural light.  From planning a special birthday party to a lavish dinner with a group of much loved family and friends or business meeting, we can turn any gathering into an unforgettable celebration.",
  price: 1500000,
  capacity: 120,
  amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"],
};

const room_images_dummy = [
  { img_path: "mahogany_room.jpg" },
  { img_path: "pal_rooms.jpg" },
  { img_path: "banyan_ballroom.jpg" },
];

async function RoomContainer({ params }) {
  const room_slug = params?.room_slug;

  if (!room_slug || !/^-?\d+$/.test(room_slug)) notFound();

  // const room = await getRoomById(room_slug);
  const room = room_dummy;

  // const room_images = await getRoomImages(room_slug ?? []);
  const room_images = room_images_dummy;

  const images = room_images.map((item) => `/${item.img_path}`);

  if (!room) notFound();

  async function bookingAction(prevState, formData) {
    "use server";

    prevState = { ...prevState, isBooking: true };
    const start_date = formData.get("start_date");
    const end_date = formData.get("end_date");
    const guests_count = parseInt(formData.get("guests_count"));
    const room_id = formData.get("room_id");

    // FORM VALIDATION
    let isValid = true;
    try {
      bookingSchema.parse({ start_date, end_date, guests_count });
    } catch (err) {
      isValid = false;
      err.errors.forEach((element) => {
        prevState[element?.path[0] ?? "unknown"] = element.message;
      });

      return { ...prevState, isBooking: false };
    } finally {
      prevState = { ...prevState, isBooking: false };
    }

    if (isValid) {
      const reservation_cookies = cookies();
      reservation_cookies.set(
        "pending_reservation",
        JSON.stringify({ start_date, end_date, guests_count, room_id }),
        {
          maxAge: 60 * 60 * 2,
          httpOnly: true,
        }
      );

      redirect(`/reservations/checkout`);
    }
  }

  return (
    <>
      <Heading className={styles.heading}>{room.name}</Heading>
      <Features room={room} />
      <RoomSlider images={images} />
      <RoomBookingForm bookingAction={bookingAction} room={room} />
      <RoomDescription />
      <Facilities />
      <BookingPolicy />
    </>
  );
}

export default RoomContainer;
