import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function RoomItem({ id, imgPath, price, title, location, rating }) {
  return (
    <div className={styles.roomItem}>
      <Link href={`rooms/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.roomDescription}>
          <div className={styles.header}>
            <h2 className={styles.roomTitle}>{title}</h2>
            <span className={styles.rating}>8.7</span>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad asperiores
            explicabo blanditiis voluptates at accusantium culpa possimus, incidunt
            ducimus optio?
          </p>
          <p className={styles.price}>IDR {price.toLocaleString("id-ID")}</p>
        </div>
      </Link>
    </div>
  );
}

export default RoomItem;
