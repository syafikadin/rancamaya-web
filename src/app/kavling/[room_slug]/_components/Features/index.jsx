import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faBed, faDollar, faUsers, faBath } from "@fortawesome/free-solid-svg-icons";

function Features({ renthouse }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  return (
    <ul className={styles.features}>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faUsers} />
        </span>
        <span className={styles.featureLabel}>Capacity:</span>{" "}
        <span className={styles.featureValue}>{renthouse.capacity}</span>
      </li>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faBed} />
        </span>
        <span className={styles.featureLabel}>Bedroom:</span>{" "}
        <span className={styles.featureValue}>{renthouse.bedroom}</span>
      </li>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faBath} />
        </span>
        <span className={styles.featureLabel}>Bathroom:</span>{" "}
        <span className={styles.featureValue}>{renthouse.bathroom}</span>
      </li>
      <li>
        <span className={styles.featureIcon}>
          <FontAwesomeIcon icon={faDollar} />
        </span>
        <span className={styles.featureLabel}>Price:</span>{" "}
        <span className={styles.featureValue}>
          {formatCurrency(renthouse.price)}/night
        </span>
      </li>
    </ul>
  );
}

export default Features;
