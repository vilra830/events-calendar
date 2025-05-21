import styles from "./CalendarHeader.module.scss";

type Props = {
  date: Date;
  onPrev: () => void;
  onNext: () => void;
};

const CalendarHeader = ({ date, onPrev, onNext }: Props) => {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className={styles.header}>
      <button onClick={onPrev} className={styles.button}>
        ←
      </button>
      <h2 className={styles.title}>{`${month} ${year}`}</h2>
      <button onClick={onNext} className={styles.button}>
        →
      </button>
    </div>
  );
};

export default CalendarHeader;
