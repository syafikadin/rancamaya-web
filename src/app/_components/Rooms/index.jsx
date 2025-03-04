"use client";

import { useState, useEffect } from "react";
import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import RoomCard from "../RoomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

function Rooms() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - cardsToShow));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= rooms.length ? prevIndex : prevIndex + cardsToShow
    );
  };

  return (
    <section className={styles.roomsSection}>
      <div className="container">
        <Heading className="text-center">Our Rooms</Heading>
        <p className="text-center">
          "Experience space and comfort in stylishly contemporary guestrooms. Choose
          between rooms with queen twin beds ideal for company retreats or luxuriously
          appointed extra large rooms for romantic weekend get aways. Alternatively opt
          for a family suite with direct lagoon pool access perfect for family breaks."
        </p>
        <div className={styles.carousel}>
          <button
            onClick={handlePrev}
            className={`${styles.navButton} ${currentIndex === 0 ? styles.disabled : ""}`}
            disabled={currentIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={styles.roomsGrid}>
            {rooms.slice(currentIndex, currentIndex + cardsToShow).map((item, index) => (
              <RoomCard key={index} room={item} />
            ))}
          </div>
          <button
            onClick={handleNext}
            className={`${styles.navButton} ${
              currentIndex + cardsToShow >= rooms.length ? styles.disabled : ""
            }`}
            disabled={currentIndex + cardsToShow >= rooms.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Rooms;
