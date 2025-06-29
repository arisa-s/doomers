import { defineField, defineType } from "sanity";

export const readingListItem = defineType({
  name: "readingListItem",
  title: "Reading List Item",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Good Talks", value: "talks" },
          { title: "Good Books", value: "books" },
          { title: "Good Articles", value: "articles" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author/Speaker",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle || "No author",
      };
    },
  },
});
