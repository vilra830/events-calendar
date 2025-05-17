package com.vilra830.events_calendar.event;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UpdateEventDTO {

    @NotBlank(message = "Label is required")
    private String label;

    @NotBlank(message = "Name is required")
    private String name;

    @NotNull (message = "Date is required")
    private LocalDate date;

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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
