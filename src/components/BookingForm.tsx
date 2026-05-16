import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Send, CheckCircle, Phone, Mail, User, BookOpen, Calendar, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";

export function BookingForm() {
  const [step, setStep] = useState(1); // 1: Form, 2: Success
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "General Consultation",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(2);
    }, 1000);
  };

  const handleWhatsApp = () => {
    const text = `Hi Allied Health Plus Hospital, I would like to book an appointment for ${formData.treatment}. My name is ${formData.name}.`;
    window.open(`https://wa.me/917014811667?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-white dark:bg-slate-900 shadow-sm overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row transition-all duration-500">
          {/* Left Info Column */}
          <div className="lg:w-1/3 bg-black dark:bg-slate-950 p-12 text-white flex flex-col justify-between relative overflow-hidden transition-colors duration-500">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" />
             
             <div>
               <h3 className="text-2xl font-display font-bold mb-6">Quick Access</h3>
               <p className="text-slate-400 dark:text-slate-500 text-sm mb-12 transition-colors duration-500">Our clinic is open 8 am to 11:30 pm daily for all your multi-specialty healthcare needs.</p>
               
               <div className="space-y-8">
                 <div className="flex items-center gap-6 group cursor-pointer" onClick={() => window.open("tel:7014811667")}>
                    <div className="w-12 h-12 bg-slate-900 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors border border-slate-700">
                      <Phone size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] sm:text-lg font-bold transition-colors group-hover:text-blue-400 whitespace-nowrap flex items-center gap-x-1.5 sm:gap-x-2">
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-slate-500 font-medium">Direct Call:</span>
                        <span>+91 70148 11667</span>
                      </p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6 group cursor-pointer" onClick={handleWhatsApp}>
                    <div className="w-12 h-12 bg-slate-800 dark:bg-slate-900 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors border border-slate-700">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">WhatsApp Chat</p>
                      <p className="text-lg font-bold transition-colors group-hover:text-green-400">Secure Booking</p>
                    </div>
                 </div>
               </div>
             </div>

              <div className="mt-12 pt-12 border-t border-slate-800">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                   <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide uppercase">Open 8 AM to 11:30 PM</span>
                 </div>
              </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:w-2/3 p-12 lg:p-16 relative bg-white dark:bg-slate-900 transition-colors duration-500">
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-10"
                >
                  <div className="space-y-2">
                    <h2 className="text-3xl font-display font-bold text-black dark:text-white flex items-center gap-2 transition-colors duration-500">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Quick Booking
                    </h2>
                    <p className="text-slate-400 dark:text-slate-500 text-sm">Fill the form and we'll confirm within 15 minutes.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <input 
                        required
                        type="tel" 
                        placeholder="Phone Number"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <select 
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none appearance-none"
                        value={formData.treatment}
                        onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                      >
                        <optgroup label="Dental Care" className="dark:bg-slate-900">
                          <option>Root Canal Treatment</option>
                          <option>Braces & Aligners</option>
                          <option>Dental Implants</option>
                        </optgroup>
                        <optgroup label="Skin Care" className="dark:bg-slate-900">
                          <option>Laser Hair Removal</option>
                          <option>Chemical Peels</option>
                          <option>Anti-Aging Treatments</option>
                        </optgroup>
                        <optgroup label="Hair Transplant" className="dark:bg-slate-900">
                          <option>FUE Hair Transplant</option>
                          <option>PRP Therapy</option>
                          <option>Beard Transplant</option>
                        </optgroup>
                        <optgroup label="Eye Care" className="dark:bg-slate-900">
                          <option>Cataract Surgery</option>
                          <option>LASIK Vision Correction</option>
                          <option>Dry Eye Management</option>
                        </optgroup>
                        <option className="dark:bg-slate-900">General Consultation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <input 
                        required
                        type="date" 
                        className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 dark:text-white transition-all outline-none"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" variant="primary" size="lg" className="w-full !rounded-xl py-4 h-auto font-bold">
                        Confirm Appointment
                      </Button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center justify-center h-full gap-8 py-12"
                >
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 10, stiffness: 100 }}
                      className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-bold text-black dark:text-white transition-colors duration-500">Success!</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs transition-colors duration-500">Thank you, {formData.name}. We will call you at {formData.phone} shortly.</p>
                  </div>
                  <Button variant="outline" size="md" onClick={() => setStep(1)} className="!rounded-xl px-12">
                    Done
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
