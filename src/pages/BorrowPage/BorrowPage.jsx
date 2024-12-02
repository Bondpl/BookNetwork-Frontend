import React, { useState, useEffect } from "react";

function BorrowReturnPage() {
    const [books, setBooks] = useState([]);
    const [showHighRated, setShowHighRated] = useState(false);
    const [ratingThreshold, setRatingThreshold] = useState(4); // Example threshold

    useEffect(() => {
        fetchBooks();
    }, [showHighRated]);

    const fetchBooks = async () => {
        try {
            const endpoint = showHighRated
                ? `http://localhost:8080/books/ratingGreater`
                : "http://localhost:8080/books";
            const response = await fetch(endpoint, {
                method: "GET",
                credentials: "include", // Includes session cookies
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch books");
            }

            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleBorrowBook = async (bookId) => {
        try {
            const response = await fetch("http://localhost:8080/books/borrow", {
                method: "POST",
                credentials: "include", // Includes session cookies
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ bookId }), // Only send the book ID
            });

            if (!response.ok) {
                throw new Error("Failed to borrow book");
            }

            alert("Book borrowed successfully!");
            await fetchBooks(); // Refresh book list
        } catch (error) {
            console.error("Error borrowing book:", error);
            alert("Failed to borrow book.");
        }
    };

    const handleReturnBook = async (bookId) => {
        try {
            const response = await fetch("http://localhost:8080/books/return", {
                method: "POST",
                credentials: "include", // Includes session cookies
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ bookId }), // Only send the book ID
            });

            if (!response.ok) {
                throw new Error("Failed to return book");
            }

            alert("Book returned successfully!");
            await fetchBooks(); // Refresh book list
        } catch (error) {
            console.error("Error returning book:", error);
            alert("Failed to return book.");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Borrow and Return Books</h1>
            <button
                onClick={() => setShowHighRated(!showHighRated)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
            >
                {showHighRated ? "Show All Books" : "Show High Rated Books"}
            </button>
            <ul className="space-y-4">
                {books.map((book) => (
                    <li
                        key={book.uuid}
                        className="border rounded p-4 shadow flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-xl font-semibold">{book.title}</h2>
                            <p className="text-gray-700">Author: {book.author}</p>
                            <p className="text-gray-700">Status: {book.bookStatus}</p>
                        </div>
                        <div>
                            {book.bookStatus === "AVAILABLE" && (
                                <button
                                    onClick={() => handleBorrowBook(book.uuid)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Borrow
                                </button>
                            )}
                            {book.bookStatus === "BORROWED" && (
                                <button
                                    onClick={() => handleReturnBook(book.uuid)}
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                                >
                                    Return
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BorrowReturnPage;