import React, { useState, useEffect } from 'react';

const UserPage = () => {
    const [user, setUser] = useState(null);
    const [ownedBooks, setOwnedBooks] = useState([]);
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [error, setError] = useState(null); // Error state for error messages

    // Function to fetch authenticated user data
    const fetchAuthenticatedUser = async () => {
        try {
            const response = await fetch('http://localhost:8080/users/self', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include session cookie
            });

            if (response.ok) {
                const data = await response.json();
                setUser(data); // Store user data in state
                await fetchOwnedBooks(); // Fetch owned books
            } else {
                setError(`Error fetching user data: ${response.status}`);
            }
        } catch (error) {
            setError(`Error fetching user: ${error.message}`);
        }
    };

    const fetchOwnedBooks = async () => {
        try {
            const response = await fetch(`http://localhost:8080/books/owned`, {
                method: 'GET',
                credentials: 'include', // Ensure the session cookie is sent
            });

            if (response.ok) {
                const data = await response.json();
                setOwnedBooks(data);
            } else {
                setError(`Failed to fetch owned books: ${response.status}`);
            }
        } catch (error) {
            setError(`Error fetching owned books: ${error.message}`);
        }
    };


    // Use useEffect to call fetchAuthenticatedUser when the component mounts
    useEffect(() => {
        fetchAuthenticatedUser();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            {user ? (
                <div>
                    {/* User information */}
                    <div className="flex items-center mb-6">
                        {/* User image on the left */}
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

                        {/* User information on the right */}
                        <div className="flex flex-col text-left">
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                            <p><strong>Description:</strong> {user.description}</p>
                        </div>
                    </div>

                    {/* Display Owned Books */}
                    <h3 className="text-2xl font-semibold mt-6 mb-4">Owned Books</h3>
                    {ownedBooks.length > 0 ? (
                        <ul>
                            {ownedBooks.map((book,index) => (
                                <li key={book.id} className="mb-4">
                                    <div className="flex flex-col">
                                        <span className="text-2xl"><strong >Title:</strong> {book.title}</span>
                                        <span><strong>Author:</strong> {book.author}</span>
                                        <span><strong>Publisher:</strong> {book.publisher}</span>
                                        <span><strong>Year:</strong> {book.year}</span>
                                        <span><strong>ISBN:</strong> {book.isbn}</span>
                                        <span><strong>Status:</strong> {book.bookStatus}</span>
                                    </div>
                                    {index < ownedBooks.length - 1 && <hr className="my-4 border-2" />}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No owned books found.</p>
                    )}


                    {/* Display Borrowed Books */}
                    <h3 className="text-xl font-semibold mt-6 mb-4">Borrowed Books</h3>
                    {borrowedBooks.length > 0 ? (
                        <ul>
                            {borrowedBooks.map((book) => (
                                <li key={book.id} className="mb-4">
                                    <div className="flex items-center">
                                        <span>{book.title}</span>
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
