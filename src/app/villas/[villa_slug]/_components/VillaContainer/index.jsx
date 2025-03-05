import styles from "./styles.module.css";

import Heading from "@/app/_ui/Heading";
import Features from "../Features";
import VillaSlider from "../VillaSlider";
import VillaBookingForm from "../VillaBookingForm";
import VillaDescription from "../VillaDescription";
import Facilities from "../Facilities";
import BookingPolicy from "../BookingPolicy";
// import { getVillaById, getVillaImages } from "@/app/_lib/supabase/villas";
import { notFound, redirect } from "next/navigation";
import { bookingSchema } from "@/app/_lib/zodSchemas";
import { cookies } from "next/headers";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;
const villa_dummy = {
  name: "Deluxe Villa",
  description: "A beautiful villa with stunning views.",
  price: 150,
  capacity: 2,
  amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"],
};

const villa_images_dummy = [
  { img_path: "one_bedroom.jpg" },
  { img_path: "two_bedroom.png" },
  { img_path: "two_bedroom_pool.jpg" },
];

async function VillaContainer({ params }) {
  const villa_slug = params?.villa_slug;

  if (!villa_slug || !/^-?\d+$/.test(villa_slug)) notFound();

  // const villa = await getVillaById(villa_slug);
  const villa = villa_dummy;

  // const villa_images = await getVillaImages(villa_slug ?? []);
  const villa_images = villa_images_dummy;

  const images = villa_images.map((item) => `/${item.img_path}`);

  if (!villa) notFound();

  async function bookingAction(prevState, formData) {
    "use server";

    prevState = { ...prevState, isBooking: true };
    const start_date = formData.get("start_date");
    const end_date = formData.get("end_date");
    const guests_count = parseInt(formData.get("guests_count"));
    const villa_id = formData.get("villa_id");

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
        JSON.stringify({ start_date, end_date, guests_count, villa_id }),
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
      <Heading className={styles.heading}>{villa.name}</Heading>
      <Features villa={villa} />
      <VillaSlider images={images} />
      <VillaBookingForm bookingAction={bookingAction} villa={villa} />
      <VillaDescription />
      <Facilities />
      <BookingPolicy />
    </>
  );
}

export default VillaContainer;
