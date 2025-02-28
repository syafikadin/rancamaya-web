"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./styles.module.css";
// import { getReservationByID, getRoomReservations } from "@/app/_lib/supabase/reservations";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loader from "@/app/_ui/Loader";

function FormDayPicker({ handleDateSelection, start, end }) {
  const [disableddDays, setDisabledDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { room_slug, id } = useParams();
  const calendarRangeRef = useRef({ start: new Date(2024, 0), end: new Date(2027, 11) });

  const dummyReservations = [
    { id: 1, room_id: "1", start_date: "2025-03-01", end_date: "2025-03-05" },
    { id: 2, room_id: "2", start_date: "2025-03-10", end_date: "2025-03-12" },
    { id: 3, room_id: "3", start_date: "2025-03-15", end_date: "2025-03-20" },
  ];

  useEffect(() => {
    if (!room_slug && !id) return;

    async function getBusyDays() {
      setIsLoading(true);
      let busy_days = [];

      // Menggunakan data dummy untuk simulasi
      let reservations = dummyReservations;
      if (id) {
        const reservation_target = reservations.find((res) => res.id === parseInt(id));

        if (reservation_target) {
          reservations = dummyReservations.filter(
            (item) => item.room_id === reservation_target.room_id
          );
        }
      } else {
        reservations = dummyReservations.filter((item) => item.room_id === room_slug);
      }

      busy_days = reservations.map((item) => ({
        before: new Date(item.end_date),
        after: new Date(item.start_date),
      }));

      setDisabledDays(busy_days);
      setIsLoading(false);
    }

    getBusyDays();
  }, [room_slug, id]);

  if (isLoading)
    return (
      <div className={"section-loader"}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.datepicker}>
      <div>
        <DayPicker
          captionLayout="dropdown"
          min={0}
          onSelect={(range) => handleDateSelection(range)}
          mode="range"
          selected={start && end ? { from: start, to: end } : null}
          startMonth={calendarRangeRef.current.start}
          endMonth={calendarRangeRef.current.end}
          weekStartsOn={1}
          numberOfMonths={2}
          disabled={[{ before: new Date() }, ...disableddDays]}
          footer={
            <p>
              <span className={styles.footerIcon}>
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
              <span>Please Pick a Range</span>
            </p>
          }
          classNames={{
            today: styles.datepickerToday,
            selected: styles.datepickerSelected,
            range_start: styles.datepickerRangeControlStart,
            range_end: styles.datepickerRangeControlEnd,
            range_middle: styles.datepickerRangeMiddle,
            chevron: styles.chevron,
            footer: styles.datepickerFooter,
          }}
        />
      </div>
    </div>
  );
}

export default FormDayPicker;
