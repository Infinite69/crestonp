import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We meet to discuss your goals, style preferences, budget, and timeline for the project.',
  },
  {
    number: '02',
    title: 'Design Planning',
    description: 'Our team develops comprehensive 2D and 3D layouts, color palettes, and material selections.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Professional management of contractors and suppliers to bring the design to life with precision.',
  },
];

export default function Process() {
  return (
    <section className="py-32 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">How We Bring Your Dream Home to Life</h3>
            <p className="text-muted-foreground text-lg">
              We follow a structured and transparent approach to ensure every project is delivered on time, within budget, and above expectations.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </div>
                <div className="space-y-2 pt-2">
                  <h4 className="text-2xl font-bold">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
