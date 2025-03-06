import styles from "./styles.module.css";
import GolfSection from "./GolfSection";
import { Suspense } from "react";
import Loader from "../_ui/Loader";

export const metadata = {
  title: "Golf",
  description:
    "Enjoy the ultimate golfing experience with beautiful green fairways, world-class facilities, and exclusive services for golf enthusiasts.",
};

function Golfs() {
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
          <GolfSection />
        </Suspense>
      </div>
    </>
  );
}

export default Golfs;
