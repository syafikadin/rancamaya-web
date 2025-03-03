import { Suspense } from "react";
import RoomContainer from "./_components/RoomContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Kavling Details",
  description: "Rent a plot in a strategic location, ideal for both business and personal use. Enjoy a peaceful environment with easy access to public facilities and the city center.",
};

function KavlingDetails({ params }) {
  return (
    <section className="container">
      <Suspense
        fallback={
          <div className="global-loading">
            <LoadingSpinner />
          </div>
        }
      >
        <RoomContainer params={params} />
      </Suspense>
    </section>
  );
}

export default KavlingDetails;
