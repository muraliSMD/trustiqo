"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useState } from "react";

export default function ServiceLayout({ title, subtitle, description, icon: Icon, color, features, benefits }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={title} 
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${color} opacity-20 blur-[100px] rounded-full pointer-events-none`} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-start max-w-3xl"
          >
            <div className={`p-3 rounded-2xl bg-gradient-to-br ${color} mb-6`}>
               <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">{description}</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Book a Free Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Features */}
           <div>
             <h2 className="text-2xl font-bold mb-8">Key Features</h2>
             <div className="space-y-6">
               {features.map((feature, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5"
                 >
                   <div className="mt-1">
                     <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                   </div>
                   <div>
                     <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                     <p className="text-gray-400 text-sm">{feature.desc}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
           </div>

           {/* Benefits / Image Placeholder */}
           <div className="relative">
             <div className="sticky top-32 p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 min-h-[400px] flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Why Choose Our {title}?</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                   <p className="text-cyan-200 text-sm italic">
                     "{subtitle}"
                   </p>
                </div>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
