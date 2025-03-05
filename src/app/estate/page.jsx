import FilterSection from "./_components/FilterSection";

import styles from "./styles.module.css";
import BannerVilla from "../_components/BannerVilla";
import EstateSection from "./_components/EstateSection";
import { Suspense } from "react";
import Loader from "../_ui/Loader";

export const metadata = {
  title: "Estate",
  description: "Discover and book a room at the Hotel Booking App ",
};

function Estates({ searchParams }) {
  const filter = searchParams?.sort ?? "default";
  const range = searchParams?.range ?? "";
  return (
    <>
      <BannerVilla title={"Miliki Estate Indah, Berkualitas dan Nyaman!"} />

      <div className={`container ${styles.villaHolder}`}>
        <FilterSection filters={{ filter, range }} />

        <Suspense
          key={`${filter}-${range}`}
          fallback={
            <div className={styles.loader}>
              <Loader />
            </div>
          }
        >
          <EstateSection filter={filter} range={range} />
        </Suspense>
      </div>
    </>
  );
}

export default Estates;
