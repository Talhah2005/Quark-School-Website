import React, { useEffect, useState } from 'react'
import api from '../api'

export default function InstagramFeed() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true)
        const response = await api.get('/api/instagram')
        
        if (response.data.items) {
          setItems(response.data.items)
          setError(null)
        } else if (response.data.note) {
          setError(response.data.note)
        }
      } catch (err) {
        console.error('Instagram fetch error:', err)
        setError('Unable to load Instagram posts at the moment')
      } finally {
        setLoading(false)
      }
    }

    fetchInstagramPosts()
  }, [])

  // Show loading state
  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="w-full h-40 bg-gray-200 rounded-xl animate-pulse"
          />
        ))}
      </div>
    )
  }

  // Show error state
  if (error && !items.length) {
    return (
      <div className="text-center py-8">
        <div className="text-gray-500 mb-2">📸</div>
        <div className="text-sm text-gray-500">{error}</div>
        <a 
          href="https://www.instagram.com/quark.school" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block mt-3 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          Visit our Instagram →
        </a>
      </div>
    )
  }

  // Helper function to format caption
  const formatCaption = (caption) => {
    if (!caption) return 'Instagram post'
    return caption.length > 100 ? caption.substring(0, 100) + '...' : caption
  }

  // Helper function to get media URL for display
  const getDisplayMediaUrl = (item) => {
    // For carousel posts, use the first image
    if (item.media_type === 'CAROUSEL_ALBUM' && item.carousel_items?.length > 0) {
      return item.carousel_items[0].media_url
    }
    
    // For videos, prefer thumbnail_url if available
    if (item.media_type === 'VIDEO' && item.thumbnail_url) {
      return item.thumbnail_url
    }
    
    // Default to media_url
    return item.media_url
  }

  // Helper function to check if item is a video
  const isVideo = (item) => {
    return item.media_type === 'VIDEO'
  }

  // Helper function to check if item is a carousel
  const isCarousel = (item) => {
    return item.media_type === 'CAROUSEL_ALBUM'
  }

  return (
    <div className="space-y-4">
      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item) => (
          <a 
            key={item.id} 
            href={item.permalink} 
            target="_blank" 
            rel="noreferrer" 
            className="block rounded-xl overflow-hidden group border border-gray-200 hover:border-gray-300 transition-all duration-300 relative"
            title={formatCaption(item.caption)}
          >
            {/* Media Container */}
            <div className="relative overflow-hidden">
              <img 
                src={getDisplayMediaUrl(item)} 
                alt={formatCaption(item.caption)}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/assets/placeholder-image.jpg' // Fallback image
                }}
              />
              
              {/* Media Type Indicators */}
              {isVideo(item) && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  VIDEO
                </div>
              )}
              
              {isCarousel(item) && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9a2 2 0 012-2h.93l.94-2H20a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9zM5 11v6h14V7H6.93l-.94 2H5z"/>
                  </svg>
                  {item.carousel_items?.length || 1}
                </div>
              )}

              {/* Instagram Icon Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Link */}
      {items.length > 0 && (
        <div className="text-center pt-4 mb-4">
          <a 
            href="https://www.instagram.com/quark.school" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 mb-4 pb-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-4 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @quark.school for more updates
          </a>
        </div>
      )}
    </div>
  )
}