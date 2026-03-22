
'use server';
/**
 * @fileOverview AI flow for generating interior design visualization images.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateDesignImageInputSchema = z.object({
  prompt: z.string().describe('The detailed description of the interior design to visualize.'),
});
export type GenerateDesignImageInput = z.infer<typeof GenerateDesignImageInputSchema>;

const GenerateDesignImageOutputSchema = z.object({
  imageUrl: z.string().describe('The data URI of the generated image.'),
});
export type GenerateDesignImageOutput = z.infer<typeof GenerateDesignImageOutputSchema>;

export async function generateDesignImage(input: GenerateDesignImageInput): Promise<GenerateDesignImageOutput> {
  return generateDesignImageFlow(input);
}

const generateDesignImageFlow = ai.defineFlow(
  {
    name: 'generateDesignImageFlow',
    inputSchema: GenerateDesignImageInputSchema,
    outputSchema: GenerateDesignImageOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `A high-end, professional interior design photograph of a ${input.prompt}. 
               Luxury finishes, elegant lighting, architectural digest style, 8k resolution, highly detailed.`,
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
