"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import RoomItem from "../RoomItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BallroomItem from "../BallroomItem";
import Facility from "../Facility";
import Restaurant from "../RestaurantSection";
import VillaItem from "../VillaItem";
import RentHouseItem from "../RentHouseItem";

function RoomsSection({ filter }) {
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
      capacity: 350,
      thumbnail: "banyan_ballroom.jpg",
      description:
        "The Banyan Ballroom is a beautifully designed contemporary venue offering the latest in style and sophistication.",
    },
    {
      id: 2,
      name: "Palm Rooms",
      capacity: 110,
      thumbnail: "pal_rooms.jpg",
      description:
        "The two Palm Rooms offer a combined 112 sqm stylish setting for corporate meeting and events accomodating 36 to 110 people",
    },
    {
      id: 3,
      name: "Pine Board Rooms",
      capacity: 18,
      thumbnail: "pine_board_rooms.jpg",
      description:
        "The Pine Board Rooms each offer a perfect 56sqm setting for high-level business meeting accommodating up to 18 people in board meetings.",
    },
    {
      id: 4,
      name: "Maple Rooms",
      capacity: 40,
      thumbnail: "maple_rooms.jpg",
      description:
        "The three Maple Rooms are located at the Rancamaya Golf and Country Club. With subtle decor and furnishing, the Maple Rooms offer an elegant setting for both corporate and private events.",
    },
    {
      id: 5,
      name: "Diamond Room",
      capacity: 300,
      thumbnail: "diamond_room.jpg",
      description:
        "The Diamond Room is located on the first floor of the hotel and offers the perfect green environment for receptions, intimate private party and business meetings to weddings and major MICE events.",
    },
    {
      id: 6,
      name: "Acacia Rooms",
      capacity: 50,
      thumbnail: "acacia_rooms.jpg",
      description:
        "The Acacia Meeting Room is located on the Lower Ground and adjacent to the Courtyard Garden Restaurant.",
    },
    {
      id: 7,
      name: "Mahogany Rooms",
      capacity: 120,
      thumbnail: "mahogany_room.jpg",
      description:
        "Leading on from Rancamaya Golf and Country Club, The Mahogany Room doubles up as an elegant boardroom or private dining room, ideal for corporate meetings or small lunch and dinner parties.",
    },
  ];
  const villas = [
    {
      id: 1,
      name: "One Bedroom",
      price: 300000,
      capacity: 4,
      thumbnail: "one_bedroom.jpg",
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
    {
      id: 2,
      name: "Two Bedroom",
      price: 250000,
      capacity: 2,
      thumbnail: "two_bedroom.png",
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "Two Bedroom Pool",
      price: 500000,
      capacity: 6,
      thumbnail: "two_bedroom_pool.jpg",
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "Two Bedroom Jacuzzi",
      price: 400000,
      capacity: 5,
      thumbnail: "two_bedroom_jacuzzi.jpeg",
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
    {
      id: 5,
      name: "Private Pool Villa",
      price: 600000,
      capacity: 8,
      thumbnail: "superior_queen.jpg",
      description:
        "Experience the unrivalled majesty of the triplex-style in a 125-sqm Lagoon Family Suite, an oasis of sophistication blending stylish design for an unforgettable stay. The dramatic living room opens on to a large terrace with direct access to an infinity pool and expansive views of nearby Mt. Salak and of the beautifully manicured golf course",
    },
  ];
  const rentHouse = [
    {
      id: 1,
      name: "The Summit 82",
      price: 3400000,
      capacity: 6,
      bedroom: 3,
      bathroom: 2,
      thumbnail: "thesummit_82.jpg",
      description:
        "Rancamaya Golf Estate, relish in this great family vacation spot; a beautiful unit in a beautiful development. Enjoy mountain views from your large second floor balcony. luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience",
    },
    {
      id: 2,
      name: "The Summit 02",
      price: 3400000,
      capacity: 6,
      bedroom: 3,
      bathroom: 2,
      thumbnail: "thesummit_02.jpg",
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "The Summit 03",
      price: 3400000,
      capacity: 6,
      bedroom: 3,
      bathroom: 2,
      thumbnail: "thesummit_03.jpg",
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "The Summit 86",
      price: 3800000,
      capacity: 6,
      bedroom: 3,
      bathroom: 2,
      thumbnail: "thesummit_86.jpg",
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
    {
      id: 5,
      name: "Balcony Grande 22",
      price: 2000000,
      capacity: 4,
      bedroom: 2,
      bathroom: 1,
      thumbnail: "balcony_grande_22.jpg",
      description:
        "Experience the unrivalled majesty of the triplex-style in a 125-sqm Lagoon Family Suite, an oasis of sophistication blending stylish design for an unforgettable stay. The dramatic living room opens on to a large terrace with direct access to an infinity pool and expansive views of nearby Mt. Salak and of the beautifully manicured golf course",
    },
  ];

  let filteredRooms = rooms;
  let filteredBallrooms = ballrooms;
  let filteredVillas = villas;

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

  switch (filter) {
    case "high-price":
      filteredVillas = filteredVillas.sort((a, b) => b.price - a.price);
      filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredVillas = filteredVillas.sort((a, b) => a.price - b.price);
      filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
      break;
    case "min-guests":
      filteredVillas = filteredVillas.sort((a, b) => b.capacity - a.capacity);
      filteredRooms = filteredRooms.sort((a, b) => b.capacity - a.capacity);
      break;
    case "max-guests":
      filteredVillas = filteredVillas.sort((a, b) => a.capacity - b.capacity);
      filteredRooms = filteredRooms.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredVillas = filteredVillas;
      filteredRooms = filteredVillas;
  }

  return (
    <div>
      {/* Hotel Room */}
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
              currentIndexRooms + cardsToShow >= filteredRooms.length
                ? styles.disabled
                : ""
            }`}
            disabled={currentIndexRooms + cardsToShow >= filteredRooms.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>

      <Facility />

      {/* Restaurant */}
      <Restaurant />

      {/* Ballroom */}
      <div>
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

      {/* Villa */}
      <h1 className={styles.sectionHeading}>Liburan Mewah di Villa Nyaman & Elegan</h1>
      <div className={styles.roomsGrid}>
        {filteredVillas.map((item) => (
          <VillaItem
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

      {/* Rent House */}
      <h1 className={styles.sectionHeading}>Sewa Rumah Impian Anda</h1>
      <div className={styles.roomsGrid}>
        {rentHouse.map((item) => (
          <RentHouseItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            capacity={item.capacity}
            bedroom={item.bedroom}
            bathroom={item.bathroom}
            imgPath={item.thumbnail}
            description={item.description}
            link="#"
          />
        ))}
      </div>
    </div>
  );
}

export default RoomsSection;
