import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onBookNow: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gold rounded-tr-xl rounded-bl-xl flex items-center justify-center">
            <span className="text-charcoal font-serif font-bold text-xl">S</span>
          </div>
          <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            SUNSTAR <span className="text-gold font-sans font-light text-sm block md:inline md:ml-2 tracking-widest">NAIROBI</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-gold text-sm uppercase tracking-wider font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onBookNow}
            className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-6 py-2 rounded-full transition-all duration-300 text-sm font-bold uppercase tracking-wide"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-t border-white/10 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg font-medium border-b border-white/5 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              onBookNow();
              setIsMobileMenuOpen(false);
            }}
            className="bg-gold text-charcoal w-full py-3 rounded-lg font-bold uppercase tracking-wide"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;