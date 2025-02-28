import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Reservation Details</h2>
        <hr className={styles.divider} />
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.detail}>
              <p className={styles.label}>Booking Number</p>
              <p className={styles.value}>#000167</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.label}>Check-in Date</p>
              <p className={styles.value}>Mar, 13 2025</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.label}>Guests</p>
              <p className={styles.value}>4 Guests</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.detail}>
              <p className={styles.label}>Room Type</p>
              <p className={styles.value}>Executive Suite</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.label}>Check-out Date</p>
              <p className={styles.value}>Mar, 16 2025</p>
            </div>
            <div className={styles.detail}>
              <p className={styles.label}>Total Amount</p>
              <p className={styles.value}>$2625.00</p>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src="https://storage.googleapis.com/a1aa/image/WMtJ84MakHglD52ZINNLiPHju78bM_3SvnMIN0kAWLc.jpg"
              alt="Hotel room with a large bed, bedside lamp, and a view into the bathroom"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.downloadButton}>Download Confirmation</button>
          <button className={styles.returnButton}>Return to Home</button>
        </div>
      </div>
    </div>
  );
}
