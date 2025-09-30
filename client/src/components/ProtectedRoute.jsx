import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children, adminOnly=false }){
  const { user, loading } = useAuth()
  if(loading) return <div className="p-6">Loading...</div>
  if(!user) return <Navigate to="/login" />
  if(adminOnly && user.role !== 'admin') return <Navigate to="/" />
  return children
}
