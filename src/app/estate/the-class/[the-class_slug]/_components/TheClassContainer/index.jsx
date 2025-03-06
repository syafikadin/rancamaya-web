import React from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";
import ClusterItem from "../TheClassItem";
import SimulationKPR from "@/app/_components/SimulasiKPR";
import Facilities from "../Facilities";
import WhatsAppFloating from "@/app/_components/WhatsappFloating";

const villas = [
  {
    id: 1,
    name: "Lumina House",
    landSize: "380 m²",
    buildingSize: "382 m²",
    bathrooms: 2,
    bedrooms: 2,
    livingRooms: 1,
    garages: 1,
    images: [
      "the-class-lumina-1.jpg",
      "the-class-lumina-2.jpg",
      "the-class-lumina-3.jpg",
      "the-class-lumina-4.jpg",
    ],
  },
];

function ClusterContainer() {
  return (
    <div className={styles.container}>
      <Heading className={styles.heading}>Amadeus Signature Villa</Heading>
      <div className={styles.villaGrid}>
        {villas.map((item) => (
          <ClusterItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.sitePlan}>
        <h2>Site Plan</h2>
        <img
          src="/the-class-siteplan.jpg"
          alt="The Class Siteplan"
          className={styles.sitePlanImage}
        />
      </div>
      <SimulationKPR />
      <WhatsAppFloating />
    </div>
  );
}

export default ClusterContainer;
