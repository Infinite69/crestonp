
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
import Stats from '@/components/Stats';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Compass, Feather, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-studio');

  const philosophy = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Precision",
      text: "Every millimeter is calculated to serve both function and aesthetic."
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Harmony",
      text: "We balance raw materials with soft textures for a timeless feel."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Integrity",
      text: "Uncompromising quality from structural bones to final finishes."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Bespoke",
      text: "No templates. Only unique visions tailored to your narrative."
    }
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Redesigned About Section */}
      <section id="about" className="py-32 px-6 bg-primary text-white overflow-hidden relative">
        {/* Subtle background texture effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 text-white/60 tracking-[0.3em] uppercase text-xs font-bold">
                  <span className="w-8 h-px bg-white/30"></span>
                  <span>The Creston Story</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9]">
                  Architecting <br />
                  <span className="text-white/40">Silent Luxury.</span>
                </h2>
                <p className="text-white/80 text-xl leading-relaxed max-w-2xl font-light">
                  Based in Chattarpur, New Delhi, Creston Projects is a sanctuary for architectural innovation. We don't just decorate rooms; we curate environments that breathe with their owners.
                </p>
              </div>

              {/* Philosophy Grid */}
              <div className="grid sm:grid-cols-2 gap-8 pt-8">
                {philosophy.map((item, idx) => (
                  <div key={idx} className="group p-6 border border-white/10 hover:border-white/30 transition-all duration-500 bg-white/[0.02]">
                    <div className="text-white/40 group-hover:text-white transition-colors duration-500 mb-4">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Stats Column */}
            <div className="lg:col-span-5 space-y-12">
              <div className="relative h-[500px] lg:h-[650px] group">
                {/* Decorative border frame */}
                <div className="absolute -inset-4 border border-white/10 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700"></div>
                
                <div className="relative h-full overflow-hidden shadow-2xl">
                  {aboutImage && (
                    <Image 
                      src={aboutImage.imageUrl} 
                      alt={aboutImage.description}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                      data-ai-hint={aboutImage.imageHint}
                    />
                  )}
                  {/* Overlay badge */}
                  <div className="absolute bottom-8 right-8 bg-white text-primary p-6 shadow-xl">
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Established</p>
                    <p className="text-2xl font-black">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats component placed for visual break */}
      <Stats />
      
      <Portfolio />
      <Process />
      <MoodBoardTool />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
