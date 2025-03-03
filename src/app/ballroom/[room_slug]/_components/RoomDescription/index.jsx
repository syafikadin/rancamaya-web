import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";

function RoomDescription({ description }) {
  return (
    <div className={styles.description}>
      <Heading className="text-center">Room Description</Heading>

      <hr className="decriptionDivider" />

      <div className={styles.descriptionContent}>
        <p>
          Our 39-sqm Deluxe Rooms is designed with your total comfort in mind, and fresh
          contemporary style to match the mountains scene outside. Enjoy a great night`s
          sleep with the choice of a twin queen bed or a king size bed. Then relax on your
          private balcony to watch the mountain breeze, or cozy up inside on a sofa chair
          for TV time or an online catch up.
        </p>
      </div>
    </div>
  );
}

export default RoomDescription;
