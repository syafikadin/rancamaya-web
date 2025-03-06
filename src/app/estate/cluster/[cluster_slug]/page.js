import { Suspense } from "react";
import ClusterContainer from "./_components/ClusterContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Ballroom Details",
  description: "Discover and book a room at the Hotel Booking App ",
};

function ClusterDetails({ params }) {
  return (
    <section className="container">
      <Suspense
        fallback={
          <div className="global-loading">
            <LoadingSpinner />
          </div>
        }
      >
        <ClusterContainer params={params} />
      </Suspense>
    </section>
  );
}

export default ClusterDetails;
