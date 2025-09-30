import React, { useEffect, useState } from 'react';
import api, { assetUrl } from '../api';

export default function Carousel() {
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    api.get('/api/banners').then(res => setItems(res.data));
  }, []);

  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIdx(prev => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 150);
    }, 4000);
    return () => clearInterval(id);
  }, [items]);

  const goToSlide = (index) => {
    if (index === idx || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIdx(index);
      setIsAnimating(false);
    }, 150);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIdx(prev => prev === 0 ? items.length - 1 : prev - 1);
      setIsAnimating(false);
    }, 150);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setIdx(prev => (prev + 1) % items.length);
      setIsAnimating(false);
    }, 150);
  };

  if (!items.length) {
    return (
      <div 
        className="relative w-full rounded-3xl flex items-center justify-center overflow-hidden"
        style={{
          height: 'clamp(220px, 35vw, 420px)',
          aspectRatio: '3.2 / 1',
          maxHeight: '420px',
          minHeight: '220px',
          background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
          boxShadow: '0 20px 40px rgba(30, 41, 59, 0.15)'
        }}
      >
        {/* Animated background pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(148, 163, 184, 0.2) 0%, transparent 50%)
            `,
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        
        <div className="text-center z-10">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
               style={{
                 background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                 animation: 'pulse 2s infinite'
               }}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-gray-500 font-semibold">Add banner images from Admin</p>
          <p className="text-gray-400 text-sm mt-2">Upload beautiful images to showcase your school</p>
        </div>
      </div>
    );
  }

  const current = items[idx];

  return (
    <div className="relative group">
      {/* Main Carousel Container */}
      <div 
        className="relative w-full overflow-hidden rounded-3xl"
        style={{
          height: 'clamp(220px, 35vw, 420px)',
          aspectRatio: '3.2 / 1',
          maxHeight: '420px',
          minHeight: '220px',
          boxShadow: '0 20px 40px rgba(30, 41, 59, 0.15)'
        }}
      >
        {/* Image without overlay */}
        <div className="relative w-full h-full">
          <img 
            src={assetUrl(current.imageUrl)} 
            alt={current.caption || 'Banner'} 
            className={`w-full h-full object-cover transition-all duration-500 ${
              isAnimating ? 'scale-110 opacity-70' : 'scale-100 opacity-100'
            }`}
            style={{
              filter: 'brightness(0.9) contrast(1.1)'
            }}
          />
          
          {/* Caption */}
          {current.caption && (
            <div className="absolute bottom-4 left-4 right-4">
              <div 
                className="px-6 py-3 rounded-2xl backdrop-filter backdrop-blur-md transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  {current.caption}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(30, 41, 59, 0.15)'
              }}
            >
              <svg className="w-6 h-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 25px rgba(30, 41, 59, 0.15)'
              }}
            >
              <svg className="w-6 h-6 mx-auto text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicators */}
      {items.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === idx 
                  ? 'w-8 h-3 opacity-100' 
                  : 'w-3 h-3 opacity-60 hover:opacity-80'
              }`}
              style={{
                background: index === idx 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
                  : 'rgba(148, 163, 184, 0.5)'
              }}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {items.length > 1 && (
        <div 
          className="absolute bottom-0 left-0 h-1 rounded-b-3xl transition-all duration-100"
          style={{
            width: `${((idx + 1) / items.length) * 100}%`,
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
          }}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}