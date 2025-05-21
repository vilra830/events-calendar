import styles from "./Modal.module.scss";
import type { Event } from "../../models/Event";
import { useForm } from "react-hook-form";
import { eventSchema, type EventFormData } from "../../schema/EventSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createEvent } from "../../services.ts/api";

type Props = {
  date: Date;
  onClose: () => void;
  onAdd: (event: Event) => void;
};

const Modal = ({ date, onClose, onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = async (data: EventFormData) => {
    const newEvent: Event = {
      ...data,
      date: date.toISOString().split("T")[0],
    };
    const savedEvent = await createEvent(newEvent);
    onAdd(savedEvent);
    onClose();
    reset();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Selected: {date.toDateString()}</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Name" {...register("name")} />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}

          <input placeholder="Label" {...register("label")} />
          {errors.label && (
            <p className={styles.error}>{errors.label.message}</p>
          )}

          <input placeholder="Location" {...register("location")} />
          {errors.location && (
            <p className={styles.error}>{errors.location.message}</p>
          )}

          <div className={styles.actions}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
