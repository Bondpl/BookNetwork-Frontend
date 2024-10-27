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

    private Long borrowerID;

    private Long lenderID;

    @ManyToOne
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

    public Book getBook() {
        return book;
    }
}

