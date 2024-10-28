package cz.cvut.fit.tjv.social_network.server.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Title is required")
    private String title;

    @NotNull(message = "Author is required")
    private String author;

    private String isbn;

    @NotNull(message = "Title is required")
    @Enumerated(EnumType.STRING)
    private BookStatus bookStatus;

    private String coverUrl;

    private Double averageRating;

    @OneToMany(mappedBy = "book")
    private List<Transaction> transactions;

    @NotNull(message = "Owner is required")
    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

    public Long getId(Long id) {
        return id;
    }

}
