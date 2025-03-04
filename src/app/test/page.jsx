"use client";
import styles from "./styles.module.css";
import { useState, useEffect, Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Loader from "../_ui/Loader";
import Image from "next/image";
import Link from "next/link";

function Tests() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe",
      price: 200000,
      capacity: 2,
      thumbnail: "deluxe.jpg",
      description:
        "Our 39-sqm Deluxe Rooms is designed with your total comfort in mind...",
    },
    {
      id: 2,
      name: "Grand Suite",
      price: 150000,
      capacity: 4,
      thumbnail: "grand_suite.jpg",
      description:
        "The extra space of our 86-sqm Grand Suites gives you even more room...",
    },
    {
      id: 3,
      name: "Lagoon Deluxe",
      price: 300000,
      capacity: 2,
      thumbnail: "lagoon_deluxe.jpg",
      description:
        "Set on the first floors step aside by a beautiful long dip lagoon pool...",
    },
    {
      id: 4,
      name: "Superior Queen",
      price: 500000,
      capacity: 6,
      thumbnail: "superior_queen.jpg",
      description:
        "Exceptional comfort awaits in our stylish 34-sqm Superior Queen room...",
    },
    {
      id: 5,
      name: "Superior",
      price: 800000,
      capacity: 1,
      thumbnail: "superior.jpg",
      description:
        "Relax in exquisite, contemporary style 34-sqm room featuring two 160 x 200 queen beds...",
    },
  ];

  const [currentIndexRooms, setCurrentIndexRooms] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 768 ? 1 : 3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handlePrevRooms = () => {
    setCurrentIndexRooms((prev) => Math.max(prev - cardsToShow, 0));
  };

  const handleNextRooms = () => {
    setCurrentIndexRooms((prev) =>
      prev + cardsToShow < rooms.length ? prev + cardsToShow : prev
    );
  };

  return (
    <Suspense
      fallback={
        <div className={styles.loader}>
          <Loader />
        </div>
      }
    >
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
            {rooms
              .slice(currentIndexRooms, currentIndexRooms + cardsToShow)
              .map((item) => (
                <div className={styles.roomItem} key={item.id}>
                  <Link href={`rooms/${item.id}`}>
                    <div className={styles.imgOverlay}>
                      <Image
                        src={`/${item.thumbnail}`}
                        alt={item.name}
                        width={300}
                        height={200}
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.roomDescription}>
                      <div className={styles.header}>
                        <h2 className={styles.roomTitle}>{item.name}</h2>
                        <span className={styles.rating}>8.7</span>
                      </div>
                      <p className={styles.description}>{item.description}</p>
                      <p className={styles.price}>
                        IDR {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <button
            onClick={handleNextRooms}
            className={`${styles.navButton} ${styles.right} ${
              currentIndexRooms + cardsToShow >= rooms.length ? styles.disabled : ""
            }`}
            disabled={currentIndexRooms + cardsToShow >= rooms.length}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </Suspense>
  );
}

export default Tests;
