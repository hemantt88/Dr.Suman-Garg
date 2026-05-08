import { motion } from "motion/react";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onAnimationComplete={() => document.body.style.overflow = "auto"}
      className="fixed inset-0 z-[200] bg-slate-900 flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center relative mb-12 shadow-2xl"
      >
        <span className="text-cyan-600 font-display font-bold text-4xl">A</span>
        <div className="absolute inset-0 border-4 border-cyan-400 rounded-2xl animate-spin" style={{ animationDuration: "3s" }} />
      </motion.div>
      
      <div className="flex flex-col items-center text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-display font-bold text-xl md:text-2xl tracking-[0.2em] uppercase"
        >
          ALLIED HEALTH PLUS HOSPITAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-cyan-400 text-[10px] uppercase tracking-[0.4em] font-medium mt-4"
        >
          PREMIUM HEALTHCARE SERVICES
        </motion.p>
      </div>

      <div className="mt-20 w-48 h-[1px] bg-white/10 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-full h-full bg-cyan-400"
        />
      </div>
    </motion.div>
  );
}
