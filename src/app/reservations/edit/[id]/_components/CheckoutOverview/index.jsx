import { daysDifferCount, formatToAbrFormat } from "@/app/utils/datetime";
import styles from "./styles.module.css";
import Card from "@/app/_components/Card";
import Image from "next/image";

import { bookingTotalPrice, nightTotalPrice } from "@/app/utils/reservationsCalcs";

const SUPABASE_ROOMS_URL = process.env.NEXT_PUBLIC_SUPABASE_IMGS_URL;

function CheckoutOverview({ reservation, guests, start, end }) {
  const totalNights = daysDifferCount(end, start);
  const totalPerNight = nightTotalPrice(reservation.rooms.price, guests);
  const guestsPrice = ((guests - 1) * (reservation.rooms.price / 2)).toFixed(2);
  const totalPrice = bookingTotalPrice(reservation.rooms.price, guests, totalNights);
  // return <h1>OVERVIEW CARD</h1>;
  return (
    <div>
      <Card>
        <Card.Thumbnail>
          <Image
            fill
            src={`${SUPABASE_ROOMS_URL}/${reservation.rooms.thumbnail}`}
            alt={`${reservation.rooms.name} thumbnail`}
          />
        </Card.Thumbnail>

        <Card.Description className={styles.overviewDescription}>
          <h2>{reservation.rooms.name}</h2>
          <div className={styles.bookingSummary}>
            <h3>Booking Summary</h3>
            <p>
              <span>Arrival</span>
              <span>{formatToAbrFormat(new Date(start))}</span>
            </p>
            <p>
              <span>Departure</span>
              <span>{formatToAbrFormat(new Date(end))}</span>
            </p>
            <p>
              <span>Guests</span>
              <span>{String(guests).padStart(2, "0")}</span>
            </p>
          </div>

          <div className={styles.bookingSummary}>
            <h3>Pricing Breakdown</h3>
            <p>
              <span>
                ${reservation.rooms.price.toFixed(2)} x night (Base Rate for 1 Guest)
              </span>
              <span>${reservation.rooms.price.toFixed(2)}</span>
            </p>
            <p>
              <span>
                Additional Guests ({guests - 1} x $
                {Number(reservation.rooms.price / 2).toFixed(2)}per night)
              </span>
              <span>${guestsPrice}</span>
            </p>
            <p>
              <span>Total per Night: </span>
              <span>${totalPerNight}</span>
            </p>
          </div>

          <div className={styles.totalPrice}>
            <span>Total Without Taxes ({totalNights} Nights)</span>
            <span>${totalPrice}</span>
          </div>
        </Card.Description>
      </Card>
    </div>
  );
}

export default CheckoutOverview;
