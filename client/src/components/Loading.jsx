import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Three animated dots exactly like in the image */}
      <div className="flex items-center space-x-2">
        <div 
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: "#10b981", // Green
            animation: "loading-bounce 1.5s ease-in-out infinite",
            animationDelay: "0s"
          }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: "#1e40af", // Dark Blue
            animation: "loading-bounce 1.5s ease-in-out infinite",
            animationDelay: "0.3s"
          }}
        />
        <div 
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: "#f59e0b", // Orange/Yellow
            animation: "loading-bounce 1.5s ease-in-out infinite",
            animationDelay: "0.6s"
          }}
        />
      </div>

      <style jsx>{`
        @keyframes loading-bounce {
          0%, 60%, 100% {
            transform: translateY(0) scale(1);
          }
          30% {
            transform: translateY(-10px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;