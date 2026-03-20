import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter">CRESTON</span>
              <span className="text-xs font-light tracking-[0.3em] uppercase opacity-60">Projects</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Bespoke interior design studio specialized in creating luxurious, minimalist, and functional spaces.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">Projects Portfolio</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="space-y-3 text-white/60">
              <li><Link href="#" className="hover:text-white transition-colors">Residential Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Commercial Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Lighting Solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Outdoor Landscapes</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Newsletter</h4>
            <p className="text-white/60">Subscribe for the latest design trends and projects.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border-none px-4 py-2 w-full focus:ring-1 focus:ring-white outline-none rounded-l-md"
              />
              <button className="bg-white text-primary px-4 py-2 font-bold rounded-r-md">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Creston Projects. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
