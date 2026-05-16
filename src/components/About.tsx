import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import drSumanImg from "../assets/images/regenerated_image_1778415979485.jpg";
import drGopalImg from "../assets/images/regenerated_image_1778235663660.jpg";
import mrDeepakImg from "../assets/images/regenerated_image_1778679514018.jpg";
import { Button } from "./ui/Button";

const doctors = [
  {
    name: "Dr. Suman Garg",
    degree: "B.D.S, Dental Surgeon",
    specialization: "Dental Specialist",
    bio: "With a degree from Jodhpur and a strong foundation built in government hospital service, Dr. Suman Garg brings over 20,000 patient clinical experiences to her practice. Now working at Allied Health Plus, she is an integral part of a network of four clinics across Jaipur, offering comprehensive expertise in all dental procedures.",
    image: drSumanImg,
    highlights: [
      "20,000+ Successful Patient Cases",
      "Graduate of Jodhpur University",
      "Former Govt. Hospital Practitioner",
      "Comprehensive Dental Expert",
    ],
  },
  {
    name: "Dr. Gopal Krishna",
    degree: "MBBS, MS - Ophthalmology",
    specialization: "Eye Specialist",
    bio: "Dr. Gopal Krishna is a highly respected eye specialist in Jaipur, dedicated to providing comprehensive eye care with compassion, precision, and excellence. Known for his patient-friendly approach and commitment to vision health, he focuses on improving both eye health and quality of life through advanced treatments and personalized care for every patient.",
    image: drGopalImg,
    highlights: [
      "Comprehensive Eye Care Expert",
      "Advanced Surgical Precision",
      "Patient-Friendly Approach",
      "Trusted by Families in Jaipur",
    ],
  },
  {
    name: "Mr. Deepak Garg",
    degree: "Healthcare Entrepreneur & Dental Hygienist",
    specialization: "Preventive Healthcare",
    bio: "Mr. Deepak Garg is a passionate healthcare entrepreneur and dental hygienist known for his dedication to patient care, preventive healthcare, and clinical excellence. Through Allied Health Plus, he aims to deliver trusted, compassionate, and advanced healthcare services for every patient.",
    image: mrDeepakImg,
    highlights: [
      "Visionary Healthcare Explorer",
      "Dental Hygiene Expert",
      "Patient-Centric Leadership",
      "Modern Healthcare Solutions",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900/50 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-700 dark:text-blue-400 font-bold uppercase text-[10px] tracking-widest px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-full inline-block mb-4"
          >
            ALLIED HEALTH PLUS HOSPITAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-black dark:text-white mb-6 transition-colors duration-500"
          >
            Meet Our <span className="text-blue-600 dark:text-blue-500">Specialists Area</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed transition-colors duration-500"
          >
            Our team of dedicated medical experts brings together decades of experience in Dental, Skin, and Eye care, providing world-class healthcare services in the heart of Jaipur.
          </motion.p>
        </div>

        <div className="flex flex-col gap-32">
          {doctors.map((doctor, dIdx) => (
            <div 
              key={doctor.name} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                dIdx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: dIdx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white dark:border-slate-800 transition-colors duration-500">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className={`w-full object-cover transition-opacity duration-500 opacity-95 dark:opacity-85 ${dIdx === 1 ? 'h-[450px] md:h-[704px]' : dIdx === 2 ? 'h-[680px] md:h-[1200px]' : 'h-full'}`}
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -bottom-10 ${dIdx % 2 === 0 ? '-right-10' : '-left-10'} w-64 h-64 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl -z-0 opacity-50 dark:opacity-30`} />
                <div className={`absolute top-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block min-w-[240px] ${
                  dIdx % 2 === 1 ? '-right-12' : '-left-12'
                }`}>
                   <p className="text-blue-600 dark:text-blue-400 font-bold uppercase text-[9px] tracking-[0.2em] mb-2">{doctor.specialization}</p>
                   <p className="text-black dark:text-white font-bold text-xl">{doctor.name}</p>
                   <p className="text-gray-500 dark:text-slate-400 text-sm font-medium">{doctor.degree}</p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block mb-4">
                      {doctor.name.startsWith('Mr.') ? 'Our Founder' : 'Lead Specialist'}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-black dark:text-white leading-tight transition-colors duration-500">
                      Expert Care in <span className="text-blue-600 dark:text-blue-500">{doctor.specialization}</span>
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base border-l-4 border-blue-100 dark:border-blue-900/50 pl-6 italic transition-colors duration-500"
                  >
                    "{doctor.bio}"
                  </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {doctor.highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 font-bold text-xs">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="rounded-full px-10 shadow-lg shadow-blue-100 dark:shadow-none"
                      onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                    Book Appointment with {doctor.name.split(' ')[1]}
                  </Button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
