import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-6">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/books" className="[&.active]:font-bold">
                    Books
                </Link>
                <Link to="/login" className="[&.active]:font-bold">
                    Login
                </Link>
                <Link to="/borrow" className="[&.active]:font-bold">
                    Borrow
                </Link>
                <Link to="/user" className="[&.active]:font-bold">
                    User
                </Link>
                <Link to="/register" className="[&.active]:font-bold">
                    Register
                </Link>
            </div>
            <hr />
            <Outlet />
        </>
    ),
})