import z from "zod";

export const eventSchema = z.object({
  name: z.string().min(1, "Name is required"),
  label: z.string().min(1, "Label is required"),
  location: z.string().min(1, "Location is required"),
});

export type EventFormData = z.infer<typeof eventSchema>;
