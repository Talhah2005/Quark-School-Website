// hooks/useToast.js
import React, { createContext, useContext, useState, useCallback } from 'react';

// Create Toast Context
const ToastContext = createContext();

// Toast Provider Component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random();
    const newToast = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after specified duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
    
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, removeAllToasts }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

// Custom Hook
export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { addToast, removeToast, removeAllToasts } = context;

  return {
    // Convenience methods for different types
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
    
    // Generic method
    toast: addToast,
    
    // Removal methods
    remove: removeToast,
    removeAll: removeAllToasts
  };
}

// Toast Container Component
function ToastContainer() {
  const { toasts, removeToast } = useContext(ToastContext);

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container fixed top-4 right-4 z-50 space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <ToastItem 
          key={toast.id} 
          toast={toast} 
          onRemove={() => removeToast(toast.id)} 
        />
      ))}
      
      <style jsx>{`
        @media (max-width: 640px) {
          .toast-container {
            top: 1rem;
            right: 1rem;
            left: 1rem;
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}

// Individual Toast Item Component
function ToastItem({ toast, onRemove }) {
  const getToastStyles = (type) => {
    const baseStyles = "pointer-events-auto max-w-sm w-full sm:w-auto p-4 rounded-2xl shadow-2xl border-l-4 transform transition-all duration-500 ease-out";
    
    const typeStyles = {
      success: 'bg-white border-green-500 text-green-800',
      error: 'bg-white border-red-500 text-red-800',
      warning: 'bg-white border-yellow-500 text-yellow-800',
      info: 'bg-white border-blue-500 text-blue-800'
    };

    return `${baseStyles} ${typeStyles[type] || typeStyles.info}`;
  };

  const getIconColor = (type) => {
    const colors = {
      success: 'text-green-600',
      error: 'text-red-600', 
      warning: 'text-yellow-600',
      info: 'text-blue-600'
    };
    return colors[type] || colors.info;
  };

  const getIconBg = (type) => {
    const backgrounds = {
      success: 'bg-green-100',
      error: 'bg-red-100',
      warning: 'bg-yellow-100', 
      info: 'bg-blue-100'
    };
    return backgrounds[type] || backgrounds.info;
  };

  const renderIcon = (type) => {
    const iconClass = `w-4 h-4 ${getIconColor(type)}`;
    
    switch (type) {
      case 'success':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      default: // info
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div
      className={getToastStyles(toast.type)}
      style={{
        backdropFilter: 'blur(25px)',
        animation: 'slideInRight 0.5s ease-out'
      }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${getIconBg(toast.type)}`}>
            {renderIcon(toast.type)}
          </div>
          <p className="text-sm font-medium leading-relaxed pr-2">{toast.message}</p>
        </div>
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 ml-4 flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}


// ============================================
// USAGE EXAMPLES:
// ============================================

// 1. Wrap your App component with ToastProvider in your main App.js:
/*
import { ToastProvider } from './hooks/useToast';

function App() {
  return (
    <ToastProvider>
      <Router>
        // Your routes and components
      </Router>
    </ToastProvider>
  );
}
*/

// 2. Use in any component:
/*
import { useToast } from '../hooks/useToast';

function ContactForm() {
  const toast = useToast();

  const handleSubmit = () => {
    try {
      // Your form submission logic
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleCopy = () => {
    // Copy logic
    toast.info('Message copied to clipboard!');
  };

  const handleWarning = () => {
    toast.warning('Please fill in all required fields');
  };

  return (
    // Your component JSX
  );
}
*/

// 3. Advanced usage with custom duration:
/*
const toast = useToast();

// Custom duration (in milliseconds)
toast.success('This will disappear in 2 seconds', 2000);
toast.error('This will stay for 6 seconds', 6000);

// Remove specific toast
const toastId = toast.info('Loading...');
setTimeout(() => {
  toast.remove(toastId);
  toast.success('Done!');
}, 3000);

// Remove all toasts
toast.removeAll();
*/