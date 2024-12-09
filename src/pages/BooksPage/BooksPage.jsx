import React, { useState, useEffect } from 'react';
import RatingModal from './RatingModal';

function BooksPage() {
    const [books, setBooks] = useState([]);
    const [showHighRated, setShowHighRated] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookId, setSelectedBookId] = useState(null);

    useEffect(() => {
        fetchBooksAndRatings();
    }, [showHighRated]);

    const fetchBooksAndRatings = async () => {
        try {
            const endpoint = showHighRated
                ? 'http://localhost:8080/books/ratingGreater'
                : 'http://localhost:8080/books';
            const booksResponse = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                credentials: 'include', // Include cookies with the request
            });
            if (!booksResponse.ok) {
                throw new Error(`Error fetching books: ${booksResponse.statusText}`);
            }
            const booksData = await booksResponse.json();

            const booksWithRatings = await Promise.all(booksData.map(async (book) => {
                const ratingResponse = await fetch(`http://localhost:8080/ratings/average/${book.uuid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    credentials: 'include', // Include cookies with the request
                });
                if (!ratingResponse.ok) {
                    throw new Error(`Error fetching rating for book ${book.uuid}: ${ratingResponse.statusText}`);
                }
                const averageRating = await ratingResponse.json();
                return { ...book, averageRating };
            }));

            setBooks(booksWithRatings);
        } catch (error) {
            console.error('Error:', error.message);
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
            await fetchBooksAndRatings(); // Refresh book list
        } catch (error) {
            console.error("Error borrowing book:", error);
            alert("Failed to borrow book.");
        }
    };

    const handleReturnBook = (bookId) => {
        setSelectedBookId(bookId);
        setIsModalOpen(true);
    };

    const handleRatingSubmit = async (rating) => {
        try {
            if (rating !== null) {
                const ratingResponse = await fetch("http://localhost:8080/ratings/add", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({ bookId: selectedBookId, rating }), // Send book ID and rating
                });

                if (!ratingResponse.ok) {
                    throw new Error("Failed to submit rating");
                }
            }

            const returnResponse = await fetch("http://localhost:8080/books/return", {
                method: "POST",
                credentials: "include", // Includes session cookies
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ bookId: selectedBookId }), // Only send the book ID
            });

            if (!returnResponse.ok) {
                throw new Error("Failed to return book");
            }

            alert("Book returned successfully!");
            await fetchBooksAndRatings(); // Refresh book list
        } catch (error) {
            console.error("Error returning book:", error);
            alert("Failed to return book.");
        } finally {
            setIsModalOpen(false);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Books Collection</h1>
            <button
                onClick={() => setShowHighRated(!showHighRated)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
            >
                {showHighRated ? "Show All Books" : "Show High Rated Books"}
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {books.map((book) => (
                    <div key={book.uuid} className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-400 bg-gray-400">
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <p className="text-gray-900 mb-1">by {book.author}</p>
                        <p className="text-gray-700 mb-1">ISBN: {book.isbn}</p>
                        <p className="text-gray-700 mb-1">Status: {book.bookStatus}</p>
                        <p className="text-gray-700 mb-1">Owner: {book.owner.username}</p>
                        <p className="text-gray-700">Average Rating: {book.averageRating || 'No ratings available'}</p>
                        <button
                            onClick={() => book.bookStatus === "AVAILABLE" ? handleBorrowBook(book.uuid) : handleReturnBook(book.uuid)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-2"
                        >
                            {book.bookStatus === "AVAILABLE" ? "Borrow" : "Return"}
                        </button>
                    </div>
                ))}
            </div>
            <RatingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleRatingSubmit}
            />
        </div>
    );
}

export default BooksPage;