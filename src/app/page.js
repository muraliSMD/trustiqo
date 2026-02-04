"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  School, 
  Trophy, 
  BarChart3, 
  Receipt, 
  ShoppingCart, 
  Smartphone, 
  ArrowRight,
  CheckCircle2,
  Calendar
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const services = [
  {
    title: "School Management",
    description: "Comprehensive ERP solutions for educational institutions. Streamline admissions, attendance, grading, and parent communication.",
    icon: School,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Sports Academy & Tournaments",
    description: "Manage players, organize tournaments, track performance, and automated scheduling for sports academies.",
    icon: Trophy,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "CRM Solutions",
    description: "Boost customer relationships with intelligent lead tracking, sales automation, and detailed analytics.",
    icon: BarChart3,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Billing & Invoicing",
    description: "Simplifying financial operations with automated billing, gst compliance, and expense management.",
    icon: Receipt,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "E-Commerce",
    description: "Scalable online stores with seamless payment integrations, inventory management, and marketing tools.",
    icon: ShoppingCart,
    color: "from-violet-500 to-purple-500"
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for Android and iOS providing superior user experiences.",
    icon: Smartphone,
    color: "from-cyan-500 to-blue-500"
  }
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const openQuoteModal = () => {
    setCurrentService(null);
    setIsModalOpen(true);
  };

  const openDemoModal = (serviceName) => {
    setCurrentService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName={currentService}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full user-select-none pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[100px] rounded-full user-select-none pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
               <span className="text-xs font-medium text-cyan-300 tracking-wide uppercase">Trustiqo Business Solutions</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
               Build Your Digital <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                 Empire Today
               </span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We provide cutting-edge web & mobile applications for Schools, Sports Academies, CRM, and E-commerce businesses.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={openQuoteModal}
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 group"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="#services" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-medium">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
               Tailored technology services designed to scale your business operations and enhance user engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 overflow-hidden transition-all flex flex-col h-full"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-20`} />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                   <button 
                     onClick={() => openDemoModal(service.title)}
                     className="w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:text-cyan-400"
                   >
                     <Calendar className="w-4 h-4" />
                     Book for Demo
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
           <div className="flex-1 relative">
              <div className="relative z-10 p-8 rounded-3xl bg-gradient-to-b from-zinc-800 to-black border border-white/10">
                {/* Mockup / Abstract Vis */}
                <div className="aspect-video bg-zinc-900 rounded-xl overflow-hidden flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-grid-white/[0.02]" />
                    <span className="text-zinc-700 font-mono text-sm relative z-10">[ Premium Digital Experience ]</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
           </div>

           <div className="flex-1">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovating for the Future</h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-6">
               At Trustiqo, we believe in the power of technology to transform businesses. Our team of expert developers and designers work tirelessly to deliver software that is not just functional, but a joy to use.
             </p>
             <ul className="space-y-4">
               {[
                 "Client-Centric Approach",
                 "Agile Development Methodology",
                 "24/7 Dedicated Support",
                 "Scalable Cloud Architecture"
               ].map((item) => (
                 <li key={item} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                     <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                   </div>
                   <span className="text-gray-200">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
             
             <div className="relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
               <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                 Let's discuss how our solutions can help you achieve your goals. Reach out to us for a free consultation.
               </p>
               
               <div className="flex flex-col md:flex-row justify-center gap-4">
                 <button 
                   onClick={openQuoteModal}
                   className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                 >
                   Get a Quote
                 </button>
                 <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors bg-black/20 backdrop-blur-md">
                   Whatsapp Us
                 </button>
               </div>
             </div>
             
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
