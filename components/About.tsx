import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Award, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-slate-50 -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-gold font-bold tracking-[0.2em] uppercase text-xs">Since 2010</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-8 leading-[1.1]">
              A Sanctuary of <br/>
              <span className="italic text-gray-400">Style & Serenity.</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed font-light">
              Nestled in the lush Garden Estate, just off Thika Superhighway, Sunstar Hotel Nairobi offers a unique blend of business efficiency and leisure tranquility. We are more than just a hotel; we are your home away from home in Nairobi.
            </p>
            
            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {/* Card 1: Location */}
              <div className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2.5 bg-gold/10 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <MapPin size={20} />
                   </div>
                   <h4 className="font-serif font-bold text-charcoal text-lg">Prime Location</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Convenient access to Garden City Mall & Nairobi CBD.</p>
              </div>

              {/* Card 2: Security */}
              <div className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2.5 bg-gold/10 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <Shield size={20} />
                   </div>
                   <h4 className="font-serif font-bold text-charcoal text-lg">Secure & Private</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">24/7 security surveillance with ample private parking.</p>
              </div>

              {/* Card 3: Years */}
              <div className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2.5 bg-gold/10 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <Award size={20} />
                   </div>
                   <h4 className="font-serif font-bold text-charcoal text-lg">15+ Years</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Dedicated service excellence in the hospitality industry.</p>
              </div>

              {/* Card 4: Rating */}
              <div className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2.5 bg-gold/10 rounded-full text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <Star size={20} />
                   </div>
                   <h4 className="font-serif font-bold text-charcoal text-lg">4.8 Rating</h4>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Highly rated by guests for comfort and service.</p>
              </div>
            </div>

          </motion.div>

          {/* Image Composition */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
             {/* Main Image */}
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative z-10 w-[90%] lg:w-[85%] mr-auto lg:mr-0 group overflow-hidden rounded-sm shadow-2xl"
             >
                <img 
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sunstar Hotel Interior" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
             </motion.div>

             {/* Secondary Image (Floating) */}
             <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-[-30px] left-0 lg:left-[-30px] z-20 w-[55%] border-8 border-white shadow-xl group overflow-hidden rounded-sm"
             >
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Luxury Room Detail" 
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
             </motion.div>

             {/* Decorative Frame */}
             <div className="absolute top-8 right-8 lg:right-[-20px] w-full h-full border-2 border-gold/20 -z-0 rounded-sm" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;