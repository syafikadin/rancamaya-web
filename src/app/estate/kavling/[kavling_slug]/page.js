import { Suspense } from "react";
import KavlingContainer from "./_components/KavlingContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Kavling Details",
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
        <KavlingContainer params={params} />
      </Suspense>
    </section>
  );
}

export default ClusterDetails;
