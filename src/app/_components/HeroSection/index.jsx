"use client";
import Slider from "../Slider";
import BookingForm from "../BookingForm";
import styles from "./index.module.css";
import BookingButton from "../BookingButton";
import Modal from "../Modal";
const images = ["/room1.jpg", "/room2.jpg", "/room3.jpg", "/bg.jpg"];

function HeroSection({ bookingSearchAction }) {
  return (
    <Slider images={images}>
      <div className={styles.overlay}>
        <div className={`container ${styles.wrapper}`}>
          <div className="bookingFormContainer">
            <BookingForm bookingSearchAction={bookingSearchAction} />
          </div>
          <div className={styles.heroTitle}>
            <h1>Rancamaya</h1>
            <p>
              Rancamaya menawarkan pengalaman tak terlupakan dengan berbagai pilihan
              akomodasi terbaik, mulai dari hotel, vila, apartemen, hingga estate
              eksklusif
            </p>
            <p>
              Nikmati juga fasilitas golf kelas dunia yang siap memenuhi kebutuhan gaya
              hidup Anda.
            </p>
            {/* <div className={styles.heroCTA}>
              <a href="#" className={styles.button}>
                PERSONAL INSURANCE <i className="fas fa-arrow-right"></i>
              </a>
              <a href="#" className={styles.button}>
                BUSINESS INSURANCE <i className="fas fa-arrow-right"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default HeroSection;
