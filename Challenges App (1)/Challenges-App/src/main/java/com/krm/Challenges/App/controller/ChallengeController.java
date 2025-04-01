package com.krm.Challenges.App.controller;

import com.krm.Challenges.App.model.Challenge;
import com.krm.Challenges.App.service.ChallengeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ChallengeController {
    private final ChallengeService challengeService;

    // Get all challenges
    @GetMapping("/challenges")
    public ResponseEntity<List<Challenge>> getChallenges() {
        List<Challenge> challenges = challengeService.getChallenges();
        if (challenges.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Empty list
        }
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }

    // Add a new challenge
    @PostMapping("/challenges")
    public ResponseEntity<Challenge> addChallenge(@RequestBody Challenge challenge) {
        Challenge createdChallenge = challengeService.addChallenge(challenge);
        return new ResponseEntity<>(createdChallenge, HttpStatus.CREATED); // 201 Created
    }

    // Get challenges by month
    @GetMapping("/challenges/{month}")
    public ResponseEntity<List<Challenge>> getChallengesByMonth(@PathVariable String month) {
        List<Challenge> challenges = challengeService.getChallengesByMonth(month);
        if (challenges.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // No challenges found for this month
        }
        return new ResponseEntity<>(challenges, HttpStatus.OK);
    }

    // Update a challenge by ID
    @PutMapping("/challenges/{id}")
    public ResponseEntity<Challenge> updateChallengeById(@PathVariable Long id) {
        Challenge updatedChallenge = challengeService.findChallengeForUpdate(id);
        if (updatedChallenge == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Challenge not found
        }
        return new ResponseEntity<>(updatedChallenge, HttpStatus.OK);
    }

    // Delete a challenge by ID
    @DeleteMapping("/challenges/{id}")
    public ResponseEntity<String> deleteChallengeById(@PathVariable Long id) {
        boolean isDeleted = challengeService.deleteChallengeById(id);
        if (!isDeleted) {
            return new ResponseEntity<>("Challenge not found", HttpStatus.NOT_FOUND); // Not found
        }
        return new ResponseEntity<>("Challenge successfully deleted", HttpStatus.OK);
    }

    @PutMapping("/challenges/{id}/complete")
    public ResponseEntity<Challenge> markStatusAsCompltete(@PathVariable Long id) {
        Challenge challenge = challengeService.markAsComplete(id);
        if (challengeService != null) {
            return ResponseEntity.ok(challenge);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping("/challenges/{id}/status")
    public ResponseEntity<String> getStatus(@PathVariable Long id) throws Exception {
        String status = challengeService.getStatus(id);
        if (status != null) {

            return ResponseEntity.ok(status);

        }
        return ResponseEntity.notFound().build();
    }
}
