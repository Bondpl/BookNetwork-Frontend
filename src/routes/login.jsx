import {createFileRoute} from "@tanstack/react-router";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";

export const Route = createFileRoute('/login')({
  component: LoginPage,
})