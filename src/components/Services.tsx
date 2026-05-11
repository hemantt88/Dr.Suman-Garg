import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smile, 
  ShieldCheck, 
  Activity,
  Sparkles, 
  Zap,
  Target,
  Droplets,
  Scissors,
  User,
  Eye,
  Glasses,
  Monitor
} from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["Dental", "Eye Care", "Skin", "Hair"];

const services = [
  // Dental Services
  {
    title: "Dental Implants",
    desc: "Permanent and natural-looking tooth replacement with premium clinical standards.",
    category: "Dental",
    icon: Activity,
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Root Canal Treatment (RCT)",
    desc: "Advanced painless RCT with modern instrumentation for a healthy tooth structure.",
    category: "Dental",
    icon: ShieldCheck,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Smile Makeover",
    desc: "Comprehensive cosmetic dentistry to transform your smile with veneers and more.",
    category: "Dental",
    icon: Smile,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Braces / Orthodontic Treatment",
    desc: "Advanced braces and aligners for perfect dental alignment and oral health.",
    category: "Dental",
    icon: Target,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    title: "Laser Gum Depigmentation",
    desc: "Modern laser treatment for healthy-looking, pink gums with minimal discomfort.",
    category: "Dental",
    icon: Zap,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Ultrasonic Scaling & Teeth Whitening",
    desc: "Professional cleaning and whitening for a brighter, healthier, and refreshed smile.",
    category: "Dental",
    icon: Sparkles,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  // Eye Care Services
  {
    title: "Advanced Cataract Surgery (Phaco System)",
    desc: "Precision micro-incision surgery using advanced Phaco technology for rapid visual recovery.",
    category: "Eye Care",
    icon: Eye,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    title: "Complete Glaucoma Care",
    desc: "Early detection and comprehensive management of glaucoma through advanced diagnostics.",
    category: "Eye Care",
    icon: ShieldCheck,
    color: "bg-slate-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Retina & Fundus Examination",
    desc: "Detailed evaluation of the eye's internal health including retinal imaging and screening.",
    category: "Eye Care",
    icon: Activity,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Computerised Eye Testing",
    desc: "Highly accurate and fast vision testing using state-of-the-art computerized diagnostic tools.",
    category: "Eye Care",
    icon: Monitor,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "YAG Laser Treatment",
    desc: "Specialized non-invasive laser procedures for secondary cataracts and vision correction.",
    category: "Eye Care",
    icon: Zap,
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Orbit & Oculoplasty Care",
    desc: "Cosmetic and functional care for eyelids, eye sockets, and tear drainage systems.",
    category: "Eye Care",
    icon: Target,
    color: "bg-blue-50",
    iconColor: "text-blue-700"
  },
  // Skin Care Services
  {
    title: "Advanced Laser Hair Removal",
    desc: "Safe and effective permanent hair reduction using world-class laser technology.",
    category: "Skin",
    icon: Sparkles,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Botox, Fillers & Thread Lift",
    desc: "Non-surgical facial rejuvenation to restore volume, smooth wrinkles, and lift sagging skin.",
    category: "Skin",
    icon: Target,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "HydraFacial & PRP Skin Rejuvenation",
    desc: "Revitalizing treatments for deep hydration and natural cellular repair using platelet-rich plasma.",
    category: "Skin",
    icon: Droplets,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  {
    title: "Advanced Pigmentation & Melasma Treatment",
    desc: "Specialized clinical protocols for effectively reducing stubborn spots and uneven skin tone.",
    category: "Skin",
    icon: Zap,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Laser Tattoo, Mole & Skin Tag Removal",
    desc: "Precision laser procedures for safe and efficient removal of unwanted skin marks and tattoos.",
    category: "Skin",
    icon: Scissors,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Acne & Scar Management",
    desc: "Comprehensive solutions using medical-grade therapies to clear acne and minimize scarring.",
    category: "Skin",
    icon: ShieldCheck,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
  // Hair Transplant Services
  {
    title: "Hair Transplant (By Advance Morras Forte Tech)",
    desc: "Premium hair restoration using the advanced Morras Forte technique for maximum density and natural results.",
    category: "Hair",
    icon: Scissors,
    color: "bg-slate-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Hair PRP (Rich Plasma Therapy)",
    desc: "Natural hair growth stimulation using platelet-rich plasma to strengthen follicles and reduce thinning.",
    category: "Hair",
    icon: Droplets,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Anti Dandruff Therapy",
    desc: "Specialized clinical scalp treatments to effectively eliminate dandruff and restore scalp health.",
    category: "Hair",
    icon: Sparkles,
    color: "bg-slate-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Hair Loss Treatment By Micro Needling",
    desc: "Advanced micro-needling therapy to activate dormant follicles and improve nutrient absorption for hair growth.",
    category: "Hair",
    icon: Target,
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  },
];

export function Services() {
  const [activeCategory, setActiveCategory] = useState("Dental");

  const filteredServices = services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-8 h-[1px] bg-blue-600" />
            <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em]">
              Premium Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-medium text-black mb-6 tracking-tight"
          >
            Multi-specialty healthcare for the <span className="text-blue-600 italic">whole family</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-500 text-sm leading-relaxed mb-10 max-w-2xl px-4"
          >
            Experience luxury healthcare with modern multi-specialty solutions designed for your comfort. Select a specialty below to view our specific treatments.
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-3 px-4 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-200 border",
                  activeCategory === cat 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105 border-blue-600" 
                    : "bg-white text-slate-500 hover:bg-slate-50 border-slate-100 hover:border-slate-200"
                )}
              >
                {cat === "Hair" ? "Hair Transplant" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              className="contents"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="group p-6 md:p-8 rounded-3xl glass-card transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/50 flex flex-col items-center text-center relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600/0 to-transparent group-hover:via-blue-600/20 transition-all" />
                  
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm",
                    service.color
                  )}>
                    <service.icon className={cn("w-7 h-7", service.iconColor)} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-black mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <button 
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-auto px-4 py-2 rounded-full bg-slate-50 text-[9px] font-bold uppercase tracking-widest text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300"
                  >
                    Book Appointment →
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
