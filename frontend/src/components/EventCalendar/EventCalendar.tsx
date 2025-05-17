import { useState } from "react";
import styles from "./EventCalendar.module.scss";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Modal from "../Modal/Modal";


const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startingDay = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const openModal = (day: number) => {
    setSelectedDate(new Date(year, month, day));
  };

  const closeModal = () => setSelectedDate(null);

  const calendarCells = [];
  for (let i = 0; i < startingDay; i++) {
    calendarCells.push(<div key={`empty-${i}`} className={styles.day}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(
      <div key={i} className={styles.day} onClick={() => openModal(i)}>
        {i}
      </div>
    );
  }

  return (
    <div className={styles.calendar}>
      <CalendarHeader
        date={currentDate}
        onPrev={prevMonth}
        onNext={nextMonth}
      />
      <div className={styles.weekdays}>
        {daysOfWeek.map((day) => (
          <div key={day} className={styles.day}>
            <strong>{day}</strong>
          </div>
        ))}
      </div>
      <div className={styles.daysGrid}>{calendarCells}</div>
      {selectedDate && <Modal date={selectedDate} onClose={closeModal} />}
    </div>
  );
};

export default EventCalendar;
