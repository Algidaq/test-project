import LoginPage from '../pages/login-page/LoginPage';
import RegisterPage from '../pages/register-page/RegisterPage';
import ProfilePage from '../pages/profile-page/ProfilePage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { AuthService } from '../services/AuthService';
const service = new AuthService();
export const router = createBrowserRouter([
  { path: '/register', element: <RegisterPage /> },
  {
    path: '/login',
    element: !service.isUserLoggedIn() ? (
      <LoginPage />
    ) : (
      <Navigate to="/profile" />
    ),
  },
  {
    path: '/profile',
    element: service.isUserLoggedIn() ? (
      <ProfilePage />
    ) : (
      <Navigate to="/login" />
    ),
  },
]);
