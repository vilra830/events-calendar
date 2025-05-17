package com.vilra830.events_calendar.event;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vilra830.events_calendar.common.exceptions.NotFoundException;

import jakarta.validation.Valid;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private ModelMapper modelMapper;

    public Event createEvent(CreateEventDTO newEvent) {
        Event event  = modelMapper.map(newEvent, Event.class);
        return eventRepository.save(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getEventsByLocation(String location) {
        List <Event> events = eventRepository.findEventByLocation(location.trim());
        if(events.isEmpty()){
            throw new NotFoundException("No event at " + location);
        }
       return events;
    }

    public Event updateEvent(Long id, UpdateEventDTO updatedEvent) {
        Optional<Event> result = eventRepository.findById(id);
        if(result.isEmpty()){
            throw new NotFoundException("No event with such ID " + id);
        }
        Event event = result.get();
        modelMapper.map(updatedEvent, event);
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        Optional<Event> result = eventRepository.findById(id);
        if(result.isEmpty()){
            throw new NotFoundException("No event with such ID " + id);
        }

        eventRepository.deleteById(id);
    }

    public List<Event> getEventsByDate(LocalDate date) {
        List <Event> events = eventRepository.findEventByDate(date);
        if(events.isEmpty()){
            throw new NotFoundException("No events found on " + date);
        }

        return events;

    }

    public List<Event> getEventsByLabel(String label) {
        List <Event> events = eventRepository.findEventsByLabel(label);
        if(events.isEmpty()){
            throw new NotFoundException("No event for " + label);
        }    
        return events;
    }
        



}
