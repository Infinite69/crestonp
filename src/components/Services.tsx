import React from 'react';
import { Lamp, Sofa, Trees } from 'lucide-react';

const services = [
  {
    icon: <Lamp className="w-8 h-8" />,
    title: 'Lighting Design',
    description: 'Expertly crafted lighting solutions that set the mood and highlight architectural beauty.',
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: 'Interior Design',
    description: 'Comprehensive interior solutions from concept to execution for residential and commercial spaces.',
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: 'Outdoor Design',
    description: 'Bespoke landscapes and terrace designs that bring nature closer to your urban living.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-primary font-medium tracking-widest uppercase text-sm">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Expertise in Every Detail</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a full spectrum of design services to transform your vision into a stunning reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-10 rounded-2xl border border-border group hover:border-primary transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
