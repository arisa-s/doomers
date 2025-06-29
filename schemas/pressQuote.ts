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
