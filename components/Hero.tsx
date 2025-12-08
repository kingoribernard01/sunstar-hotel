import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

export default function Hero({ onBookNow }: HeroProps) {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Background Image with Cinematic Zoom Effect */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
          alt="Sunstar Hotel Nairobi Exterior"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Readability - Gradient from bottom/charcoal to top */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/50 to-charcoal/60 mix-blend-multiply" />
        {/* Vignette for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.7)_100%)]" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-block rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-xs font-bold tracking-[0.25em] text-gold mb-8 uppercase shadow-lg">
             Welcome to Nairobi
          </span>
          
          {/* Main Heading */}
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight drop-shadow-lg">
            Affordable Comfort <br />
            <span className="text-gold italic relative inline-block mt-2">
              Near the City
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/90 md:text-xl font-light leading-relaxed drop-shadow-md">
            Experience the perfect blend of business convenience and leisure relaxation. Your sanctuary in the heart of the Garden Estate.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={onBookNow}
              className="neumorphic-button hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] relative w-full sm:w-auto overflow-hidden rounded-full bg-gold px-10 py-4 text-charcoal font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white tracking-widest uppercase text-sm"
            >
              Book Your Stay
            </button>
            <a
              href="#rooms"
              className="group relative w-full sm:w-auto overflow-hidden rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-10 py-4 text-white font-bold shadow-lg transition-all duration-300 hover:bg-white hover:text-charcoal tracking-widest uppercase text-sm flex items-center justify-center gap-2"
            >
              <span>View Rooms</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors cursor-pointer z-20 flex flex-col items-center gap-2"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={24} />
      </motion.a>
    </section>
  );
}
