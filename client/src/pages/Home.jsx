// client/src/pages/Home.jsx
import React from "react";
import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import AnnouncementBar from "../components/AnnouncementBar";
import InstagramFeed from "../components/InstagramFeed";
import EnrollCard from "../components/EnrollCard";

export default function Home() {
  return (
    <div
      className="min-h-screen pt-20 relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-6 py-6 space-y-16 relative z-10">
        {/* Hero Section with Enhanced Carousel */}
        <section 
          className="rounded-3xl overflow-hidden shadow-2xl relative"
          style={{
            animation: "fadeInUp 0.8s ease-out",
            boxShadow: "0 25px 50px rgba(30, 41, 59, 0.15)",
          }}
          aria-label="Hero carousel"
        >
          <Carousel />
        </section>

        {/* Announcement Bar */}
        <section 
          style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          aria-label="Announcements"
        >
          <AnnouncementBar />
        </section>

        {/* Featured Cards Section */}
        <section className="py-12" aria-label="Our features">
          <div className="text-center mb-12">
            <div
              className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(59, 130, 246, 0.1)",
                color: "#3b82f6",
                border: "1px solid rgba(59, 130, 246, 0.2)",
                animation: "fadeInUp 0.6s ease-out 0.3s both",
              }}
            >
              Our Features
            </div>
            <h2
              className="text-3xl md:text-5xl font-black mb-4 leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                background: "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "fadeInUp 0.8s ease-out 0.4s both",
              }}
            >
              Discover Magic Of Our Kids'
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Educational Experience
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safe Environment",
                desc: "Secure campus with supportive staff and strong community focus.",
                icon: "🛡️",
                color: "from-green-400 to-green-600",
              },
              {
                title: "Engaging Curriculum",
                desc: "Modern, creative learning that fosters critical thinking.",
                icon: "📚",
                color: "from-blue-400 to-blue-600",
              },
              {
                title: "Expert Instructors",
                desc: "Qualified, passionate teachers dedicated to student success.",
                icon: "👨‍🏫",
                color: "from-purple-400 to-purple-600",
              },
            ].map((card, i) => (
              <article
                key={i}
                className="feature-card group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:scale-105 cursor-pointer"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(25px)",
                  WebkitBackdropFilter: "blur(25px)", // Safari support
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 25px rgba(30, 41, 59, 0.12)",
                  animation: `slideInUp 0.8s ease-out ${0.5 + i * 0.1}s both`,
                }}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${card.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    // Navigate to about page
                    window.location.href = '/about';
                  }
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="feature-icon w-20 h-20 mb-6 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                    color: "#3b82f6",
                    border: "2px solid rgba(59, 130, 246, 0.2)",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.1)",
                  }}
                  aria-hidden="true"
                >
                  {card.icon}
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold mb-4 relative z-10"
                  style={{
                    color: "#1e293b",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">
                  {card.desc}
                </p>

                <Link
                  to="/about"
                  className="inline-block px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative z-10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                    boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                  }}
                  aria-label={`Learn more about ${card.title}`}
                >
                  <span className="relative z-10">Learn more</span>
                  <div
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-300 -translate-x-full hover:translate-x-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
                    }}
                    aria-hidden="true"
                  />
                </Link>

                {/* Hover effect overlay */}
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Enhanced About Quark Section */}
        <section className="py-16" aria-label="About Quark School">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div
              className="order-1 lg:order-1"
              style={{ animation: "fadeInLeft 0.8s ease-out 0.6s both" }}
            >
              <div
                className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)",
                  color: "#1e3a8a",
                  border: "1px solid rgba(30, 58, 138, 0.3)",
                  boxShadow: "0 4px 15px rgba(30, 58, 138, 0.1)",
                }}
              >
                ✨ About Quark
              </div>

              <h2
                className="text-4xl md:text-6xl font-black mb-8 leading-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  color: "#1e293b",
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Empowering Children's,{" "}
                <br />
                Inspiring{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Futures
                </span>
              </h2>

              <p className="text-gray-600 text-xl leading-relaxed mb-10 font-medium">
                Empowering children today lays the foundation for a brighter future.
                By nurturing their potential and fostering creativity, we inspire them
                to become the leaders, innovators, and change-makers of tomorrow.
              </p>

              <ul className="space-y-6" role="list">
                {[
                  "Empowering kids through dynamic activities",
                  "Dedicated team fosters a inclusive environment",
                  "Join us for a transformative experience",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-4"
                    style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + i * 0.1}s both` }}
                  >
                    <div
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                      }}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Images Side */}
            <div
              className="order-2 lg:order-2 relative about-images-enhanced"
              style={{ animation: "fadeInRight 0.8s ease-out 0.6s both" }}
            >
              <div className="relative h-[500px] lg:h-[600px]">
                {/* Background Decorative Elements */}
                <div
                  className="absolute -top-4 -left-4 w-24 h-24 rounded-full opacity-20 z-0"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                    animation: "float 6s ease-in-out infinite",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-15 z-0"
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                    animation: "float 8s ease-in-out infinite reverse",
                  }}
                  aria-hidden="true"
                />
                
                {/* Blue accent line */}
                <div
                  className="absolute left-0 top-16 bottom-16 w-2 z-10 rounded-full shadow-lg"
                  style={{
                    background: "linear-gradient(180deg, #3b82f6 0%, #60a5fa 50%, #3b82f6 100%)",
                  }}
                  aria-hidden="true"
                />
                
                {/* Main Image Container */}
                <div
                  className="absolute left-8 top-0 right-0 bottom-12 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-rotate-1"
                  style={{
                    boxShadow: "0 25px 60px rgba(30, 41, 59, 0.25)",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", // Safari support
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <img
                    src="assets/activity10.webp"
                    alt="Children participating in colorful outdoor learning activities at Quark School"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(1.05) contrast(1.1) saturate(1.2)",
                    }}
                  />
                  
                  {/* Image Overlay for better contrast */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(45deg, rgba(59, 130, 246, 0.05) 0%, rgba(239, 68, 68, 0.05) 100%)",
                      mixBlendMode: "overlay",
                    }}
                    aria-hidden="true"
                  />
                </div>
                
                {/* Secondary Image - Better positioned and styled */}
                <div
                  className="absolute bottom-0 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 transform transition-all duration-700 hover:scale-110 hover:rotate-2"
                  style={{
                    transform: "translate(1.5rem, 1.5rem)",
                    boxShadow: "0 30px 60px rgba(30, 41, 59, 0.4)",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)", // Safari support
                  }}
                >
                  <img
                    src="assets/Activity9.webp"
                    alt="Children engaged in creative play activities inside colorful learning tents"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(1.1) contrast(1.15) saturate(1.3)",
                    }}
                  />
                  
                  {/* Play icon overlay for interactive feel */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div
                      className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)", // Safari support
                      }}
                      aria-hidden="true"
                    >
                      <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg z-30"
                  style={{
                    background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                    animation: "fadeInUp 1s ease-out 1.2s both",
                  }}
                  aria-label="Creative Learning program"
                >
                  🎯 Creative Learning
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12" aria-label="School statistics">
          <h2 className="sr-only">Quark School by the numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Happy Students" },
              { number: "50+", label: "Expert Teachers" },
              { number: "10+", label: "Years Experience" },
              { number: "95%", label: "Success Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-card group text-center p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)", // Safari support
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 25px rgba(30, 41, 59, 0.12)",
                  animation: `zoomIn 0.6s ease-out ${0.8 + i * 0.1}s both`,
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="text-4xl md:text-5xl font-black mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "#6b7280" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instagram Feed Section */}
        <section className="py-12" aria-label="Instagram feed">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4"
            style={{ animation: "fadeInUp 0.8s ease-out 1.2s both" }}
          >
            <div>
              <div
                className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  color: "#3b82f6",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                Follow Us
              </div>
              <h2
                className="text-2xl md:text-4xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Latest on Instagram
              </h2>
            </div>
            <a
              href="https://www.instagram.com/quark.school"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{
                borderColor: "#3b82f6",
                color: "#3b82f6",
                background: "rgba(59, 130, 246, 0.05)",
              }}
              aria-label="Visit our Instagram page"
              onMouseEnter={(e) => {
                e.target.style.background =
                  "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)";
                e.target.style.color = "#ffffff";
                e.target.style.borderColor = "#3b82f6";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(59, 130, 246, 0.05)";
                e.target.style.color = "#3b82f6";
                e.target.style.borderColor = "#3b82f6";
              }}
            >
              Visit Instagram
            </a>
          </div>
          <div style={{ animation: "fadeInUp 0.8s ease-out 1.3s both" }}>
            <InstagramFeed />
          </div>
        </section>
        
        <section aria-label="Enrollment">
          <EnrollCard />
        </section>
      </div>

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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translate3d(-30px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(30px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 50px, 0) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
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

        .feature-card:hover .feature-icon {
          background: linear-gradient(
            135deg,
            #3b82f6 0%,
            #60a5fa 100%
          ) !important;
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3) !important;
        }

        .about-images-enhanced {
          perspective: 1000px;
        }

        .about-images-enhanced > div > div:hover {
          transform-style: preserve-3d;
        }

        @media (max-width: 1024px) {
          .about-images-enhanced {
            margin-bottom: 3rem;
            height: 450px !important;
          }
          
          .about-images-enhanced > div {
            height: 450px !important;
          }
        }

        @media (max-width: 768px) {
          .feature-card {
            padding: 1.5rem;
          }

          .feature-icon {
            width: 4rem !important;
            height: 4rem !important;
            font-size: 1.5rem;
          }

          .stat-card {
            padding: 1.5rem 1rem;
          }

          .about-images-enhanced {
            height: 400px !important;
          }

          .about-images-enhanced > div {
            height: 400px !important;
          }

          .about-images-enhanced .absolute:nth-child(3) {
            left: 1rem !important;
          }

          .about-images-enhanced .absolute:nth-child(4) {
            width: 45% !important;
            height: 40% !important;
            transform: translate(1rem, 1rem) !important;
          }
        }

        @media (max-width: 640px) {
          .about-images-enhanced {
            height: 350px !important;
          }

          .about-images-enhanced > div {
            height: 350px !important;
          }

          .about-images-enhanced .absolute:nth-child(3) {
            left: 0.5rem !important;
          }

          .about-images-enhanced .absolute:nth-child(4) {
            width: 50% !important;
            height: 45% !important;
            transform: translate(0.75rem, 0.75rem) !important;
            border-width: 3px !important;
          }
        }
      `}</style>
    </div>
  );
}