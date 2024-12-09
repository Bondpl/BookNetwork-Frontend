import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-3 flex gap-4 bg-violet-950 bg-opacity-30 backdrop-blur-lg border border-white/20 rounded-md shadow-lg">

                <Link to="/about" className="px-4 py-3 text-white hover:font-bold">
                    About
                </Link>
                <Link to="/books" className="px-4 py-3 text-white hover:font-bold">
                    Books
                </Link>
                <Link to="/login" className="px-4 py-3 text-white hover:font-bold">
                    Login
                </Link>
                <Link to="/user" className="px-4 py-3 ml-auto text-white hover:font-bold">
                    User
                </Link>
                <img src="../src/assets/book.png" className="w-10 h-auto" alt="Book"/>
            </div>

            <hr className="border-white/20"/>
            <Outlet/>
        </>
    ),
})