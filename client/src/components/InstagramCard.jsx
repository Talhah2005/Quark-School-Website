import React from 'react';

export default function InstagramCard() {
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/quark.school?igsh=MXJtdHVnYjI2cDdxMg%3D%3D', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative w-full rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 my-4 sm:my-6 lg:my-8 xl:my-12 overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, #e91e63 0%, #f06292 25%, #ba68c8 50%, #9c27b0 75%, #673ab7 100%)',
         }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Instagram Icons */}
        <div className="absolute top-4 sm:top-6 lg:top-8 left-6 sm:left-8 lg:left-12 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/20 animate-pulse">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
        <div className="absolute top-8 sm:top-12 lg:top-16 right-12 sm:right-16 lg:right-20 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/30 animate-pulse delay-700">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.975 4.409 10.947 10.189 11.934.744-.165 1.344-.672 1.652-1.33.309-.66.309-1.428 0-2.088-.305-.654-.897-1.158-1.652-1.33v-1.377c1.581.029 2.974-.409 3.977-1.226 1.003-.817 1.834-2.07 1.834-3.593 0-1.523-.831-2.776-1.834-3.593-1.003-.817-2.396-1.255-3.977-1.226v-1.377c.755-.172 1.347-.676 1.652-1.33.309-.66.309-1.428 0-2.088-.308-.658-.908-1.165-1.652-1.33-5.78.987-10.189 5.959-10.189 11.934z"/>
          </svg>
        </div>
        <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-6 sm:right-8 lg:right-12 w-3 h-3 sm:w-4 sm:h-4 text-white/25 animate-pulse delay-500">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.5 2h9l1.5 1.5v17L12 16l-6 4.5v-17L7.5 2z"/>
          </svg>
        </div>
        
        {/* Heart Icons */}
        <div className="absolute top-16 sm:top-20 lg:top-24 left-1/4 sm:left-1/3 w-2 h-2 sm:w-3 sm:h-3 text-white/30 animate-pulse delay-300">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/>
          </svg>
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-6 sm:top-8 lg:top-10 right-16 sm:right-20 lg:right-24 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 border border-white/15 rounded-lg animate-slow-spin"></div>
        <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-12 sm:left-16 lg:left-24 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-white/10 rounded-full animate-slow-spin delay-2000"></div>
        
        {/* Floating Social Elements */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-float">
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="8" fill="none"/>
            <circle cx="50" cy="50" r="15" fill="currentColor"/>
            <circle cx="70" cy="30" r="5" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-float delay-1000">
            <path d="M50 10 L85 85 L15 85 Z" fill="currentColor"/>
            <circle cx="50" cy="60" r="8" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-full lg:max-w-2xl">
        {/* Social Badge */}
        <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 mb-3 sm:mb-4 lg:mb-6 xl:mb-8 rounded-full text-xs sm:text-sm lg:text-base font-bold text-white shadow-lg"
             style={{
               background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
               boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
             }}>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"/>
          </svg>
          Follow Us
        </div>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
          Visit Our{' '}
          <span className="block mt-0.5 sm:mt-1 lg:mt-2">
            Instagram.
          </span>
        </h2>

        {/* Call to Action Button */}
        <button
          onClick={handleInstagramClick}
          className="group inline-flex items-center px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 bg-white/90 hover:bg-white text-gray-800 font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
          style={{
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
          }}
        >
          <svg className="mr-1.5 sm:mr-2 lg:mr-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="hidden sm:inline">Follow @QuarkSchool</span>
          <span className="sm:hidden">Follow Us</span>
          <svg 
            className="ml-1.5 sm:ml-2 lg:ml-3 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </button>

        {/* Additional Info */}
        <p className="text-white/80 text-xs xs:text-sm sm:text-base mt-4 xs:mt-6 leading-relaxed max-w-lg">
          Stay connected with daily updates, student achievements, and behind-the-scenes moments from our school community.
        </p>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/5 pointer-events-none"></div>
      
      <style jsx>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-3deg); }
        }

        .animate-slow-spin { animation: slow-spin 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @media (max-width: 640px) {
          .group:hover {
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
}