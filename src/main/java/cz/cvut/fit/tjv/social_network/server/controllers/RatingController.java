package cz.cvut.fit.tjv.social_network.server.controllers;

import cz.cvut.fit.tjv.social_network.server.model.Rating;
import cz.cvut.fit.tjv.social_network.server.service.RatingService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ratings")
@AllArgsConstructor
public class RatingController {
    private RatingService ratingService;

    @GetMapping
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @PostMapping
    public Rating createRating(Rating rating) {
        return ratingService.SetRating(rating.getBook(), rating.getUser(), rating.getRating());
    }
}
