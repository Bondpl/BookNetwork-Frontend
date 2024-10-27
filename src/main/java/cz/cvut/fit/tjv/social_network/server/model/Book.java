package cz.cvut.fit.tjv.social_network.server.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String author;

    private String isbn;

    @Enumerated(EnumType.STRING)
    private BookStatus bookStatus;

    private String coverUrl;

    private Double averageRating;

    @OneToMany(mappedBy = "book")
    private List<Transaction> transactions;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

    public BookStatus getBookStatus() {
        return bookStatus;
    }

    public void setBookStatus(BookStatus bookStatus) {
        this.bookStatus = bookStatus;
    }


    public Long getId(Long id) {
        return id;
    }


}
