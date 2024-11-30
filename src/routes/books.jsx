import {createFileRoute} from "@tanstack/react-router";
import BooksPage from "../pages/BooksPage/BooksPage.jsx";

export const Route = createFileRoute('/books')({
    component: BooksPage,
})