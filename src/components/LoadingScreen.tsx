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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="bg-white p-10 rounded-[3.5rem] shadow-[0_0_100px_rgba(37,99,235,0.3)] mb-12 border border-blue-500/20">
             <Logo className="scale-150" isDark={false} showTagline={true} />
          </div>
          
          <div className="flex flex-col items-center text-center px-6 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-white font-display font-medium text-3xl md:text-4xl tracking-[0.05em]">
                Excellence in <span className="text-blue-500 font-bold">Healthcare</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <p className="text-slate-400 text-xs uppercase tracking-[0.5em] font-medium">
                Hospital Network
              </p>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
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
