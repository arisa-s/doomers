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
      name: "initials",
      title: "Initials",
      type: "string",
      validation: (Rule) => Rule.required().max(3),
    }),
    defineField({
      name: "color",
      title: "Profile Color",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "bg-blue-500" },
          { title: "Green", value: "bg-green-500" },
          { title: "Purple", value: "bg-purple-500" },
          { title: "Red", value: "bg-red-500" },
          { title: "Yellow", value: "bg-yellow-500" },
          { title: "Pink", value: "bg-pink-500" },
          { title: "Indigo", value: "bg-indigo-500" },
          { title: "Teal", value: "bg-teal-500" },
          { title: "Orange", value: "bg-orange-500" },
          { title: "Cyan", value: "bg-cyan-500" },
          { title: "Emerald", value: "bg-emerald-500" },
          { title: "Violet", value: "bg-violet-500" },
        ],
      },
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
