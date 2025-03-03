"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RoomItem from "../RoomItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { isValid } from "date-fns";
import BallroomItem from "../BallroomItem";

async function RoomsSection({ filter, range }) {
  const rooms = [
    {
      id: 1,
      name: "Deluxe",
      price: 200000,
      capacity: 2,
      thumbnail: "deluxe.jpg",
      description:
        "Our 39-sqm Deluxe Rooms is designed with your total comfort in mind, and fresh contemporary style to match the mountains scene outside. Enjoy a great night`s sleep with the choice of a twin queen bed or a king size bed. Then relax on your private balcony to watch the mountain breeze, or cozy up inside on a sofa chair for TV time or an online catch up.",
    },
    {
      id: 2,
      name: "Grand Suite",
      price: 150000,
      capacity: 4,
      thumbnail: "grand_suite.jpg",
      description:
        "The extra space of our 86-sqm Grand Suites gives you even more room to relax and enjoy mount-front life to the full. Perfect for families and friends, you'll find all the essential comforts you need, whatever you're in the mood for. Watch the sweeping views across an expanse beautifully manicured golf course towards mystical Mt. Salak on the distant horizon as you chill out on the balcony. Hang out in the lounge to plan a great day together and retreat there later on to snooze or watch a movie. Easing into a great evening is a pleasure, with mini bar drinks on the balcony before heading off to dinner.",
    },
    {
      id: 3,
      name: "Lagoon Deluxe",
      price: 300000,
      capacity: 2,
      thumbnail: "lagoon_deluxe.jpg",
      description:
        "Set on the first floors step aside by a beautiful long dip lagoon pool, the Lagoon Deluxe rooms offer a unique, private sanctuary with the choice of a king size bed or double queen beds. Stylish in design and furnished with luxurious amenities, these spacious 39-sqm rooms feature expansive windows, opening the room to its delightful surrounds. The remarkable sights, comfortable furnishings and signature R Hotel amenities all come together to create a truly blissful experience. Stepping outside, escape to your own personal balcony, or take in the views of the tranquil swimming lagoons or dip into the pool from your private terrace with direct pool access.",
    },
    {
      id: 4,
      name: "Superior Queen",
      price: 500000,
      capacity: 6,
      thumbnail: "superior_queen.jpg",
      description:
        "Exceptional comfort awaits in our stylish 34-sqm Superior Queen room featuring one 160 x 200 queen beds and a comfortable modern sofa. Sip your morning tea or coffee on the balcony, before stepping under the rain shower to get ready for a day in paradise. Come back for an afternoon snooze, or laze in bed and watch a movie. Keeping in touch with friends and family back home is easy with free Wi-Fi, and a comfy bed with the perfect room temperature promises a good night`s sleep, so you`ll wake up feeling totally refreshed.",
    },
    {
      id: 5,
      name: "Superior",
      price: 800000,
      capacity: 1,
      thumbnail: "superior.jpg",
      description:
        "Relax in exquisite, contemporary style 34-sqm room featuring two 160 x 200 queen beds, Superior rooms are invitingly cozy. Sip your morning tea or coffee on the balcony, before stepping under the rain shower to get ready for a day in paradise. Come back for an afternoon snooze, or laze in bed and watch a movie. Keeping in touch with friends and family back home is easy with free Wi-Fi, and a comfy bed with the perfect room temperature promises a good night`s sleep, so you`ll wake up feeling totally refreshed",
    },
  ];
  const ballrooms = [
    {
      id: 1,
      name: "Banyan Ballroom",
      price: 200000,
      capacity: 350,
      thumbnail: "banyan_ballroom.jpg",
      description:
        "The Banyan Ballroom is a beautifully designed contemporary venue offering the latest in style and sophistication.",
    },
    {
      id: 2,
      name: "Palm Rooms",
      price: 150000,
      capacity: 110,
      thumbnail: "pal_rooms.jpg",
      description:
        "The two Palm Rooms offer a combined 112 sqm stylish setting for corporate meeting and events accomodating 36 to 110 people",
    },
    {
      id: 3,
      name: "Pine Board Rooms",
      price: 300000,
      capacity: 18,
      thumbnail: "pine_board_rooms.jpg",
      description:
        "The Pine Board Rooms each offer a perfect 56sqm setting for high-level business meeting accommodating up to 18 people in board meetings.",
    },
    {
      id: 4,
      name: "Maple Rooms",
      price: 500000,
      capacity: 40,
      thumbnail: "maple_rooms.jpg",
      description:
        "The three Maple Rooms are located at the Rancamaya Golf and Country Club. With subtle decor and furnishing, the Maple Rooms offer an elegant setting for both corporate and private events.",
    },
    {
      id: 5,
      name: "Diamond Room",
      price: 800000,
      capacity: 300,
      thumbnail: "diamond_room.jpg",
      description:
        "The Diamond Room is located on the first floor of the hotel and offers the perfect green environment for receptions, intimate private party and business meetings to weddings and major MICE events.",
    },
    {
      id: 6,
      name: "Acacia Rooms",
      price: 800000,
      capacity: 50,
      thumbnail: "acacia_rooms.jpg",
      description:
        "The Acacia Meeting Room is located on the Lower Ground and adjacent to the Courtyard Garden Restaurant.",
    },
    {
      id: 7,
      name: "Mahogany Rooms",
      price: 800000,
      capacity: 120,
      thumbnail: "mahogany_room.jpg",
      description:
        "Leading on from Rancamaya Golf and Country Club, The Mahogany Room doubles up as an elegant boardroom or private dining room, ideal for corporate meetings or small lunch and dinner parties.",
    },
  ];

  let filteredRooms = rooms;
  let filteredBallrooms = ballrooms;

  if (
    range &&
    isValid(new Date(range.split("_")?.at(0))) &&
    isValid(new Date(range.split("_")?.at(1)))
  ) {
    const arrivalDate = range.split("_")?.at(0);
    const departureDate = range.split("_")?.at(1);
    filteredRooms = rooms.filter((room) => {
      if (Array.isArray(room.availableDates)) {
        return room.availableDates.some((date) => {
          const roomDate = new Date(date);
          return roomDate >= arrivalDate && roomDate <= departureDate;
        });
      }
      return false;
    });
  }

  switch (filter) {
    case "high-price":
      filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
      filteredBallrooms = filteredBallrooms.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
      filteredBallrooms = filteredBallrooms.sort((a, b) => a.price - b.price);
      break;
    case "min-guests":
      filteredRooms = filteredRooms.sort((a, b) => b.capacity - a.capacity);
      filteredBallrooms = filteredBallrooms.sort((a, b) => b.capacity - a.capacity);
      break;
    case "max-guests":
      filteredRooms = filteredRooms.sort((a, b) => a.capacity - b.capacity);
      filteredBallrooms = filteredBallrooms.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredRooms = filteredRooms;
      filteredBallrooms = filteredBallrooms;
  }

  const [currentIndexRooms, setCurrentIndexRooms] = useState(0);
  const [currentIndexBallrooms, setCurrentIndexBallrooms] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, []);

  const handlePrevRooms = () => {
    setCurrentIndexRooms((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNextRooms = () => {
    setCurrentIndexRooms((prev) =>
      prev + cardsToShow < filteredRooms.length ? prev + cardsToShow : prev
    );
  };

  const handlePrevBallrooms = () => {
    setCurrentIndexBallrooms((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNextBallrooms = () => {
    setCurrentIndexBallrooms((prev) =>
      prev + cardsToShow < filteredBallrooms.length ? prev + cardsToShow : prev
    );
  };

  return (
    <div>
      <h1 className={styles.sectionHeading}>Liburan Impian Anda Dimulai di Sini</h1>
      <div className={styles.carousel}>
        <button
          onClick={handlePrevRooms}
          className={`${styles.navButton} ${styles.left} ${
            currentIndexRooms === 0 ? styles.disabled : ""
          }`}
          disabled={currentIndexRooms === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.roomsGrid}>
          {filteredRooms
            .slice(currentIndexRooms, currentIndexRooms + cardsToShow)
            .map((item) => (
              <RoomItem
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
                imgPath={item.thumbnail}
                description={item.description}
                link="#"
              />
            ))}
        </div>
        <button
          onClick={handleNextRooms}
          className={`${styles.navButton} ${styles.right} ${
            currentIndexRooms + cardsToShow >= filteredRooms.length ? styles.disabled : ""
          }`}
          disabled={currentIndexRooms + cardsToShow >= filteredRooms.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <h1 className={styles.sectionHeading}>
        Ballroom Eksklusif untuk Momen Tak Terlupakan
      </h1>
      <div className={styles.carousel}>
        <button
          onClick={handlePrevBallrooms}
          className={`${styles.navButton} ${styles.left} ${
            currentIndexBallrooms === 0 ? styles.disabled : ""
          }`}
          disabled={currentIndexBallrooms === 0}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.roomsGrid}>
          {filteredBallrooms
            .slice(currentIndexBallrooms, currentIndexBallrooms + cardsToShow)
            .map((item) => (
              <BallroomItem
                key={item.id}
                id={item.id}
                title={item.name}
                price={item.price}
                capacity={item.capacity}
                imgPath={item.thumbnail}
                description={item.description}
                link="#"
              />
            ))}
        </div>
        <button
          onClick={handleNextBallrooms}
          className={`${styles.navButton} ${styles.right} ${
            currentIndexBallrooms + cardsToShow >= filteredRooms.length
              ? styles.disabled
              : ""
          }`}
          disabled={currentIndexBallrooms + cardsToShow >= filteredRooms.length}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default RoomsSection;
