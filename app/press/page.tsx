import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { client, queries, PressQuote } from "@/lib/sanity";
import PressGrid from "@/components/PressGrid";

export const metadata: Metadata = {
  title: "Press - Doomers",
  description: "Press kit, reviews, and media coverage for Doomers.",
};

// ISR configuration - revalidate every 60 seconds
export const revalidate = 60;

async function getPressQuotes(): Promise<PressQuote[]> {
  try {
    const data = await client.fetch(
      queries.pressQuotes,
      {},
      {
        // Enable ISR caching
        next: { revalidate: 60 },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching press quotes:", error);
    // Return fallback data if Sanity is unavailable
    return getFallbackPressItems();
  }
}

function getFallbackPressItems(): PressQuote[] {
  return [
    {
      _id: "temp-1",
      publication: "The Guardian",
      quote:
        "A play that captures the absurdity of tech's existential hand-wringing while the world burns. ",
      link: "https://www.theguardian.com",
      order: 1,
    },
    {
      _id: "temp-2",
      publication: "Fortune",
      quote:
        "At times, it's possible for an audience member at Matthew Gasda's play Doomers to feel like a fly on the wall in a San Francisco startup 'war room.'",
      link: "https://fortune.com",
      order: 2,
    },
    {
      _id: "temp-3",
      publication: "The New York Times",
      quote:
        "Doomers, a new, ripped-from-the-headlines play about the weekend that Sam Altman, the chief executive of the start-up OpenAI, was briefly fired.",
      link: "https://www.nytimes.com",
      order: 3,
    },
    {
      _id: "temp-4",
      publication: "Tech Explore",
      quote:
        "Doomers seizes a crucial, high-profile moment in the recent history of AI to turn it into a reflection on its future and on the collision between money, technology, power, and the dream of building a perfect world. Gasda doesn't just dramatize corporate intrigue—he forces the audience to sit with the unsettling reality that the people shaping AI's future may not fully grasp its consequences.",
      link: "#",
      order: 4,
    },
    {
      _id: "temp-5",
      publication: "Broadway World",
      quote:
        "Philosophical debates, twink lust, and Silicon Valley navel-gazing—Doomers will cover it all. And just as Gasda's players staged Dimes Square in living rooms, they're performing Doomers in tech tycoon-style apartments, offices, and galleries across New York and San Francisco, reflecting the naturalistic (if cringe) habitats of the Silicon Valley elite.",
      link: "https://www.broadwayworld.com",
      order: 5,
    },
  ];
}

export default async function Press() {
  const pressItems = await getPressQuotes();

  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsThree.png')"
      pageTitle="/press"
    >
      <PressGrid pressItems={pressItems} />
    </MainLayout>
  );
}
