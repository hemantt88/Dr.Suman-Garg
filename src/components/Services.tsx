import { motion } from "motion/react";
import { 
  Dna, 
  Smile, 
  Sparkles, 
  ShieldCheck, 
  Stethoscope, 
  Baby, 
  Trash2, 
  Activity 
} from "lucide-react";
import { cn } from "../lib/utils";

const services = [
  {
    title: "Root Canal Treatment",
    desc: "Advanced painless RCT with modern instrumentation for a healthy tooth structure.",
    icon: Stethoscope,
    color: "bg-dental-blue",
    iconColor: "text-blue-600"
  },
  {
    title: "Braces & Aligners",
    desc: "Invisible aligners and high-tech braces to give you that perfectly aligned smile.",
    icon: Dna,
    color: "bg-teal-50",
    iconColor: "text-teal-600"
  },
  {
    title: "Teeth Whitening",
    desc: "Professional teeth whitening systems for instant brightness and a radiant look.",
    icon: Sparkles,
    color: "bg-yellow-50",
    iconColor: "text-yellow-600"
  },
  {
    title: "Dental Implants",
    desc: "Permanent and natural-looking tooth replacement with premium clinical standards.",
    icon: ShieldCheck,
    color: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    title: "Smile Makeover",
    desc: "Comprehensive esthetic treatments to redesign your smile and boost confidence.",
    icon: Smile,
    color: "bg-pink-50",
    iconColor: "text-pink-600"
  },
  {
    title: "Kids Dentistry",
    desc: "Gentle and friendly dental care specifically designed for our young patients.",
    icon: Baby,
    color: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    title: "Tooth Extraction",
    desc: "Safe and quick extractions with minimum discomfort and expert precision.",
    icon: Trash2,
    color: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    title: "Dental Cleaning",
    desc: "Deep scaling and polishing to keep your gems and teeth healthy and clean.",
    icon: Activity,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600"
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
            Tailored dental solutions for the <span className="text-cyan-600">whole family</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm leading-relaxed"
          >
            Experience luxury healthcare with modern dental solutions designed for your comfort.
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
              className="group p-6 rounded-2xl glass-card transition-all duration-300 hover:shadow-lg hover:border-cyan-100 flex flex-col items-center text-center"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                service.color.replace('bg-', 'bg-').split(' ')[0] // Ensuring color classes align
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
