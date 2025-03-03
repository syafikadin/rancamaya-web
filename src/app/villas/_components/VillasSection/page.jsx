import styles from "./styles.module.css";
import VillaItem from "../VillaItem";
import RentHouseItem from "../RentHouseItem";

async function VillasSection({ filter, range }) {
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

  const kavlings = [
    {
      id: 1,
      name: "Kavling Jasmine",
      price: 300000,
      capacity: 4,
      thumbnail: "kavling_jasmine.jpg",
      description:
        "Perfect for privacy and relaxation, families or couples, this one-bedroom villa offers 95-sqm of tastefully decorated living space where the traditional and the contemporary seamlessly blend with quality teak furniture, marble flooring, 42 inc flat screen TV and complimentary internet. Luxurious interiors naturally flow to lush gardens and a private patio overlooking the beautifully manicured fairways.",
    },
    {
      id: 2,
      name: "Kavling Kertanegara",
      price: 250000,
      capacity: 2,
      thumbnail: "kavling_kertanegara.jpg",
      description:
        "Step into an expansive 124-sqm, situated in intimate lush gardens, this two-bedrooms villa offers an expansive views of Mt Salak or beautifully manicured fairways and the privacy of its secluded location in a tranquil corner of the property. Inside this villa, luxuriate in elegant comfort with high ceilings and marble floors, designed to exude a regal residential experience, complete with separate Butler`s quarters.",
    },
    {
      id: 3,
      name: "Kavling Rosewood",
      price: 500000,
      capacity: 6,
      thumbnail: "kavling_rosewood.jpg",
      description:
        "Imagine an enchanting sanctuary of serenity, beautifully set just steps from private terrace. This one-ofa-kind villa measuring 150-sqm is perfect getaway for families and groups, with two bedrooms, spacious living room, 2 bathrooms and a private swimming pool. Located on the side of hotel building and surrounded by tropical foliage, this secluded villa offers beautiful sceneries of Mt. Salak.",
    },
    {
      id: 4,
      name: "Kavling Salvador",
      price: 400000,
      capacity: 5,
      thumbnail: "kavling_salvador.jpg",
      description:
        "Our two bedrooms villa measuring 124-sqm offer ample space to relax and recharge your body. Indulge in the outdoor Jacuzzi, or simply drift off to sleep in a sumptuous king-size bed. Our Jacuzzi villa is the prefect getaway for couples and provide the ideal setting for an idyllic break.",
    },
  ];

  let filteredVillas = villas;
  let filteredRentHouse = rentHouse;
  let filteredKavlings = kavlings;

  if (
    range &&
    isValid(new Date(range.split("_")?.at(0))) &&
    isValid(new Date(range.split("_")?.at(1)))
  ) {
    const arrivalDate = range.split("_")?.at(0);
    const departureDate = range.split("_")?.at(1);
    filteredVillas = villas.filter((villa) => {
      // Check if any of the available dates overlap with the arrival and departure dates
      return villa.availableDates.some((date) => {
        const villaDate = new Date(date);
        return villaDate >= arrivalDate && villaDate <= departureDate;
      });
    });
  }

  switch (filter) {
    case "high-price":
      filteredVillas = filteredVillas.sort((a, b) => b.price - a.price);
      break;
    case "low-price":
      filteredVillas = filteredVillas.sort((a, b) => a.price - b.price);
      break;

    case "min-guests":
      filteredVillas = filteredVillas.sort((a, b) => b.capacity - a.capacity);
      break;

    case "max-guests":
      filteredVillas = filteredVillas.sort((a, b) => a.capacity - b.capacity);
      break;
    default:
      filteredVillas = filteredVillas;
  }

  return (
    <div>
      <h1 className={styles.sectionHeading}>Vila Premium untuk Liburan Anda</h1>
      <div className={styles.villasGrid}>
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
      <h1 className={styles.sectionHeading}>Pilih Rumah Sesuai Keinginan</h1>
      <div className={styles.villasGrid}>
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
      <h1 className={styles.sectionHeading}>Temukan Kavling Ideal Anda</h1>
      <div className={styles.villasGrid}>
        {kavlings.map((item) => (
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
    </div>
  );
}

export default VillasSection;
