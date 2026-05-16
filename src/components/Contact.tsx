import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { Button } from "./ui/Button";

const contactCards = [
  {
    title: "Visit Us",
    info: "102, 1st Floor, Opp iPER Mart, Maharana Partap Marg, Vaishali Nagar, Jaipur",
    icon: MapPin,
    actionLabel: "Get Directions",
    action: () => window.open("https://www.google.com/maps/dir//Allied+Health+Plus+Hospital-+Dentist,+Skin+Care+%26+Eye+Care+in+Vaishali+Nagar,+102,+1st+Floor,+Opp+iPER+Mart,+Maharana+Partap+Marg,+Rangoli+Garden+Rd,+Vaishali+Nagar,+Jaipur,+Rajasthan+302021/@26.9096788,75.7199863,17z", "_blank")
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
    info: "alliedh8@gmail.com",
    icon: Mail,
    actionLabel: "Send Email",
    action: () => window.open("mailto:alliedh8@gmail.com")
  },
  {
    title: "Working Hours",
    info: "Monday - Sunday: 8 AM - 11:30 PM",
    icon: Clock,
    actionLabel: "Book Appointment",
    action: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 relative transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-12">
            <div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-tighter block mb-2">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-800 dark:text-white mb-6">
                Let's start your <span className="text-cyan-600 dark:text-cyan-400">smile journey</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm transition-colors duration-500">
                Have questions or need to schedule a consultation? Reach out to our specialized care team.
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
                   className="flex justify-between items-center p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 group"
                >
                  <div>
                    <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-tighter">{card.title}</div>
                    <div className="text-sm font-bold text-slate-800 dark:text-white">{card.info}</div>
                  </div>
                  <div className="flex gap-2">
                    <div 
                      onClick={card.action}
                      className="w-10 h-10 bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-600 dark:hover:bg-cyan-600 hover:text-white transition-all duration-300"
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
             className="h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800 transition-all duration-500"
          >
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.07722!2d75.7199863!3d26.9096788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db52f478a67eb%3A0x3b2ad25a363bc446!2sAllied%20Health%20Plus%20Hospital-%20Dentist%2C%20Skin%20Care%20%26%20Eye%20Care%20in%20Vaishali%20Nagar!5e0!3m2!1sen!2sin!4v1715165800000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale contrast-125 dark:invert dark:opacity-80 dark:contrast-100 focus:grayscale-0 transition-all duration-500"
             ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
