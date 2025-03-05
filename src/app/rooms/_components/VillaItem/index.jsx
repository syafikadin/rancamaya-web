import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// const SUPABASE_VILLAS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function VillaItem({ id, imgPath, price, title, description, rating }) {
  return (
    <div className={styles.villaItem}>
      <Link href={`villas/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.villaDescription}>
          <div className={styles.header}>
            <h2 className={styles.villaTitle}>{title}</h2>
            <span className={styles.rating}>8.7</span>
          </div>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>IDR {price.toLocaleString("id-ID")}</p>
        </div>
      </Link>
    </div>
  );
}

export default VillaItem;
