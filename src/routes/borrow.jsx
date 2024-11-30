import {createFileRoute} from "@tanstack/react-router";
import BorrowPage from "../pages/BorrowPage/BorrowPage.jsx";

export const Route = createFileRoute('/borrow')({
    component: BorrowPage,
})