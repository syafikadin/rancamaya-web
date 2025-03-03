import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

// const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function BallroomItem({ id, imgPath, price, title, description, capacity }) {
  return (
    <div className={styles.roomItem}>
      <Link href={`ballroom/${id}`}>
        <div className={styles.imgOverlay}>
          <Image fill src={`/${imgPath}`} alt={title} className={styles.image} />
        </div>
        <div className={styles.roomDescription}>
          <div className={styles.header}>
            <h2 className={styles.roomTitle}>{title}</h2>
            <div className={styles.facilities}>
              <span className={styles.facility}>
                <FaUser /> {capacity}
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

export default BallroomItem;
