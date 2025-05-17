import axios from "axios";
import type { Event } from "../models/Event";

const API_URL = "http://localhost:8080";

export const getAllEvents = async (): Promise<Event[]> => {
  const response = await axios.get(`${API_URL}/events`);
  return response.data;
};

export const createEvent = async (event: Event): Promise<Event> => {
  const response = await axios.post(`${API_URL}/events`, event);
  return response.data;
};

export const updateEvent = async (id: number, event: Event): Promise<Event> => {
  const response = await axios.patch(`${API_URL}/events/${id}`, event);
  return response.data;
};

export const deleteEvent = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/events/${id}`);
};

export const getEventsByLabel = async (label: string): Promise<Event[]> => {
  const response = await axios.get(`${API_URL}/events/label?label=${label}`);
  return response.data;
};

export const getEventsByLocation = async (
  location: string
): Promise<Event[]> => {
  const response = await axios.get(
    `${API_URL}/events/location?location=${location}`
  );
  return response.data;
};

export const getEventsByDate = async (date: string): Promise<Event[]> => {
  const response = await axios.get(`${API_URL}/events/date?date=${date}`);
  return response.data;
};
