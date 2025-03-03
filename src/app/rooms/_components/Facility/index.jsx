import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCar,
  faChargingStation,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Facility = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>Our Facilities</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.facilities}>
          <div className={styles.facility}>
            <FontAwesomeIcon icon={faWifi} size="2x" />
            <div>
              <span>Internet Access</span>
              <p>Complimentary Internet access is available throughout the hotel.</p>
            </div>
          </div>
          <div className={styles.facility}>
            <FontAwesomeIcon icon={faCar} size="2x" />
            <div>
              <span>Parking</span>
              <p>
                R Hotel Rancamaya offers guests 24 hours complimentary parking with space
                for 300 vehicles.
              </p>
            </div>
          </div>
          <div className={styles.facility}>
            <FontAwesomeIcon icon={faChargingStation} size="2x" />
            <div>
              <span>Electric Vehicle (EV) Charging Station</span>
              <p>
                Electric Vehicle Charging Station is open 24 hours, please contact our
                Front Office Team or contact us by phone at 0251 824 8899
              </p>
            </div>
          </div>
          <div className={styles.facility}>
            <FontAwesomeIcon icon={faTaxi} size="2x" />
            <div>
              <span>Transportation</span>
              <p>
                Ask Guest Services to book you a taxi or arrange a transport arrangement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
