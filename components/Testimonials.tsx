import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "James Mwangi",
    role: "Corporate Client",
    content: "Sunstar Hotel hosted our annual strategic planning meeting. The conference facilities are top-notch, with reliable high-speed internet and excellent catering. The staff went above and beyond to ensure our event ran smoothly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "International Traveler",
    content: "A wonderful surprise in Nairobi! The rooms are spacious, modern, and spotlessly clean. We particularly enjoyed the peaceful ambiance of the Garden Estate location—close to the city but away from the noise.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Wanjiku Kamau",
    role: "Wedding Guest",
    content: "Attended a beautiful wedding reception here. The gardens are manicured to perfection, and the food was simply delicious. The 'Stars Bar' also serves some of the best cocktails I've had in Nairobi.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")',
          backgroundRepeat: 'repeat' 
        }}>
      </div>
      
      {/* Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-wider">
             <Star size={12} fill="currentColor" />
             <span>Trusted by 10,000+ Guests</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Guest Stories</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our valued guests have to say about their experience at Sunstar Hotel Nairobi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:bg-white/10 transition-colors duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-charcoal shadow-lg group-hover:scale-110 transition-transform">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "" : "text-white/20"} 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 italic mb-8 leading-relaxed">
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold/30">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-serif tracking-wide">{review.name}</h4>
                  <span className="text-xs text-gold uppercase tracking-wider">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
           <a href="#contact" className="text-white/60 hover:text-gold text-sm transition-colors border-b border-white/20 hover:border-gold pb-0.5">
             Read more reviews on TripAdvisor
           </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
