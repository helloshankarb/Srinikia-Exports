'use server';
/**
 * @fileOverview A Genkit flow for generating SEO-friendly meta tags.
 *
 * - generateSeoMetaTags - A function that generates SEO-friendly meta titles and descriptions.
 * - GenerateSeoMetaTagsInput - The input type for the generateSeoMetaTags function.
 * - GenerateSeoMetaTagsOutput - The return type for the generateSeoMetaTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoMetaTagsInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The main content of the product page or blog post.'),
});
export type GenerateSeoMetaTagsInput = z.infer<
  typeof GenerateSeoMetaTagsInputSchema
>;

const GenerateSeoMetaTagsOutputSchema = z.object({
  metaTitle: z
    .string()
    .describe('An SEO-friendly meta title (up to 60 characters).'),
  metaDescription: z
    .string()
    .describe('An SEO-friendly meta description (up to 160 characters).'),
});
export type GenerateSeoMetaTagsOutput = z.infer<
  typeof GenerateSeoMetaTagsOutputSchema
>;

export async function generateSeoMetaTags(
  input: GenerateSeoMetaTagsInput
): Promise<GenerateSeoMetaTagsOutput> {
  return generateSeoMetaTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoMetaTagsPrompt',
  input: {schema: GenerateSeoMetaTagsInputSchema},
  output: {schema: GenerateSeoMetaTagsOutputSchema},
  prompt: `You are an expert SEO content creator. Your task is to generate a concise, SEO-friendly meta title and description for the provided content. The meta title should be under 60 characters and the meta description should be under 160 characters. Both should incorporate relevant keywords from the content and be compelling to encourage clicks on search engine results pages.

Content:
---
{{{pageContent}}}
---`,
});

const generateSeoMetaTagsFlow = ai.defineFlow(
  {
    name: 'generateSeoMetaTagsFlow',
    inputSchema: GenerateSeoMetaTagsInputSchema,
    outputSchema: GenerateSeoMetaTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
