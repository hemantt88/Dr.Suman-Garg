import { motion } from "motion/react";
import { MessageCircle, Phone, Instagram, Facebook, Twitter, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="h-16 bg-white border-t border-slate-100 p-x-10 flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-400">
        <div>© 2024 Allied Health Plus Hospital. Vaishali Nagar, Jaipur.</div>
        <div className="flex gap-4 items-center">
          <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
          <span className="hidden md:inline">|</span>
          <span className="text-cyan-600 font-medium">Open 24 Hours Emergency Service</span>
        </div>
      </div>
    </footer>
  );
}
