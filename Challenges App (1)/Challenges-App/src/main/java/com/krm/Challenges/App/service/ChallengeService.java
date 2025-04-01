package com.krm.Challenges.App.service;

import com.krm.Challenges.App.model.Challenge;
import com.krm.Challenges.App.repo.ChallengeRepo;
import jakarta.persistence.LockModeType;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ChallengeService {
    private ChallengeRepo repo;

    public List<Challenge> getChallenges() {
        return repo.findAll();
    }

    public Challenge addChallenge(Challenge challenge) {
        Challenge challenge1=challenge;
        challenge1.setCreatedDate(LocalDateTime.now());
        return repo.save(challenge);
    }

    public List<Challenge> getChallengesByMonth(String month) {
        return repo.findByMonth(month);
    }


    @Lock(LockModeType.PESSIMISTIC_WRITE)
    public Challenge findChallengeForUpdate(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Challenge not found"));
    }

    public boolean deleteChallengeById(Long id) {
        try {
            repo.deleteById(id);
            return true;


        } catch (Exception e) {
            return false;
        }

    }

    public Challenge markAsComplete(Long id) {
        Optional<Challenge> challenge = repo.findById(id);
        if (challenge.isPresent()) {
            Challenge challenge1 = challenge.get();
            challenge1.setStatus("Completed");
            challenge1.setFinishedDate(LocalDateTime.now());
            return repo.save(challenge1);
        } else {
            throw new RuntimeException("Challenge not found with id: " + id);

        }
    }

    public String getStatus(Long id) throws Exception {
        Optional<Challenge> challenge = repo.findById(id);
        if (challenge.isPresent()) {
            Challenge challenge1 = challenge.get();
            return challenge1.getStatus();
        } else {
            throw new Exception("Challenges does not exists");
        }

    }
}
