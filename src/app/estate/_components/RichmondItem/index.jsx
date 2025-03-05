import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaBed, FaBath, FaRegSquare, FaCar } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";

function RichmondItem({
  id,
  imgPath,
  price,
  title,
  description,
  bedroom,
  bathroom,
  chair,
  garage,
  size,
}) {
  return (
    <div className={styles.villaItem}>
      <Link href={`richmond/${id}`}>
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
                <FaRegSquare /> {size}m²
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

export default RichmondItem;
