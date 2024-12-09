import React, { useState, useEffect } from 'react';

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [error, setError] = useState(null);

    const fetchAuthenticatedUser = async () => {
        try {
            const response = await fetch('http://localhost:8080/users/self', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data);
                await fetchOwnedBooks();
                await fetchBorrowedBooks();
            } else {
                setError(`Error fetching user data: ${response.status}`);
            }
        } catch (error) {
            setError(`Error fetching user: ${error.message}`);
        }
    };

    const fetchOwnedBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/books/owned', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const books = await response.json();
                const booksWithTransactions = await Promise.all(
                    books.map(async (book) => {
                        const transactions = await fetchTransactionsOfBook(book.id);
                        return { ...book, transactions };
                    })
                );
                setOwnedBooks(booksWithTransactions);
            } else {
                setError(`Failed to fetch owned books: ${response.status}`);
            }
        } catch (error) {
            setError(`Error fetching owned books: ${error.message}`);
        }
    };

    const fetchBorrowedBooks = async () => {
        try {
            const response = await fetch('http://localhost:8080/books/borrowed', {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                const books = await response.json();
                setBorrowedBooks(books);
            } else {
                setError(`Failed to fetch borrowed books: ${response.status}`);
            }
        } catch (error) {
            setError(`Error fetching borrowed books: ${error.message}`);
        }
    };

    const fetchTransactionsOfBook = async (bookId) => {
        try {
            const response = await fetch(`http://localhost:8080/transactions/book`, {
                method: 'GET',
                credentials: 'include',
            });

            if (response.ok) {
                return await response.json();
            } else {
                setError(`Failed to fetch transactions for book ${bookId}: ${response.status}`);
                return [];
            }
        } catch (error) {
            setError(`Error fetching transactions for book ${bookId}: ${error.message}`);
            return [];
        }
    };

    useEffect(() => {
        fetchAuthenticatedUser();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {user ? (
                <div>
                    <div className="flex items-center mb-6">
                        <div className="mr-4">
                            {user.profilePictureUrl ? (
                                <img
                                    src={user.profilePictureUrl}
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-white">No Image</div>
                            )}
                        </div>
                        <div className="flex flex-col text-left">
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Description:</strong> {user.description}</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-4">Owned Books</h3>
                    {ownedBooks.length > 0 ? (
                        <ul>
                            {ownedBooks.map((book, index) => (
                                <li key={book.id} className="mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-2xl"><strong>Title:</strong> {book.title}</span>
                                        <span><strong>Author:</strong> {book.author}</span>
                                        <span><strong>ISBN:</strong> {book.isbn}</span>
                                        <span><strong>Status:</strong> {book.bookStatus}</span>
                                        <div>
                                            <h4 className="text-xl font-semibold mt-4">Transactions:</h4>
                                            {book.transactions.length > 0 ? (
                                                <ul>
                                                    {book.transactions.map((transaction) => (
                                                        <li key={transaction.id}>
                                                            <span><strong>Status:</strong> {transaction.status}</span>
                                                            <span><strong>Type:</strong> {transaction.type}</span>
                                                            <span><strong>User:</strong> {transaction.user}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>No transactions found for this book.</p>
                                            )}
                                        </div>
                                    </div>
                                    {index < ownedBooks.length - 1 && <hr className="my-4 border-2" />}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No owned books found.</p>
                    )}

                    <h3 className="text-2xl font-semibold mt-6 mb-4">Borrowed Books</h3>
                    {borrowedBooks.length > 0 ? (
                        <ul>
                            {borrowedBooks.map((book) => (
                                <li key={book.id} className="mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-2xl"><strong>Title:</strong> {book.title}</span>
                                        <span><strong>Author:</strong> {book.author}</span>
                                        <span><strong>ISBN:</strong> {book.isbn}</span>
                                        <span><strong>Status:</strong> {book.bookStatus}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No borrowed books found.</p>
                    )}
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
};

export default UserPage;