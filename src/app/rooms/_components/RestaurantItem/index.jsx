import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaClock } from "react-icons/fa";

function RoomItem({ id, imgPath, price, title, description, rating }) {
  return (
    <div className={styles.roomItem}>
      <Link href={`rooms/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.roomDescription}>
          <div className={styles.header}>
            <h2 className={styles.roomTitle}>{title}</h2>
            <div className={styles.facilities}>
              <span className={styles.facility}>
                <FaClock /> 12.00 - 2.30 PM
              </span>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          {/* <p className={styles.price}>IDR {price.toLocaleString("id-ID")}</p> */}
        </div>
      </Link>
    </div>
  );
}

export default RoomItem;
