package com.krm.Challenges.App.repo;

import com.krm.Challenges.App.model.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChallengeRepo extends JpaRepository<Challenge,Long> {
    Challenge findDescriptionByMonth(String month);

    List<Challenge> findByMonth(String month);
}
