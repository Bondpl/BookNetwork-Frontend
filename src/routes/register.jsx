import { createFileRoute } from '@tanstack/react-router'
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
})
