import CheckoutForm from "../CheckoutForm";
import CheckoutOverview from "../CheckoutOverview";
import styles from "./styles.module.css";
import { cookies, headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { reservationSchema } from "@/app/_lib/zodSchemas";
import { bookingCancelAction } from "@/app/_lib/actions";
import SelectCountry from "@/app/_ui/SelectCountry";
import { revalidatePath } from "next/cache";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

async function CheckoutSection() {
  // Dummy data untuk guest dan room agar tidak perlu auth atau Supabase
  const guest = { nationality: "USA", id: "dummy_guest" };
  const room = { price: 100000, id: "dummy_room", thumbnail: "lagoon_deluxe.jpg" };

  const reservation_cookies = cookies();
  if (!reservation_cookies.has("pending_reservation")) {
    redirect("/rooms");
  }

  const pending_reservation = JSON.parse(
    reservation_cookies.get("pending_reservation").value
  );

  async function createReservationAction(prevState, formData) {
    "use server";
    console.log("state");
    console.log(prevState);
    prevState = { ...prevState, isConfirming: true };
    const fullname = formData.get("fullname");
    const nationalID = formData.get("nationalID");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const nationalityWithFlag = formData.get("nationality");
    const message = formData.get("message");

    try {
      reservationSchema.parse({
        fullname,
        email,
        phone,
        nationality: nationalityWithFlag,
        nationalID,
        message,
      });
    } catch (err) {
      prevState = {};
      err?.errors.forEach((element) => {
        prevState[element?.path[0] ?? "unknown"] = element.message;
      });
      return { ...prevState };
    }

    const [nationality, countryFlag] = nationalityWithFlag.split("%");

    const total_price = (
      room.price +
      ((room.price / 2) * pending_reservation.guests_count - 1)
    ).toFixed(2);

    let flagError = { error: false, payload: "" };
    try {
      pending_reservation.message = message;
      cookies().set("pending_reservation", JSON.stringify(pending_reservation), {
        maxAge: 60 * 60 * 2,
        httpOnly: true,
      });

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/stripe`, {
        pending_reservation,
      });
      flagError.payload = response.data?.checkout_url;
    } catch (err) {
      flagError.error = true;
      console.log("CHECKOUT COOKIE ERROR");
      console.log(err);
      return { ...prevState, criticalErr: "Failed to confirm your booking!" };
    } finally {
      revalidatePath("/account/history");
      if (!flagError.error && flagError.payload) {
        console.log({ URL: flagError.payload });
        redirect(flagError.payload);
      }
    }
  }

  return (
    <div className={`${styles.formSection} container`}>
      <CheckoutForm
        createReservationAction={createReservationAction}
        room={room}
        guest={guest}
        bookingCancelAction={bookingCancelAction}
      >
        <SelectCountry
          name={"nationality"}
          className={styles.formInput}
          defaultCountry={guest.nationality}
        />
      </CheckoutForm>
      <CheckoutOverview room={room} pending_reservation={pending_reservation} />
    </div>
  );
}

export default CheckoutSection;
