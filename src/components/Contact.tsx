import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";

const contactCards = [
  {
    title: "Visit Us",
    info: "Maharana Pratap Marg, Vaishali Marg W, near Rangoli Gardens, Jaipur",
    icon: MapPin,
    actionLabel: "Get Directions",
    action: () => window.open("https://maps.google.com/?q=Maharana+Pratap+Marg,+Vaishali+Marg+W,+near+Rangoli+Gardens,+Jaipur,+Rajasthan+302024", "_blank")
  },
  {
    title: "Call Us",
    info: "+91 7014811667",
    icon: Phone,
    actionLabel: "Call Now",
    action: () => window.open("tel:7014811667")
  },
  {
    title: "Email Us",
    info: "drsumangargclinic@gmail.com",
    icon: Mail,
    actionLabel: "Send Email",
    action: () => window.open("mailto:drsumangargclinic@gmail.com")
  },
  {
    title: "Working Hours",
    info: "Monday - Sunday: 24 Hours Open",
    icon: Clock,
    actionLabel: "Book Appointment",
    action: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-12">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-tighter block mb-2">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 mb-6">
                Let's start your <span className="text-cyan-600">smile journey</span>
              </h2>
              <p className="text-slate-500 max-w-md text-sm">
                Have questions or need an emergency consultation? Reach out to our specialized care team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.slice(0, 4).map((card, index) => (
                <motion.div
                   key={card.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex justify-between items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all group"
                >
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-tighter">{card.title}</div>
                    <div className="text-sm font-bold text-slate-800">{card.info}</div>
                  </div>
                  <div className="flex gap-2">
                    <div 
                      onClick={card.action}
                      className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      <card.icon size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1234!2d75.7!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzA0LjQiTiA3NcKwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125 focus:grayscale-0 transition-all duration-500"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
