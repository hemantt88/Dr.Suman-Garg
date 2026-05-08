import { motion } from "motion/react";
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

const services = [
  // Dental Services
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless RCT with modern instrumentation for a healthy tooth structure.",
    category: "Dental",
    icon: Smile,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Braces & Aligners",
    desc: "Invisible aligners and high-tech braces to give you that perfectly aligned smile.",
    category: "Dental",
    icon: ShieldCheck,
    color: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    title: "Dental Implants",
    desc: "Permanent and natural-looking tooth replacement with premium clinical standards.",
    category: "Dental",
    icon: Activity,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  // Skin Care Services
  {
    title: "Laser Hair Removal",
    desc: "Safe and effective permanent hair reduction using world-class laser technology.",
    category: "Skin",
    icon: Sparkles,
    color: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    title: "Chemical Peels",
    desc: "Medical-grade peels to rejuvenate skin texture, treat acne, and reduce pigmentation.",
    category: "Skin",
    icon: Zap,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    title: "Anti-Aging Treatments",
    desc: "Advanced fillers and therapies to restore youthfulness and skin elasticity.",
    category: "Skin",
    icon: Target,
    color: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  // Hair Transplant Services
  {
    title: "FUE Hair Transplant",
    desc: "Modern stitch-less hair restoration technique for natural-looking density.",
    category: "Hair",
    icon: Scissors,
    color: "bg-amber-50",
    iconColor: "text-amber-600"
  },
  {
    title: "PRP Therapy",
    desc: "Platelet-Rich Plasma treatment to stimulate hair follicles and prevent hair loss.",
    category: "Hair",
    icon: Droplets,
    color: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    title: "Beard Transplant",
    desc: "Precise hair grafting to achieve a fuller, more defined beard and mustache.",
    category: "Hair",
    icon: User,
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  // Eye Care Services
  {
    title: "Cataract Surgery",
    desc: "Micro-incision suture-less surgery with premium intraocular lens implantation.",
    category: "Eye Care",
    icon: Eye,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600"
  },
  {
    title: "LASIK Vision Correction",
    desc: "Advanced laser technology to eliminate the need for glasses and contact lenses.",
    category: "Eye Care",
    icon: Glasses,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Dry Eye Management",
    desc: "Specialized therapies and diagnostic tool-driven care for chronic dry eye relief.",
    category: "Eye Care",
    icon: Monitor,
    color: "bg-blue-50",
    iconColor: "text-blue-600"
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 font-display font-medium tracking-[0.2em] uppercase text-xs mb-4"
          >
            Premium Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-4"
          >
            Multi-specialty healthcare for the <span className="text-cyan-600">whole family</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm leading-relaxed"
          >
            Experience luxury healthcare with modern multi-specialty solutions designed for your comfort.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:shadow-lg hover:border-cyan-100 flex flex-col items-center text-center relative"
            >
              <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-[8px] font-bold uppercase tracking-wider text-slate-400">
                {service.category}
              </div>
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                service.color
              )}>
                <service.icon className={cn("w-6 h-6", service.iconColor)} />
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                {service.desc}
              </p>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 hover:text-cyan-700 transition-colors cursor-pointer"
              >
                Book Now →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
