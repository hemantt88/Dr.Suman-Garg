import { motion } from "motion/react";
import { Shield, Sparkles, Timer, Heart, Smile } from "lucide-react";

const stats = [
  { label: "Clinic Rating", value: "5.0", icon: Shield, suffix: "Stars" },
  { label: "Modern Equipment", value: "100", icon: Timer, suffix: "%" },
  { label: "Patient Comfort", value: "24/7", icon: Heart, suffix: "Care" },
  { label: "Smiles Created", value: "5000", icon: Smile, suffix: "+" },
];

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-around items-center gap-12 flex-wrap">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] opacity-70 uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </div>
              </motion.div>
              {index < stats.length - 1 && (
                <div className="hidden lg:block w-[1px] h-12 bg-white/10 mx-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
