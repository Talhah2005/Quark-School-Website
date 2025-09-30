  //client/src/api.js
  import axios from 'axios'

  // Ensure we always use the correct server URL
  export const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  // Debug logging to verify the URL
  console.log('API Base URL:', baseURL)

  const api = axios.create({ 
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  api.interceptors.request.use(cfg => {
    const t = localStorage.getItem('token')
    if (t) cfg.headers.Authorization = `Bearer ${t}`
    
    // Debug logging for requests
    console.log(`Making ${cfg.method?.toUpperCase()} request to:`, cfg.baseURL + cfg.url)
    
    return cfg
  })

  // Add response interceptor for better error handling
  api.interceptors.response.use(
    response => response,
    error => {
      console.error('API Error:', {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        message: error.response?.data?.error || error.message
      })
      return Promise.reject(error)
    }
  )

  // turn "/uploads/..." into "http://localhost:5000/uploads/..."
  export const assetUrl = (p) => (p?.startsWith('http') ? p : `${baseURL}${p || ''}`)

  export default api