import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faCoffee, faUtensils, faBowlFood } from "@fortawesome/free-solid-svg-icons";
import Heading from "@/app/_ui/Heading";

function Facilities() {
  return (
    <div className={styles.container}>
      <Heading className="text-center">Meal Times & Availability</Heading>
      <hr className="decriptionDivider" />
      <table className={styles.facilitiesTable}>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faCoffee} />{" "}
                <span>Breakfast</span>
              </span>
            </td>
            <td>Monday-Friday (06:00 - 10:00)</td>
          </tr>
          <tr>
            <td>Saturday-Sunday (06:00 - 10:30)</td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faUtensils} />{" "}
                <span>Lunch</span>
              </span>
            </td>
            <td>Monday-Friday (11:30 - 14:30)</td>
          </tr>
          <tr>
            <td>Saturday-Sunday (11:30 - 14:30)</td>
          </tr>
          <tr>
            <td rowSpan={2}>
              <span>
                <FontAwesomeIcon className={styles.facilitiyIcon} icon={faBowlFood} />{" "}
                <span>Dinner</span>
              </span>
            </td>
            <td>Monday-Friday (17:30 - 22:00)</td>
          </tr>
          <tr>
            <td>Saturday-Sunday (17:30 - 22:00)</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Facilities;
