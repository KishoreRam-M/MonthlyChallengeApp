package com.krm.Challenges.App.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private  String month;
    private  String description;
    @Version
    private  Long version;
    private  String status="Pending";
}
