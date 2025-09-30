import React, { useState } from 'react'
import EnrollCard from '../components/EnrollCard'
import { useToast } from '../hooks/useToast'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const toast = useToast()

  const sendToWhatsApp = (e) => {
    e.preventDefault()
    
    // Validate form fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields')
      return
    }
    
    // Create message with manual URL encoding for better compatibility
    const messageParts = [
      'Quark School Query',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      '',
      'Message:',
      message.trim(),
      '',
      'Sent from Quark School Website'
    ]
    
    // Join with line breaks and encode manually
    const messageText = messageParts.join('\n')
    
    // Manual encoding approach - some WhatsApp versions prefer this
    const encodedMessage = messageText
      .replace(/\n/g, '%0A')
      .replace(/ /g, '%20')
      .replace(/:/g, '%3A')
      .replace(/\?/g, '%3F')
      .replace(/!/g, '%21')
      .replace(/@/g, '%40')
    
    const phone = '923355114051'
    
    // Try the API endpoint instead of wa.me
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`
    
    console.log('Sending message:', messageText)
    console.log('Encoded URL:', whatsappURL)
    
    // Try opening the URL
    const opened = window.open(whatsappURL, '_blank', 'noopener,noreferrer')
    
    // Fallback to wa.me if api.whatsapp.com doesn't work
    if (!opened) {
      const fallbackURL = `https://wa.me/${phone}?text=${encodedMessage}`
      console.log('Fallback URL:', fallbackURL)
      window.open(fallbackURL, '_blank')
    }
    
    toast.success('Message sent to WhatsApp successfully!')
    
    // Reset form after a short delay
    setTimeout(() => {
      setName('')
      setEmail('')
      setMessage('')
    }, 1000)
  }

  const copyToClipboard = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in all fields first')
      return
    }

    const messageText = `Quark School Query

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}

Sent from Quark School Website`

    try {
      await navigator.clipboard.writeText(messageText)
      toast.success('Message copied to clipboard! You can now paste it in WhatsApp.')
      
      // Also open WhatsApp chat without pre-filled message
      const phone = '923355114051'
      const whatsappURL = `https://wa.me/${phone}`
      window.open(whatsappURL, '_blank')
      
    } catch (err) {
      console.error('Failed to copy: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = messageText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      toast.success('Message copied to clipboard! You can now paste it in WhatsApp.')
      
      // Open WhatsApp
      const phone = '923355114051'
      const whatsappURL = `https://wa.me/${phone}`
      window.open(whatsappURL, '_blank')
    }
  }

  const openWhatsAppChat = () => {
    const phone = '923355114051'
    const text = 'Hello! I would like to know more about Quark School.'
    const encodedText = encodeURIComponent(text)
    const url = `https://wa.me/${phone}?text=${encodedText}`
    window.open(url, '_blank')
    toast.info('Opening WhatsApp chat...')
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" aria-hidden="true"></div>
      
      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        {/* Header Section */}
        <header className="text-center mt-10 mb-8 xs:mb-10 sm:mb-16">
          <div 
            className="mt-10 inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-2xl xs:rounded-3xl mb-4 xs:mb-6" 
            style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
            aria-hidden="true"
          >
            <svg className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4" 
            style={{fontFamily: 'Poppins, sans-serif', color: '#1e293b'}}
          >
            Get in Touch
          </h1>
          <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Have questions about Quark School? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 items-start">
          
          {/* Contact Form */}
          <section className="order-2 lg:order-1" aria-label="Contact form">
            <div 
              className="rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)', // Safari support
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'
              }}
            >
              
              <div className="flex items-center mb-4 xs:mb-6">
                <div 
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-xl flex items-center justify-center mr-3"
                  style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h2 
                  className="text-lg xs:text-xl sm:text-2xl font-bold" 
                  style={{fontFamily: 'Poppins, sans-serif', color: '#1e293b'}}
                >
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={sendToWhatsApp} className="space-y-4 xs:space-y-6" noValidate>
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm xs:text-base font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border-2 border-gray-200 rounded-xl xs:rounded-2xl p-3 xs:p-4 text-sm xs:text-base transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300"
                    placeholder="Enter your full name"
                    value={name} 
                    onChange={e=>setName(e.target.value)} 
                    required
                    aria-describedby="name-error"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm xs:text-base font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border-2 border-gray-200 rounded-xl xs:rounded-2xl p-3 xs:p-4 text-sm xs:text-base transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300"
                    placeholder="Enter your email address"
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    required
                    aria-describedby="email-error"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm xs:text-base font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    className="w-full border-2 border-gray-200 rounded-xl xs:rounded-2xl p-3 xs:p-4 text-sm xs:text-base h-28 xs:h-32 sm:h-40 transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 resize-none"
                    placeholder="Tell us about your inquiry..."
                    value={message} 
                    onChange={e=>setMessage(e.target.value)} 
                    required
                    aria-describedby="message-error"
                  />
                </div>

                <div className="flex flex-col xs:flex-row gap-2 xs:gap-4">
                  <button 
                    type="submit"
                    className="flex-1 px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base font-bold text-white rounded-xl xs:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    style={{
                      background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                    aria-label="Send message via WhatsApp"
                  >
                    <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
                    </svg>
                    <span>Send via WhatsApp</span>
                  </button>

                  <button 
                    type="button"
                    onClick={copyToClipboard}
                    className="px-4 xs:px-6 py-3 xs:py-4 text-sm xs:text-base font-semibold text-blue-600 bg-blue-50 border-2 border-blue-200 rounded-xl xs:rounded-2xl transition-all duration-300 hover:bg-blue-100 hover:border-blue-300 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    style={{fontFamily: 'Poppins, sans-serif'}}
                    aria-label="Copy message to clipboard"
                  >
                    <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy</span>
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Map and School Info */}
          <aside className="order-1 lg:order-2" aria-label="School information and location">
            {/* School Information Card */}
            <section 
              className="rounded-2xl xs:rounded-3xl p-4 xs:p-6 sm:p-8 mb-6 xs:mb-8 shadow-2xl border border-white/20"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(25px)',
                WebkitBackdropFilter: 'blur(25px)', // Safari support
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'
              }}
              aria-label="Campus information"
            >
              
              <div className="flex items-center mb-4 xs:mb-6">
                <div 
                  className="w-8 h-8 xs:w-10 xs:h-10 rounded-xl flex items-center justify-center mr-3"
                  style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 
                  className="text-lg xs:text-xl sm:text-2xl font-bold" 
                  style={{fontFamily: 'Poppins, sans-serif', color: '#1e293b'}}
                >
                  Visit Our Campus
                </h2>
              </div>

              <address className="space-y-3 xs:space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <div 
                    className="w-5 h-5 xs:w-6 xs:h-6 rounded-full mt-0.5 flex items-center justify-center flex-shrink-0"
                    style={{background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)'}}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm xs:text-base">Address</p>
                    <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
                      B-153, Sindh Baloch Cooperative Housing Society,<br />
                      Block-12, Gulistan-e-Jauhar,<br />
                      Karachi 75290
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div 
                    className="w-5 h-5 xs:w-6 xs:h-6 rounded-full mt-0.5 flex items-center justify-center flex-shrink-0"
                    style={{background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)'}}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm xs:text-base">WhatsApp</p>
                    <a 
                      href="tel:+923355114051"
                      className="text-gray-600 text-xs xs:text-sm hover:text-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded"
                      aria-label="Call +92 335 511 4051"
                    >
                      +92 335 511 4051
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div 
                    className="w-5 h-5 xs:w-6 xs:h-6 rounded-full mt-0.5 flex items-center justify-center flex-shrink-0"
                    style={{background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'}}
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 xs:w-4 xs:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm xs:text-base">School Hours</p>
                    <p className="text-gray-600 text-xs xs:text-sm">Monday - Friday: 8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </address>
            </section>

            {/* Map Container */}
            <section 
              className="rounded-2xl xs:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
              style={{boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)'}}
              aria-label="School location map"
            >
              <div className="relative">
                {/* Map Header */}
                <div 
                  className="absolute top-0 left-0 right-0 z-10 p-3 xs:p-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(96, 165, 250, 0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)' // Safari support
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-sm xs:text-base" style={{fontFamily: 'Poppins, sans-serif'}}>
                        Quark School Location
                      </h3>
                      <p className="text-blue-100 text-xs xs:text-sm">Gulistan-e-Jauhar, Karachi</p>
                    </div>
                    <a 
                      href="https://maps.google.com/?q=Quark+School+B-153+Sindh+Baloch+Cooperative+Housing+Society+Block-12+Gulistan-e-Jauhar+Karachi+75290"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 xs:px-4 py-1.5 xs:py-2 bg-white/20 hover:bg-white/30 rounded-lg xs:rounded-xl text-white text-xs xs:text-sm font-semibold transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500"
                      aria-label="Open Quark School location in Google Maps"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>

                {/* Embedded Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3844458!2d67.1131!3d24.9037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f40c6d3e4a5%3A0x123456789abcdef!2sGulistan-e-Jauhar%20Block%2012%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  className="xs:h-80 sm:h-96 border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quark School location map"
                />
              </div>
            </section>
          </aside>
        </div>  
        
        <section aria-label="Enrollment information">
          <EnrollCard/>
        </section>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        type="button"
        onClick={openWhatsAppChat}
        className="fixed bottom-4 xs:bottom-6 right-4 xs:right-6 w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl z-50 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-3xl animate-bounce focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        style={{
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          animation: 'bounce 2s infinite'
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.863 3.488"/>
        </svg>
      </button>

      <style jsx>{`
        /* Custom responsive breakpoints */
        @media (min-width: 280px) {
          .xs\\:px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
          .xs\\:py-8 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
          .xs\\:mb-10 { margin-bottom: 2.5rem !important; }
          .xs\\:w-16 { width: 4rem !important; }
          .xs\\:h-16 { height: 4rem !important; }
          .xs\\:mb-6 { margin-bottom: 1.5rem !important; }
          .xs\\:w-8 { width: 2rem !important; }
          .xs\\:h-8 { height: 2rem !important; }
          .xs\\:text-3xl { font-size: 1.875rem !important; }
          .xs\\:text-base { font-size: 1rem !important; }
          .xs\\:gap-8 { gap: 2rem !important; }
          .xs\\:rounded-3xl { border-radius: 1.5rem !important; }
          .xs\\:p-6 { padding: 1.5rem !important; }
          .xs\\:w-10 { width: 2.5rem !important; }
          .xs\\:h-10 { height: 2.5rem !important; }
          .xs\\:text-xl { font-size: 1.25rem !important; }
          .xs\\:space-y-6 > * + * { margin-top: 1.5rem !important; }
          .xs\\:rounded-2xl { border-radius: 1rem !important; }
          .xs\\:p-4 { padding: 1rem !important; }
          .xs\\:text-sm { font-size: 0.875rem !important; }
          .xs\\:h-32 { height: 8rem !important; }
          .xs\\:px-8 { padding-left: 2rem !important; padding-right: 2rem !important; }
          .xs\\:py-4 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
          .xs\\:w-6 { width: 1.5rem !important; }
          .xs\\:h-6 { height: 1.5rem !important; }
          .xs\\:space-y-4 > * + * { margin-top: 1rem !important; }
          .xs\\:bottom-6 { bottom: 1.5rem !important; }
          .xs\\:right-6 { right: 1.5rem !important; }
          .xs\\:w-14 { width: 3.5rem !important; }
          .xs\\:h-14 { height: 3.5rem !important; }
          .xs\\:w-7 { width: 1.75rem !important; }
          .xs\\:h-7 { height: 1.75rem !important; }
          .xs\\:h-80 { height: 20rem !important; }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-8px,0);
          }
          70% {
            transform: translate3d(0,-4px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px rgba(37, 211, 102, 0.4);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Form focus states */
        .focus\\:ring-4:focus {
          box-shadow: 0 0 0 4px var(--tw-ring-color);
        }

        /* Improved button hover effects */
        button:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  )
}