// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthLayout } from '../../layouts/authLayout';

function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <AuthLayout>
      {children}
    </AuthLayout>
    </>
  );
}

export default ProtectedRoute;
