import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../../store';

export const ProtectedRoute = ({ children }) => {
  const [{ user }] = useContext(Context);

  // console.log('not loggedin user');

  if (!user) {
    return <Navigate to='/login' />;
  }

  return children;
};
