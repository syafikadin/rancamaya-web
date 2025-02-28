"use client";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import BookingButton from "../BookingButton";
import styles from "./index.module.css";
import { useState } from "react";

import { addDays, formatISO, isBefore, format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

function BookingForm({ bookingSearchAction, children }) {
  const defaultDate = new Date(2025, 1, 25);
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(addDays(defaultDate, 1));
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  function handleStartSelection(date) {
    setStartDate(date);
  }

  function handleEndSelection(date) {
    setEndDate(date);
  }

  async function handleSearch() {
    if (!startDate || !endDate) return;
    const arrival = formatISO(startDate, { representation: "date" });
    const departure = formatISO(endDate, { representation: "date" });
    const formatedRange = `${arrival}_${departure}`;

    if (!isBefore(startDate, endDate)) {
      toast.error("Invalid date range!");
      return;
    }
    await bookingSearchAction(formatedRange);
  }

  function formatDay(date) {
    return new Intl.DateTimeFormat("id-ID", { weekday: "long" }).format(date);
  }

  function formatDate(date) {
    return format(date, "d MMM yyyy");
  }

  return (
    <form action={handleSearch} className={styles.bookingForm}>
      <div className={styles.formGroup}>
        <div className={styles.formControl}>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={handleStartSelection}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className={styles.input}
            dateFormat={"dd/MM/yyyy"}
            excludeDateIntervals={[{ start: new Date("01/01/1970"), end: new Date() }]}
          />
          {/* <div className={styles.dateDisplay}>{formatDate(startDate)}</div> */}
          <div className={styles.dayDisplay}>{formatDay(startDate)}</div>
        </div>
        <div className={styles.formControl}>
          <DatePicker
            showIcon
            selected={endDate}
            onChange={handleEndSelection}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className={styles.input}
            dateFormat={"dd/MM/yyyy"}
            excludeDateIntervals={[{ start: new Date("01/01/1970"), end: new Date() }]}
          />
          {/* <div className={styles.dateDisplay}>{formatDate(endDate)}</div> */}
          <div className={styles.dayDisplay}>{formatDay(endDate)}</div>
        </div>
        <div className={styles.formControl}>
          <i className="fas fa-user-friends"></i>
          <div>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className={styles.select}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} adult{num > 0 ? "s" : ""}
                </option>
              ))}
            </select>
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className={styles.select}
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1} room{num > 0 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <BookingButton />
        <div>{children}</div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default BookingForm;
