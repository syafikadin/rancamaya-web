import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faBed, faDollar, faUsers } from "@fortawesome/free-solid-svg-icons";

function Features({ villa }) {
  return (
    <ul className={styles.features}>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faBed} />
        </span>
        <span className={styles.featureLabel}>Sleeps:</span> {villa.sleeps} Adults
      </li>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faUsers} />
        </span>
        <span className={styles.featureLabel}>Capacity:</span> {villa.capacity}
      </li>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faDollar} />
        </span>
        <span className={styles.featureLabel}>Price:</span> from Rp{villa.price} / night
      </li>
    </ul>
  );
}

export default Features;
