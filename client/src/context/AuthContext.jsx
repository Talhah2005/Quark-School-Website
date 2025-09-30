//client/src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../api'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(!token){ setLoading(false); return }
    api.get('/api/auth/me')
      .then(res => setUser(res.data))
      .catch(()=> localStorage.removeItem('token'))
      .finally(()=> setLoading(false))
  }, [])

  const login = async (email, password) => {
    const { data } = await api.post('/api/auth/login', { email, password })
    localStorage.setItem('token', data.token)
    const me = await api.get('/api/auth/me')
    setUser(me.data)
  }

  const signup = async (name, email, password) => {
    const { data } = await api.post('/api/auth/signup', { name, email, password })
    localStorage.setItem('token', data.token)
    const me = await api.get('/api/auth/me')
    setUser(me.data)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
