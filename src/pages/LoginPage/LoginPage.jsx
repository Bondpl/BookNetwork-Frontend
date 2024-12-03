import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../AuthProvider";
import {useRouter} from "@tanstack/react-router";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/auth/login",
                { email, password },
                { withCredentials: true }
            );
            console.log("Login successful:", response.data);
            setErrorMessage("");
            login();
        } catch (error) {
            console.error("Login error:", error);
            setErrorMessage(
                error.response?.data?.message || "Failed to login. Please try again."
            );
        }
    };

    const handleLogout = async () => {
        try {
            await axios.post(
                "http://localhost:8080/auth/logout",
                {},
                { withCredentials: true }
            );
            logout(); // Update authentication state
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const handleRegister = () => {
        router.navigate({ to: "/register" });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="text-3xl font-bold text-center text-gray-800">
                    Book Network
                </div>
                {isAuthenticated ? (
                    <div>
                        <h2 className="text-2xl font-bold text-center text-gray-800">You are logged in</h2>
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 mt-4 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-6">
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
                            {errorMessage && (
                                <p className="text-sm text-red-500">{errorMessage}</p>
                            )}
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Login
                            </button>
                        </form>
                        <button
                            onClick={handleRegister}
                            className="w-full px-4 py-2 mt-4 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LoginPage;