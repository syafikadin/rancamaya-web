import { Suspense } from "react";
import RestaurantContainer from "./_components/RestaurantContainer"
import LoadingSpinner from "@/app/_ui/LoadingSpinner";

export const metadata = {
    title: "Restaurant Details",
    description: "Discover and book a room at the Hotel Booking App ",
};

function RestaurantDetails({ params }) {
    return (
        <section className="container">
            <Suspense
                fallback={
                    <div className="global-loading">
                        <LoadingSpinner />
                    </div>
                }
            >
                <RestaurantContainer />
            </Suspense>
        </section>
    );
}

export default RestaurantDetails;
