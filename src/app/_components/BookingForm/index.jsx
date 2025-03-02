"use client";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import BookingButton from "../BookingButton";
import styles from "./index.module.css";
import { useState, useRef } from "react";
import { addDays, formatISO, isBefore, format } from "date-fns";
import toast, { Toaster } from "react-hot-toast";

function BookingForm({ bookingSearchAction, children }) {
  const defaultDate = new Date();
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(addDays(defaultDate, 1));
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  // Refs untuk DatePicker
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

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

  return (
    <form action={handleSearch} className={styles.bookingForm}>
      <div className={styles.formGroup}>
        {/* Start Date Picker */}
        <div
          className={styles.formControl}
          onClick={() => startDateRef.current.setOpen(true)}
        >
          <DatePicker
            ref={startDateRef}
            showIcon
            selected={startDate}
            onChange={handleStartSelection}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className={styles.input}
            dateFormat={"dd/MM/yyyy"}
            minDate={new Date()}
          />
          <div className={styles.dayDisplay}>{formatDay(startDate)}</div>
        </div>

        {/* End Date Picker */}
        <div
          className={styles.formControl}
          onClick={() => endDateRef.current.setOpen(true)}
        >
          <DatePicker
            ref={endDateRef}
            showIcon
            selected={endDate}
            onChange={handleEndSelection}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className={styles.input}
            dateFormat={"dd/MM/yyyy"}
          />
          <div className={styles.dayDisplay}>{formatDay(endDate)}</div>
        </div>

        {/* Adults & Rooms Selection */}
        <div className={styles.formControl}>
          <i className="fas fa-user-friends"></i>
          <div className={styles.selectForm}>
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
