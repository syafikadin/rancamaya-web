import { Suspense } from "react";
import RoomContainer from "./_components/RoomContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Rent House Details",
  description: "Rent a cozy home with complete facilities in a strategic location, perfect for business or leisure.",
};

function RentHouseDetail({ params }) {
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

export default RentHouseDetail;
