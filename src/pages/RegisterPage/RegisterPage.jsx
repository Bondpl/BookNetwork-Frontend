import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "@tanstack/react-router";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/register",
                { username, email, password, description: description || null },
                { withCredentials: true }
            );
            console.log("Registration successful:", response.data);
            setErrorMessage("");
            router.navigate({ to: "/user" });
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage(
                error.response?.data?.message || "Failed to register. Please try again."
            );
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-center text-gray-800">
                    Register
                </div>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-700"
                        >
                            Description (optional)
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;