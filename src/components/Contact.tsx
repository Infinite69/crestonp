import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-medium tracking-widest uppercase text-sm">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Let's Discuss Your Project</h3>
              <p className="text-muted-foreground text-lg">
                Ready to transform your space? Visit us at our studio or reach out via phone or email to schedule a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us</div>
                  <div className="font-bold text-lg">+91 8595013139</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-bold text-lg">Chattarpur Extension, New Delhi - 110074</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <Link href="https://www.instagram.com/crestonprojects/" target="_blank" className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <div>
                  <div className="text-sm text-muted-foreground">Instagram</div>
                  <div className="font-bold text-lg">@crestonprojects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-10 rounded-3xl border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input placeholder="John Doe" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input placeholder="+91 00000 00000" className="bg-background" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <Textarea placeholder="How can we help you?" className="bg-background min-h-[150px]" />
              </div>
              <Button className="w-full h-14 bg-primary text-white text-lg font-bold">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
