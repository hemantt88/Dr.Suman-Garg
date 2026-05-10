import { motion } from "motion/react";
import { MessageCircle, Phone, Instagram, Facebook, Twitter, ShieldCheck } from "lucide-react";

import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-slate-900 overflow-hidden relative">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
       <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
             <Logo isDark={true} showTagline={true} />
             <p className="text-[10px] text-slate-500 max-w-xs ml-0 md:ml-12">Premium multi-specialty healthcare services in Vaishali Nagar, Jaipur. Committed to excellence in dental, skin, and eye care.</p>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-2 text-[10px] text-slate-400">
             <div className="flex gap-4 items-center mb-2">
               <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
               <span className="hidden md:inline text-slate-800">|</span>
               <span className="text-blue-600 font-bold">24H EMERGENCY SERVICE</span>
             </div>
             <div>© 2024 Allied Health Plus Hospital. All Rights Reserved.</div>
           </div>
         </div>
       </div>
     </footer>
  );
}
