import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

// Import schemas
import { castMember } from "./schemas/castMember";
import { crewMember } from "./schemas/crewMember";
import { pressQuote } from "./schemas/pressQuote";
import { readingListItem } from "./schemas/readingListItem";

export default defineConfig({
  name: "default",
  title: "Doomers CMS",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [castMember, crewMember, pressQuote, readingListItem],
  },
});
