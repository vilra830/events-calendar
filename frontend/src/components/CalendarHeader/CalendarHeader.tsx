type Props = {
  date: Date;
  onPrev: () => void;
  onNext: () => void;
};

const CalendarHeader = ({ date, onPrev, onNext }: Props) => {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
      }}
    >
      <button onClick={onPrev}>←</button>
      <h2>{`${month} ${year}`}</h2>
      <button onClick={onNext}>→</button>
    </div>
  );
};

export default CalendarHeader;
