package com.vilra830.events_calendar.event;

import java.util.List;

import org.springframework.stereotype.Service;

import jakarta.validation.Valid;

@Service
public class EventService {

    public Event createEvent(CreateEventDTO newEvent) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createEvent'");
    }

    public List<Event> getAllEvents() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllEvents'");
    }

    public List<Event> getEventsByLocation(String location) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getEventsByLocation'");
    }

    public Event updateEvent(Long id, UpdateEventDTO updatedEvent) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEvent'");
    }

    public void deleteEvent(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteEvent'");
    }

}
