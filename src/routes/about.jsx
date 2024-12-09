import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Book Social Network</h1>
        <p className="text-lg mb-4 text-gray-700">
          Welcome to the Book Social Network! Our platform allows users to lend and borrow books from others in the community.
          Each book has a detailed rental history, and users can rate the books they have read.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          Our mission is to foster a love for reading and to create a community where book enthusiasts can share their favorite reads.
          Whether you are looking to discover new books or share your collection with others, our platform provides the perfect space to do so.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          Key Features:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>Lend and borrow books within the community</li>
          <li>Track the rental history of each book</li>
          <li>Rate and review books you have read</li>
          <li>Discover new books recommended by other users</li>
        </ul>
        <p className="text-lg mt-4 text-gray-700">
          Join us today and become a part of our growing community of book lovers!
        </p>
      </div>
  );
}