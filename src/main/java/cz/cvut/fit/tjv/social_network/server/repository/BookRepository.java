package cz.cvut.fit.tjv.social_network.server.repository;

import cz.cvut.fit.tjv.social_network.server.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    @Query("SELECT b FROM Book b WHERE b.averageRating > 4")
    List<Book> findHighlyRatedBooks(@Param("rating") Double rating);
}
