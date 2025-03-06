import React from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";
import SimulationKPR from "@/app/_components/SimulasiKPR";
import { FaBed, FaBath, FaRegSquare, FaCar, FaBuilding } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";

const richmond = [
  {
    id: 1,
    name: "Kavling Kertanegara",
    price: 283000000,
    status: "available",
    landSize: 283,
    buildingSize: 260,
    bathroom: 4,
    bedroom: 3,
    chair: 2,
    garage: 2,
    images: ["kavling_kertanegara.jpg", "kavling_kertanegara_drone.jpg"],
    description:
      "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inch flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
  },
];

function KavlingContainer() {
  const kavling = richmond[0];

  return (
    <div className={styles.container}>
      <Heading className="text-center">Kavling Details</Heading>
      <div className={styles.card}>
        <div className={styles.flexContainer}>
          <div className={styles.imageContainer}>
            <img
              src={`/${kavling.images[1]}`}
              alt="Drone view of Kavling Kertanegara"
              className={styles.image}
            />
          </div>
          <div className={styles.detailsContainer}>
            <h2 className={styles.title}>{kavling.name}</h2>
            <p className={styles.description}>{kavling.description}</p>
            <div className={styles.price}>Rp {kavling.price.toLocaleString()}</div>
            <div className={styles.grid}>
              <div className={styles.gridItem}>
                <FaRegSquare />
                <span>Land Size: {kavling.landSize} m²</span>
              </div>
              <div className={styles.gridItem}>
                <FaBuilding />
                <span>Building Size: {kavling.buildingSize} m²</span>
              </div>
              <div className={styles.gridItem}>
                <FaBed />
                <span>Bedrooms: {kavling.bedroom}</span>
              </div>
              <div className={styles.gridItem}>
                <FaBath />
                <span>Bathrooms: {kavling.bathroom}</span>
              </div>
              <div className={styles.gridItem}>
                <RiSofaFill />
                <span>Living Rooms: {kavling.chair}</span>
              </div>
              <div className={styles.gridItem}>
                <FaCar />
                <span>Garage: {kavling.garage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimulationKPR />
    </div>
  );
}

export default KavlingContainer;
