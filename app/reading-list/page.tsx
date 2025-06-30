import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { client, queries, ReadingListItem } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Reading List - Doomers",
  description:
    "Resources and reading list to explore the world of Doomers deeper.",
};

// ISR configuration - revalidate every 60 seconds
export const revalidate = 60;

async function getReadingListItems(): Promise<ReadingListItem[]> {
  try {
    const data = await client.fetch(
      queries.readingListItems,
      {},
      {
        // Enable ISR caching
        next: { revalidate: 60 },
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching reading list items:", error);
    // Return fallback data if Sanity is unavailable
    return getFallbackReadingListItems();
  }
}

function getFallbackReadingListItems(): ReadingListItem[] {
  return [
    // Talks
    {
      _id: "temp-1",
      title: 'Mustafa Suleyman - "What is AI anyway"',
      category: "talks",
      link: "https://youtu.be/KKNCiRWd_j0?si=u7MELK8FZ_eK1Ncs",
    },
    {
      _id: "temp-2",
      title:
        "AI Snake Oil: What Artificial Intelligence Can Do, What It Can't, and How to Tell the Difference",
      category: "talks",
      link: "https://youtu.be/C3TqcUEFR58?si=QoyVjih4zF_X01oP",
    },
    {
      _id: "temp-3",
      title: "Interview with Geoffrey Hinton on CBS",
      category: "talks",
      link: "https://youtu.be/qyH3NxFz3Aw?si=vU_A7KD_ES2-QHDN",
    },
    // Books
    {
      _id: "temp-4",
      title:
        "The Optimist: Sam Altman, OpenAI, and the Race to Invent the Future",
      category: "books",
    },
    {
      _id: "temp-5",
      title: "Nexus by Noah Yuval Harari",
      category: "books",
    },
    {
      _id: "temp-6",
      title: "The Alignment Problem by Brian Christiansen",
      category: "books",
    },
    {
      _id: "temp-7",
      title: "Reclaiming Conversation by Sherry Turkle",
      category: "books",
    },
    {
      _id: "temp-8",
      title: "Supremacy by Parmy Olsen",
      category: "books",
    },
    {
      _id: "temp-9",
      title: "The Coming Wave: AI, Power and Our Future by Mustafa Suleyman",
      category: "books",
    },
    {
      _id: "temp-10",
      title:
        "Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI by Karen Hao",
      category: "books",
    },
    // Articles
    {
      _id: "temp-11",
      title: "The False Promise of ChatGPT",
      author: "Noam Chomsky",
      category: "articles",
    },
    {
      _id: "temp-12",
      title: "ChatGPT is a blurry JPEG of the Web",
      author: "Ted Chiang",
      category: "articles",
    },
    {
      _id: "temp-13",
      title: "Machines of Loving Grace",
      author: "Dario Amodei",
      category: "articles",
    },
    {
      _id: "temp-14",
      title: "AI Means the End of Internet Search as We Know It",
      author: "Mat Honan",
      category: "articles",
    },
    {
      _id: "temp-15",
      title: "The Urgency of Interpretability",
      author: "Dario Amodei",
      category: "articles",
    },
    {
      _id: "temp-16",
      title: "Beware San Fran's Rationalist Cult",
      author: "Matthew Gasda",
      category: "articles",
    },
    {
      _id: "temp-17",
      title: "OpenAI Email Archives (from Musk v. Altman and OpenAI blog)",
      author: "habryka on Lesswrong",
      category: "articles",
    },
  ];
}

export default async function ReadingList() {
  const readingListItems = await getReadingListItems();

  // Group items by category
  const talks = readingListItems.filter((item) => item.category === "talks");
  const books = readingListItems.filter((item) => item.category === "books");
  const articles = readingListItems.filter(
    (item) => item.category === "articles"
  );

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
            {talks.map((talk) => (
              <div
                key={talk._id}
                className="border-b border-primary pb-1 md:pb-2"
              >
                <h3 className="text-sm md:text-2xl text-primary mb-1 md:mb-2 leading-relaxed">
                  {talk.title}
                </h3>
                {talk.link && (
                  <a
                    href={talk.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm"
                  >
                    Watch →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section>
          <SectionTitle title="Books" />
          <div className="space-y-4">
            {books.map((book) => (
              <div key={book._id}>
                <a
                  key={book._id}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm md:text-2xl cursor-pointer hover:text-accent hover:underline"
                >
                  <span className="italic">{book.title}</span>
                  by {book.author}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section>
          <SectionTitle title="Articles" />
          <div className="space-y-4">
            {articles.map((article) => (
              <div key={article._id}>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm md:text-2xl cursor-pointer hover:text-accent hover:underline"
                >
                  <span className="italic">{article.title}</span>
                  by {article.author}
                </a>
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
