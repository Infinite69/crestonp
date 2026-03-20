"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aiDesignMoodBoardSuggestion, AIDesignMoodBoardOutput } from '@/ai/flows/ai-design-mood-board-suggestion';
import { Loader2, Sparkles, Paintbrush, Palette } from 'lucide-react';

export default function MoodBoardTool() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIDesignMoodBoardOutput | null>(null);
  const [formData, setFormData] = useState({
    style: 'Modern Minimalist',
    colors: 'Emerald Green and Gold',
    roomType: 'Living Room',
    additionalNotes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await aiDesignMoodBoardSuggestion(formData);
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="moodboard" className="py-32 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Design</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Generate Your AI Mood Board</h3>
            <p className="text-muted-foreground text-lg">
              Not sure where to start? Tell our AI designer about your preferences, and we'll generate a curated mood board concept for your next project.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-2xl border shadow-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Room Type</label>
                  <Input 
                    value={formData.roomType}
                    onChange={e => setFormData({...formData, roomType: e.target.value})}
                    placeholder="e.g. Master Bedroom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Design Style</label>
                  <Input 
                    value={formData.style}
                    onChange={e => setFormData({...formData, style: e.target.value})}
                    placeholder="e.g. Bohemian"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Colors</label>
                <Input 
                  value={formData.colors}
                  onChange={e => setFormData({...formData, colors: e.target.value})}
                  placeholder="e.g. Navy Blue and Cream"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Additional Notes</label>
                <Textarea 
                  value={formData.additionalNotes}
                  onChange={e => setFormData({...formData, additionalNotes: e.target.value})}
                  placeholder="Any specific textures or materials..."
                  className="h-24"
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 bg-primary">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Generate Suggestion
              </Button>
            </form>
          </div>

          <div className="relative min-h-[500px]">
            {!result && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed rounded-2xl border-primary/20 bg-primary/[0.02] p-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Palette className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">Your Concept Awaits</h4>
                <p className="text-muted-foreground max-w-xs">Fill out the form to generate a personalized design concept just for you.</p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4 border-2 border-dashed rounded-2xl border-primary/20 bg-primary/[0.02] p-12 animate-pulse">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <h4 className="text-xl font-bold">Designing your mood board...</h4>
              </div>
            )}

            {result && !loading && (
              <Card className="border-none shadow-2xl bg-background overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                <CardHeader className="bg-primary text-white p-8">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-3xl">{result.conceptTitle}</CardTitle>
                    <Paintbrush className="w-6 h-6 opacity-60" />
                  </div>
                  <CardDescription className="text-white/80 text-base italic leading-relaxed">
                    {result.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <h5 className="font-bold uppercase tracking-widest text-xs text-primary">Key Palette</h5>
                    <div className="flex gap-2">
                      {result.colorPalette.map((color, i) => (
                        <div key={i} className="group relative flex-1">
                          <div 
                            className="h-12 rounded-lg border shadow-sm transition-transform hover:scale-110" 
                            style={{ backgroundColor: color.startsWith('#') ? color : undefined }}
                            title={color}
                          />
                          <span className="text-[10px] block mt-1 text-center truncate">{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h5 className="font-bold uppercase tracking-widest text-xs text-primary">Key Elements</h5>
                      <ul className="space-y-2">
                        {result.keyElements.map((el, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="mr-2 text-primary">•</span>
                            {el}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-bold uppercase tracking-widest text-xs text-primary">Keywords</h5>
                      <div className="flex flex-wrap gap-2">
                        {result.inspirationalKeywords.map((kw, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
