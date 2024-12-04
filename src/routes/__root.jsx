import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-3 flex gap-4">
                <Link to="/"
                      className="px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-md [&.active]:font-bold">
                    Home
                </Link>
                <Link to="/about"
                      className="px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/50 [&.active]:font-bold">
                    About
                </Link>
                <Link to="/books"
                      className="px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/50 [&.active]:font-bold">
                    Books
                </Link>
                <Link to="/login"
                      className="px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/50 [&.active]:font-bold">
                    Login
                </Link>
                <Link to="/borrow"
                      className="px-4 py-3 bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/50 [&.active]:font-bold">
                    Borrow
                </Link>
                <Link to="/user"
                      className="px-4 py-3 ml-auto bg-white/30 backdrop-blur-md border border-white/20 rounded-md hover:bg-white/50[&.active]:font-bold">
                    User
                </Link>
                <img src="../src/assets/book.png" className="w-10 h-auto" alt="Book"/>
            </div>

            <hr/>
            <Outlet/>
        </>
    ),
})