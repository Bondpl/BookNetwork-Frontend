package cz.cvut.fit.tjv.social_network.server.repository;

import cz.cvut.fit.tjv.social_network.server.model.Book;
import cz.cvut.fit.tjv.social_network.server.model.BookStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findById(Long id);

    Optional<Book> findByTitle(String title);

    Optional<Book> findByAuthor(String author);

    Optional<Book> findByIsbn(String isbn);

    Optional<Book> findByBookStatus(BookStatus bookStatus);
}
