package com.krm.Challenges.App.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String month;
    private String description;
    @Version
    private Long version;
    private String status = "Pending";
    private String about;
    private LocalDateTime createdDate;
    private LocalDateTime finishedDate;
    private LocalDateTime Deadline;

    public LocalDateTime getDeadline() {
        return Deadline;
    }

    public void setDeadline(int deadline) {
        this.Deadline = LocalDateTime.now().plusDays(deadline);

    }
}
