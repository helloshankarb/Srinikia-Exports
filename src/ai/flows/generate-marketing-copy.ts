'use server';
/**
 * @fileOverview A Genkit flow for generating marketing-oriented text snippets.
 *
 * - generateMarketingCopy - A function that generates marketing copy based on input details.
 * - GenerateMarketingCopyInput - The input type for the generateMarketingCopy function.
 * - GenerateMarketingCopyOutput - The return type for the generateMarketingCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingCopyInputSchema = z.object({
  contentType: z
    .enum(['product_description', 'blog_outline'])
    .describe('The type of content to generate (product description or blog outline).'),
  details: z.string().describe('Key product details or blog topics to base the copy on.'),
  keywords: z.array(z.string()).optional().describe('Optional SEO keywords to incorporate into the copy.'),
  tone: z.string().optional().describe('Optional desired tone for the copy (e.g., "persuasive", "informative", "playful").'),
});
export type GenerateMarketingCopyInput = z.infer<typeof GenerateMarketingCopyInputSchema>;

const GenerateMarketingCopyOutputSchema = z.object({
  copy: z.array(z.string()).describe('An array of generated marketing text snippets.'),
  suggestedKeywords: z.array(z.string()).optional().describe('Additional SEO keywords suggested by the model.'),
});
export type GenerateMarketingCopyOutput = z.infer<typeof GenerateMarketingCopyOutputSchema>;

export async function generateMarketingCopy(input: GenerateMarketingCopyInput): Promise<GenerateMarketingCopyOutput> {
  return generateMarketingCopyFlow(input);
}

const generateMarketingCopyPrompt = ai.definePrompt({
  name: 'generateMarketingCopyPrompt',
  input: {schema: GenerateMarketingCopyInputSchema},
  output: {schema: GenerateMarketingCopyOutputSchema},
  prompt: `You are an expert marketing copywriter. Your goal is to generate compelling, engaging, and SEO-friendly marketing text snippets.

Generate content for a {{{contentType}}} based on the following details:

Details: {{{details}}}

{{#if keywords}}
Include these SEO keywords: {{#each keywords}}- {{{this}}}
{{/each}}{{/if}}

{{#if tone}}
Ensure the tone is: {{{tone}}}.{{/if}}

Provide 3-5 distinct marketing snippets. Also, suggest up to 5 additional relevant SEO keywords. Your output MUST be valid JSON, following the schema:

`,
});

const generateMarketingCopyFlow = ai.defineFlow(
  {
    name: 'generateMarketingCopyFlow',
    inputSchema: GenerateMarketingCopyInputSchema,
    outputSchema: GenerateMarketingCopyOutputSchema,
  },
  async input => {
    const {output} = await generateMarketingCopyPrompt(input);
    return output!;
  }
);
