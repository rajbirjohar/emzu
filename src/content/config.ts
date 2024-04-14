import { defineCollection, z } from "astro:content";

const pieces = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      thumbnail: z.string(),
      hero: image().optional(),
      collections: z.array(
        z.object({
          // Number of items in a row
          number: z.string(),
          images: z.array(
            z.object({
              src: image(),
              alt: z.string(),
            })
          ),
        })
      ),
    }),
});

export const collections = { pieces };
