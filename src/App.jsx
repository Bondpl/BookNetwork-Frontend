import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex justify-center space-x-4 my-4">
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="w-16 h-16" alt="React logo" />
                </a>
            </div>
            <h1 className="text-4xl font-bold text-center my-4">Vite + React</h1>
            <div className="card p-4 bg-gray-100 rounded-lg shadow-md text-center">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </button>
                <p className="mt-4">
                    Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs text-center mt-4">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App