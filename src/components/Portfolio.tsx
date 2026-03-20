import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Portfolio() {
  const portfolioItems = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Projects</h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            A showcase of our most ambitious and elegant projects across New Delhi and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl bg-muted ${
                index === 1 ? 'md:row-span-2' : ''
              }`}
              style={{ minHeight: index === 1 ? '600px' : '400px' }}
            >
              <Image 
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Residential</span>
                <h4 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{item.description}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
