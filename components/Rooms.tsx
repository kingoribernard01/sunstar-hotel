import React from 'react';
import { Room } from '../types';
import { Wifi, Tv, Coffee, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const rooms: Room[] = [
  {
    id: '1',
    name: 'Standard Room',
    description: 'A cozy retreat designed for comfort and functionality. Perfect for solo travelers or short business stays.',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
    amenities: ['Free WiFi', 'Flat Screen TV', 'Work Desk'],
    capacity: 2
  },
  {
    id: '2',
    name: 'Deluxe Suite',
    description: 'Spacious elegance with a lounge area and premium amenities for a luxurious stay. Ideal for couples.',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    amenities: ['King Bed', 'Balcony', 'Mini Bar', 'Bathtub'],
    capacity: 2
  },
  {
    id: '3',
    name: 'Family Executive',
    description: 'Ample space for families, featuring two beds and a dedicated seating area for shared moments.',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1000&auto=format&fit=crop',
    amenities: ['2 Queen Beds', 'Dining Area', 'City View'],
    capacity: 4
  }
];

const Rooms: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  return (
    <section id="rooms" className="py-24 bg-slate-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231F2937' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-bold tracking-widest uppercase text-xs border border-gold/30 px-3 py-1 rounded-full bg-gold/5">Accommodation</span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-4">Rooms & Suites</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 font-light text-lg">
            Thoughtfully designed spaces that blend modern aesthetics with absolute comfort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                   <div className="bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg inline-flex items-baseline gap-1">
                      <span className="text-xs font-medium">KES</span>
                      <span className="text-xl font-serif font-bold">{room.price.toLocaleString()}</span>
                      <span className="text-xs opacity-80">/ night</span>
                   </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-serif text-charcoal group-hover:text-gold transition-colors duration-300">{room.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed border-b border-gray-100 pb-6">{room.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                   {room.amenities.map((am, i) => (
                     <span key={i} className="text-xs text-charcoal/70 font-medium flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                       {i === 0 ? <Wifi size={12}/> : i === 1 ? <Tv size={12}/> : <Coffee size={12}/>}
                       {am}
                     </span>
                   ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-400 flex items-center gap-1.5 font-medium">
                    <User size={14}/> Max {room.capacity} Guests
                  </span>
                  <button 
                    onClick={onBookNow}
                    className="flex items-center gap-2 bg-charcoal text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg hover:bg-gold hover:text-charcoal transition-all duration-300 group/btn"
                  >
                    Book Now
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;