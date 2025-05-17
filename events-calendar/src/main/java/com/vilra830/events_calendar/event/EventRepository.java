package com.vilra830.events_calendar.event;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long>{
    List<Event> findEventByDate(LocalDate dateTime);
    List <Event> findEventsByLabel(String label);
    List<Event> findEventByLocation(String location);
    

}
