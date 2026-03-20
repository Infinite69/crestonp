import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Gallery() {
  const galleryItems = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-medium tracking-widest uppercase text-sm">Design Inspiration</h2>
          <h3 className="text-4xl font-bold tracking-tight">Our Aesthetic Vision</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a growing studio, we draw inspiration from global design trends to bring the best of modern luxury to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative h-[400px] overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <Image 
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                data-ai-hint={item.imageHint}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <p className="text-white text-center font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}