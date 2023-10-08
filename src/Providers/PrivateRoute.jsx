import React, { useContext } from 'react';
import { AuthContext } from './AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  
  const {user,loading}= useContext(AuthContext);

  if(user){
    children
  }
  return <Navigate to="/login"></Navigate>
  
};

export default PrivateRoute;