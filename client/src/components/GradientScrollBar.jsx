import React, { useEffect } from 'react';

export default function GradientScrollbar({ children, className = '' }) {
  useEffect(() => {
    // Apply scrollbar styles to the document when component mounts
    const style = document.createElement('style');
    style.textContent = `
      /* Webkit Scrollbar Styling */
      ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      ::-webkit-scrollbar-track {
        background: rgba(241, 245, 249, 0.8);
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #1e40af 0%, #3730a3 25%, #4338ca 50%, #6366f1 75%, #8b5cf6 100%);
        border-radius: 10px;
        border: 2px solid rgba(241, 245, 249, 0.8);
        transition: all 0.3s ease;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #1d4ed8 0%, #4338ca 25%, #5b21b6 50%, #7c3aed 75%, #a855f7 100%);
        border: 2px solid rgba(241, 245, 249, 0.9);
        box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
      }

      ::-webkit-scrollbar-thumb:active {
        background: linear-gradient(135deg, #1e3a8a 0%, #312e81 25%, #4c1d95 50%, #6b21a8 75%, #9333ea 100%);
      }

      ::-webkit-scrollbar-corner {
        background: rgba(241, 245, 249, 0.8);
      }

      /* Firefox Scrollbar Styling */
      * {
        scrollbar-width: thin;
        scrollbar-color: #3b82f6 rgba(241, 245, 249, 0.8);
      }

      /* Custom scrollable container styling */
      .gradient-scrollbar {
        overflow-y: auto;
        overflow-x: auto;
      }

      .gradient-scrollbar::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      .gradient-scrollbar::-webkit-scrollbar-track {
        background: rgba(241, 245, 249, 0.6);
        border-radius: 8px;
      }

      .gradient-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .gradient-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #2563eb 0%, #5b21b6 50%, #7c3aed 100%);
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
      }

      /* Responsive scrollbar sizes */
      @media (max-width: 768px) {
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .gradient-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
      }

      @media (max-width: 480px) {
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        .gradient-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
      }
    `;
    
    document.head.appendChild(style);

    // Cleanup function to remove styles when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  if (children) {
    // If children are provided, wrap them in a scrollable container
    return (
      <div className={`gradient-scrollbar ${className}`}>
        {children}
      </div>
    );
  }

  // If no children, just apply global styles
  return null;
}

// Alternative component for specific scrollable areas
export function ScrollableContainer({ children, className = '', maxHeight = '400px', style = {} }) {
  return (
    <div 
      className={`gradient-scrollbar ${className}`}
      style={{ 
        maxHeight, 
        overflowY: 'auto',
        overflowX: 'hidden',
        ...style 
      }}
    >
      {children}
    </div>
  );
}

// Hook for applying scrollbar styles programmatically
export function useGradientScrollbar() {
  useEffect(() => {
    const applyScrollbarClass = () => {
      document.body.classList.add('gradient-scrollbar-applied');
    };

    applyScrollbarClass();

    return () => {
      document.body.classList.remove('gradient-scrollbar-applied');
    };
  }, []);
}