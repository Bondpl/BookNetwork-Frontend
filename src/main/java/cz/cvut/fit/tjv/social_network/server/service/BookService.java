package cz.cvut.fit.tjv.social_network.server.service;

import cz.cvut.fit.tjv.social_network.server.model.*;
import cz.cvut.fit.tjv.social_network.server.repository.BookRepository;
import cz.cvut.fit.tjv.social_network.server.repository.TransactionRepository;
import cz.cvut.fit.tjv.social_network.server.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookService {

    private BookRepository bookRepository;
    private UserRepository userRepository;
    private TransactionRepository transactionRepository;

    public Book borrowBook(Long bookId, Long userId) {
        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new RuntimeException("Book not found"));
        if (book.getBookStatus() == BookStatus.BORROWED) {
            throw new RuntimeException("Book is already borrowed");
        }

        book.setBookStatus(BookStatus.BORROWED);
        bookRepository.save(book);

        Transaction transaction = new Transaction();
        transaction.setBook(book);
        transaction.setBorrowerID(userId);

        User lender = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        transaction.setLenderID(lender.getId());


        transaction.setStatus(TransactionStatus.ONGOING);
        transactionRepository.save(transaction);

        return book;
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public void removeBook(Long bookId) {
        bookRepository.deleteById(bookId);
    }

    public Optional<Book> findBooksByStatus(BookStatus status) {
        return bookRepository.findByBookStatus(status);
    }

    public Collection<Book> getAllBooks() {
        Collection<Book> books = bookRepository.findAll();
        System.out.println(books);
        return books;
    }

    public Collection<Book> getBooksBorrowedByUser(Long userId) {
        Collection<Transaction> transactions = transactionRepository.findByBorrowerID(userId);
        return transactions.stream()
                .map(Transaction::getBook)
                .collect(Collectors.toList());
    }
}
