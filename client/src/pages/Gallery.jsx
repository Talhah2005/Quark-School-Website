import React, { useEffect, useState } from 'react';
import api, { assetUrl } from '../api';

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => { 
    api.get('/api/gallery').then(res => setItems(res.data)); 
  }, []);

  // Manual images organized by category
  const manualImages = {
    classroom: [
      { id: 'cr1', src: 'assets/cr1.webp', title: 'Classroom Learning Environment' },
      { id: 'cr2', src: 'assets/cr2.webp', title: 'Interactive Learning Session' },
      { id: 'cr3', src: 'assets/cr3.webp', title: 'Student Collaboration' },
      { id: 'cr4', src: 'assets/cr4.webp', title: 'Creative Classroom Setup' },
      { id: 'cr5', src: 'assets/cr5.webp', title: 'Learning Materials Display' },
      { id: 'cr6', src: 'assets/cr6.webp', title: 'Classroom Activities' },
      { id: 'cr7', src: 'assets/cr7.webp', title: 'Educational Environment' },
      { id: 'cr8', src: 'assets/cr8.webp', title: 'Student Workspace' },
      { id: 'cr9', src: 'assets/cr9.webp', title: 'Classroom Interaction' },
      { id: 'cr10', src: 'assets/cr10.webp', title: 'Learning Corner' },
      { id: 'cr11', src: 'assets/cr11.webp', title: 'Study Area' },
      { id: 'cr12', src: 'assets/cr12.webp', title: 'Educational Setup' },
      { id: 'cr13', src: 'assets/cr13.webp', title: 'Classroom Organization' },
      { id: 'cr14', src: 'assets/cr14.webp', title: 'Learning Space' },
      { id: 'cr15', src: 'assets/cr15.webp', title: 'Interactive Learning' },
      { id: 'cr16', src: 'assets/cr16.webp', title: 'Student Engagement' },
      { id: 'cr17', src: 'assets/cr17.webp', title: 'Educational Resources' },
      { id: 'cr18', src: 'assets/cr18.webp', title: 'Classroom Design' },
      { id: 'cr19', src: 'assets/cr19.webp', title: 'Learning Environment' },
      { id: 'cr20', src: 'assets/cr20.webp', title: 'Educational Space' },
      { id: 'cr21', src: 'assets/cr21.webp', title: 'Classroom Experience' },
      { id: 'cr22', src: 'assets/cr22.webp', title: 'Student Learning' },
      { id: 'cr23', src: 'assets/cr23.webp', title: 'Interactive Classroom' },
      { id: 'cr24', src: 'assets/cr24.webp', title: 'Educational Innovation' }
    ],
    activities: [
      { id: 'act1', src: 'assets/activity 13.webp', title: 'Fun Learning Activity' },
      { id: 'act2', src: 'assets/activity.webp', title: 'Student Activity Time' },
      { id: 'act3', src: 'assets/activity2.webp', title: 'Creative Activities' },
      { id: 'act4', src: 'assets/activity3.webp', title: 'Group Activity Session' },
      { id: 'act5', src: 'assets/Activity4.webp', title: 'Interactive Play' },
      { id: 'act6', src: 'assets/Activity5.webp', title: 'Learning Through Play' },
      { id: 'act7', src: 'assets/Activity6.webp', title: 'Educational Games' },
      { id: 'act8', src: 'assets/Activity7.webp', title: 'Hands-on Learning' },
      { id: 'act9', src: 'assets/Activity8.webp', title: 'Creative Expression' },
      { id: 'act10', src: 'assets/Activity9.webp', title: 'Student Activities' },
      { id: 'act11', src: 'assets/activity10.webp', title: 'Collaborative Learning' },
      { id: 'act12', src: 'assets/activity11.webp', title: 'Fun Educational Activities' },
      { id: 'act13', src: 'assets/activity12.webp', title: 'Interactive Learning Games' },
      { id: 'act14', src: 'assets/activity14.webp', title: 'Creative Workshop' },
      { id: 'act15', src: 'assets/activity15.webp', title: 'Learning Activities' },
      { id: 'act16', src: 'assets/activity16.webp', title: 'Educational Play Time' },
      { id: 'act17', src: 'assets/activity17.webp', title: 'Student Engagement Activities' },
      { id: 'act18', src: 'assets/activity18.webp', title: 'Interactive Learning Session' },
      { id: 'act19', src: 'assets/activity19.webp', title: 'Creative Learning Activities' },
      { id: 'act20', src: 'assets/activity20.webp', title: 'Educational Fun Time' },
      { id: 'act21', src: 'assets/activity21.webp', title: 'Group Learning Activities' },
      { id: 'act22', src: 'assets/activity22.webp', title: 'Hands-on Educational Activities' }
    ],
    winter: [
      { id: 'winter1', src: 'assets/Winter1.webp', title: 'Winter School Activities' },
      { id: 'winter2', src: 'assets/Winter2.webp', title: 'Winter Learning Fun' },
      { id: 'winter3', src: 'assets/Winter3.webp', title: 'Winter Educational Programs' },
      { id: 'winter4', src: 'assets/Winter4.webp', title: 'Winter School Events' }
    ]
  };

  // Open image modal
  const openImageModal = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setImagePosition({ x: 0, y: 0 });
  };

  // Handle zoom
  const handleZoom = (delta) => {
    const newZoom = Math.max(0.5, Math.min(3, zoomLevel + delta));
    setZoomLevel(newZoom);
    if (newZoom === 1) {
      setImagePosition({ x: 0, y: 0 });
    }
  };

  // Handle mouse wheel zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleZoom(delta);
  };

  // Handle drag start
  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - imagePosition.x,
        y: e.clientY - imagePosition.y
      });
    }
  };

  // Handle drag
  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  // Handle drag end
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeImageModal();
          break;
        case '+':
        case '=':
          handleZoom(0.2);
          break;
        case '-':
          handleZoom(-0.2);
          break;
        case '0':
          setZoomLevel(1);
          setImagePosition({ x: 0, y: 0 });
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, zoomLevel]);

  const CategorySection = ({ title, images, icon }) => (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
          }}
        >
          {icon}
        </div>
        <div>
          <h2 
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: 'Poppins, sans-serif',
              background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {title}
          </h2>
          <p className="text-gray-600 text-sm">Discover our {title.toLowerCase()} moments</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((image) => (
          <figure 
            key={image.id} 
            className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative cursor-pointer"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 25px rgba(30, 41, 59, 0.12)'
            }}
            onClick={() => openImageModal(image)}
          >
            <div className="aspect-square relative overflow-hidden">
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              
              {/* View icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white bg-opacity-90 rounded-full p-3">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            {image.title && (
              <figcaption className="p-3 md:p-4">
                <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
                  {image.title}
                </p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <div 
      className="min-h-screen py-8"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)'
      }}
    >
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.05) 0%, transparent 50%)
          `,
          animation: 'float 20s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full mb-4"
               style={{
                 background: 'rgba(59, 130, 246, 0.1)',
                 color: '#3b82f6',
                 border: '1px solid rgba(59, 130, 246, 0.2)'
               }}>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            School Gallery
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
                paddingTop: '2rem',
                paddingBottom: '0.5rem',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.025em'
              }}>
            Capturing Our Journey
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant moments, learning experiences, and memorable events at Quark School
          </p>
        </div>

        {/* Manual Image Categories */}
        <CategorySection 
          title="Classroom Moments" 
          images={manualImages.classroom}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
        />

        <CategorySection 
          title="Activities & Events" 
          images={manualImages.activities}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a4 4 0 118 0v1M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5m-6 0h6" />
            </svg>
          }
        />

        <CategorySection 
          title="Winter Celebrations" 
          images={manualImages.winter}
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          }
        />

        {/* Admin Uploaded Images */}
        {items.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
                }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h2 
                  className="text-2xl md:text-3xl font-bold"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    background: 'linear-gradient(135deg, #1e293b 0%, #10b981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Latest Updates
                </h2>
                <p className="text-gray-600 text-sm">Recently added by our administrators</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((g) => (
                <figure 
                  key={g._id} 
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl relative cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 8px 25px rgba(30, 41, 59, 0.12)'
                  }}
                  onClick={() => openImageModal({ src: assetUrl(g.imageUrl), title: g.title || 'Gallery', id: g._id })}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={assetUrl(g.imageUrl)} 
                      alt={g.title || 'Gallery'} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                    
                    {/* View icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {g.title && (
                    <figcaption className="p-3 md:p-4">
                      <p className="text-sm md:text-base font-medium text-gray-700 leading-relaxed">
                        {g.title}
                      </p>
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Empty state when no admin images */}
        {items.length === 0 && (
          <div className="text-center py-8 px-4 rounded-2xl"
               style={{
                 background: 'rgba(148, 163, 184, 0.1)',
                 border: '1px solid rgba(148, 163, 184, 0.2)'
               }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                 style={{background: 'rgba(148, 163, 184, 0.1)'}}>
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No additional images from admin yet</p>
            <p className="text-gray-400 text-sm">New uploads will appear here</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && closeImageModal()}
        >
          {/* Modal Header */}
          <div className="absolute top-0 left-0 right-0 z-60 p-4 bg-gradient-to-b from-black to-transparent">
            <div className="flex justify-between items-center text-white">
              <div>
                <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
                <p className="text-sm text-gray-300">
                  Zoom: {Math.round(zoomLevel * 100)}% | Use mouse wheel or +/- keys to zoom
                </p>
              </div>
              
              {/* Controls */}
              <div className="flex items-center space-x-2">
                {/* Zoom Out */}
                <button
                  onClick={() => handleZoom(-0.2)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all"
                  title="Zoom Out (-)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                  </svg>
                </button>
                
                {/* Zoom In */}
                <button
                  onClick={() => handleZoom(0.2)}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all"
                  title="Zoom In (+)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </button>
                
                {/* Reset Zoom */}
                <button
                  onClick={() => {
                    setZoomLevel(1);
                    setImagePosition({ x: 0, y: 0 });
                  }}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg p-2 transition-all"
                  title="Reset (0)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                
                {/* Close Button */}
                <button
                  onClick={closeImageModal}
                  className="bg-red-500 bg-opacity-80 hover:bg-opacity-100 rounded-lg p-2 transition-all"
                  title="Close (Esc)"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <div 
            className="relative max-w-full max-h-full overflow-hidden"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-none select-none"
              style={{
                transform: `scale(${zoomLevel}) translate(${imagePosition.x / zoomLevel}px, ${imagePosition.y / zoomLevel}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out',
                maxHeight: '90vh',
                maxWidth: zoomLevel === 1 ? '90vw' : 'none'
              }}
              draggable={false}
            />
          </div>

          {/* Instructions */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <div className="text-center text-white text-sm opacity-70">
              <p>Click outside image or press ESC to close • Scroll or use +/- keys to zoom • Drag to pan when zoomed</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>
    </div>
  );
}