type Props = {
  date: Date;
  onClose: () => void;
};

const Modal = ({ date, onClose }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h3>Selected: {date.toDateString()}</h3>
        {/* You’ll later add form here using react-hook-form */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
