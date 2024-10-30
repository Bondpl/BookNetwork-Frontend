package cz.cvut.fit.tjv.social_network.server.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID uuid = UUID.randomUUID();

    @NotNull(message = "Title is required")
    private String title;

    @NotNull(message = "Author is required")
    private String author;

    private String isbn;

    @NotNull(message = "Title is required")
    @Enumerated(EnumType.STRING)
    private BookStatus bookStatus;

    private String coverUrl;

    @NotNull(message = "Owner is required")
    @ManyToOne(fetch = FetchType.EAGER)
    private User owner;

}
