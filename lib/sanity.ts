import { createClient } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-05-03",
  useCdn: false, // Set to false for ISR and server-side rendering
  perspective: "published", // Only return published documents
  stega: {
    enabled: false, // Disable for production
  },
});

// GROQ queries
export const queries = {
  castMembers: `*[_type == "castMember"] | order(order asc) {
    _id,
    actor,
    character,
    bio,
    profileImage,
    order
  }`,

  crewMembers: `*[_type == "crewMember"] | order(order asc) {
    _id,
    name,
    role
  }`,

  pressQuotes: `*[_type == "pressQuote"] | order(order asc) {
    _id,
    publication,
    quote,
    link,
    order
  }`,

  readingListItems: `*[_type == "readingListItem"] | order(category asc) {
    _id,
    title,
    author,
    link,
    category,
  }`,

  readingListByCategory: (
    category: string
  ) => `*[_type == "readingListItem" && category == "${category}"] {
    _id,
    title,
    author,
    link,
    category,
  }`,
};

// Type definitions
export interface CastMember {
  _id: string;
  actor: string;
  character: string;
  bio: string;
  profileImage?: SanityImageSource;
  order: number;
}

export interface PressQuote {
  _id: string;
  publication: string;
  quote: string;
  link?: string;
  order: number;
}

export interface CrewMember {
  _id: string;
  name: string;
  role: string;
  order: number;
}

export interface ReadingListItem {
  _id: string;
  title: string;
  author?: string;
  link?: string;
  category: "talks" | "books" | "articles";
}
