import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

function RequireAuth({children}) {

  const admin = localStorage.getItem('ADMIN')

  const location = useLocation()

  if(admin !== 'ADMIN') {
    return <Navigate to="/" state={{from: location}}/>
  }

  return children
}

export default RequireAuth