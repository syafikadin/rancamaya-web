import styles from "./styles.module.css";
import AboutSection from "./AboutSection";
import { Suspense } from "react";
import Loader from "../_ui/Loader";

export const metadata = {
  title: "About Us",
  description:
    "Discover our exceptional properties, including luxurious hotels, serene villas, spacious plots, and prime estates. We offer unparalleled comfort, stunning locations, and world-class services to ensure your stay or investment experience exceeds expectations.",
};

function Abouts() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <div className={styles.loader}>
              <Loader />
            </div>
          }
        >
          <AboutSection />
        </Suspense>
      </div>
    </>
  );
}

export default Abouts;
