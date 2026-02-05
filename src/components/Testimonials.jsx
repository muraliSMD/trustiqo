"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Principal, St. Xavier's School",
    text: "Trustiqo's School Management System completely transformed how we handle admissions and fees. It's a game-changer.",
    image: "/avatars/1.png" // Placeholder, will fallback or use initials if needed
  },
  {
    name: "Sarah Jenkins",
    role: "Director, Elite Sports Academy",
    text: "The tournament management feature is incredible. We saved weeks of manual work organizing our annual league.",
    image: "/avatars/2.png"
  },
  {
    name: "Amit Patel",
    role: "CEO, TechFlow Solutions",
    text: "Their CRM solution is intuitive and powerful. Our sales team's productivity increased by 40% in just two months.",
    image: "/avatars/3.png"
  },
  {
    name: "Priya Sharma",
    role: "Founder, GreenEarth Organics",
    text: "Setting up our e-commerce store was effortless. The design is beautiful and the backend is very easy to manage.",
    image: "/avatars/4.png"
  },
  {
    name: "Vikram Singh",
    role: "Manager, City Club",
    text: "Billing and inventory used to be a headache. Now it's automated. I can't imagine going back to the old way.",
    image: "/avatars/5.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black overflow-hidden relative">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-400">See what our clients have to say about us.</p>
      </div>

      <div className="flex relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1000] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
           }}
        >
          {/* Double the array to create seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-zinc-900/50 border border-white/5 flex-shrink-0 whitespace-normal hover:bg-zinc-800/50 transition-colors"
            >
              <p className="text-gray-300 mb-6 text-lg leading-relaxed italic">"{t.text}"</p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                    {t.name[0]}
                 </div>
                 <div>
                   <h4 className="font-bold text-white">{t.name}</h4>
                   <p className="text-sm text-gray-500">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
