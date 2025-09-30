//client/src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo7 from "/assets/logo7.png";
import "./navbar.css"; 

export default function Navbar() {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuOpen &&
        !e.target.closest(".mobile-menu") &&
        !e.target.closest(".menu-toggle")
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-white bg-white/20 backdrop-blur-sm"
      : "text-white/90 hover:text-white hover:bg-white/10";

  const mobileActiveClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-scrolled" : ""
        }`}
        style={{
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #3b82f6 100%)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)", // Safari support
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Animated shine effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className="absolute top-0 w-full h-full opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
              animation: "navbar-shine 3s infinite",
              transform: "translate3d(-100%, 0, 0)", // Performance optimization
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 navbar-brand transition-all duration-300 hover:-translate-y-1"
            aria-label="Go to homepage"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "800",
              fontSize: "clamp(1rem, 4vw, 1.6rem)",
              letterSpacing: "-0.025em",
            }}
          >
            <img
              src={logo7}
              className="h-8 sm:h-10 md:h-12 transition-all duration-300 hover:rotate-6 hover:scale-110"
              alt="Quark School Logo"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3))",
              }}
            />
            <div className="leading-tight">
              <div className="text-white font-bold text-sm sm:text-base lg:text-lg">
                Quark School
              </div>
              <div className="text-xs sm:text-xs text-white/70 hidden sm:block">
                The Building Blocks
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" role="navigation" aria-label="Main navigation">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  relative px-3 xl:px-4 py-2 rounded-xl font-semibold transition-all duration-300
                  nav-link hover:-translate-y-1 text-sm
                  ${activeClass({ isActive })}
                `}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
                aria-label={`Navigate to ${link.label} page`}
              >
                <span className="relative z-10">{link.label}</span>
                <div
                  className="absolute inset-0 rounded-xl transition-all duration-300 opacity-0 hover:opacity-100"
                  style={{ background: "rgba(255, 255, 255, 0.1)" }}
                />
                <div
                  className="absolute bottom-1 left-1/2 w-0 h-0.5 rounded-full transition-all duration-300 hover:w-3/5 -translate-x-1/2"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  }}
                />
              </NavLink>
            ))}
            {user?.role === "admin" && (
              <NavLink
                to="/admin"
                className={({ isActive }) => `
                relative px-3 xl:px-4 py-2 rounded-xl font-semibold transition-all duration-300
                nav-link hover:-translate-y-1 text-sm
                ${activeClass({ isActive })}
              `}
                aria-label="Navigate to Admin dashboard"
              >
                <span className="relative z-10">Admin</span>
                <div
                  className="absolute inset-0 rounded-xl transition-all duration-300 opacity-0 hover:opacity-100"
                  style={{ background: "rgba(255, 255, 255, 0.1)" }}
                />
              </NavLink>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {user ? (
              <>
                <span className="text-xs lg:text-sm text-white/90 font-medium hidden lg:block">
                  Welcome <b className="text-white">{user.name}</b>
                </span>
                <span className="text-xs text-white/90 font-medium lg:hidden">
                  <b className="text-white">{user.name.split(" ")[0]}</b>
                </span>
                <button
                  type="button"
                  onClick={logout}
                  className="px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-bold 
             bg-red-600 text-white 
             hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 
             hover:border-red-800 
             transition-all duration-300 hover:-translate-y-1 shadow-md"
                  aria-label="Logout from your account"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn-accent px-3 lg:px-4 py-2 rounded-xl text-white text-xs lg:text-sm font-bold 
                           transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                    boxShadow: "0 2px 8px rgba(30, 41, 59, 0.08)",
                  }}
                  aria-label="Go to login page"
                >
                  <span className="relative z-10">Login</span>
                  <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-300 -translate-x-full hover:translate-x-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                    }}
                  />
                </Link>
                <Link
                  to="/signup"
                  className="btn-outline-light px-3 lg:px-4 py-2 rounded-xl text-xs lg:text-sm font-bold border-2 border-white/40 
                           bg-white/10 text-white/90 hover:bg-white/20 hover:border-white/60 
                           hover:text-white transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm hidden sm:block"
                  aria-label="Go to sign up page"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="menu-toggle lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center items-center">
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current rounded-full transform transition-all duration-300 ${
                  mobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          style={{ WebkitBackdropFilter: "blur(4px)" }} // Safari support
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", // Safari support
          boxShadow: "-10px 0 40px rgba(30, 41, 59, 0.15)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Scrollable Content Container */}
        <div className="h-full overflow-y-auto custom-scrollbar">
          {/* Mobile Menu Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={logo7} className="h-10" alt="Quark School Logo" />
                <div className="leading-tight">
                  <div className="text-gray-800 font-bold text-lg">
                    Quark School
                  </div>
                  <div className="text-xs text-gray-500">The Building Blocks</div>
                </div>
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300"
                aria-label="Close mobile menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* User Info Section */}
          {user && (
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold"
                  aria-label={`User avatar for ${user.name}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Navigation Links */}
          <nav className="py-6" role="navigation" aria-label="Mobile navigation">
            <div className="space-y-2 px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-xl font-semibold transition-all duration-300
                    ${mobileActiveClass({ isActive })}
                  `}
                  aria-label={`Navigate to ${link.label} page`}
                >
                  {link.label}
                </NavLink>
              ))}
              {user?.role === "admin" && (
                <NavLink
                  to="/admin"
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    block px-4 py-3 rounded-xl font-semibold transition-all duration-300
                    ${mobileActiveClass({ isActive })}
                  `}
                  aria-label="Navigate to Admin dashboard"
                >
                  Admin
                </NavLink>
              )}
            </div>
          </nav>

          {/* Mobile Auth Section - Always at bottom */}
          <div className="p-6 border-t border-gray-200 space-y-3 mt-auto">
            {user ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  closeMobileMenu();
                }}
                className="w-full px-4 py-3 rounded-xl font-bold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)",
                }}
                aria-label="Logout from your account"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block w-full px-4 py-3 rounded-xl font-bold text-white text-center transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  }}
                  aria-label="Go to login page"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="block w-full px-4 py-3 rounded-xl font-bold text-gray-700 text-center border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                  aria-label="Go to sign up page"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}