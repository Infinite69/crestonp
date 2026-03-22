
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const mainHeroImage = PlaceHolderImages.find(img => img.id === 'hero-main');
  const subHero1 = PlaceHolderImages.find(img => img.id === 'hero-sub1');
  const subHero2 = PlaceHolderImages.find(img => img.id === 'hero-sub2');

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

        <div className="grid grid-cols-2 gap-4 h-[600px] hidden md:grid">
          <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-border">
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
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              {subHero1 && (
                <Image 
                  src={subHero1.imageUrl} 
                  alt={subHero1.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={subHero1.imageHint}
                />
              )}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              {subHero2 && (
                <Image 
                  src={subHero2.imageUrl} 
                  alt={subHero2.description} 
                  fill 
                  className="object-cover"
                  data-ai-hint={subHero2.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
