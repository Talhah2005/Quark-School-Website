//client/src/components/EnrollCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './enrollCard.css'; // Import the CSS file

export default function EnrollCard() {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate('/contact');
  };

  return (
    <div className="enroll-card relative w-full rounded-2xl xs:rounded-3xl sm:rounded-[2rem] p-6 xs:p-8 sm:p-12 my-6 xs:my-8 sm:my-12 overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 25%, #3730a3 50%, #4338ca 75%, #6366f1 100%)',
         }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute top-8 left-12 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-16 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-24 left-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-12 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/2 right-8 w-2.5 h-2.5 bg-white/25 rounded-full animate-pulse delay-1200"></div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-10 right-24 w-12 h-12 border border-white/15 rounded-full animate-slow-spin"></div>
        <div className="absolute bottom-16 left-24 w-8 h-8 border border-white/10 rounded-full animate-slow-spin delay-2000"></div>
        
        {/* Floating Abstract Shapes */}
        <div className="absolute top-1/4 right-1/4 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-float">
            <path d="M20,50 Q50,20 80,50 Q50,80 20,50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-float delay-1000">
            <polygon points="50,10 90,90 10,90" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl">
        {/* Admission Badge */}
        <div className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 mb-4 xs:mb-6 sm:mb-8 rounded-full text-xs xs:text-sm sm:text-base font-bold text-white shadow-lg"
             style={{
               background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
               boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)'
             }}>
          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
          Admission Open
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 xs:mb-8 sm:mb-10 leading-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
          Enroll Your Kid Today At{' '}
          <span className="block mt-1 xs:mt-2">
            Quark School.
          </span>
        </h2>

        {/* Call to Action Button */}
        <button
          onClick={handleEnrollClick}
          className="group inline-flex items-center px-6 xs:px-8 sm:px-10 py-3 xs:py-4 sm:py-5 bg-white/90 hover:bg-white text-gray-800 font-bold text-sm xs:text-base sm:text-lg rounded-xl xs:rounded-2xl sm:rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
          style={{
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
          }}
        >
          Join Quark School Now
          <svg 
            className="ml-2 xs:ml-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>

        {/* Additional Info */}
        <p className="text-white/80 text-xs xs:text-sm sm:text-base mt-4 xs:mt-6 leading-relaxed max-w-lg">
          Join our community of learners and give your child the best educational foundation for their future success.
        </p>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 pointer-events-none"></div>
    </div>
  );
}