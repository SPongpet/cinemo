import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'

import { AuthLayout } from '@layouts/auth'
import LoginPage from '@pages/Login'
import { NotFoundPage } from '@pages/NotFound'
import { ErrorBoundary } from '@router/components'
import ProtectedRoute from '@router/ProtectedRoute'
import { routesSection } from '@router/sections'

import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    errorElement: <ErrorBoundary />,
    children: routesSection,
  },
  {
    path: '/login',
    element: (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: '404',
    element: <NotFoundPage />,
  },
  { path: '*', element: <NotFoundPage /> },
])

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
)
