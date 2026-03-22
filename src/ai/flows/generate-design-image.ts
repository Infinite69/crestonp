
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
    // Truncate and clean the prompt to ensure it fits within image model limits
    // and focus on purely visual descriptive keywords.
    const cleanPrompt = input.prompt.split('.').slice(0, 2).join('. ');

    const { media } = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `A high-end, professional interior design photograph. Scene: ${cleanPrompt}. 
               Luxury finishes, elegant architectural lighting, high-quality textures, 8k resolution, photorealistic.`,
      config: {
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
          {
            category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
            threshold: 'BLOCK_ONLY_HIGH',
          },
        ],
      },
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image.');
    }

    return {
      imageUrl: media.url,
    };
  }
);
