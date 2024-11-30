import {createFileRoute} from "@tanstack/react-router";
import UserPage from "../pages/UserPage/UserPage.jsx";

export const Route = createFileRoute('/user')({
    component: UserPage,
})