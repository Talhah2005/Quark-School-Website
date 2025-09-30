//client/src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const nav = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      await login(email, password);
      nav('/');
    } catch (e) {
      setError(e?.response?.data?.error || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.05) 0%, transparent 50%)
            `,
            animation: "float 20s ease-in-out infinite",
          }}
        />
      </div>

      {/* Login Card */}
      <main
        className="w-full max-w-md relative z-10"
        style={{ animation: "fadeInUp 0.8s ease-out" }}
      >
        <div
          className="login-card p-6 sm:p-8 rounded-3xl relative overflow-hidden"
          style={{
            marginTop: "4rem",
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)", // Safari support
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 25px 50px rgba(30, 41, 59, 0.15)",
          }}
        >
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
            }}
            aria-hidden="true"
          />

          {/* Header */}
          <header className="text-center mb-8">
            <div className="flex justify-center">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 mx-auto"
                style={{
                  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                  color: "#3b82f6",
                  border: "2px solid rgba(59, 130, 246, 0.2)",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.1)",
                  animation: "zoomIn 0.6s ease-out 0.3s both",
                }}
                aria-hidden="true"
              >
                🔐
              </div>
            </div>
            
            <h1
              className="text-2xl sm:text-3xl font-black mb-2"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              Welcome Back
            </h1>
            
            <p
              className="text-gray-600 text-sm sm:text-base"
              style={{ animation: "fadeInUp 0.8s ease-out 0.5s both" }}
            >
              Sign in to continue your journey
            </p>
          </header>

          {/* Error Message */}
          {error && (
            <div
              className="mb-6 p-4 rounded-xl border-l-4 transition-all duration-300"
              style={{
                background: "rgba(239, 68, 68, 0.05)",
                borderColor: "#ef4444",
                color: "#dc2626",
                animation: "slideInDown 0.3s ease-out",
              }}
              role="alert"
              aria-live="polite"
            >
              <div className="flex items-center">
                <span className="text-lg mr-2" aria-hidden="true">⚠️</span>
                <span className="text-sm font-medium">{error}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="space-y-6"
            style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
            noValidate
          >
            {/* Email Field */}
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{ color: "#374151" }}
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 sm:py-4 pr-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  placeholder="Enter your email"
                  style={{
                    background: "rgba(248, 250, 252, 0.8)",
                    borderColor: "rgba(203, 213, 225, 0.5)",
                    color: "#1e293b",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                    e.target.style.background = "rgba(255, 255, 255, 0.9)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(203, 213, 225, 0.5)";
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "rgba(248, 250, 252, 0.8)";
                  }}
                  aria-describedby={error ? "login-error" : undefined}
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 flex items-center justify-center"
                  style={{ fontSize: "1.1rem" }}
                  aria-hidden="true"
                >
                  📧
                </div>
              </div>
            </div>

            {/* Password Field */}
            <div className="form-group">
              <label
                htmlFor="password"
                className="block text-sm font-semibold mb-2"
                style={{ color: "#374151" }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full px-4 py-3 sm:py-4 pr-12 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  placeholder="Enter your password"
                  style={{
                    background: "rgba(248, 250, 252, 0.8)",
                    borderColor: "rgba(203, 213, 225, 0.5)",
                    color: "#1e293b",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3b82f6";
                    e.target.style.boxShadow = "0 0 0 3px rgba(59, 130, 246, 0.1)";
                    e.target.style.background = "rgba(255, 255, 255, 0.9)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(203, 213, 225, 0.5)";
                    e.target.style.boxShadow = "none";
                    e.target.style.background = "rgba(248, 250, 252, 0.8)";
                  }}
                  aria-describedby={error ? "login-error" : undefined}
                />
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 flex items-center justify-center"
                  style={{ fontSize: "1.1rem" }}
                  aria-hidden="true"
                >
                  🔒
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 sm:py-4 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                fontSize: "0.9rem",
              }}
              aria-describedby={isLoading ? "login-loading" : undefined}
            >
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? (
                  <>
                    <div
                      className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"
                      style={{ animation: "spin 1s linear infinite" }}
                      aria-hidden="true"
                    />
                    <span id="login-loading">Signing In...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </span>
              <div
                className="absolute top-0 left-0 w-full h-full transition-transform duration-300 -translate-x-full hover:translate-x-0"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                }}
                aria-hidden="true"
              />
            </button>
          </form>

          {/* Footer Links */}
          <footer
            className="text-center mt-8 pt-6 border-t"
            style={{
              borderColor: "rgba(203, 213, 225, 0.3)",
              animation: "fadeInUp 0.8s ease-out 0.8s both",
            }}
          >
            <p className="text-xs sm:text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                style={{ color: "#3b82f6" }}
              >
                Sign up here
              </Link>
            </p>
          </footer>
        </div>
      </main>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0px, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(0, -20px, 0) rotate(1deg);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Responsive adjustments for very small screens */
        @media (max-width: 320px) {
          .login-card {
            padding: 1.25rem !important;
            margin: 0.5rem;
          }
          
          .form-group input {
            padding: 0.75rem !important;
            font-size: 14px !important;
          }
          
          button[type="submit"] {
            padding: 0.875rem !important;
            font-size: 14px !important;
          }
        }

        @media (max-width: 280px) {
          .login-card {
            padding: 1rem !important;
            margin: 0.25rem;
            border-radius: 1.5rem !important;
          }
          
          .form-group {
            margin-bottom: 1rem !important;
          }
          
          .form-group input {
            padding: 0.65rem !important;
            font-size: 13px !important;
          }
          
          button[type="submit"] {
            padding: 0.75rem !important;
            font-size: 13px !important;
          }
          
          h1 {
            font-size: 1.25rem !important;
          }
          
          .text-center p {
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}