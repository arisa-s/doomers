import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cast & Crew - Doomers",
  description: "Meet the talented cast and creative team behind Doomers.",
};

export default function CastAndCrew() {
  const castMembers = [
    {
      character: "Dr. Sarah Chen",
      actor: "Emma Rodriguez",
      bio: "Leading AI researcher caught between innovation and ethics. Dr. Chen represents the scientific conscience in humanity's final act.",
    },
    {
      character: "Marcus Webb",
      actor: "James Mitchell",
      bio: "Tech billionaire and AI company founder. Webb embodies the ambition and hubris driving our technological acceleration.",
    },
    {
      character: "Alex Rivera",
      actor: "Jordan Park",
      bio: "Young programmer questioning the implications of their work. Rivera represents the new generation grappling with digital responsibility.",
    },
    {
      character: "Dr. Elena Vasquez",
      actor: "Sofia Chen",
      bio: "Ethics committee chair fighting to maintain human agency. Vasquez stands as the voice of caution in an age of reckless innovation.",
    },
    {
      character: "David Kim",
      actor: "Michael Zhang",
      bio: "Former tech insider turned whistleblower. Kim represents those who've seen behind the curtain and chosen to speak truth to power.",
    },
    {
      character: "Rebecca Stone",
      actor: "Ashley Thompson",
      bio: "Investigative journalist uncovering the hidden costs of AI development. Stone seeks to expose what others would keep buried.",
    },
    {
      character: "Dr. Thomas Hayes",
      actor: "Robert Williams",
      bio: "AI safety researcher warning of existential risks. Hayes embodies the scientific community's growing alarm about our digital future.",
    },
    {
      character: "Maya Patel",
      actor: "Priya Sharma",
      bio: "Tech worker organizing resistance from within. Patel represents the grassroots movement to democratize artificial intelligence.",
    },
    {
      character: "Professor William Grant",
      actor: "David Miller",
      bio: "Philosophy professor questioning what makes us human. Grant explores the deepest implications of our technological choices.",
    },
    {
      character: "Lisa Chang",
      actor: "Catherine Lee",
      bio: "AI rights advocate fighting for digital consciousness. Chang challenges us to consider the ethics of artificial minds.",
    },
    {
      character: "Ryan Brooks",
      actor: "Tyler Adams",
      bio: "Security expert turned digital freedom fighter. Brooks uses his skills to protect humanity's autonomy in the age of AI.",
    },
    {
      character: "Dr. Amanda Foster",
      actor: "Nicole Davis",
      bio: "Neuroscientist studying the human-AI interface. Foster explores the blurring boundaries between biological and artificial intelligence.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Main content area with side-by-side layout */}
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
                    className="bg-secondary/30 p-6 rounded-lg border border-primary/20 hover:bg-secondary/40 transition-colors"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl font-accent text-accent mb-2">
                        {member.character}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {member.actor}
                      </p>
                    </div>
                    <p className="text-primary text-sm leading-relaxed">
                      {member.bio}
                    </p>
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
    </div>
  );
}
