import React from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";
import ClusterItem from "../KavlingItem";
import SimulationKPR from "@/app/_components/SimulasiKPR";
import Facilities from "../Facilities";
import KavlingDescription from "../KavlingDescription";

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
      "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
  },
];

function ClusterContainer() {
  return (
    <div className={styles.container}>
      <Heading className={styles.heading}>Kavling Details</Heading>
      <div className={styles.villaGrid}>
        {richmond.map((item) => (
          <ClusterItem key={item.id} item={item} />
        ))}
      </div>
      {/* <div className={styles.sitePlan}>
        <h2>Site Plan</h2>
        <img
          src="/rancamaya-richmond-peak-siteplan.jpg"
          alt="Richmond Peak Siteplan"
          className={styles.sitePlanImage}
        />
      </div> */}
      <KavlingDescription />
      <SimulationKPR />
    </div>
  );
}

export default ClusterContainer;
