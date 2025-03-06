import React from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";
import ClusterItem from "../RichmondItem";
import SimulationKPR from "@/app/_components/SimulasiKPR";
import Facilities from "../Facilities";

const richmond = [
  {
    id: 1,
    name: "Morengo",
    price: 283000000,
    status: "available",
    landSize: 283,
    buildingSize: 260,
    bathroom: 4,
    bedroom: 3,
    chair: 2,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-morengo-depan.jpg",
      "rancamaya-richmond-peak-morengo-belakang.jpg",
      "rancamaya-richmond-peak-morengo-floorplan.jpg",
    ],
    description:
      "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
  },
  {
    id: 2,
    name: "Valegro",
    price: 312000000,
    status: "available",
    landSize: 295,
    buildingSize: 260,
    bathroom: 5,
    bedroom: 3,
    chair: 2,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-valegro-depan.jpg",
      "rancamaya-richmond-peak-valegro-belakang.jpg",
      "rancamaya-richmond-peak-valegro-floorplan.jpg",
    ],
    description:
      "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
  },
  {
    id: 3,
    name: "Pratap",
    price: 124000000,
    status: "available",
    landSize: 242,
    buildingSize: 260,
    bathroom: 4,
    bedroom: 3,
    chair: 2,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-pratap.jpg",
      "rancamaya-richmond-peak-pratap-floorplan.jpg",
    ],
    description:
      "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
  },
  {
    id: 4,
    name: "Premio",
    price: 332000000,
    status: "available",
    landSize: 260,
    buildingSize: 260,
    bathroom: 5,
    bedroom: 4,
    chair: 2,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-premio-depan.jpg",
      "rancamaya-richmond-peak-premio-belakang.jpg",
    ],
    description:
      "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-landSize bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
  },
  {
    id: 5,
    name: "Kanthaka",
    price: 192000000,
    status: "available",
    landSize: 218,
    buildingSize: 260,
    bathroom: 4,
    bedroom: 3,
    chair: 2,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-kanthaka.jpg",
      "rancamaya-richmond-peak-kanthaka-floorplan.jpg",
    ],
    description:
      "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-landSize bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
  },
  {
    id: 6,
    name: "Cato",
    price: 272000000,
    status: "available",
    landSize: 250,
    buildingSize: 260,
    bathroom: 4,
    bedroom: 4,
    chair: 1,
    garage: 2,
    images: [
      "rancamaya-richmond-peak-cato.jpg",
      "rancamaya-richmond-peak-cato-floorplan.jpg",
    ],
    description:
      "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
  },
];

function ClusterContainer() {
  return (
    <div className={styles.container}>
      <Heading className={styles.heading}>Richmond Peak</Heading>
      <div className={styles.villaGrid}>
        {richmond.map((item) => (
          <ClusterItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.sitePlan}>
        <h2>Site Plan</h2>
        <img
          src="/rancamaya-richmond-peak-siteplan.jpg"
          alt="Richmond Peak Siteplan"
          className={styles.sitePlanImage}
        />
      </div>
      <SimulationKPR />
    </div>
  );
}

export default ClusterContainer;
