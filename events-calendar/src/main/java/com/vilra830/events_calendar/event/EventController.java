package com.vilra830.events_calendar.event;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping()
    public ResponseEntity<Event> createEvent(@RequestBody @Valid CreateEventDTO newEvent) {
        Event event = eventService.createEvent(newEvent);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<Event>> getAllEvents() {
        List <Event> events = eventService.getAllEvents();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/location")
    public ResponseEntity<List<Event>> getEventsByLocation (@RequestParam String location) {
        List <Event> events = eventService.getEventsByLocation(location);
        return new ResponseEntity<>(events, HttpStatus.OK);
    
    }

        @GetMapping("/label")
    public ResponseEntity<List<Event>> getEventsByLabel (@RequestParam String label) {
        List <Event> events = eventService.getEventsByLabel(label);
        return new ResponseEntity<>(events, HttpStatus.OK);
    
    }

    @GetMapping("/date")
    public ResponseEntity<List<Event>> getEventsByDate ( @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List <Event> events = eventService.getEventsByDate(date);
        return new ResponseEntity<>(events, HttpStatus.OK);
    
    }
    

    @PatchMapping("/{id}")
    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody @Valid UpdateEventDTO updatedEvent){
        Event event = eventService.updateEvent(id, updatedEvent);
        return new ResponseEntity<>(event, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id){
        eventService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
    
    

}
