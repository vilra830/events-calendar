import { useEffect, useState } from "react";
import styles from "./EventCalendar.module.scss";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import Modal from "../Modal/Modal";
import { getAllEvents } from "../../services.ts/api";
import type { Event } from "../../models/Event";

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
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState<string | null>(null);

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
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = new Date(year, month, i).toISOString().split("T")[0];
    const dayEvents = events.filter((e) => e.date === dateStr);

    calendarCells.push(
      <div key={i} className={styles.day} onClick={() => openModal(i)}>
        <div>{i}</div>
        {dayEvents.map((event) => (
          <div key={event.id} className={styles.event}>
            {event.name}
          </div>
        ))}
      </div>
    );
  }

  const handleEvent = (newEvent: Event) => {
    setEvents((prev) => [...prev, newEvent]);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents();
        setEvents(data);
      } catch (err) {
        setError("Failed to load events. Please try again later.");
      }
    };
    fetchEvents();
  }, []);

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
      {selectedDate && (
        <Modal date={selectedDate} onClose={closeModal} onAdd={handleEvent} />
      )}
    </div>
  );
};

export default EventCalendar;
