'use server';
/**
 * @fileOverview An AI tool for generating personalized interior design mood board suggestions.
 *
 * - aiDesignMoodBoardSuggestion - A function that generates mood board suggestions based on user preferences.
 * - AIDesignMoodBoardInput - The input type for the aiDesignMoodBoardSuggestion function.
 * - AIDesignMoodBoardOutput - The return type for the aiDesignMoodBoardSuggestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AIDesignMoodBoardInputSchema = z.object({
  style: z
    .string()
    .describe('The desired interior design style (e.g., "modern", "minimalist", "bohemian", "industrial").'),
  colors: z
    .string()
    .describe('Preferred color palette or specific colors (e.g., "emerald green, white, gold accents", "monochromatic greys").'),
  roomType: z
    .string()
    .describe('The type of room to design (e.g., "living room", "bedroom", "kitchen", "home office").'),
  additionalNotes: z
    .string()
    .optional()
    .describe('Any additional specific preferences, materials, or features.'),
});
export type AIDesignMoodBoardInput = z.infer<typeof AIDesignMoodBoardInputSchema>;

const AIDesignMoodBoardOutputSchema = z.object({
  conceptTitle: z.string().describe('A concise and inspiring title for the mood board concept.'),
  description: z
    .string()
    .describe(
      'A detailed textual description of the mood board, including design elements, textures, furniture styles, and overall ambiance.'
    ),
  colorPalette: z
    .array(z.string())
    .describe(
      'An array of HEX color codes (e.g., #FFFFFF) or descriptive color names (e.g., "Emerald Green") for the mood board.'
    ),
  keyElements: z
    .array(z.string())
    .describe(
      'A list of key design elements or features to include in the mood board (e.g., "Velvet sofa", "Geometric rug", "Marble coffee table").'
    ),
  inspirationalKeywords: z
    .array(z.string())
    .describe(
      'A list of keywords or themes that capture the essence of the mood board for further inspiration (e.g., "Luxury", "Minimalist", "Cozy", "Biophilic").'
    ),
});
export type AIDesignMoodBoardOutput = z.infer<typeof AIDesignMoodBoardOutputSchema>;

export async function aiDesignMoodBoardSuggestion(input: AIDesignMoodBoardInput): Promise<AIDesignMoodBoardOutput> {
  return aiDesignMoodBoardSuggestionFlow(input);
}

const aiDesignMoodBoardPrompt = ai.definePrompt({
  name: 'aiDesignMoodBoardPrompt',
  input: { schema: AIDesignMoodBoardInputSchema },
  output: { schema: AIDesignMoodBoardOutputSchema },
  prompt: `You are an expert interior designer from Creston Projects, specializing in luxury, minimal, and elegant designs.
Your task is to generate a personalized mood board concept based on the user's design preferences.

Be creative, detailed, and inspiring. Focus on the overall feel, key elements, textures, and a harmonious color palette.

User Preferences:
Style: {{{style}}}
Colors: {{{colors}}}
Room Type: {{{roomType}}}
Additional Notes: {{{additionalNotes}}}

Craft a mood board suggestion that helps the client visualize initial design concepts.
`,
});

const aiDesignMoodBoardSuggestionFlow = ai.defineFlow(
  {
    name: 'aiDesignMoodBoardSuggestionFlow',
    inputSchema: AIDesignMoodBoardInputSchema,
    outputSchema: AIDesignMoodBoardOutputSchema,
  },
  async (input) => {
    const { output } = await aiDesignMoodBoardPrompt(input);
    if (!output) {
      throw new Error('Failed to generate mood board suggestion.');
    }
    return output;
  }
);
