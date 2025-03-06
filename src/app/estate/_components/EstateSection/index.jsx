import styles from "./styles.module.css";
import KavlingItem from "../KavlingItem";
import ClusterItem from "../ClusterItem";
import RichmondItem from "../RichmondItem";
import TheClassItem from "../TheClassItem";

function EstateSection({ filter }) {
  const kavlings = [
    {
      id: 1,
      name: "Kavling Jasmine",
      price: 427000000,
      size: 472,
      thumbnail: "kavling_jasmine.jpg",
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
    {
      id: 2,
      name: "Kavling Kertanegara",
      price: 228000000,
      size: 228,
      thumbnail: "kavling_kertanegara.jpg",
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "Kavling Rosewood",
      price: 451000000,
      size: 451,
      thumbnail: "kavling_rosewood.jpg",
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "Kavling Salvador",
      price: 124000000,
      size: 124,
      thumbnail: "kavling_salvador.jpg",
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
  ];
  const cluster = [
    {
      id: 1,
      name: "Amadeus Signature",
      price: 300000,
      capacity: 4,
      status: "available",
      thumbnail: "cluster1.jpg",
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
    {
      id: 2,
      name: "Amadeus",
      price: 250000,
      capacity: 2,
      status: "available",
      thumbnail: "cluster2.jpg",
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "Kingshop",
      price: 500000,
      capacity: 6,
      status: "available",
      thumbnail: "cluster3.jpg",
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "Salvador",
      price: 400000,
      capacity: 5,
      status: "soldout",
      thumbnail: "cluster4.jpg",
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
  ];
  const richmond = [
    {
      id: 1,
      name: "Morengo",
      price: 283000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-morengo-depan.jpg",
      size: 283,
      bathroom: 4,
      bedroom: 3,
      chair: 2,
      garage: 2,
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
    {
      id: 2,
      name: "Valegro",
      price: 312000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-valegro-depan.jpg",
      size: 295,
      bathroom: 5,
      bedroom: 3,
      chair: 2,
      garage: 2,
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "Pratap",
      price: 124000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-pratap.jpg",
      size: 242,
      bathroom: 4,
      bedroom: 3,
      chair: 2,
      garage: 2,
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "Premio",
      price: 332000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-premio-depan.jpg",
      size: 260,
      bathroom: 5,
      bedroom: 4,
      chair: 2,
      garage: 2,
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
    {
      id: 5,
      name: "Kanthaka",
      price: 192000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-kanthaka.jpg",
      size: 218,
      bathroom: 4,
      bedroom: 3,
      chair: 2,
      garage: 2,
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
    {
      id: 6,
      name: "Cato",
      price: 272000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-cato.jpg",
      size: 250,
      bathroom: 4,
      bedroom: 4,
      chair: 1,
      garage: 2,
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
  ];
  const theclass = [
    {
      id: 1,
      name: "Lumina House",
      price: 389000000,
      status: "available",
      thumbnail: "rancamaya-richmond-peak-morengo-depan.jpg",
      buildingArea: 380,
      surfaceArea: 382,
      bathroom: 4,
      bedroom: 3,
      chair: 2,
      garage: 2,
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
  ];

  let filteredKavling = kavlings;
  let filteredRichmond = richmond;
  let filteredTheClass = theclass;

  switch (filter) {
    case "high-price":
      filteredKavling = filteredKavling.sort((a, b) => b.price - a.price);
      filteredRichmond = filteredRichmond.sort((a, b) => b.price - a.price);
      filteredTheClass = filteredTheClass.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredKavling = filteredKavling.sort((a, b) => a.price - b.price);
      filteredRichmond = filteredRichmond.sort((a, b) => a.price - b.price);
      filteredTheClass = filteredTheClass.sort((a, b) => a.price - b.price);
      break;
    case "min-guests":
      filteredKavling = filteredKavling.sort((a, b) => b.capacity - a.capacity);
      filteredRichmond = filteredRichmond.sort((a, b) => b.capacity - a.capacity);
      filteredTheClass = filteredTheClass.sort((a, b) => b.capacity - a.capacity);
      break;
    case "max-guests":
      filteredKavling = filteredKavling.sort((a, b) => a.capacity - b.capacity);
      filteredRichmond = filteredRichmond.sort((a, b) => a.capacity - b.capacity);
      filteredTheClass = filteredTheClass.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredKavling = filteredKavling;
      filteredRichmond = filteredRichmond;
      filteredTheClass = filteredTheClass;
  }

  return (
    <div>
      <h1 className={styles.sectionHeading}>Vila Kluster</h1>
      <div className={styles.villasGrid}>
        {cluster.map((item) => (
          <ClusterItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            imgPath={item.thumbnail}
            description={item.description}
            status={item.status}
            link="#"
          />
        ))}
      </div>
      <h1 className={styles.sectionHeading}>Temukan Kavling Ideal Anda</h1>
      <div className={styles.villasGrid}>
        {filteredKavling.map((item) => (
          <KavlingItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            imgPath={item.thumbnail}
            description={item.description}
            size={item.size}
            link="#"
          />
        ))}
      </div>
      <h1 className={styles.sectionHeading}>Richmond Peak</h1>
      <div className={styles.villasGrid}>
        {filteredRichmond.map((item) => (
          <RichmondItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            imgPath={item.thumbnail}
            description={item.description}
            size={item.size}
            bedroom={item.bedroom}
            bathroom={item.bathroom}
            chair={item.chair}
            garage={item.garage}
            link="#"
          />
        ))}
      </div>
      <h1 className={styles.sectionHeading}>The Class</h1>
      <div className={styles.villasGrid}>
        {filteredTheClass.map((item) => (
          <TheClassItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            imgPath={item.thumbnail}
            description={item.description}
            size={item.size}
            bedroom={item.bedroom}
            bathroom={item.bathroom}
            chair={item.chair}
            garage={item.garage}
            buildingArea={item.buildingArea}
            surfaceArea={item.surfaceArea}
            link="#"
          />
        ))}
      </div>
    </div>
  );
}

export default EstateSection;
