package cz.cvut.fit.tjv.social_network.server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "borrower_id")
    private User borrower;

    @ManyToOne
    @JoinColumn(name = "lender_id")
    private User lender;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Enumerated(EnumType.STRING)
    private TransactionStatus status;
}

