import React from 'react';
import { Utensils, Wifi, Car, Briefcase, Shirt, Beer } from 'lucide-react';

const services = [
  { icon: <Utensils className="w-8 h-8"/>, title: "Fine Dining", desc: "Local and international cuisine served in an elegant setting." },
  { icon: <Beer className="w-8 h-8"/>, title: "The Stars Bar", desc: "A sophisticated lounge offering premium cocktails and wines." },
  { icon: <Briefcase className="w-8 h-8"/>, title: "Conference Halls", desc: "State-of-the-art facilities for meetings and events." },
  { icon: <Car className="w-8 h-8"/>, title: "Airport Shuttle", desc: "Convenient transfers to and from Jomo Kenyatta Airport." },
  { icon: <Wifi className="w-8 h-8"/>, title: "High-Speed WiFi", desc: "Stay connected throughout the property with fiber internet." },
  { icon: <Shirt className="w-8 h-8"/>, title: "Laundry Service", desc: "Same-day laundry and dry cleaning for your convenience." },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-charcoal text-white relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
            style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
       </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-sm">Amenities</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-3">Our Services</h2>
          <p className="max-w-2xl mx-auto mt-4 text-white/60">
            More than just a stay. We provide a complete experience tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4 text-gold p-3 bg-gold/10 rounded-full inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;