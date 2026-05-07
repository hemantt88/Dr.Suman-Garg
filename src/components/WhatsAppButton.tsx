import { motion } from "motion/react";
import { MessageSquare, Phone } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    const text = "Hi Dr. Suman Garg Clinic, I'd like to book an appointment.";
    window.open(`https://wa.me/917014811667?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Call Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("tel:7014811667")}
        className="w-14 h-14 bg-white text-slate-800 rounded-full flex items-center justify-center shadow-xl border border-slate-100 relative"
      >
        <Phone size={24} />
      </motion.button>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl relative group"
      >
        <MessageSquare size={32} />
        <span className="absolute right-full mr-4 bg-white text-navy-premium px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      </motion.button>
    </div>
  );
}
