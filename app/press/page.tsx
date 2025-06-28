"use client";

import { useState } from "react";

// Note: Since this is now a client component, metadata should be moved to a parent layout
// export const metadata: Metadata = {
//   title: "Press - Doomers",
//   description: "Press kit, reviews, and media coverage for Doomers.",
// };

export default function Press() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const pressItems = [
    {
      publication: "The Guardian",
      quote:
        "A play that captures the absurdity of tech's existential hand-wringing while the world burns.",
      color: "bg-blue-600",
      url: "https://www.theguardian.com",
      textColor: "text-primary",
    },
    {
      publication: "Fortune",
      quote:
        "At times, it&apos;s possible for an audience member at Matthew Gasda&apos;s play Doomers to feel like a fly on the wall in a San Francisco startup &apos;war room.&apos;",
      color: "bg-red-500",
      url: "https://fortune.com",
      textColor: "text-primary",
    },
    {
      publication: "The New York Times",
      quote:
        "Doomers, a new, ripped-from-the-headlines play about the weekend that Sam Altman, the chief executive of the start-up OpenAI, was briefly fired.",
      color: "bg-gray-800",
      url: "https://www.nytimes.com",
      textColor: "text-primary",
    },
    {
      publication: "Tech Explore",
      quote:
        "Doomers seizes a crucial, high-profile moment in the recent history of AI to turn it into a reflection on its future and on the collision between money, technology, power, and the dream of building a perfect world. Gasda doesn&apos;t just dramatize corporate intrigue—he forces the audience to sit with the unsettling reality that the people shaping AI&apos;s future may not fully grasp its consequences.",
      color: "bg-green-600",
      url: "#",
      textColor: "text-primary",
    },
    {
      publication: "Broadway World",
      quote:
        "Philosophical debates, twink lust, and Silicon Valley navel-gazing—Doomers will cover it all. And just as Gasda&apos;s players staged Dimes Square in living rooms, they&apos;re performing Doomers in tech tycoon-style apartments, offices, and galleries across New York and San Francisco, reflecting the naturalistic (if cringe) habitats of the Silicon Valley elite.",
      color: "bg-purple-600",
      url: "https://www.broadwayworld.com",
      textColor: "text-primary",
    },
  ];

  const toggleFlip = (index: number) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex-1 p-20 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl font-accent text-accent mb-4">Press</h1>
          </div>

          {/* Press Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {pressItems.map((item, index) => (
              <div key={index} className="perspective-1000">
                <div
                  className={`relative w-full h-100 cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
                    flippedCards.has(index) ? "rotate-y-180" : ""
                  }`}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front of Card */}
                  <div
                    className={`absolute inset-0 backdrop-blur-sm bg-white/20 p-6 flex flex-col items-center justify-center backface-hidden`}
                  >
                    <div className="text-center">
                      <h3
                        className={`text-2xl font-bold ${item.textColor} mb-4`}
                      >
                        {item.publication}
                      </h3>
                      <div
                        className={`w-16 h-1 ${item.textColor} bg-current mx-auto mb-4 opacity-60`}
                      ></div>
                      <p className={`${item.textColor} opacity-80 text-sm`}>
                        Click to read review
                      </p>
                    </div>

                    {/* Link indicator */}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-4 right-4 ${item.textColor} opacity-60 hover:opacity-100 transition-opacity`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm p-6 flex flex-col justify-center backface-hidden rotate-y-180">
                    <div className="text-center">
                      <blockquote className="text-primary leading-relaxed mb-4">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                      <cite className="text-accent font-medium">
                        — {item.publication}
                      </cite>
                    </div>

                    {/* Close indicator */}
                    <div className="absolute top-4 right-4 text-primary opacity-60">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
