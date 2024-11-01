import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().optional(),
		heroImageAttribution: z.object({
			type: z.string(),
			author: z.string(),
			authorUrl: z.string().optional(),
			origin: z.string().optional(),
			originUrl: z.string().optional(),
		}).optional(),
	}),
});

export const collections = { blog };
