import styles from "./styles.module.css";

import Heading from "@/app/_ui/Heading";
import RoomSlider from "../RoomSlider";
import RoomDescription from "../RoomDescription";
import Facilities from "../Facilities";
import BookingPolicy from "../BookingPolicy";
import { notFound, redirect } from "next/navigation";

const restaurant_dummy = {
  name: "The Pavilion",
  description:
    "Pavilion, celebrates traditional Indonesian food with modern flavors served in a stimulating contemporary setting. Revolving around an interactive show kitchen Pavilion brings the excitement of live cooking centre stage.",
  price: 150,
  capacity: 2,
  amenities: ["WiFi", "Air Conditioning", "TV", "Mini Bar"],
  sleep: 5,
};

const restaurant_image_dummy = [
  { img_path: "the_pavilion.jpg" },
  { img_path: "the_patio_lounge.jpg" },
  { img_path: "waterfall_bar.jpg" },
];

async function RestaurantContainer({ params }) {
  // const restaurant_slug = params?.restaurant_slug;

  // if (!restaurant_slug || !/^-?\d+$/.test(restaurant_slug)) notFound();

  const restaurant = restaurant_dummy;

  const restaurant_image = restaurant_image_dummy;

  const images = restaurant_image.map((item) => `/${item.img_path}`);

  if (!restaurant) notFound();

  return (
    <>
      <Heading className={styles.heading}>{restaurant.name}</Heading>
      {/* <Features restaurant={restaurant} /> */}
      <RoomSlider images={images} />
      <RoomDescription />
      <Facilities />
      {/* <BookingPolicy /> */}
    </>
  );
}

export default RestaurantContainer;
