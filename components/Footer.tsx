import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you shortly.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="bg-charcoal text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3">Contact Us</h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Have a question or need assistance with your booking? Our team is available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-serif mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gold ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gold ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                  placeholder="Booking Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gold ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-gold text-charcoal font-bold py-4 rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col h-full">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                    <Phone size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Phone</h4>
                  <div className="text-white/70 space-y-1 text-sm">
                    <p>+254 702 587909</p>
                    <p>020 315082 / 0738 314165</p>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                    <Mail size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Email</h4>
                  <div className="text-white/70 space-y-1 text-sm">
                    <p>info@sunstarhotelnairobi.com</p>
                    <p>reservations@sunstarhotelnairobi.com</p>
                  </div>
               </div>

               <div className="space-y-4 md:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-2">
                    <MapPin size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Location</h4>
                  <p className="text-white/70 text-sm">
                    Garden Estate, off Thika Superhighway Exit 7, along Garden Estate Road, Nairobi 00100
                  </p>
               </div>
            </div>

            {/* Map Embed */}
            <div className="flex-grow min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-charcoal/50">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.887600863071!2d36.8587!3d-1.2374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1675a3174241%3A0x6b8253106222019!2sSunstar%20Hotel%20Nairobi!5e0!3m2!1sen!2ske!4v1709900000000!5m2!1sen!2ske" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, minHeight: '300px' }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Sunstar Hotel Location"
                 className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>
          </div>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40">
           
           <div className="flex items-center gap-2">
              <span className="text-xl font-serif font-bold text-white">SUNSTAR <span className="text-gold">HOTEL</span></span>
           </div>

           <div className="flex flex-wrap justify-center gap-8">
              <a href="#about" className="hover:text-gold transition-colors">About</a>
              <a href="#rooms" className="hover:text-gold transition-colors">Rooms</a>
              <a href="#services" className="hover:text-gold transition-colors">Services</a>
              <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
           </div>

           <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
           </div>
        </div>
        
        <div className="text-center mt-8 text-xs text-white/20">
          &copy; {new Date().getFullYear()} Sunstar Hotel Nairobi. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;