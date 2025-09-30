import React from "react";
import EnrollCard from "../components/EnrollCard";
import GalleryCard from "../components/GalleryCard";
import InstagramCard from "../components/InstagramCard";

export default function About() {
  return (
    <div
      className="min-h-screen pt-16 xs:pt-18 sm:pt-20"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
        position: "relative",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <div
            className="inline-block mb-2 xs:mb-3 sm:mb-4 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              color: "#3b82f6",
              border: "1px solid rgba(59, 130, 246, 0.2)",
            }}
          >
            About Quark
          </div>
          <h1
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 xs:mb-5 sm:mb-6 leading-tight px-2 xs:px-4"
            style={{
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "fadeInUp 0.8s ease-out",
            }}
          >
            Empowering Children's, Inspiring{" "}
            <span
              className="block xs:inline mt-1 xs:mt-0"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Futures
            </span>
          </h1>
        </div>

        {/* Hero Section with Logo */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16" style={{ animation: "fadeInUp 0.8s ease-out" }}>
          <div
            className="inline-block p-6 xs:p-8 sm:p-10 rounded-3xl transition-all duration-500 hover:scale-105 mb-8"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(25px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 60px rgba(30, 41, 59, 0.15)",
            }}
          >
            <div className="w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 mx-auto flex items-center justify-center transition-all duration-300 hover:scale-110 mb-4">
              <img 
                src="assets/logo3.png" 
                alt="Quark School Logo" 
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 8px 25px rgba(59, 130, 246, 0.25))",
                }}
              />
            </div>
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl font-black mb-2"
              style={{
                color: "#1e293b",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Quark School
            </h2>
            <p className="text-base xs:text-lg sm:text-xl font-semibold" style={{ color: "#3b82f6" }}>
              The Building Blocks of Tomorrow
            </p>
          </div>

          {/* Mission Statement - Full Width */}
          <div 
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 xs:p-8 sm:p-10 mb-8"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              animation: "fadeInUp 0.8s ease-out 0.2s both",
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
              }}
            ></div>
            
            <h3 
              className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4"
              style={{
                color: "#1e293b",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Our Mission
            </h3>
            <p
              className="text-base xs:text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto"
            >
              Quark School lays the foundation for a brighter future by nurturing potential and fostering creativity. We inspire learners to become the leaders, innovators, and change-makers of tomorrow.
            </p>
          </div>
        </div>

        {/* Main Content: Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Left Column: Why Choose Us */}
          <div 
            className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 xs:p-8 transition-all duration-300 hover:shadow-2xl"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              animation: "slideInLeft 0.8s ease-out 0.3s both",
            }}
          >
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
              }}
            ></div>

            <h3 
              className="text-xl xs:text-2xl sm:text-3xl font-bold mb-6"
              style={{
                color: "#1e293b",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Why Choose Quark School?
            </h3>

            <div className="space-y-4">
              {[
                { 
                  icon: "🎯", 
                  text: "Dynamic Learning Activities",
                  description: "Engaging programs designed to boost student confidence and essential life skills"
                },
                {
                  icon: "🏡",
                  text: "Safe & Inclusive Environment",
                  description: "A nurturing space where every child feels valued, supported, and empowered"
                },
                {
                  icon: "👨‍🏫",
                  text: "Expert Faculty & Modern Curriculum",
                  description: "Qualified educators using cutting-edge teaching methodologies and technology"
                },
                {
                  icon: "🌟",
                  text: "Holistic Development",
                  description: "Focus on academic excellence, character building, and creative problem-solving"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 xs:p-5 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s both`,
                    background: "rgba(255, 255, 255, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-base xs:text-lg mb-1">{item.text}</h4>
                    <p className="text-sm xs:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vision & Values */}
          <div 
            className="space-y-6"
            style={{
              animation: "slideInRight 0.8s ease-out 0.3s both",
            }}
          >
            {/* Vision Card */}
            <div 
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 xs:p-8 transition-all duration-300 hover:shadow-2xl"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div 
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{
                  background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)",
                }}
              ></div>

              <h3 
                className="text-xl xs:text-2xl sm:text-3xl font-bold mb-4"
                style={{
                  color: "#1e293b",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Our Vision
              </h3>
              <p className="text-base xs:text-lg text-gray-700 leading-relaxed mb-6">
                Empowering futures with international education standards, creating global citizens ready to make a positive impact in the world.
              </p>

              <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(59, 130, 246, 0.08)" }}>
                <div 
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
                ></div>
                <p className="text-sm xs:text-base font-semibold text-blue-700">
                  Preparing students for a globally connected future
                </p>
              </div>
            </div>

            {/* Values Card */}
            <div 
              className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 xs:p-8 transition-all duration-300 hover:shadow-2xl"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              }}
            >
              <h3 
                className="text-xl xs:text-2xl font-bold mb-4"
                style={{
                  color: "#1e293b",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Building Tomorrow's Leaders
              </h3>
              
              <div className="space-y-4">
                <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
                  At Quark School, we believe every child has unlimited potential waiting to be discovered and nurtured.
                </p>
                
                <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
                  Our commitment extends beyond academic excellence to character development, critical thinking, and creative problem-solving skills.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {["Excellence", "Innovation", "Integrity", "Growth"].map((value, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg text-center transition-all duration-300 hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                        boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
                      }}
                    >
                      <p className="text-white font-bold text-sm xs:text-base">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-16">
          {[
            { number: "20+", label: "Certified Teachers" },
            { number: "500+", label: "Happy Students" },
            { number: "30+", label: "Clubs & Activities" },
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-card text-center p-4 xs:p-6 sm:p-8 rounded-xl xs:rounded-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 25px rgba(30, 41, 59, 0.12)",
                animation: `zoomIn 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                }}
              />
              <div
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black mb-1 xs:mb-2"
                style={{
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#6b7280" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Card Components Section - Updated Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-16 max-w-4xl mx-auto">
          <GalleryCard />
          <InstagramCard />
        </div>

        {/* Contact Section */}
        <div className="max-w-5xl mx-auto">
          <div
            className="card p-4 xs:p-6 sm:p-8 rounded-2xl xs:rounded-2xl sm:rounded-3xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 20px 40px rgba(30, 41, 59, 0.15)",
              animation: "fadeInUp 0.8s ease-out 0.6s both",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              <div>
                <h2
                  className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6"
                  style={{
                    color: "#1e293b",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  For Any Query
                </h2>
                <p className="text-gray-600 mb-2 xs:mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base">Email us for assistance.</p>
                <p className="font-semibold text-blue-600 mb-2 text-xs xs:text-sm sm:text-base break-all">
                  <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDZdDczctpnKJCprgNQfpKkzNZJMwwrbMHLvpwXRlzcJBTtKjcHmFKcFBWHscCZmmLCHNGd">
                    Quarkschool.edu@gmail.com
                  </a>
                </p>
                <p className="text-gray-700 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">Phone: +92 335 5114051</p>
              </div>

              <div>
                <h3
                  className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 sm:mb-4"
                  style={{ color: "#1e293b" }}
                >
                  Connect With Us
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href="https://www.facebook.com/share/1BTg9anMDv/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 hover:bg-blue-50 hover:translate-x-1 group"
                  >
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-blue-600 text-xs xs:text-sm sm:text-base">
                      Facebook
                    </span>
                  </a>

                  <a
                    href="https://www.instagram.com/quark.school?igsh=MXJtdHVnYjI2cDdxMg=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl transition-all duration-300 hover:bg-pink-50 hover:translate-x-1 group"
                  >
                    <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <svg
                        className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-pink-600 text-xs xs:text-sm sm:text-base">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(1deg);
          }
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          transform: scaleX(0);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card:hover::before {
          transform: scaleX(1);
        }

        /* Ultra-small screen optimizations */
        @media (max-width: 360px) {
          .stat-card {
            padding: 1rem;
          }
          
          .grid {
            gap: 0.75rem;
          }
        }

        @media (max-width: 280px) {
          .text-2xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          
          .p-4 {
            padding: 0.75rem;
          }
          
          .px-3 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
          
          .gap-4 {
            gap: 0.5rem;
          }
          
          .mb-8 {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}