import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { AuthProvider } from './AuthProvider';

const router = createRouter({ routeTree });

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    </AuthProvider>
);