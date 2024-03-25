import React from 'react'
import { Outlet } from 'react-router-dom'
import { isLoggedIn } from '../../auth'

const PrivateRoutes = () => {
  if(isLoggedIn()) {
    return <Outlet />
  } else {
    window.location.href = '/login';
    //return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
}

export default PrivateRoutes
