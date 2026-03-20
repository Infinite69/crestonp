import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tighter text-primary">CRESTON</span>
          <span className="text-xs font-light tracking-[0.3em] uppercase opacity-60">Projects</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90">
            <Link href="#contact">Get Consultation</Link>
          </Button>
          {/* Mobile menu could go here */}
        </div>
      </div>
    </nav>
  );
}
