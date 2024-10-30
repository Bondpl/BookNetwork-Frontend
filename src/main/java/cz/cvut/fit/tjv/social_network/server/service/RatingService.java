package cz.cvut.fit.tjv.social_network.server.service;

import cz.cvut.fit.tjv.social_network.server.model.Book;
import cz.cvut.fit.tjv.social_network.server.model.Rating;
import cz.cvut.fit.tjv.social_network.server.model.User;
import cz.cvut.fit.tjv.social_network.server.repository.RatingsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class RatingService {
    private RatingsRepository ratingsRepository;

    public Rating SetRating(Book book, User user, int rating) {
        Rating r = new Rating();
        r.setBook(book);
        r.setUser(user);
        r.setRating(rating);
        return ratingsRepository.save(r);
    }

    public Rating getRatingById(UUID uuid) {
        return ratingsRepository.findById(uuid).orElse(null);
    }

    public void deleteRatingById(UUID uuid) {
        ratingsRepository.deleteById(uuid);
    }

    public Rating updateRating(Rating rating) {
        return ratingsRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingsRepository.findAll();
    }
}
