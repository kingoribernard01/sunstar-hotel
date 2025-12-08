import React, { useState } from 'react';
import { X, Calendar, User, ChevronDown, CheckCircle, BedDouble } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative z-10"
        >
          {/* Header */}
          <div className="bg-charcoal px-8 py-6 flex justify-between items-center border-b border-white/10">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-1">Reservations</span>
              <h3 className="text-2xl font-serif text-white">Book Your Stay</h3>
            </div>
            <button 
              onClick={onClose} 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-8">
            {step === 1 ? (
              <div className="space-y-6">
                {/* Dates */}
                <div>
                  <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Check-in / Check-out</label>
                  <div className="flex gap-4">
                    <div className="relative w-1/2 group">
                        <Calendar className="absolute left-3 top-3.5 text-gold w-5 h-5 z-10" />
                        <input 
                          type="date" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-3 text-sm text-charcoal font-medium focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all cursor-pointer hover:bg-white" 
                        />
                    </div>
                    <div className="relative w-1/2 group">
                        <Calendar className="absolute left-3 top-3.5 text-gold w-5 h-5 z-10" />
                        <input 
                          type="date" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-3 text-sm text-charcoal font-medium focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all cursor-pointer hover:bg-white" 
                        />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className="relative">
                   <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Guests</label>
                   <div className="relative">
                     <User className="absolute left-3 top-3.5 text-gold w-5 h-5" />
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-10 text-sm text-charcoal font-medium focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none appearance-none transition-all hover:bg-white cursor-pointer">
                       <option>1 Adult</option>
                       <option>2 Adults</option>
                       <option>2 Adults, 1 Child</option>
                       <option>Family (4+)</option>
                     </select>
                     <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                   </div>
                </div>

                {/* Room Type */}
                <div>
                   <label className="block text-xs font-bold text-charcoal uppercase tracking-wider mb-2">Room Preference</label>
                   <div className="relative">
                     <BedDouble className="absolute left-3 top-3.5 text-gold w-5 h-5" />
                     <select className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-10 text-sm text-charcoal font-medium focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none appearance-none transition-all hover:bg-white cursor-pointer">
                       <option>Standard Room</option>
                       <option>Deluxe Suite</option>
                       <option>Executive Family</option>
                     </select>
                     <ChevronDown className="absolute right-3 top-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                   </div>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-charcoal text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-all duration-300 mt-2 shadow-lg hover:shadow-gold/20"
                >
                  Check Availability
                </button>
              </div>
            ) : (
               <div className="text-center py-10">
                 <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   transition={{ type: "spring", stiffness: 200, damping: 20 }}
                   className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-100"
                 >
                   <CheckCircle size={40} />
                 </motion.div>
                 <h4 className="text-3xl font-serif text-charcoal mb-3">Rooms Available!</h4>
                 <p className="text-gray-500 mb-8 max-w-xs mx-auto">
                   Great news! We have availability for your selected dates. Redirecting you to our secure payment gateway...
                 </p>
                 <div className="space-y-4">
                    <button className="bg-gold text-charcoal px-8 py-4 rounded-lg font-bold w-full uppercase tracking-wider hover:bg-charcoal hover:text-white transition-colors duration-300 shadow-lg">
                      Proceed to Booking
                    </button>
                    <button onClick={() => setStep(1)} className="text-xs text-gray-400 font-medium hover:text-charcoal transition-colors uppercase tracking-wide">
                      ← Modify Search
                    </button>
                 </div>
               </div>
            )}
          </div>
          
          {/* Footer Note */}
          <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Best Rate Guarantee • Instant Confirmation
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;