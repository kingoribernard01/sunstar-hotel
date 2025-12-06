import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Eye } from 'lucide-react';

const categories = ["All", "Rooms", "Dining", "Events", "Amenities"];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop',
    category: 'Rooms',
    title: 'Executive Suite',
    description: 'Modern comfort with city views'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    category: 'Dining',
    title: 'The Stars Restaurant',
    description: 'Fine dining experience'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
    category: 'Events',
    title: 'Grand Ballroom',
    description: 'Perfect for weddings and conferences'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1582719508461-905c67377123?q=80&w=1000&auto=format&fit=crop',
    category: 'Amenities',
    title: 'Serene Gardens',
    description: 'Relax in our lush outdoor spaces'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1000&auto=format&fit=crop',
    category: 'Dining',
    title: 'Signature Cocktails',
    description: 'Served at the lounge bar'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop',
    category: 'Rooms',
    title: 'Standard Twin',
    description: 'Spacious and perfectly appointed'
  },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <span className="text-gold font-bold tracking-widest uppercase text-sm">Visual Tour</span>
             <h2 className="text-4xl md:text-5xl font-serif text-charcoal mt-2 mb-4">Gallery</h2>
             <p className="text-gray-600">
               Explore the elegance of Sunstar Hotel Nairobi. From our luxurious rooms to our state-of-the-art conference facilities, take a glimpse into the experience that awaits you.
             </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-charcoal text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-md"
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-gold text-xs font-bold uppercase tracking-wider mb-2 block">{image.category}</span>
                      <h3 className="text-white text-xl font-serif font-bold mb-1">{image.title}</h3>
                      <p className="text-white/70 text-sm mb-4">{image.description}</p>
                      <button className="flex items-center gap-2 text-white text-sm font-medium group/btn">
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-gold group-hover/btn:text-charcoal transition-colors">
                          <Eye size={16} />
                        </span>
                        View Photo
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <div className="text-center mt-12">
           <button className="inline-flex items-center gap-2 text-charcoal font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
             <Plus size={18} />
             Load More Photos
           </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
