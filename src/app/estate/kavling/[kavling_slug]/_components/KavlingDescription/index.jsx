import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";

function RoomDescription({ description }) {
  return (
    <div className={styles.description}>
      <Heading className="text-center">Kavling Description</Heading>

      <hr className="decriptionDivider" />

      <div className={styles.descriptionContent}>
        <p>
          Rancamaya Golf Estate, relish in this great family vacation spot; a beautiful
          unit in a beautiful development. Enjoy mountain views from your large second
          floor balcony.
        </p>
      </div>
    </div>
  );
}

export default RoomDescription;
