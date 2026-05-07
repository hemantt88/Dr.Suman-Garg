import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

const highlights = [
  "Trusted dentist in Vaishali Nagar",
  "Gentle and patient-friendly approach",
  "Advanced dental treatments",
  "Modern equipment & sterilization standards",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-soft-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/src/assets/images/regenerated_image_1778149349238.webp" 
                alt="Dr. Suman Garg" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dental-turquoise/30 rounded-[40px] -z-0" />
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block">
               <p className="text-navy-premium font-bold text-lg">Dr. Suman Garg</p>
               <p className="text-gray-500 text-sm">BDS, Dental Surgeon</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-cyan-700 font-bold uppercase text-[10px] tracking-widest px-3 py-1 bg-cyan-50 rounded-full w-fit mb-4 block"
              >
                MEET YOUR DENTIST
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6"
              >
                Advanced care with a <span className="text-cyan-600">human touch</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 leading-relaxed text-sm md:text-base"
              >
                Dr. Suman Garg is a renowned dentist in Jaipur, specialized in advanced dental care with over 15 years of excellence. Her philosophy centers around painless dentistry and treating every patient like family.
              </motion.p>
            </div>

            <div className="grid gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-3 p-y-2 rounded-xl border border-slate-100"
                >
                  <div className="text-cyan-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-bold text-xs">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
