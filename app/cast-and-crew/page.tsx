"use client";

import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";

// Note: Since this is now a client component, metadata should be moved to a parent layout
// export const metadata: Metadata = {
//   title: "Cast & Crew - Doomers",
//   description: "Meet the talented cast and creative team behind Doomers.",
// };

export default function CastAndCrew() {
  const [selectedCast, setSelectedCast] = useState<
    (typeof castMembers)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const castMembers = [
    {
      character: "Dr. Sarah Chen",
      actor: "Emma Rodriguez",
      bio: "Leading AI researcher caught between innovation and ethics. Dr. Chen represents the scientific conscience in humanity's final act. With over a decade of experience in machine learning and neural networks, she finds herself questioning the very foundations of her life's work as artificial intelligence begins to surpass human capabilities.",
      initials: "ER",
      color: "bg-blue-500",
    },
    {
      character: "Marcus Webb",
      actor: "James Mitchell",
      bio: "Tech billionaire and AI company founder. Webb embodies the ambition and hubris driving our technological acceleration. Having built his empire on the promise of AI solving humanity's greatest challenges, he now faces the uncomfortable reality that his creations may pose the greatest threat of all.",
      initials: "JM",
      color: "bg-green-500",
    },
    {
      character: "Alex Rivera",
      actor: "Jordan Park",
      bio: "Young programmer questioning the implications of their work. Rivera represents the new generation grappling with digital responsibility. Fresh out of Stanford with a computer science degree, they joined the tech industry with idealistic hopes, only to discover the moral complexities of building systems that could reshape human civilization.",
      initials: "JP",
      color: "bg-purple-500",
    },
    {
      character: "Dr. Elena Vasquez",
      actor: "Sofia Chen",
      bio: "Ethics committee chair fighting to maintain human agency. Vasquez stands as the voice of caution in an age of reckless innovation. A philosophy professor turned tech ethics advisor, she battles against the Silicon Valley mindset that prioritizes disruption over deliberation, knowing that the stakes have never been higher.",
      initials: "SC",
      color: "bg-red-500",
    },
    {
      character: "David Kim",
      actor: "Michael Zhang",
      bio: "Former tech insider turned whistleblower. Kim represents those who've seen behind the curtain and chosen to speak truth to power. After years of building AI systems for major tech companies, he couldn't stay silent about the dangerous capabilities being developed in secret, risking his career to warn the world.",
      initials: "MZ",
      color: "bg-yellow-500",
    },
    {
      character: "Rebecca Stone",
      actor: "Ashley Thompson",
      bio: "Investigative journalist uncovering the hidden costs of AI development. Stone seeks to expose what others would keep buried. With a reputation for breaking major tech scandals, she's now pursuing the biggest story of her career: the race to artificial general intelligence and its implications for human survival.",
      initials: "AT",
      color: "bg-pink-500",
    },
  ];

  const openModal = (cast: (typeof castMembers)[0]) => {
    setSelectedCast(cast);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCast(null);
  };

  const [currentPanel, setCurrentPanel] = useState<"cast" | "crew">("cast");

  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsOne.png')"
      pageTitle="/cast-and-crew"
    >
      <div className="flex justify-center mb-12">
        <ToggleButton
          isActive={currentPanel === "cast"}
          onClick={() => setCurrentPanel("cast")}
        >
          Cast
        </ToggleButton>
        <ToggleButton
          isActive={currentPanel === "crew"}
          onClick={() => setCurrentPanel("crew")}
        >
          Crew
        </ToggleButton>
      </div>

      {currentPanel === "cast" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {castMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => openModal(member)}
              className="bg-secondary/30 hover:bg-secondary/40 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Picture (Using initials as placeholder) */}
                <div
                  className={`w-full h-60 md:h-80 backdrop-blur-sm bg-white/20 flex items-center justify-center mb-2 text-white font-bold text-lg`}
                >
                  {/* {member.initials} */}
                </div>

                <div className="">
                  <h3 className="text-lg font-accent text-accent font-bold">
                    {member.actor}
                  </h3>
                  <p className="text-primary font-medium">{member.character}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-accent text-accent mb-2">
              Playwright & Director
            </h3>
            <p className="text-primary font-medium mb-2">Matthew Gasda</p>
            <p className="text-primary text-sm">
              Matthew Gasda has emerged as one of New York&apos;s most
              innovative theatrical voices, creating immersive productions that
              transform unconventional spaces into intimate stages for
              contemporary drama.
            </p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg">
            <h3 className="text-xl font-accent text-accent mb-2">Producer</h3>
            <p className="text-primary font-medium mb-2">
              Brooklyn Center for Theater Research
            </p>
            <p className="text-primary text-sm">
              Co-founded by Matthew Gasda, BCTR produces innovative theatrical
              works that push the boundaries of contemporary drama and explore
              pressing social issues.
            </p>
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedCast && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-primary hover:text-accent transition-colors text-2xl font-bold"
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              {/* Actor Name */}
              <h2 className="text-lg font-accent text-accent mb-2">
                {selectedCast.actor}
              </h2>

              {/* Bio */}
              <p className="text-primary leading-relaxed">{selectedCast.bio}</p>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

const ToggleButton = ({
  children,
  onClick,
  isActive,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <button
      className={`px-4 py-2 text-xl md:text-3xl font-accent ${
        isActive ? "text-accent" : "text-muted"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
