"use client";

import { useState } from "react";
import { CastMember, CrewMember } from "@/lib/sanity";
import { client } from "@/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { Image } from "next-sanity/image";

const builder = imageUrlBuilder(client);

interface CastGridProps {
  castMembers: CastMember[];
  crewMembers: CrewMember[];
}

export default function CastGrid({ castMembers, crewMembers }: CastGridProps) {
  const [selectedCast, setSelectedCast] = useState<CastMember | null>(null);
  const [selectedCrew, setSelectedCrew] = useState<CrewMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<"cast" | "crew">("cast");

  const openCastModal = (cast: CastMember) => {
    setSelectedCast(cast);
    setSelectedCrew(null);
    setIsModalOpen(true);
  };

  const openCrewModal = (crew: CrewMember) => {
    setSelectedCrew(crew);
    setSelectedCast(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCast(null);
    setSelectedCrew(null);
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {castMembers.map((member) => (
            <div
              key={member._id}
              onClick={() => openCastModal(member)}
              className="bg-secondary/30 hover:bg-secondary/40 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                {member.profileImage ? (
                  <div className="w-full h-60 md:h-80 relative mb-2 ">
                    <Image
                      src={builder
                        .image(member.profileImage)
                        .width(400)
                        .height(400)
                        .url()}
                      alt={member.actor}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                ) : (
                  <div className="w-full h-60 md:h-80 backdrop-blur-sm bg-white/20 flex items-center justify-center mb-2 text-white font-bold text-lg">
                    <span className="text-dimmed text-center items-center text-base font-normal">
                      headshot here
                    </span>
                  </div>
                )}

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
          {crewMembers.map((member) => (
            <div
              key={member._id}
              onClick={() => openCrewModal(member)}
              className="bg-secondary/50 md:p-6 rounded-lg cursor-pointer hover:bg-secondary/60 transition-all duration-300"
            >
              <h3 className="text-xl font-accent text-accent mb-2">
                {member.role}
              </h3>
              <p className="text-primary font-medium mb-2">{member.name}</p>
              <p className="text-primary text-sm line-clamp-3">{member.bio}</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (selectedCast || selectedCrew) && (
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
              {selectedCast ? (
                <>
                  {/* Actor Name */}
                  <h2 className="text-lg font-accent text-accent mb-2">
                    {selectedCast.actor}
                  </h2>
                  {/* Character */}
                  <h3 className="text-md text-primary/80 mb-4">
                    as {selectedCast.character}
                  </h3>
                  {/* Bio */}
                  <p className="text-primary leading-relaxed">
                    {selectedCast.bio}
                  </p>
                </>
              ) : selectedCrew ? (
                <>
                  {/* Crew Name */}
                  <h2 className="text-lg font-accent text-accent mb-2">
                    {selectedCrew.name}
                  </h2>
                  {/* Role */}
                  <h3 className="text-md text-primary/80 mb-4">
                    {selectedCrew.role}
                  </h3>
                  {/* Bio */}
                  <p className="text-primary leading-relaxed">
                    {selectedCrew.bio}
                  </p>
                </>
              ) : null}
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
      className={`px-4 py-2 text-xl md:text-3xl font-accent cursor-pointer ${
        isActive ? "text-accent" : "text-muted"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
