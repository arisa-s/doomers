import { defineField, defineType } from "sanity";

export const pressQuote = defineType({
  name: "pressQuote",
  title: "Press Quote",
  type: "document",
  fields: [
    defineField({
      name: "publication",
      title: "Publication Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bgColor",
      title: "Background Color",
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
      name: "textColor",
      title: "Text Color",
      type: "string",
      options: {
        list: [
          { title: "White", value: "text-white" },
          { title: "Black", value: "text-black" },
          { title: "Gray 900", value: "text-gray-900" },
          { title: "Gray 800", value: "text-gray-800" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Publication Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
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
      title: "publication",
      subtitle: "quote",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle.slice(0, 50)}...` : "",
      };
    },
  },
});
