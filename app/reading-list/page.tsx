import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "Reading List - Doomers",
  description:
    "Resources and reading list to explore the world of Doomers deeper.",
};

export default function ReadingList() {
  const talks = [
    {
      title: 'Mustafa Suleyman - "What is AI anyway"',
      url: "https://youtu.be/KKNCiRWd_j0?si=u7MELK8FZ_eK1Ncs",
    },
    {
      title:
        "AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference",
      url: "https://youtu.be/C3TqcUEFR58?si=QoyVjih4zF_X01oP",
    },
    {
      title: "Interview with Geoffrey Hinton on CBS",
      url: "https://youtu.be/qyH3NxFz3Aw?si=vU_A7KD_ES2-QHDN",
    },
  ];

  const books = [
    "The Optimist: Sam Altman, OpenAI, and the Race to Invent the Future",
    "Nexus by Noah Yuval Harari",
    "The Alignment Problem by Brian Christiansen",
    "Reclaiming Conversation by Sherry Turkle",
    "Supremacy by Parmy Olsen",
    "The Coming Wave: AI, Power and Our Future by Mustafa Suleyman",
    "Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI by Karen Hao",
  ];

  const articles = [
    { title: "The False Promise of ChatGPT", author: "Noam Chomsky" },
    { title: "ChatGPT is a blurry JPEG of the Web", author: "Ted Chiang" },
    { title: "Machines of Loving Grace", author: "Dario Amodei" },
    {
      title: "AI Means the End of Internet Search as We Know It",
      author: "Mat Honan",
    },
    { title: "The Urgency of Interpretability", author: "Dario Amodei" },
    { title: "Beware San Fran's Rationalist Cult", author: "Matthew Gasda" },
    {
      title: "OpenAI Email Archives (from Musk v. Altman and OpenAI blog)",
      author: "habryka on Lesswrong",
    },
  ];

  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsFour.png')"
      pageTitle="/reading-list"
    >
      <div className="space-y-12 md:space-y-16 text-lg">
        {/* Talks Section */}
        <section>
          <SectionTitle title="Talks" />
          <div className="space-y-4 md:space-y-6">
            {talks.map((talk, index) => (
              <div key={index} className="border-b border-primary pb-1 md:pb-2">
                <h3 className="text-sm md:text-lg text-primary mb-1 md:mb-2 leading-relaxed">
                  {talk.title}
                </h3>
                <a
                  href={talk.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Watch →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section>
          <SectionTitle title="Books" />
          <div className="space-y-4">
            {books.map((book, index) => (
              <div key={index} className="text-primary text-sm md:text-lg">
                {book}
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <SectionTitle title="Articles" />
          <div className="space-y-4">
            {articles.map((article, index) => (
              <div key={index} className="text-primary text-sm md:text-lg">
                <span className="block">{article.title}</span>
                <span className="text-primary/60 text-xs md:text-sm">
                  by {article.author}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-xl md:text-2xl font-accent text-accent mb-6 md:mb-8">
      {title}
    </h2>
  );
};
