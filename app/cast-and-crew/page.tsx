"use client";

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
    {
      character: "Dr. Thomas Hayes",
      actor: "Robert Williams",
      bio: "AI safety researcher warning of existential risks. Hayes embodies the scientific community's growing alarm about our digital future. Once dismissed as an alarmist, his warnings about AI alignment and control problems are now being taken seriously as the technology advances faster than safety measures.",
      initials: "RW",
      color: "bg-indigo-500",
    },
    {
      character: "Maya Patel",
      actor: "Priya Sharma",
      bio: "Tech worker organizing resistance from within. Patel represents the grassroots movement to democratize artificial intelligence. Leading a coalition of engineers, researchers, and activists, she fights for transparency and accountability in AI development, believing that the future of human agency depends on collective action.",
      initials: "PS",
      color: "bg-teal-500",
    },
    {
      character: "Professor William Grant",
      actor: "David Miller",
      bio: "Philosophy professor questioning what makes us human. Grant explores the deepest implications of our technological choices. A distinguished academic specializing in consciousness and identity, he grapples with fundamental questions about the nature of mind, meaning, and moral agency in an age of artificial intelligence.",
      initials: "DM",
      color: "bg-orange-500",
    },
    {
      character: "Lisa Chang",
      actor: "Catherine Lee",
      bio: "AI rights advocate fighting for digital consciousness. Chang challenges us to consider the ethics of artificial minds. A lawyer and philosopher who has dedicated her career to expanding the definition of personhood, she argues that truly intelligent AI systems deserve moral consideration and constitutional protection.",
      initials: "CL",
      color: "bg-cyan-500",
    },
    {
      character: "Ryan Brooks",
      actor: "Tyler Adams",
      bio: "Security expert turned digital freedom fighter. Brooks uses his skills to protect humanity's autonomy in the age of AI. A former NSA cybersecurity specialist, he now works to prevent the concentration of AI power in the hands of a few, developing tools and strategies to preserve human agency and democratic governance.",
      initials: "TA",
      color: "bg-emerald-500",
    },
    {
      character: "Dr. Amanda Foster",
      actor: "Nicole Davis",
      bio: "Neuroscientist studying the human-AI interface. Foster explores the blurring boundaries between biological and artificial intelligence. Her groundbreaking research on brain-computer interfaces and neural enhancement has led her to question where human consciousness ends and artificial augmentation begins.",
      initials: "ND",
      color: "bg-violet-500",
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

  return (
    <div className="min-h-screen w-full">
      <div className="flex-1 p-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Cast Grid - 4 rows, 3 columns */}
            <div className="mt-12">
              <h2 className="text-2xl font-accent text-accent mb-8 text-center">
                Cast
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {castMembers.map((member, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(member)}
                    className="bg-secondary/30 p-4 hover:bg-secondary/40 transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Profile Picture (Using initials as placeholder) */}
                      <div
                        className={`w-full h-80 backdrop-blur-sm bg-white/20 flex items-center justify-center mb-2 text-white font-bold text-lg`}
                      >
                        {/* {member.initials} */}
                      </div>

                      <div className="">
                        <h3 className="text-lg font-accent text-accent font-bold">
                          {member.actor}
                        </h3>
                        <p className="text-primary font-medium">
                          {member.character}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Creative Team Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-accent text-accent mb-8 text-center">
                  Creative Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-accent text-accent mb-2">
                      Playwright & Director
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Matthew Gasda
                    </p>
                    <p className="text-primary text-sm">
                      Matthew Gasda has emerged as one of New York&apos;s most
                      innovative theatrical voices, creating immersive
                      productions that transform unconventional spaces into
                      intimate stages for contemporary drama.
                    </p>
                  </div>
                  <div className="bg-secondary/50 p-6 rounded-lg">
                    <h3 className="text-xl font-accent text-accent mb-2">
                      Producer
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      Brooklyn Center for Theater Research
                    </p>
                    <p className="text-primary text-sm">
                      Co-founded by Matthew Gasda, BCTR produces innovative
                      theatrical works that push the boundaries of contemporary
                      drama and explore pressing social issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
