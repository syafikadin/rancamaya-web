import Heading from "@/app/_ui/Heading";

import styles from "./styles.module.css";
import RoomCard from "../RoomCard";
// import { getAllRooms } from "@/app/_lib/supabase/rooms";

async function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe",
      price: 200000,
      capacity: 2,
      thumbnail: "deluxe.jpg",
    },
    {
      id: 2,
      name: "Grand Suite",
      price: 150000,
      capacity: 4,
      thumbnail: "grand_suite.jpg",
    },
    {
      id: 3,
      name: "Lagoon Deluxe",
      price: 300000,
      capacity: 2,
      thumbnail: "lagoon_deluxe.jpg",
    },
    {
      id: 4,
      name: "Superior Queen",
      price: 500000,
      capacity: 6,
      thumbnail: "superior_queen.jpg",
    },
    {
      id: 5,
      name: "Superior",
      price: 800000,
      capacity: 1,
      thumbnail: "superior.jpg",
    },
  ];

  return (
    <section className={styles.roomsSection}>
      <div className="container">
        <Heading className="text-center">Our Rooms</Heading>
        <p className="text-center">
          Lorem Ipsum is available, but the majority have suffered
        </p>
        <div className={styles.roomsGrid}>
          {rooms.map((item, index) => (
            <RoomCard key={index} room={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
