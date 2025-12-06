import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
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
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden relative z-10"
        >
          <div className="bg-charcoal p-6 flex justify-between items-center text-white">
            <h3 className="text-xl font-serif">Book Your Stay</h3>
            <button onClick={onClose} className="hover:text-gold transition-colors">
              <X />
            </button>
          </div>

          <div className="p-6 md:p-8">
            {step === 1 ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Dates</label>
                  <div className="flex gap-4">
                    <div className="relative w-1/2">
                        <Calendar className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input type="date" className="w-full border border-gray-300 rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                    </div>
                    <div className="relative w-1/2">
                        <Calendar className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                        <input type="date" className="w-full border border-gray-300 rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
                    </div>
                  </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                   <select className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none">
                     <option>1 Adult</option>
                     <option>2 Adults</option>
                     <option>2 Adults, 1 Child</option>
                     <option>Family (4+)</option>
                   </select>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Room Type</label>
                   <select className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none">
                     <option>Standard Room</option>
                     <option>Deluxe Suite</option>
                     <option>Executive Family</option>
                   </select>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-charcoal text-white py-3 rounded-lg font-bold uppercase tracking-wide hover:bg-gold hover:text-charcoal transition-colors mt-4"
                >
                  Check Availability
                </button>
              </div>
            ) : (
               <div className="text-center py-8">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Calendar size={32} />
                 </div>
                 <h4 className="text-2xl font-serif text-charcoal mb-2">Rooms Available!</h4>
                 <p className="text-gray-600 mb-6">Redirecting you to our secure payment gateway...</p>
                 <button className="bg-gold text-charcoal px-8 py-3 rounded-lg font-bold w-full animate-pulse">
                   Proceed to Payment
                 </button>
                 <button onClick={() => setStep(1)} className="text-xs text-gray-400 underline mt-4">Back to search</button>
               </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;