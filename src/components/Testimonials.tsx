import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Creston Projects transformed our dull living room into a sophisticated, modern masterpiece. Their attention to detail is unmatched.",
    author: "Ananya Sharma",
    role: "Homeowner, Vasant Kunj",
  },
  {
    text: "Working with the team was seamless. They understood our style immediately and delivered a workspace that truly inspires our team.",
    author: "Rohan Mehra",
    role: "CEO, TechInnovate",
  },
  {
    text: "Exceptional lighting design! It changed the entire mood of our terrace. Highly professional and creative designers.",
    author: "Sanjay Gupta",
    role: "Architect",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">What Our Clients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-lg bg-background relative overflow-hidden">
              <CardContent className="p-10 pt-16">
                <Quote className="absolute top-8 left-10 w-12 h-12 text-primary/5 -rotate-12" />
                <p className="text-lg italic text-muted-foreground mb-8 relative z-10">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-bold text-lg">{t.author}</div>
                  <div className="text-sm text-primary">{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
