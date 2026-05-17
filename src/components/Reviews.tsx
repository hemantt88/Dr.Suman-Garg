import { motion } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import patientImg2 from "../assets/images/regenerated_image_1778911566519.jpg";
import patientImg3 from "../assets/images/regenerated_image_1778911788744.webp";
import patientImg4 from "../assets/images/regenerated_image_1778911915453.webp";
import patientImg5 from "../assets/images/regenerated_image_1778912027136.webp";
import patientImg6 from "../assets/images/regenerated_image_1778912219921.webp";
import patientImg7 from "../assets/images/regenerated_image_1778913774391.webp";

const testimonials = [
  {
    name: "Anjali Gupta",
    role: "RCT Patient",
    text: "I was terrified of root canal treatment, but the advanced painless RCT here changed my perspective. Modern equipment and a very gentle approach. Highly recommended!",
    stars: 5,
    image: patientImg2
  },
  {
    name: "Suresh Khanna",
    role: "Cataract (Phaco) Patient",
    text: "Had my cataract surgery using the Phaco system. The procedure was quick, and my vision was restored within days. Excellent eye care facility in Jaipur.",
    stars: 5,
    image: patientImg3
  },
  {
    name: "Meera Deshmukh",
    role: "Retina & Fundus Exam Patient",
    text: "The retina and fundus examination was very detailed. The doctors explained every aspect of my eye health clearly. Very tech-forward diagnostic approach.",
    stars: 5,
    image: patientImg4
  },
  {
    name: "Sumit Singhania",
    role: "Laser Hair Removal Patient",
    text: "Started my advance laser hair removal sessions here. The technology is safe and effective on Indian skin. I'm already seeing great results after just three sittings.",
    stars: 5,
    image: patientImg5
  },
  {
    name: "Rohit Kapoor",
    role: "Aesthetics Patient",
    text: "The Botox and Fillers treatment by the specialists here gave me a subtle, youthful glow. They definitely have an artistic touch for facial aesthetics.",
    stars: 5,
    image: patientImg6
  },
  {
    name: "Karan Johar",
    role: "Hair PRP Patient",
    text: "I visited for Hair PRP (Rich Plasma Therapy) to combat thinning. The procedure was comfortable and I've noticed significant improvement in my hair quality.",
    stars: 5,
    image: patientImg7
  },
];

export function Reviews() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-dental-turquoise dark:text-blue-400 font-display font-medium tracking-[0.2em] uppercase text-xs mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-premium dark:text-white transition-colors duration-500">
            Patient <span className="italic font-serif font-medium text-dental-turquoise dark:text-blue-400">Stories</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-center bg-soft-gray dark:bg-slate-900 rounded-[40px] p-8 md:p-16 relative border dark:border-slate-800 transition-all duration-500">
            <div className="absolute top-8 right-8 text-dental-blue dark:text-blue-900/40 opacity-50">
               <Quote size={80} />
            </div>

            <div className="w-24 h-24 md:w-32 md:h-32 bg-navy-premium dark:bg-blue-600 rounded-[32px] overflow-hidden flex-shrink-0 transition-colors duration-500">
               <img 
                 src={testimonials[active].image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonials[active].name}`} 
                 alt={testimonials[active].name} 
                 className="w-full h-full object-cover"
               />
            </div>

            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-1">
                {[...Array(testimonials[active].stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-200 leading-relaxed font-serif italic transition-colors duration-500">
                "{testimonials[active].text}"
              </p>
              <div>
                <p className="font-bold text-navy-premium dark:text-white text-lg transition-colors duration-500">{testimonials[active].name}</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm uppercase tracking-widest">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-navy-premium dark:border-white/20 text-navy-premium dark:text-white flex items-center justify-center hover:bg-navy-premium dark:hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-navy-premium dark:border-white/20 text-navy-premium dark:text-white flex items-center justify-center hover:bg-navy-premium dark:hover:bg-blue-600 hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
