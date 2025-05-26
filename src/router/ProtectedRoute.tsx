import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

import type { RootState } from '@store/index'
import type { JSX } from 'react'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = useSelector((state: RootState) => state.auth.token)

  return token ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" replace />
}

export default ProtectedRoute
