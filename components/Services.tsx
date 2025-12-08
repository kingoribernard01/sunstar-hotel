import React from 'react';
import { Utensils, Wifi, Car, Briefcase, Shirt, Beer, Clock, Wine } from 'lucide-react';
import { motion } from 'framer-motion';

const otherServices = [
  { icon: <Briefcase className="w-6 h-6"/>, title: "Conference Halls", desc: "State-of-the-art facilities for corporate meetings, workshops, and private events." },
  { icon: <Car className="w-6 h-6"/>, title: "Airport Shuttle", desc: "Hassle-free transfers to and from Jomo Kenyatta International Airport available upon request." },
  { icon: <Wifi className="w-6 h-6"/>, title: "High-Speed WiFi", desc: "Stay connected seamlessly throughout the property with our dedicated fiber internet." },
  { icon: <Shirt className="w-6 h-6"/>, title: "Laundry Service", desc: "Professional same-day laundry and dry cleaning to keep you looking your best." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-charcoal text-white relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
       </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-gold font-bold tracking-widest uppercase text-sm border border-gold/20 px-4 py-1.5 rounded-full bg-gold/5">World-Class Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white">Dining & Services</h2>
          <p className="max-w-2xl mx-auto mt-6 text-white/60 text-lg font-light leading-relaxed">
            Indulge in culinary delights and enjoy seamless conveniences designed for the modern traveler.
          </p>
        </div>

        {/* FEATURE 1: FINE DINING */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-32">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
            >
                <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                        alt="The Stars Restaurant" 
                        className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-8 left-8 flex items-center gap-3">
                        <div className="p-3 bg-gold text-charcoal rounded-full shadow-lg">
                            <Utensils size={24} />
                        </div>
                        <span className="text-white font-serif text-2xl tracking-wide">The Stars Restaurant</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 space-y-8"
            >
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Exquisite Flavors</h3>
                  <p className="text-white/70 leading-relaxed text-lg font-light">
                      Embark on a culinary journey featuring the finest local Kenyan dishes and international favorites. Our chefs use fresh, locally sourced ingredients to create masterpieces in an elegant, relaxing atmosphere.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                    <div className="flex items-start gap-3">
                        <Clock className="text-gold shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Breakfast Buffet</h4>
                            <p className="text-white/50 text-sm">06:00 AM - 10:00 AM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Clock className="text-gold shrink-0 mt-1" size={20} />
                        <div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide mb-1">All Day Dining</h4>
                            <p className="text-white/50 text-sm">11:00 AM - 10:30 PM</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-gold text-charcoal font-bold rounded-lg hover:bg-white transition-all duration-300 uppercase tracking-wide text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                        Reserve a Table
                    </button>
                    <button className="px-8 py-3 border border-white/30 text-white font-medium rounded-lg hover:border-gold hover:text-gold transition-all duration-300 uppercase tracking-wide text-sm">
                        View Sample Menu
                    </button>
                </div>
            </motion.div>
        </div>

        {/* FEATURE 2: THE STARS BAR */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-32">
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative group"
            >
                <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <img 
                        src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop" 
                        alt="The Stars Bar" 
                        className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-8 left-8 flex items-center gap-3">
                         <div className="p-3 bg-gold text-charcoal rounded-full shadow-lg">
                            <Beer size={24} />
                        </div>
                        <span className="text-white font-serif text-2xl tracking-wide">The Stars Bar</span>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 space-y-8"
            >
                <div>
                   <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Sip & Socialize</h3>
                   <p className="text-white/70 leading-relaxed text-lg font-light">
                       Unwind in style at our sophisticated lounge. Whether you prefer a rare single malt whiskey, a signature craft cocktail, or a cold Tusker, our expert mixologists are ready to serve you in a chic, relaxed atmosphere.
                   </p>
                </div>

                <div className="border-l-2 border-gold pl-6 py-3 bg-white/5 rounded-r-xl">
                    <div className="flex items-center gap-4">
                        <Clock className="text-gold" size={24} />
                         <div>
                            <h4 className="font-bold text-white text-sm uppercase tracking-wide">Open Daily</h4>
                            <p className="text-white/50 text-sm">11:00 AM - 11:00 PM</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-transparent border border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-wide text-sm flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                        <Wine size={16} />
                        View Drinks List
                    </button>
                </div>
            </motion.div>
        </div>

        {/* ESSENTIAL AMENITIES GRID */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-12">
                <h3 className="text-2xl font-serif text-white mb-2">More Comforts</h3>
                <div className="h-0.5 w-16 bg-gold mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {otherServices.map((service, idx) => (
                    <div key={idx} className="group flex flex-col items-center text-center p-4 rounded-xl transition-all duration-300 hover:bg-white/5">
                        <div className="mb-6 text-gold p-4 bg-gradient-to-br from-white/10 to-transparent rounded-full border border-white/5 group-hover:scale-110 group-hover:border-gold/30 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all duration-300">
                            {service.icon}
                        </div>
                        <h4 className="text-lg font-serif font-bold mb-3 text-white">{service.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">
                            {service.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;