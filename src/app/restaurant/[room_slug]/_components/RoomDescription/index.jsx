import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";

function RoomDescription({ description }) {
  return (
    <div className={styles.description}>
      <Heading className="text-center">Restaurant Description</Heading>

      <hr className="decriptionDivider" />

      <div className={styles.descriptionContent}>
        <p>
          Pavilion, celebrates traditional Indonesian food with modern flavors served in a
          stimulating contemporary setting. Revolving around an interactive show kitchen
          Pavilion brings the excitement of live cooking centre stage.
        </p>
      </div>
    </div>
  );
}

export default RoomDescription;
