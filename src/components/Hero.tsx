import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import doctorImg from "../assets/images/regenerated_image_1778415984568.jpg";
import clinicImg from "../assets/images/regenerated_image_1778151041509.webp";
import { Button } from "./ui/Button";
import { Phone, Calendar, ArrowRight, Star } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Background Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] opacity-40 dark:opacity-20"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-slate-200 dark:bg-slate-800/20 rounded-full blur-[80px] opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] dark:opacity-[0.03]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full w-fit shadow-sm border border-blue-100 dark:border-blue-800/50"
            >
              <span className="text-xs font-bold tracking-tight uppercase">
                #1 Healthcare in Jaipur
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1] tracking-tight transition-colors duration-500">
                Your Perfect Care for <br />
                <span className="text-blue-600 dark:text-blue-500">Skin, Eyes & Smiles</span> <br />
                Starts Here
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed transition-colors duration-500">
                Advanced & gentle dental, skin, and eye care. Experience luxury healthcare with our modern medical solutions at Allied Health Plus Hospital.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gap-2 group !rounded-2xl"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 !rounded-2xl"
                onClick={() => window.open("tel:7014811667")}
              >
                Call Now
              </Button>
            </div>

            <div className="bg-black dark:bg-slate-900 text-white p-6 rounded-3xl flex items-center gap-4 mt-8 shadow-xl border border-slate-800 dark:border-slate-700 transition-colors duration-500">
              <div className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-slate-800 flex-shrink-0 overflow-hidden border-2 border-blue-400 dark:border-blue-500">
                <img 
                  src={doctorImg} 
                  alt="Dr. Suman Garg" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Dr. Suman Garg</h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 leading-snug tracking-tight">B.D.S, DENTAL SURGEON • 20,000+ PATIENTS • VAISHALI NAGAR, JAIPUR</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl aspect-[4/5] bg-gray-100 dark:bg-slate-900 group border dark:border-slate-800 transition-colors duration-500">
              <img 
                src={clinicImg} 
                alt="Modern Dental Clinic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 dark:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black/80 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-3xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                   <Star size={16} className="text-blue-600 dark:text-blue-400" />
                 </div>
                 <span className="text-sm font-bold text-navy-premium dark:text-white">5.0 Rated</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400">Highest rated dental care on Google Reviews in Jaipur.</p>
            </motion.div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cyan-600 rounded-full opacity-20 dark:opacity-10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
