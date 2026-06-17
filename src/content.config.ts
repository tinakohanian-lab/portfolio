import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "Selected work" — one markdown file per project in src/content/work/.
// The markdown body is the project description.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.string(),
    tag: z.string(),
    image: z.string(),       // e.g. /images/deck-apple.png
    href: z.string(),        // link the card opens
    label: z.string().default('View Deck ↗'),
    description: z.string(), // shown under the title
    order: z.number(),       // controls position in the grid
  }),
});

export const collections = { work };
