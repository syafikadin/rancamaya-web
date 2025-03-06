import React from "react";
import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";
import ClusterItem from "../ClusterItem";
import SimulationKPR from "@/app/_components/SimulasiKPR";
import Facilities from "../Facilities";
import WhatsAppFloating from "@/app/_components/WhatsappFloating";

const villas = [
  {
    id: 1,
    name: "Cadenza",
    landSize: "84 m²",
    buildingSize: "56 m²",
    bathrooms: 2,
    bedrooms: 2,
    livingRooms: 1,
    garages: 1,
    images: [
      "amadeus-signature-cadenza.jpeg",
      "amadeus-signature-cadenza-floorplan.jpeg",
    ],
  },
  {
    id: 2,
    name: "Arpeggio",
    landSize: "90 m²",
    buildingSize: "65 m²",
    bathrooms: 2,
    bedrooms: 3,
    livingRooms: 1,
    garages: 1,
    images: [
      "amadeus-signature-arpeggio.jpeg",
      "amadeus-signature-arpeggio-floorplan.jpeg",
    ],
  },
  {
    id: 3,
    name: "Vivace",
    landSize: "84  m²",
    buildingSize: "87 m²",
    bathrooms: 2,
    bedrooms: 3,
    livingRooms: 1,
    garages: 1,
    images: ["amadeus-signature-vivace.jpeg", "amadeus-signature-vivace-floorplan.jpeg"],
  },
  {
    id: 4,
    name: "Rhapsody",
    landSize: "120 m²",
    buildingSize: "93 m²",
    bathrooms: 2,
    bedrooms: 3,
    livingRooms: 1,
    garages: 2,
    images: [
      "amadeus-signature-rhapsody.jpeg",
      "amadeus-signature-rhapsody-floorplan.jpeg",
    ],
  },
  {
    id: 5,
    name: "Serenata",
    landSize: "120 m²",
    buildingSize: "90 m²",
    bathrooms: 2,
    bedrooms: 3,
    livingRooms: 1,
    garages: 2,
    images: [
      "amadeus-signature-serenata.jpeg",
      "amadeus-signature-serenata-floorplan.jpeg",
    ],
  },
  {
    id: 6,
    name: "Harmonia",
    landSize: "120 m²",
    buildingSize: "119 m²",
    bathrooms: 2,
    bedrooms: 3,
    livingRooms: 1,
    garages: 2,
    images: [
      "amadeus-signature-harmonia.jpeg",
      "amadeus-signature-harmonia-floorplan.jpeg",
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
      {/* <div className={styles.reservation}>
        <h2>Secure Your Dream Lot at Rancamaya Today</h2>
        <p>
          Contact us today to schedule a private tour or inquire about available lots.
        </p>
        <Link href="https://wa.me/622180600681" className={styles.whatsappButton}>
          <Image
            src="/whatsapp.png"
            alt="WhatsApp Logo"
            className={styles.logo}
            width={24}
            height={24}
          />
          Contact us via WhatsApp
        </Link>
      </div> */}
      <div className={styles.sitePlan}>
        <h2>Site Plan</h2>
        <img
          src="/amadeus-signature-siteplan.jpeg"
          alt="Amadeus Signature Siteplan"
          className={styles.sitePlanImage}
        />
      </div>
      <SimulationKPR />
      <WhatsAppFloating />
    </div>
  );
}

export default ClusterContainer;
