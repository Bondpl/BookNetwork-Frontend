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

    @JoinColumn(name = "borrower_id")
    private Long borrowerID;

    @JoinColumn(name = "lender_id")
    private Long lenderID;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    @Enumerated(EnumType.STRING)
    private TransactionStatus status;

    public void setBook(Book book) {
        this.book = book;
    }

    public void setBorrowerID(Long borrowerID) {
        this.borrowerID = borrowerID;
    }

    public void setStatus(TransactionStatus status) {
        this.status = status;
    }

    public void setLenderID(Long lenderID) {
        this.lenderID = lenderID;
    }
}

