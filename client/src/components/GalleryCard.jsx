import React from 'react';

export default function GalleryCard() {
  const handleGalleryClick = () => {
    // Since useNavigate is not available in this environment, 
    // we'll simulate navigation or use window.location
    console.log('Navigate to gallery');
    // navigate('/gallery');
  };

  return (
    <div className="relative w-full rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 my-4 sm:my-6 lg:my-8 xl:my-12 overflow-hidden"
         style={{
           background: 'linear-gradient(135deg, #059669 0%, #10b981 25%, #34d399 50%, #6ee7b7 75%, #a7f3d0 100%)',
         }}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Camera Icons */}
        <div className="absolute top-4 sm:top-6 lg:top-8 left-6 sm:left-8 lg:left-12 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white/20 animate-pulse">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 15.2c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm11 15H4V6h16v11z"/>
          </svg>
        </div>
        <div className="absolute top-8 sm:top-12 lg:top-16 right-12 sm:right-16 lg:right-20 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/30 animate-pulse delay-700">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.25 2.1l-.4.8-.85-.4c-.75-.35-1.6-.35-2.35 0l-.85.4-.4-.8C8.8 1.4 8.1 1 7.25 1S5.7 1.4 5.15 2.1l-.4.8-.85-.4c-.75-.35-1.6-.35-2.35 0-.4.2-.75.5-.95.9-.2.4-.2.85 0 1.25l.4.8-.8.4c-.7.35-1.15 1.05-1.15 1.85s.45 1.5 1.15 1.85l.8.4-.4.8c-.2.4-.2.85 0 1.25.2.4.55.7.95.9.75.35 1.6.35 2.35 0l.85-.4.4.8c.55.7 1.25 1.1 2.1 1.1s1.55-.4 2.1-1.1l.4-.8.85.4c.75.35 1.6.35 2.35 0 .4-.2.75-.5.95-.9.2-.4.2-.85 0-1.25l-.4-.8.8-.4c.7-.35 1.15-1.05 1.15-1.85s-.45-1.5-1.15-1.85l-.8-.4.4-.8c.2-.4.2-.85 0-1.25-.2-.4-.55-.7-.95-.9-.75-.35-1.6-.35-2.35 0l-.85.4-.4-.8c-.55-.7-1.25-1.1-2.1-1.1s-1.55.4-2.1 1.1z"/>
          </svg>
        </div>
        <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 right-6 sm:right-8 lg:right-12 w-3 h-3 sm:w-4 sm:h-4 text-white/25 animate-pulse delay-500">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-6 sm:top-8 lg:top-10 right-16 sm:right-20 lg:right-24 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-white/15 rounded-lg animate-slow-spin"></div>
        <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-12 sm:left-16 lg:left-24 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border border-white/10 rounded-full animate-slow-spin delay-2000"></div>
        
        {/* Floating Gallery Grid Pattern */}
        <div className="absolute top-1/4 right-1/4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 opacity-10 grid grid-cols-2 gap-1">
          <div className="bg-white rounded animate-float"></div>
          <div className="bg-white rounded animate-float delay-200"></div>
          <div className="bg-white rounded animate-float delay-400"></div>
          <div className="bg-white rounded animate-float delay-600"></div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-float delay-1000">
            <rect x="10" y="10" width="30" height="30" fill="currentColor" rx="3"/>
            <rect x="50" y="10" width="30" height="30" fill="currentColor" rx="3"/>
            <rect x="10" y="50" width="30" height="30" fill="currentColor" rx="3"/>
            <rect x="50" y="50" width="30" height="30" fill="currentColor" rx="3"/>
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-full lg:max-w-2xl">
        {/* Gallery Badge */}
        <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 mb-3 sm:mb-4 lg:mb-6 xl:mb-8 rounded-full text-xs sm:text-sm lg:text-base font-bold text-white shadow-lg"
             style={{
               background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)',
               boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)'
             }}>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
          View Our Gallery
        </div>

        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 xl:mb-10 leading-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
          Explore Our{' '}
          <span className="block mt-0.5 sm:mt-1 lg:mt-2">
            Gallery.
          </span>
        </h2>

        {/* Call to Action Button */}
        <button
          onClick={handleGalleryClick}
          className="group inline-flex items-center px-4 sm:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-3 lg:py-4 xl:py-5 bg-white/90 hover:bg-white text-gray-800 font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl lg:rounded-2xl xl:rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
          style={{
            fontFamily: 'Poppins, sans-serif',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
          }}
        >
          <span className="hidden sm:inline">Explore Gallery</span>
          <span className="sm:hidden">Gallery</span>
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
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>

        {/* Additional Info */}
        <p className="text-white/80 text-xs xs:text-sm sm:text-base mt-4 xs:mt-6 leading-relaxed max-w-lg">
          Discover moments of learning, growth, and joy captured throughout our school community.
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