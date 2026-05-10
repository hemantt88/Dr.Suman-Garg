import { motion } from "motion/react";

export function LoadingScreen() {
  return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => document.body.style.overflow = "auto"}
        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 12 }}
            className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center relative mb-8 shadow-[0_0_50px_rgba(37,99,235,0.3)]"
          >
            <span className="text-black font-display font-black text-5xl">A</span>
            <div className="absolute inset-[-4px] border-2 border-blue-500 rounded-[2.2rem] opacity-20" />
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
               className="absolute inset-[-8px] border border-dashed border-blue-400 rounded-[2.5rem] opacity-30" 
            />
          </motion.div>
          
          <div className="flex flex-col items-center text-center px-6 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-white font-display font-bold text-2xl md:text-3xl tracking-[0.1em]">
                ALLIED HEALTH PLUS <span className="text-blue-500">HOSPITAL</span>
              </h2>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-slate-500 text-[10px] uppercase tracking-[0.5em] font-medium mt-4"
            >
              Excellence in Healthcare
            </motion.p>
          </div>
        </motion.div>
  
        <div className="absolute bottom-20 w-64 h-[2px] bg-white/5 overflow-hidden rounded-full">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-blue-600"
          />
        </div>
      </motion.div>
  );
}
