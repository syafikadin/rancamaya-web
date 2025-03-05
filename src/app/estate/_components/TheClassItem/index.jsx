import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaBed, FaBath, FaRegSquare, FaCar, FaBuilding } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";

function TheClassItem({
  id,
  imgPath,
  price,
  title,
  description,
  bedroom,
  bathroom,
  chair,
  garage,
  buildingArea,
  surfaceArea,
}) {
  return (
    <div className={styles.villaItem}>
      <Link href={`the-class/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.villaDescription}>
          <div className={styles.header}>
            <h2 className={styles.villaTitle}>{title}</h2>
            <div className={styles.facilities}>
              <span className={styles.facility}>
                <FaBed /> {bedroom}
              </span>
              <span className={styles.facility}>
                <FaBath /> {bathroom}
              </span>
              <span className={styles.facility}>
                <RiSofaFill /> {chair}
              </span>
              <span className={styles.facility}>
                <FaCar /> {garage}
              </span>
              <span className={styles.facility}>
                <FaBuilding /> {buildingArea}m²
              </span>
              <span className={styles.facility}>
                <FaRegSquare /> {surfaceArea}m²
              </span>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>IDR {price.toLocaleString("id-ID")}</p>
        </div>
      </Link>
    </div>
  );
}

export default TheClassItem;
