"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Instagram, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In a real app, you would send this data to a database or email service
    // For now, we simulate a successful API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Inquiry Sent Successfully",
      description: "Thank you for reaching out! A Creston designer will contact you shortly.",
    });

    // Reset form after a delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold">Inquiry Received</h4>
                <p className="text-muted-foreground max-w-xs">
                  We've received your message. One of our lead designers will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" required className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-background" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input placeholder="+91 00000 00000" required className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Message</label>
                  <Textarea placeholder="How can we help you?" required className="bg-background min-h-[150px]" />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full h-14 bg-primary text-white text-lg font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
