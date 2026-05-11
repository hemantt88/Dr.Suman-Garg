import { motion } from "motion/react";

import { Logo } from "./ui/Logo";

export function LoadingScreen() {
  return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        onAnimationComplete={() => document.body.style.overflow = "auto"}
        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="mb-12">
             <Logo variant="full" className="shadow-2xl" />
          </div>
          
          <div className="flex flex-col items-center text-center px-6 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-white font-display font-medium text-3xl md:text-4xl tracking-[0.05em]">
                Excellence in <span className="text-[#2EB1C2] font-bold">Healthcare</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-[#71C259] rounded-full animate-pulse" />
              <p className="text-slate-400 text-xs uppercase tracking-[0.5em] font-medium">
                Hospital Network
              </p>
              <div className="w-2 h-2 bg-[#71C259] rounded-full animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
  
        <div className="absolute bottom-20 w-80 h-[2px] bg-white/5 overflow-hidden rounded-full">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-1/2 bg-blue-500"
          />
        </div>
      </motion.div>
  );
}
