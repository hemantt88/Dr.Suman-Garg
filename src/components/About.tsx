import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/Button";

const doctors = [
  {
    name: "MR. DEEPAK GARG",
    degree: "Dental Hygienist",
    specialization: "Founder & CEO",
    bio: "Deepak Garg is the visionary Founder and CEO of Allied Health Plus Hospital (AHPH). As a skilled Dental Hygienist, he has dedicated his career to establishing a healthcare network that prioritizes patient comfort and advanced medical care across Jaipur.",
    image: "/src/assets/images/regenerated_image_1778150926850.png",
    highlights: [
      "Founder & CEO of AHPH",
      "Expert Dental Hygienist",
      "Visionary Healthcare Leader",
      "Committed to Patient Excellence",
    ],
  },
  {
    name: "Dr. Suman Garg",
    degree: "B.D.S, Dental Surgeon",
    specialization: "Dental Specialist",
    bio: "With a degree from Jodhpur and a strong foundation built in government hospital service, Dr. Suman Garg brings over 20,000 patient clinical experiences to her practice. Now working at Allied Health Plus, she is an integral part of a network of four clinics across Jaipur, offering comprehensive expertise in all dental procedures.",
    image: "/src/assets/images/regenerated_image_1778239744123.png",
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
    image: "/src/assets/images/regenerated_image_1778235663660.jpg",
    highlights: [
      "Comprehensive Eye Care Expert",
      "Advanced Surgical Precision",
      "Patient-Friendly Approach",
      "Trusted by Families in Jaipur",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-soft-gray overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-700 font-bold uppercase text-[10px] tracking-widest px-4 py-1.5 bg-cyan-50 rounded-full inline-block mb-4"
          >
            ALLIED HEALTH PLUS HOSPITAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-slate-800 mb-6"
          >
            Meet Our <span className="text-cyan-600">Specialists Area</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
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
                <div className="aspect-[4/5] md:aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className={`w-full object-cover ${dIdx === 1 ? 'h-[704px]' : dIdx === 2 ? 'h-[1200px]' : 'h-full'}`}
                  />
                </div>
                {/* Decorative Elements */}
                <div className={`absolute -bottom-10 ${dIdx % 2 === 0 ? '-right-10' : '-left-10'} w-64 h-64 bg-cyan-100/50 rounded-full blur-3xl -z-0 opacity-50`} />
                <div className={`absolute top-1/2 -translate-y-1/2 glass-card p-6 rounded-2xl shadow-xl z-20 hidden md:block min-w-[240px] ${
                  dIdx % 2 === 1 ? '-right-12' : '-left-12'
                }`}>
                   <p className="text-cyan-600 font-bold uppercase text-[9px] tracking-[0.2em] mb-2">{doctor.specialization}</p>
                   <p className="text-navy-premium font-bold text-xl">{doctor.name}</p>
                   <p className="text-gray-500 text-sm font-medium">{doctor.degree}</p>
                </div>
              </motion.div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest block mb-4">Lead Specialist</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800 leading-tight">
                      Expert Care in <span className="text-cyan-600">{doctor.specialization}</span>
                    </h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 leading-relaxed text-sm md:text-base border-l-4 border-cyan-100 pl-6 italic"
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
                      className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 shrink-0">
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
                  className="pt-2"
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="rounded-full px-10 shadow-lg shadow-cyan-100"
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
