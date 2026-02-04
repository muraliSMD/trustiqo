import Link from "next/link";
import Image from "next/image";
import { Rocket, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="relative h-12 w-36 md:h-22 md:w-64">
               <Image 
                 src="/trustiqo-logo.png" 
                 alt="Trustiqo" 
                 fill
                 className="object-contain object-left"
                 unoptimized
               />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with intelligent, scalable, and premium software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Services</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

           {/* Services */}
           <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">School Management</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Sports Academy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">CRM Systems</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>hello@trustiqo.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                 <MapPin className="w-4 h-4 text-cyan-500" />
                 <span>Tech Park, Innovation City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Trustiqo Business Solutions. All rights reserved.
            </p>
            <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
