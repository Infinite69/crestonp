import React from 'react';

const stats = [
  { label: 'Projects Completed', value: '400+' },
  { label: 'Happy Clients', value: '600+' },
  { label: 'Unique Designs', value: '100+' },
  { label: 'Years Experience', value: '12+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
