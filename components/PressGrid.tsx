"use client";

import { useState } from "react";
import { PressQuote } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";
import { client } from "@/lib/sanity";

const builder = imageUrlBuilder(client);
interface PressGridProps {
  pressItems: PressQuote[];
}

export default function PressGrid({ pressItems }: PressGridProps) {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const toggleFlip = (index: number, open: boolean) => {
    const newFlippedCards = new Set(flippedCards);
    if (open) {
      newFlippedCards.add(index);
    } else {
      newFlippedCards.delete(index);
    }
    setFlippedCards(newFlippedCards);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 my-6">
      {pressItems.map((item, index) => (
        <div key={item._id} className="perspective-1000">
          <div
            className={`relative w-full h-56 md:h-90 cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
              flippedCards.has(index) ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => toggleFlip(index, true)}
            onMouseLeave={() => toggleFlip(index, false)}
          >
            {/* Front of Card */}
            <div
              className={`absolute inset-0 backdrop-blur-sm bg-white/20 p-6 flex flex-col items-center justify-center backface-hidden`}
            >
              <div className="text-center">
                {item.logoImage ? (
                  <div className="m-6 lg:m-16">
                    <Image
                      src={builder
                        .image(item.logoImage)
                        .width(500)
                        .height(500)
                        .url()}
                      alt={`${item.publication} logo`}
                      width={500}
                      height={500}
                      // className="p-6 md:p-20"
                    />
                  </div>
                ) : (
                  <h3 className={`text-lg md:text-2xl font-bold mb-4`}>
                    {item.publication}
                  </h3>
                )}
              </div>
            </div>

            {/* Back of Card */}
            <div className="text-sm md:text-base absolute inset-0 bg-secondary/90 backdrop-blur-lg p-6 flex flex-col justify-center backface-hidden rotate-y-180">
              <div className="text-center">
                <blockquote className="text-primary leading-tight mb-4 line-clamp-6 md:line-clamp-none">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <cite className="text-accent font-medium">
                  — {item.publication}
                </cite>
              </div>

              {/* Link indicator */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute top-4 right-4 opacity-60 hover:opacity-100 transition-opacity`}
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
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
