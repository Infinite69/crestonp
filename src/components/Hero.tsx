
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const mainHeroImage = PlaceHolderImages.find(img => img.id === 'hero-main');

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm">Luxury Interior Design</h2>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Elevate <br />
              <span className="text-primary">Every Space.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              At Creston Projects, we create bespoke interior environments that reflect your personality and enhance your lifestyle through minimalist luxury.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-primary text-white h-14 px-8 rounded-none">
              <Link href="#projects">Start Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary text-primary h-14 px-8 rounded-none hover:bg-primary/5">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[600px] w-full hidden md:block">
          <div className="absolute inset-0 overflow-hidden shadow-2xl rounded-2xl border-border">
             {mainHeroImage && (
               <Image 
                  src={mainHeroImage.imageUrl}
                  alt={mainHeroImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mainHeroImage.imageHint}
               />
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
