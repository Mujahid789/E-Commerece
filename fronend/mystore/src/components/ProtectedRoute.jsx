import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'


const ProtectedRoute = () => {

   let authUser = localStorage.getItem('token');

  
    return authUser? <Outlet/>: <Navigate to="/login" />
  
}

export default ProtectedRoute
