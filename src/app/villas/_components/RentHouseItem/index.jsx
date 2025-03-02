import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaUser, FaBed, FaBath } from "react-icons/fa";

function VillaItem({
  id,
  imgPath,
  price,
  title,
  description,
  capacity,
  bedroom,
  bathroom,
}) {
  return (
    <div className={styles.villaItem}>
      <Link href={`villas/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.villaDescription}>
          <div className={styles.header}>
            <h2 className={styles.villaTitle}>{title}</h2>
            <div className={styles.facilities}>
              <span className={styles.facility}>
                <FaUser /> {capacity}
              </span>
              <span className={styles.facility}>
                <FaBed /> {bedroom}
              </span>
              <span className={styles.facility}>
                <FaBath /> {bathroom}
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

export default VillaItem;
