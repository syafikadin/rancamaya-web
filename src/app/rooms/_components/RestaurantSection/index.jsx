"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RoomItem from "../RoomItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import RestaurantItem from "../RestaurantItem";

function RoomsSection() {
  const restaurants = [
    {
      id: 1,
      name: "The Pavilion",
      price: 200000,
      capacity: 350,
      thumbnail: "the_pavilion.jpg",
      description:
        "Pavilion, celebrates traditional Indonesian food with modern flavors served in a stimulating contemporary setting. Revolving around an interactive show kitchen Pavilion brings the excitement of live cooking centre stage.",
    },
    {
      id: 2,
      name: "The Patio Lounge",
      price: 150000,
      capacity: 110,
      thumbnail: "the_patio_lounge.jpg",
      description:
        "The two Palm Rooms offer a combined 112 sqm stylish setting for corporate meeting and events accomodating 36 to 110 people",
    },
    {
      id: 3,
      name: "19th Hole Restaurant",
      price: 300000,
      capacity: 18,
      thumbnail: "19th_hole_restaurant.jpg",
      description:
        "The Pine Board Rooms each offer a perfect 56sqm setting for high-level business meeting accommodating up to 18 people in board meetings.",
    },
    {
      id: 4,
      name: "Waterfall Bar",
      price: 500000,
      capacity: 40,
      thumbnail: "waterfall_bar.jpg",
      description:
        "The Waterfall Bar is a perfect place to kick back while taking in the tranquillity of the fairways on the large terrace overlooking the golf course. Play some pool, celebrate a Hole in One or simply soak up the atmosphere of the Rancamaya Golf and Country Club.",
    },
    {
      id: 5,
      name: "@ De Yard Restaurant",
      price: 800000,
      capacity: 300,
      thumbnail: "de_yard_restaurant.jpg",
      description:
        "Enhancing the gastronomical landscape of Bogor City and the unique spices and flavours, menus at one of the city's exciting new restaurant are beckoning travelers and locals alike to the @ De Yard restaurant, R Hotel Rancamaya Golf and Resort.",
    },
  ];

  const [currentIndexRooms, setCurrentIndexRooms] = useState(0);
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
      prev + cardsToShow < restaurants.length ? prev + cardsToShow : prev
    );
  };

  return (
    <div>
      {/* Restaurant */}
      <div>
        <h1 className={styles.sectionHeading}>Hidangan Berkualitas, Suasana Berkelas</h1>
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
            {restaurants
              .slice(currentIndexRooms, currentIndexRooms + cardsToShow)
              .map((item) => (
                <RestaurantItem
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
              currentIndexRooms + cardsToShow >= restaurants.length ? styles.disabled : ""
            }`}
            disabled={currentIndexRooms + cardsToShow >= restaurants.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoomsSection;
