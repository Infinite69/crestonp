
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import MoodBoardTool from '@/components/MoodBoardTool';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-studio');

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <MoodBoardTool />
      <section id="about" className="py-32 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-white/70 font-medium tracking-widest uppercase text-sm">About Creston Projects</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Crafting Environments That Tell Your Story</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Based in the heart of Chattarpur, New Delhi, Creston Projects is a newly established studio bringing fresh perspectives to the luxury interior design industry. We believe that true luxury is about the harmony, comfort, and character of a space.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Our multidisciplinary team of designers and craftsmen work together to create bespoke environments that are as functional as they are beautiful, tailored to the modern urban lifestyle.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {aboutImage && (
              <Image 
                src={aboutImage.imageUrl} 
                alt={aboutImage.description}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
