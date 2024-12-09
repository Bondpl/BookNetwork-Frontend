import React, { useState } from 'react';

const RatingModal = ({ isOpen, onClose, onSubmit }) => {
    const [rating, setRating] = useState(null);

    if (!isOpen) return null;

    const handleRatingChange = (e) => {
        setRating(e.target.value === "null" ? null : e.target.value);
    };

    const handleSubmit = () => {
        onSubmit(rating);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded shadow-lg">
                <h2 className="text-xl font-bold mb-4">Rate the Book</h2>
                <select value={rating} onChange={handleRatingChange} className="mb-4 p-2 border rounded">
                    <option value="null">No Rating</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="flex justify-end">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default RatingModal;