import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    href: z.string(),
    colorClass: z.string(),
    iconColor: z.string(),
    order: z.number(),
  }),
});

const creators = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    quote: z.string(),
    image: image(),
    order: z.number(),
  }),
});

export const collections = { services, creators };
