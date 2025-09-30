import React, { useEffect, useState } from 'react';
import api from '../api';

export default function AnnouncementBar() {
  const [items, setItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [dismissedAnnouncements, setDismissedAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements first
    api.get('/api/announcements').then(res => {
      setItems(res.data);
      
      // Always show popup on page load/refresh if there are announcements
      if (res.data.length > 0) {
        setShowPopup(true);
      }
    });

    // Load dismissed announcements for individual dismiss functionality in regular bar
    const dismissed = JSON.parse(localStorage.getItem('dismissedAnnouncements') || '[]');
    setDismissedAnnouncements(dismissed);
  }, []);

  const handleDismissPopup = () => {
    // Simply close the popup without marking announcements as dismissed
    // This ensures the popup will always show on page refresh
    setShowPopup(false);
  };

  const handleDismissIndividual = (announcementId) => {
    const newDismissed = [...dismissedAnnouncements, announcementId];
    setDismissedAnnouncements(newDismissed);
    localStorage.setItem('dismissedAnnouncements', JSON.stringify(newDismissed));
  };

  if (!items.length) return null;

  return (
    <>
      {/* Popup Modal for New Announcements - Ultra Mobile Responsive */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={handleDismissPopup}
          />
          
          {/* Modal Content - Fully responsive from 250px+ */}
          <div 
            className="relative w-full max-w-[250px] xs:max-w-xs sm:max-w-md mx-auto rounded-xl xs:rounded-2xl sm:rounded-3xl p-3 xs:p-4 sm:p-6 transform transition-all duration-300 animate-modal-enter"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(30, 41, 59, 0.25)',
              minWidth: '250px'
            }}
          >
            {/* Header with close button - Compact for mobile */}
            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-6">
              <div className="flex items-center min-w-0 flex-1">
                <div 
                  className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-lg xs:rounded-xl flex items-center justify-center mr-2 xs:mr-3 sm:mr-4 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
                  }}
                >
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 
                    className="text-sm xs:text-lg sm:text-xl font-bold truncate"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: '#1e293b'
                    }}
                  >
                    New Announcement
                  </h3>
                  <p className="text-xs xs:text-xs sm:text-sm text-gray-500 hidden xs:block">Important updates from school</p>
                </div>
              </div>
              
              <button
                onClick={handleDismissPopup}
                className="p-1 xs:p-1.5 sm:p-2 rounded-lg xs:rounded-xl text-gray-400 hover:text-gray-600 transition-all duration-300 hover:bg-gray-100 flex-shrink-0 ml-2"
              >
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Announcements List in Modal - Optimized scrolling */}
            <div className="space-y-2 xs:space-y-2 sm:space-y-3 max-h-40 xs:max-h-48 sm:max-h-64 overflow-y-auto">
              {items.map((announcement, index) => (
                <div 
                  key={announcement._id}
                  className="p-2 xs:p-3 sm:p-4 rounded-lg xs:rounded-lg sm:rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    animation: `slideInUp 0.4s ease-out ${index * 0.1}s both`
                  }}
                >
                  <div className="flex items-start">
                    <div 
                      className="w-1 h-1 xs:w-1.5 xs:h-1.5 sm:w-2 sm:h-2 rounded-full mt-1 xs:mt-1.5 sm:mt-2 mr-2 xs:mr-2 sm:mr-3 flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
                      }}
                    />
                    <p className="text-gray-700 font-bold leading-snug xs:leading-relaxed text-sm xs:text-base sm:text-lg break-words tracking-wide">
                      {announcement.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button - Responsive sizing */}
            <div className="mt-3 xs:mt-4 sm:mt-6 pt-2 xs:pt-3 sm:pt-4 border-t border-gray-200">
              <button
                onClick={handleDismissPopup}
                className="w-full px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-sm sm:text-base rounded-lg xs:rounded-lg sm:rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Regular Announcement Bar - Also improved for small screens */}
      <div 
        className="rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 my-3 xs:my-4 sm:my-6 relative overflow-hidden transition-all duration-300 hover:shadow-xl group"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(25px)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 8px 25px rgba(59, 130, 246, 0.1)'
        }}
      >
        {/* Top gradient line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
        />

        {/* Header - Responsive */}
        <div className="flex items-center mb-2 xs:mb-3 sm:mb-4">
          <div 
            className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg xs:rounded-lg sm:rounded-xl flex items-center justify-center mr-2 xs:mr-2 sm:mr-3 flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
            }}
          >
            <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 
              className="text-sm xs:text-base sm:text-lg font-bold"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#1e293b'
              }}
            >
              School Announcements
            </h3>
            <p className="text-xs xs:text-xs sm:text-sm text-blue-600">Stay updated with important news</p>
          </div>
        </div>

        {/* Announcements List - Better mobile spacing */}
        <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
          {items.map((announcement, index) => (
            <div 
              key={announcement._id}
              className="flex items-start justify-between p-2 xs:p-2.5 sm:p-3 rounded-lg xs:rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-blue-50 group/item"
              style={{
                background: 'rgba(59, 130, 246, 0.05)',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}
            >
              <div className="flex items-start flex-1 min-w-0">
                <div 
                  className="w-1 h-1 xs:w-1 xs:h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1 xs:mt-1.5 sm:mt-2 mr-2 xs:mr-2 sm:mr-3 flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
                  }}
                />
                <p className="text-blue-800 font-medium leading-snug xs:leading-relaxed text-xs xs:text-xs sm:text-sm break-words">
                  {announcement.text}
                </p>
              </div>
              
              {/* Individual dismiss button */}
              <button
                onClick={() => handleDismissIndividual(announcement._id)}
                className="ml-1 xs:ml-2 sm:ml-3 p-0.5 xs:p-1 sm:p-1.5 rounded-md xs:rounded-md sm:rounded-lg text-blue-400 hover:text-blue-600 transition-all duration-300 opacity-0 group-hover/item:opacity-100 flex-shrink-0"
                title="Dismiss this announcement"
              >
                <svg className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Footer info - Responsive text */}
        <div className="mt-2 xs:mt-3 sm:mt-4 pt-2 xs:pt-2 sm:pt-3 border-t border-blue-200">
          <p className="text-xs xs:text-xs sm:text-sm text-blue-600 text-center">
            {items.length} announcement{items.length !== 1 ? 's' : ''} • Updated regularly
          </p>
        </div>

        {/* Background decoration - Hidden on very small screens */}
        <div 
          className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 opacity-10 pointer-events-none hidden xs:block"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          <svg className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.666 3.333c-.39 0-.774.041-1.146.121l-6.354 1.363a4.668 4.668 0 00-3.52 4.521v8.329a4.666 4.666 0 105.333-4.621V9.842l5.333-1.145v4.97a4.666 4.666 0 105.333-4.622V8a4.667 4.667 0 00-4.666-4.667h-.313z"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* Custom breakpoint for extra small screens */
        @media (min-width: 280px) {
          .xs\:block { display: block !important; }
          .xs\:hidden { display: none !important; }
          .xs\:p-3 { padding: 0.75rem !important; }
          .xs\:p-4 { padding: 1rem !important; }
          .xs\:mb-3 { margin-bottom: 0.75rem !important; }
          .xs\:mb-4 { margin-bottom: 1rem !important; }
          .xs\:my-4 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
          .xs\:w-8 { width: 2rem !important; }
          .xs\:h-8 { height: 2rem !important; }
          .xs\:w-10 { width: 2.5rem !important; }
          .xs\:h-10 { height: 2.5rem !important; }
          .xs\:text-lg { font-size: 1.125rem !important; }
          .xs\:text-base { font-size: 1rem !important; }
          .xs\:text-xs { font-size: 0.75rem !important; }
          .xs\:rounded-xl { border-radius: 0.75rem !important; }
          .xs\:rounded-2xl { border-radius: 1rem !important; }
          .xs\:rounded-lg { border-radius: 0.5rem !important; }
          .xs\:max-w-xs { max-width: 20rem !important; }
          .xs\:space-y-2 > * + * { margin-top: 0.5rem !important; }
          .xs\:mt-4 { margin-top: 1rem !important; }
          .xs\:pt-3 { padding-top: 0.75rem !important; }
          .xs\:px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
          .xs\:py-2\.5 { padding-top: 0.625rem !important; padding-bottom: 0.625rem !important; }
          .xs\:mr-2 { margin-right: 0.5rem !important; }
          .xs\:mr-3 { margin-right: 0.75rem !important; }
          .xs\:ml-2 { margin-left: 0.5rem !important; }
          .xs\:p-1 { padding: 0.25rem !important; }
          .xs\:p-1\.5 { padding: 0.375rem !important; }
          .xs\:p-2\.5 { padding: 0.625rem !important; }
          .xs\:w-5 { width: 1.25rem !important; }
          .xs\:h-5 { height: 1.25rem !important; }
          .xs\:w-1\.5 { width: 0.375rem !important; }
          .xs\:h-1\.5 { height: 0.375rem !important; }
          .xs\:mt-1\.5 { margin-top: 0.375rem !important; }
          .xs\:max-h-48 { max-height: 12rem !important; }
          .xs\:leading-relaxed { line-height: 1.625 !important; }
          .xs\:top-3 { top: 0.75rem !important; }
          .xs\:right-3 { right: 0.75rem !important; }
          .xs\:w-12 { width: 3rem !important; }
          .xs\:h-12 { height: 3rem !important; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out;
        }

        /* Ensure content doesn't break on very small screens */
        @media (max-width: 280px) {
          .break-words {
            word-break: break-word;
            overflow-wrap: break-word;
          }
          
          .leading-snug {
            line-height: 1.375;
          }
        }
      `}</style>
    </>
  );
}