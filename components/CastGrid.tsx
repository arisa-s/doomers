"use client";

import { useState } from "react";
import { CastMember } from "@/lib/sanity";

interface CastGridProps {
  castMembers: CastMember[];
}

export default function CastGrid({ castMembers }: CastGridProps) {
  const [selectedCast, setSelectedCast] = useState<CastMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<"cast" | "crew">("cast");

  const openModal = (cast: CastMember) => {
    setSelectedCast(cast);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCast(null);
  };

  return (
    <>
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
          {castMembers.map((member) => (
            <div
              key={member._id}
              onClick={() => openModal(member)}
              className="bg-secondary/30 hover:bg-secondary/40 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Picture (Using initials as placeholder) */}
                <div className="w-full h-60 md:h-80 backdrop-blur-sm bg-white/20 flex items-center justify-center mb-2 text-white font-bold text-lg">
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
    </>
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
