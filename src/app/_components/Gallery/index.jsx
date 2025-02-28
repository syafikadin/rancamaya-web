import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";
// import { getAllRooms } from "@/app/_lib/supabase/rooms";
// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;
async function Gallery() {
  const villas = [
    {
      id: 1,
      name: "One Bedroom",
      price: 300000,
      capacity: 4,
      thumbnail: "one_bedroom.jpg",
    },
    {
      id: 2,
      name: "Two Bedroom",
      price: 250000,
      capacity: 2,
      thumbnail: "two_bedroom.png",
    },
    {
      id: 3,
      name: "Two Bedroom Pool",
      price: 500000,
      capacity: 6,
      thumbnail: "two_bedroom_pool.jpg",
    },
    {
      id: 4,
      name: "Two Bedroom Jacuzzi",
      price: 400000,
      capacity: 5,
      thumbnail: "two_bedroom_jacuzzi.jpeg",
    },
    {
      id: 5,
      name: "Private Pool Villa",
      price: 600000,
      capacity: 8,
      thumbnail: "superior_queen.jpg",
    },
  ];

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <Heading className="text-center">Vila & Apart</Heading>
        <div className={styles.galleryGrid}>
          {villas.map((item) => (
            <div key={item.id} className={styles.thumbnail}>
              <Image fill src={`/${item.thumbnail}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
