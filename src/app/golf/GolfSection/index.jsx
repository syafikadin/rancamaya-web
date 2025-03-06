import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/app/_ui/Heading";

function GolfSection() {
  return (
    <div className={styles.container}>
      <div className={styles.reservationForm}>
        <div className={styles.leftPanel}>
          <div className={styles.overlay}>
            <h1 className={styles.title}>Make Your Reservation</h1>
            <p className={styles.description}></p>
          </div>
        </div>
        <div className={styles.rightPanel}>
          <form>
            <div className={styles.formGroup}>
              <div className={styles.formField}>
                <label htmlFor="checkin">Check In</label>
                <input id="checkin" type="date" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="time">Time</label>
                <input id="time" type="time" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.formField}>
                <label htmlFor="adults">Adults</label>
                <input id="adults" type="number" defaultValue="1" />
              </div>
              <div className={styles.formField}>
                <label htmlFor="children">Children</label>
                <input id="children" type="number" defaultValue="0" />
              </div>
            </div>
            <div className={styles.formField}>
              <label htmlFor="roomtype">Room Type</label>
              <select id="roomtype">
                <option>Select room type</option>
              </select>
            </div>
            <button className={styles.submitButton} type="submit">
              Check availability
            </button>
            <div className={styles.whatsappInfo}>
              <Link href="https://wa.me/622180600681" className={styles.whatsappButton}>
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp Logo"
                  className={styles.logo}
                  width={24}
                  height={24}
                />
                Or contact us via WhatsApp
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.additionalContent}>
        <Heading>Gallery</Heading>
        <div className={styles.gallery}>
          <div className={styles.galleryItem}>
            <img
              src="https://storage.googleapis.com/a1aa/image/BJKY26E0IhbVbCmxBN7LGwadWWa1WOQ0zyZq_oHqRMc.jpg"
              alt="Golf course view"
              width="300"
              height="200"
            />
            <p>Beautiful view of the golf course.</p>
          </div>
          <div className={styles.galleryItem}>
            <img src="/golf_bg.jpg" alt="Golf equipment" width="300" height="200" />
            <p>
              A scenic golf course with lush green fairways, tall trees, and players
              enjoying the game under a clear sky.
            </p>
          </div>
          <div className={styles.galleryItem}>
            <img src="/golf_club.jpeg" alt="Clubhouse" width="300" height="200" />
            <p>
              A beautiful golf course with green fairways, towering trees, and players in
              action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GolfSection;
