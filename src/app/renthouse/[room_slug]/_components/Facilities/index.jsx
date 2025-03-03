import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import {
  faBed,
  faMountain,
  faLeaf,
  faBath,
  faToilet,
  faGamepad,
  faWheelchair,
  faWifi,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "@/app/_ui/Heading";

function Facilities() {
  return (
    <div>
      <Heading className="text-center">Facilities</Heading>
      <hr className="decriptionDivider" />
      <table className={styles.facilitiesTable}>
        <tbody>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faWifi} />{" "}
                <span>Building area : 93 m²</span>
              </span>
            </td>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faCoffee} />{" "}
                <span>Land area : 219 m²</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faBed} />{" "}
                <span>3 bedrooms (2 Double Bed, 1 Bunk Bed)</span>
              </span>
            </td>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faGamepad} />{" "}
                <span>2 balconies</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faToilet} />{" "}
                <span>2 bathrooms</span>
              </span>
            </td>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faMountain} />{" "}
                <span>Mountain view</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faBath} />{" "}
                <span>Kitchen set & Dining Room</span>
              </span>
            </td>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faWheelchair} />{" "}
                <span>Accessible</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faBed} />{" "}
                <span>Living room</span>
              </span>
            </td>
            <td>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faLeaf} />{" "}
                <span>Backyard Garden</span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Facilities;
