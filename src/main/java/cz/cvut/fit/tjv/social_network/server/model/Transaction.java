package cz.cvut.fit.tjv.social_network.server.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Borrower is required")
    private Long borrowerID;

    @NotNull(message = "Lender is required")
    private Long lenderID;

    @NotNull(message = "Book is required")
    @ManyToOne(fetch = FetchType.EAGER)
    private Book book;

    @Enumerated(EnumType.STRING)
    private TransactionStatus status;
}

