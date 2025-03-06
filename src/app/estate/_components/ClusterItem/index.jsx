import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaRegSquare } from "react-icons/fa";

function ClusterItem({ id, imgPath, price, title, description, status }) {
  const isSoldOut = status === "soldout";

  return (
    <div className={`${styles.villaItem} ${isSoldOut ? styles.soldOut : ""}`}>
      {/* Jika Sold Out, tidak ada Link */}
      {isSoldOut ? (
        <div className={styles.disabledCard}>
          <div className={styles.imgOverlay}>
            <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
          </div>
          <div className={styles.villaDescription}>
            <div className={styles.header}>
              <h2 className={styles.villaTitle}>{title}</h2>
              <div className={styles.badgeSoldOut}>Sold Out</div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      ) : (
        <Link href={`/estate/cluster/${id}`} className={styles.clickableCard}>
          <div className={styles.imgOverlay}>
            <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
          </div>
          <div className={styles.villaDescription}>
            <div className={styles.header}>
              <h2 className={styles.villaTitle}>{title}</h2>
              <div className={styles.badgeAvailable}>Available</div>
            </div>
            <p className={styles.description}>{description}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ClusterItem;
