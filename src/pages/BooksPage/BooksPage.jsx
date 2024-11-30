import React, { useState, useEffect } from 'react';

function BooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooksAndRatings();
    }, []);

    const fetchBooksAndRatings = async () => {
        try {
            const booksResponse = await fetch('http://localhost:8080/books', {
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

    const handleButtonClick = () => {
        fetchBooksAndRatings();
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Books Collection</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
                onClick={handleButtonClick}
            >
                Fetch Books
            </button>
            <ul className="space-y-2">
                {books.map((book) => (
                    <li key={book.uuid} className="p-2 border rounded shadow">
                        <h2 className="text-xl font-semibold">{book.title}</h2>
                        <p className="text-gray-900">by {book.author}</p>
                        <p className="text-gray-700">ISBN: {book.isbn}</p>
                        <p className="text-gray-700">Status: {book.bookStatus}</p>
                        <img
                            src={book.coverUrl || 'https://via.placeholder.com/128x192?text=No+Cover'}
                            alt={`${book.title} cover`}
                            className="w-32 h-48"
                        />
                        <p className="text-gray-700">Owner: {book.owner.username}</p>
                        <p className="text-gray-700">
                            Average Rating: {book.averageRating || 'No ratings available'}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BooksPage;
