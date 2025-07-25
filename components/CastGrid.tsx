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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<"cast" | "crew">("cast");

  const openCastModal = (cast: CastMember) => {
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
          CAST
        </ToggleButton>
        <ToggleButton
          isActive={currentPanel === "crew"}
          onClick={() => setCurrentPanel("crew")}
        >
          CREW
        </ToggleButton>
      </div>

      {currentPanel === "cast" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {castMembers.map((member) => (
            <CastMemberCard
              key={member._id}
              member={member}
              openCastModal={openCastModal}
            />
          ))}
        </div>
      ) : (
        <div className="min-h-screen">
          <div className="grid grid-cols-2 gap-4 mx-auto max-w-4xl">
            {crewMembers.map((member, index) => (
              <CrewMemberCard key={member._id} member={member} index={index} />
            ))}
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
            className="relative  backdrop-blur-sm border border-accent p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
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
              <CastModalContent cast={selectedCast} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const CrewMemberCard = ({
  member,
  index,
}: {
  member: CrewMember;
  index: number;
}) => {
  return (
    <div
      key={member._id}
      className={`p-4 cursor-pointer ${index % 2 === 0 ? "text-right" : "-ml-2 text-left"}`}
    >
      <h3 className="font-accent text-accent md:text-2xl">{member.role}</h3>
      <p className="text-primary md:text-2xl">{member.name}</p>
    </div>
  );
};

const CastMemberCard = ({
  member,
  openCastModal,
}: {
  member: CastMember;
  openCastModal: (member: CastMember) => void;
}) => {
  return (
    <div
      key={member._id}
      onClick={() => openCastModal(member)}
      className="transition-all duration-300 cursor-pointer hover:scale-105"
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
          <h3 className="text-lg md:text-xl font-accent text-accent font-bold uppercase">
            {member.actor}
          </h3>
          <p className="text-primary text-base">{member.character}</p>
        </div>
      </div>
    </div>
  );
};

const CastModalContent = ({ cast }: { cast: CastMember }) => {
  return (
    <div>
      {/* Actor Name */}
      <h2 className="text-2xl  md:text-3xl font-accent text-accent uppercase">
        {cast.actor}
      </h2>
      {/* Character */}
      <h3 className="text-lg text-primary/80 mb-6">as {cast.character}</h3>
      {/* Bio */}
      <p className="text-primary leading-tight">{cast.bio}</p>
    </div>
  );
};

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
      className={`px-4 py-2 text-2xl md:text-4xl font-accent cursor-pointer ${
        isActive ? "text-accent" : "text-muted"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
