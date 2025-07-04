import { defineField, defineType } from "sanity";

export const castMember = defineType({
  name: "castMember",
  title: "Cast Member",
  type: "document",
  fields: [
    defineField({
      name: "actor",
      title: "Actor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "character",
      title: "Character Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "actor",
      subtitle: "character",
      media: "profileImage",
    },
  },
});
