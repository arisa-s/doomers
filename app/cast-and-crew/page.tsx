import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { client, queries, CastMember } from "@/lib/sanity";
import CastGrid from "@/components/CastGrid";

export const metadata: Metadata = {
  title: "Cast & Crew - Doomers",
  description: "Meet the talented cast and creative team behind Doomers.",
};

// ISR configuration - revalidate every 60 seconds
export const revalidate = 60;

async function getCastMembers(): Promise<CastMember[]> {
  try {
    const data = await client.fetch(
      queries.castMembers,
      {},
      {
        // Enable ISR caching
        next: { revalidate: 60 },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching cast members:", error);
    // Return fallback data if Sanity is unavailable
    return getFallbackCastMembers();
  }
}

function getFallbackCastMembers(): CastMember[] {
  return [
    {
      _id: "temp-1",
      character: "Dr. Sarah Chen",
      actor: "Emma Rodriguez",
      bio: "Leading AI researcher caught between innovation and ethics. Dr. Chen represents the scientific conscience in humanity's final act. With over a decade of experience in machine learning and neural networks, she finds herself questioning the very foundations of her life's work as artificial intelligence begins to surpass human capabilities.",
      initials: "ER",
      color: "bg-blue-500",
      order: 1,
    },
    {
      _id: "temp-2",
      character: "Marcus Webb",
      actor: "James Mitchell",
      bio: "Tech billionaire and AI company founder. Webb embodies the ambition and hubris driving our technological acceleration. Having built his empire on the promise of AI solving humanity's greatest challenges, he now faces the uncomfortable reality that his creations may pose the greatest threat of all.",
      initials: "JM",
      color: "bg-green-500",
      order: 2,
    },
    {
      _id: "temp-3",
      character: "Alex Rivera",
      actor: "Jordan Park",
      bio: "Young programmer questioning the implications of their work. Rivera represents the new generation grappling with digital responsibility. Fresh out of Stanford with a computer science degree, they joined the tech industry with idealistic hopes, only to discover the moral complexities of building systems that could reshape human civilization.",
      initials: "JP",
      color: "bg-purple-500",
      order: 3,
    },
    {
      _id: "temp-4",
      character: "Dr. Elena Vasquez",
      actor: "Sofia Chen",
      bio: "Ethics committee chair fighting to maintain human agency. Vasquez stands as the voice of caution in an age of reckless innovation. A philosophy professor turned tech ethics advisor, she battles against the Silicon Valley mindset that prioritizes disruption over deliberation, knowing that the stakes have never been higher.",
      initials: "SC",
      color: "bg-red-500",
      order: 4,
    },
    {
      _id: "temp-5",
      character: "David Kim",
      actor: "Michael Zhang",
      bio: "Former tech insider turned whistleblower. Kim represents those who've seen behind the curtain and chosen to speak truth to power. After years of building AI systems for major tech companies, he couldn't stay silent about the dangerous capabilities being developed in secret, risking his career to warn the world.",
      initials: "MZ",
      color: "bg-yellow-500",
      order: 5,
    },
    {
      _id: "temp-6",
      character: "Rebecca Stone",
      actor: "Ashley Thompson",
      bio: "Investigative journalist uncovering the hidden costs of AI development. Stone seeks to expose what others would keep buried. With a reputation for breaking major tech scandals, she's now pursuing the biggest story of her career: the race to artificial general intelligence and its implications for human survival.",
      initials: "AT",
      color: "bg-pink-500",
      order: 6,
    },
  ];
}

export default async function CastAndCrew() {
  const castMembers = await getCastMembers();

  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsOne.png')"
      pageTitle="/cast-and-crew"
    >
      <CastGrid castMembers={castMembers} />
    </MainLayout>
  );
}
