"use client";

import React from "react";
import styles from "./styles.module.css";
import { FaBath, FaBed, FaCouch, FaCar } from "react-icons/fa";

function ClusterItem({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.villaCard}>
      <div className={styles.imageContainer}>
        <img
          src={`/${item.images[currentImageIndex]}`}
          alt={`Image of ${item.name}`}
          className={styles.villaImage}
        />
        <button className={styles.prevButton} onClick={prevSlide}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className={styles.villaDetails}>
        <h2>{item.name}</h2>
        <div className={styles.descSize}>
          <p>Luas Tanah: {item.landSize}</p>
          <p>Luas Bangunan: {item.buildingSize}</p>
        </div>
      </div>
    </div>
  );
}

export default ClusterItem;
