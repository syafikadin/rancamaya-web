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
  name: "Deluxe Room",
  description:
    "Our 39-sqm Deluxe Rooms is designed with your total comfort in mind, and fresh contemporary style to match the mountains scene outside. Enjoy a great night`s sleep with the choice of a twin queen bed or a king size bed. Then relax on your private balcony to watch the mountain breeze, or cozy up inside on a sofa chair for TV time or an online catch up.",
  price: 150,
  capacity: 2,
  amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"],
};

const room_images_dummy = [
  { img_path: "deluxe.jpg" },
  { img_path: "superior.jpg" },
  { img_path: "grand_suite.jpg" },
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
