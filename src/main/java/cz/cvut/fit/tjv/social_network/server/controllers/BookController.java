package cz.cvut.fit.tjv.social_network.server.controllers;

import cz.cvut.fit.tjv.social_network.server.model.Book;
import cz.cvut.fit.tjv.social_network.server.service.BookService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/books")
@AllArgsConstructor
public class BookController {
    private BookService bookService;

    @GetMapping
    public Collection<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public Book createBook(@Valid @RequestBody Book book) {
        return bookService.createBook(book);
    }
}
