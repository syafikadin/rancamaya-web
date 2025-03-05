import { Suspense } from "react";
import VillaContainer from "./_components/VillaContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Villa Details",
  description: "Discover and book a Villa at the Hotel Booking App ",
};

function VillaDetails({ params }) {
  return (
    <section className="container">
      <Suspense
        fallback={
          <div className="global-loading">
            <LoadingSpinner />
          </div>
        }
      >
        <VillaContainer params={params} />
      </Suspense>
    </section>
  );
}

export default VillaDetails;
