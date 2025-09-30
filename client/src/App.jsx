import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/AdminDashboard'
import { AuthProvider } from './context/AuthContext'
import GradientScrollbar from './components/GradientScrollBar'
import { ToastProvider } from './hooks/useToast';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  
  useEffect(() => {
    
    const minLoadTime = setTimeout(() => {
      
    }, 1000);

    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <AuthProvider>
      <ToastProvider>
        {/* Show loading screen over everything */}
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        
        {/* Main app content */}
        <div className={isLoading ? 'hidden' : 'block'}>
          <Navbar />
          <GradientScrollbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </ToastProvider>
    </AuthProvider>
  )
}