// import { filterRoomsByDate, getAllRooms } from "@/app/_lib/supabase/rooms";
import styles from "./styles.module.css";
import RoomItem from "../RoomItem";
import { isValid } from "date-fns";

async function RoomsSection({ filter, range }) {
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

  console.log({ rooms: rooms.length });

  // let filteredRooms = await filterRoomsByDate();

  let filteredRooms = rooms;

  if (
    range &&
    isValid(new Date(range.split("_")?.at(0))) &&
    isValid(new Date(range.split("_")?.at(1)))
  ) {
    const arrivalDate = range.split("_")?.at(0);
    const departureDate = range.split("_")?.at(1);
    filteredRooms = rooms.filter((room) => {
      // Ensure availableDates is defined and is an array before using .some()
      if (Array.isArray(room.availableDates)) {
        return room.availableDates.some((date) => {
          const roomDate = new Date(date);
          return roomDate >= arrivalDate && roomDate <= departureDate;
        });
      }
      return false; // If availableDates is not defined or not an array, return false
    });
  }

  switch (filter) {
    case "high-price":
      filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
      break;

    case "min-guests":
      filteredRooms = filteredRooms.sort((a, b) => b.capacity - a.capacity);
      break;

    case "max-guests":
      filteredRooms = filteredRooms.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredRooms = filteredRooms;
  }

  return (
    <div className={styles.roomsGrid}>
      {filteredRooms.map((item) => (
        <RoomItem
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          imgPath={item.thumbnail}
          link="#"
        />
      ))}
    </div>
  );
}

export default RoomsSection;
