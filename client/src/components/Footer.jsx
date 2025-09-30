import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Academics",
      items: [
        { name: "Montessori", link: "/gallery" },
        { name: "Nursery", link: "/gallery" },
        { name: "Prep", link: "/gallery" },
        { name: "Class 1", link: "/gallery" },
        { name: "Class 2", link: "/gallery" },
      ],
      type: "links",
    },
    {
      title: "Resources",
      items: [
        { name: "Sports Day", link: "/gallery" },
        { name: "Winter Celebration", link: "/gallery" },
        { name: "Activity Day", link: "/gallery" },
        { name: "Award Ceremony", link: "/gallery" },
      ],
      type: "links",
    },
    {
      title: "Contact Info",
      items: [
        {
          icon: "📞",
          text: "+92 335 5114051",
          link: "tel:+923355114051",
          ariaLabel: "Call us at +92 335 5114051",
        },
        {
          icon: "✉️",
          text: "Quarkschool.edu@gmail.com",
          link: "mailto:Quarkschool.edu@gmail.com",
          ariaLabel: "Send email to Quarkschool.edu@gmail.com",
        },
      ],
      type: "contact",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1BTg9anMDv/",
      ariaLabel: "Visit our Facebook page",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/quark.school?igsh=MXJtdHVnYjI2cDdxMg==",
      ariaLabel: "Visit our Instagram page",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative mt-20" role="contentinfo">
      {/* Animated top gradient line */}
      <div
        className="h-1 w-full"
        style={{
          background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)",
          backgroundSize: "200% 100%",
          animation: "gradientShift 3s ease infinite",
        }}
      />

      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.4) 0%, transparent 50%)
            `,
            animation: "float 20s ease-in-out infinite",
          }}
          aria-hidden="true"
        />

        {/* Floating dots decoration */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-20 right-20 w-3 h-3 bg-blue-300 rounded-full opacity-30" style={{ animation: "float 15s ease-in-out infinite" }} />
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50" style={{ animation: "float 18s ease-in-out infinite reverse" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
          {/* Logo and Brand Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div 
              className="inline-block p-6 rounded-2xl mb-6 transition-all duration-500 hover:scale-105"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 transition-all duration-300 hover:scale-110">
                <img 
                  src="assets/logo3.png" 
                  alt="Quark School Logo" 
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 4px 20px rgba(59, 130, 246, 0.4))",
                  }}
                />
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  background: "linear-gradient(135deg, #60a5fa 0%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Quark School
              </h3>
              <p className="text-sm sm:text-base font-semibold text-blue-300 mb-2">
                The Building Blocks
              </p>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Empowering futures with international education standards
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  style={{
                    background: "rgba(59, 130, 246, 0.1)",
                    border: "1px solid rgba(59, 130, 246, 0.2)",
                  }}
                  aria-label={social.ariaLabel}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="text-blue-300 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {footerSections.map((section, index) => (
              <div 
                key={index} 
                className="text-center sm:text-left"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  className="inline-block sm:block mb-6 pb-3 relative"
                >
                  <h4
                    className="text-lg sm:text-xl font-bold"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#60a5fa",
                    }}
                  >
                    {section.title}
                  </h4>
                  <div 
                    className="absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-12 h-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
                    }}
                  />
                </div>

                {section.type === "contact" ? (
                  <div className="space-y-4">
                    <address className="not-italic">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="mb-4">
                          <a
                            href={item.link}
                            className="group flex items-center justify-center sm:justify-start text-gray-300 hover:text-blue-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                            aria-label={item.ariaLabel}
                          >
                            <span 
                              className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300"
                              aria-hidden="true"
                            >
                              {item.icon}
                            </span>
                            <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                              {item.text}
                            </span>
                          </a>
                        </div>
                      ))}
                    </address>

                    <div 
                      className="mt-6 p-4 rounded-xl"
                      style={{
                        background: "rgba(59, 130, 246, 0.05)",
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                      }}
                    >
                      <p className="text-sm font-semibold text-blue-300 mb-1">
                        For Any Query
                      </p>
                      <p className="text-xs text-gray-400">
                        Email us for assistance
                      </p>
                    </div>
                  </div>
                ) : (
                  <nav aria-label={`${section.title} navigation`}>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button
                            type="button"
                            onClick={() => navigate(item.link)}
                            className="group text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm font-medium p-2 rounded-lg hover:bg-white/5 inline-flex items-center"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {item.name}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div
            className="pt-8 border-t text-center"
            style={{ borderColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <div 
              className="inline-block px-6 py-3 rounded-full mb-4"
              style={{
                background: "rgba(59, 130, 246, 0.05)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
              }}
            >
              <p className="text-sm text-gray-300">
                © {currentYear} Quark School. All rights reserved.
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Empowering futures through quality education
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </footer>
  );
}