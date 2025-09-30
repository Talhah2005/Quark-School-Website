//client/src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import api, { assetUrl } from '../api';
import ProtectedRoute from '../components/ProtectedRoute';
import { useToast } from '../hooks/useToast';  // Import the toast hook

function AdminAnnouncements() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();  // Initialize toast
  
  const load = async () => {
    setIsLoading(true);
    try {
      const res = await api.get('/api/announcements');
      setItems(res.data);
    } catch (error) {
      console.error('Failed to load announcements:', error);
      toast.error(error.message || 'Failed to load announcements');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const add = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    setIsLoading(true);
    try {
      await api.post('/api/announcements', { text });
      setText('');
      load();
      toast.success('Announcement added successfully');
    } catch (error) {
      console.error('Failed to add announcement:', error);
      toast.error(error.message || 'Failed to add announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (id) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;
    
    setIsLoading(true);
    try {
      await api.delete(`/api/announcements/${id}`);
      load();
      toast.success('Announcement has been removed');
    } catch (error) {
      console.error('Failed to delete announcement:', error);
      toast.error(error.message || 'Failed to delete announcement');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 25px rgba(30, 41, 59, 0.12)'
      }}
    >
      {/* Top gradient line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
      />

      {/* Header with icon */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
             style={{
               background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'
             }}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#1e293b'
              }}>
            Announcements
          </h3>
          <p className="text-sm text-gray-500">Manage school announcements and notices</p>
        </div>
      </div>

      {/* Add Form */}
      <form onSubmit={add} className="mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input 
              className="w-full px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none focus:scale-105"
              style={{
                border: '2px solid rgba(59, 130, 246, 0.1)',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)'
              }}
              placeholder="Emergency closure tomorrow at 9am..."
              value={text}
              onChange={e => setText(e.target.value)}
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 0.2rem rgba(59, 130, 246, 0.25)';
                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                e.target.style.boxShadow = 'none';
                e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              }}
            />
          </div>
          <button 
            type="submit"
            disabled={isLoading || !text.trim()}
            className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Adding...
              </div>
            ) : (
              'Add Announcement'
            )}
          </button>
        </div>
      </form>

      {/* Announcements List */}
      <div className="space-y-3">
        {items.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                 style={{background: 'rgba(148, 163, 184, 0.1)'}}>
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No announcements yet</p>
            <p className="text-gray-400 text-sm">Add your first announcement above</p>
          </div>
        ) : (
          items.map(a => (
            <div key={a._id} 
                 className="flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:scale-102 group/item"
                 style={{
                   background: 'rgba(248, 250, 252, 0.8)',
                   border: '1px solid rgba(59, 130, 246, 0.1)'
                 }}>
              <div className="flex items-start flex-1">
                <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                     style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}} />
                <span className="text-gray-700 font-medium leading-relaxed">{a.text}</span>
              </div>
              <button 
                onClick={() => del(a._id)}
                disabled={isLoading}
                className="ml-4 p-2 rounded-lg text-red-500 hover:text-red-700 transition-all duration-300 hover:bg-red-50 opacity-0 group-hover/item:opacity-100 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function AdminUpload({ title, endpoint }) {
  const [caption, setCaption] = useState('');
  const [titleText, setTitleText] = useState('');
  const [file, setFile] = useState(null);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const toast = useToast();  // Initialize toast

  const load = async () => {
    setIsLoading(true);
    try {
      const res = await api.get(endpoint);
      setItems(res.data);
    } catch (error) {
      console.error('Failed to load items:', error);
      toast.error(error.message || 'Failed to load items');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { load(); }, [endpoint]);

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    try {
      const fd = new FormData();
      fd.append('image', file);
      if (endpoint.includes('banners')) fd.append('caption', caption);
      if (endpoint.includes('gallery')) fd.append('title', titleText);
      
      await api.post(endpoint, fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setCaption('');
      setTitleText('');
      setFile(null);
      load();
      toast.success('Picture added successfully');
    } catch (error) {
      console.error('Failed to upload:', error);
      toast.error(error.message || 'Failed to upload picture');
    } finally {
      setIsLoading(false);
    }
  };

  const deleteImage = async (imageId) => {
    if (!window.confirm('Are you sure you want to delete this image?')) return;
    
    setIsLoading(true);
    try {
      await api.delete(`${endpoint}/${imageId}`);
      load();
      
      // Different success messages based on endpoint
      const successMessage = endpoint.includes('banners') 
        ? 'Banner picture removed successfully' 
        : 'Gallery picture removed successfully';
      toast.success(successMessage);
    } catch (error) {
      console.error('Failed to delete image:', error);
      toast.error(error.message || 'Failed to delete picture');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const getIcon = () => {
    if (endpoint.includes('banners')) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    }
  };

  return (
    <div 
      className="rounded-3xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
      style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(25px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 25px rgba(30, 41, 59, 0.12)'
      }}
    >
      {/* Top gradient line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
      />

      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4"
             style={{
               background: endpoint.includes('banners') 
                 ? 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
                 : 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)'
             }}>
          {getIcon()}
        </div>
        <div>
          <h3 className="text-xl font-bold"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#1e293b'
              }}>
            {title}
          </h3>
          <p className="text-sm text-gray-500">
            {endpoint.includes('banners') ? 'Upload carousel banner images' : 'Manage gallery photos'}
          </p>
        </div>
      </div>

      {/* Upload Form */}
      <form onSubmit={submit} className="mb-8">
        <div className="grid gap-4">
          {/* File Upload Area */}
          <div 
            className={`relative border-2 border-dashed rounded-2xl p-6 transition-all duration-300 ${
              dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input 
              type="file" 
              accept="image/*" 
              onChange={e => setFile(e.target.files[0])} 
              required
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="text-center">
              {file ? (
                <div className="flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-green-600 font-medium">{file.name}</span>
                </div>
              ) : (
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
                       style={{background: 'rgba(59, 130, 246, 0.1)'}}>
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Drop your image here or click to browse</p>
                  <p className="text-gray-400 text-sm mt-1">PNG, JPG, GIF ,Webp("Best") up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          {/* Caption/Title Input */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {endpoint.includes('banners') && (
              <input 
                className="px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  border: '2px solid rgba(59, 130, 246, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder="Caption (optional)"
                value={caption} 
                onChange={e => setCaption(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 0.2rem rgba(59, 130, 246, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            )}
            
            {endpoint.includes('gallery') && (
              <input 
                className="px-4 py-3 rounded-xl transition-all duration-300 focus:outline-none"
                style={{
                  border: '2px solid rgba(59, 130, 246, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
                placeholder="Title (optional)"
                value={titleText} 
                onChange={e => setTitleText(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 0.2rem rgba(59, 130, 246, 0.25)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.1)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            )}

            <button 
              type="submit"
              disabled={isLoading || !file}
              className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              style={{
                background: endpoint.includes('banners') 
                  ? 'linear-gradient(135deg, #10b981 0%, #34d399 100%)'
                  : 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Uploading...
                </div>
              ) : (
                'Upload Image'
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center"
                 style={{background: 'rgba(148, 163, 184, 0.1)'}}>
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">No images uploaded yet</p>
            <p className="text-gray-400 text-sm">Upload your first image above</p>
          </div>
        ) : (
          items.map(x => (
            <div key={x._id} 
                 className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
                 style={{
                   background: 'rgba(255, 255, 255, 0.9)',
                   border: '1px solid rgba(255, 255, 255, 0.2)'
                 }}>
              {/* Delete Button */}
              <button
                onClick={() => deleteImage(x._id)}
                disabled={isLoading}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Delete image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={assetUrl(x.imageUrl)} 
                  alt={x.caption || x.title || 'Uploaded image'}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              {(x.caption || x.title) && (
                <div className="p-3">
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {x.caption || x.title}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute adminOnly={true}>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin Portal
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black mb-4"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.025em'
                }}>
              Dashboard Control
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage announcements, upload banner images, and organize your gallery content
            </p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid gap-8 lg:gap-12">
            <AdminAnnouncements />
            <AdminUpload title="Banner Images" endpoint="/api/banners" />
            <AdminUpload title="Gallery Images" endpoint="/api/gallery" />
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          
          .hover\\:scale-102:hover {
            transform: scale(1.02);
          }
        `}</style>
      </div>
    </ProtectedRoute>
  );
}