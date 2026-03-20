import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Hero() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

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
          <div className="absolute top-0 right-0 w-4/5 h-4/5 z-0 overflow-hidden shadow-2xl rounded-lg">
             <Image 
                src={images.find(i => i.id === 'hero-main')?.imageUrl || ''}
                alt="Main Hero"
                fill
                className="object-cover"
                data-ai-hint="luxury interior"
             />
          </div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-10 overflow-hidden shadow-2xl rounded-lg border-8 border-background">
            <Image 
                src={images.find(i => i.id === 'hero-sub1')?.imageUrl || ''}
                alt="Sub Hero 1"
                fill
                className="object-cover"
                data-ai-hint="minimal bedroom"
             />
          </div>
          <div className="absolute top-1/4 -right-10 w-1/3 h-1/3 z-20 overflow-hidden shadow-2xl rounded-lg border-8 border-background">
            <Image 
                src={images.find(i => i.id === 'hero-sub2')?.imageUrl || ''}
                alt="Sub Hero 2"
                fill
                className="object-cover"
                data-ai-hint="modern kitchen"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
