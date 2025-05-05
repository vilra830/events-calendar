package com.vilra830.events_calendar.event;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotBlank;


public class CreateEventDTO {

    @NotBlank(message = "Label is required")
    private String label;

    @NotBlank(message = "Name is required")
    private String name;

    @NotBlank(message = "Date and Time is required")
    private LocalDateTime localDateTime;

    @NotBlank(message = "Location is required")
    private String location;

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getLocalDateTime() {
        return localDateTime;
    }

    public void setLocalDateTime(LocalDateTime localDateTime) {
        this.localDateTime = localDateTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
