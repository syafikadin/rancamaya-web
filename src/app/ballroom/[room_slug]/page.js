import { Suspense } from "react";
import RoomContainer from "./_components/RoomContainer";
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
  title: "Ballroom Details",
  description: "Discover and book a room at the Hotel Booking App ",
};

function BallroomDetails({ params }) {
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

export default BallroomDetails;
