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
      className="relative w-full overflow-hidden bg-charcoal pb-10 pt-32 font-light text-white antialiased md:pb-16 md:pt-20 min-h-screen flex flex-col justify-center"
      style={{
        background: "linear-gradient(135deg, #1F2937 0%, #0f131a 100%)",
      }}
    >
      {/* Abstract Background Gradients */}
      <div
        className="absolute right-0 top-0 h-1/2 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.15) 0%, rgba(31, 41, 55, 0) 60%)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-1/2 w-1/2 -scale-x-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.15) 0%, rgba(31, 41, 55, 0) 60%)",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block rounded-full border border-gold/30 px-3 py-1 text-xs font-bold tracking-widest text-gold bg-gold/5">
             NAIROBI, KENYA
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl font-serif">
            Affordable Comfort <br />
            <span className="text-gold italic">Near the City</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl font-sans">
            Experience the perfect blend of business convenience and leisure relaxation at Sunstar Hotel.
            Your sanctuary in the heart of Nairobi.
          </p>

          <div className="mb-14 sm:mb-0 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={onBookNow}
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-gold/30 sm:w-auto font-bold tracking-wide"
            >
              Book Your Stay
            </button>
            <a
              href="#rooms"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>View Rooms</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-12 md:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
           {/* Abstract Glow under image */}
           <div className="w-full flex h-20 md:h-32 relative overflow-hidden justify-center items-end">
             <div className="absolute bottom-0 w-2/3 h-full bg-gold/10 blur-[80px] rounded-t-full"></div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
              alt="Sunstar Hotel Exterior"
              className="h-[300px] md:h-[600px] w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Overlay Gradient for integration with background */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-60 z-20 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white transition-colors animate-bounce hidden md:block cursor-pointer z-20"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
}