import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reading List - Doomers",
  description:
    "Resources and reading list to explore the world of Doomers deeper.",
};

export default function ReadingList() {
  return (
    <div className="min-h-screen">
      {/* Main content area with side-by-side layout */}

      <div className="flex-1 p-8 pb-20 text-lg">
        <div className="max-w-4xl mx-auto">
          {/* Reading List content */}
          <div className="mt-12 space-y-8">
            <section className="bg-secondary/50 p-6 rounded-lg">
              <h2 className="text-2xl font-accent text-accent mb-4">
                Good Talks
              </h2>
              <div className="space-y-6">
                <div className="bg-secondary/30 p-4 rounded">
                  <h3 className="text-lg text-accent font-bold mb-2">
                    Mustafa Suleyman - &quot;What is AI anyway&quot;
                  </h3>
                  <a
                    href="https://youtu.be/KKNCiRWd_j0?si=u7MELK8FZ_eK1Ncs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors underline"
                  >
                    Watch on YouTube →
                  </a>
                </div>

                <div className="bg-secondary/30 p-4 rounded">
                  <h3 className="text-lg text-accent font-bold mb-2">
                    AI Snake Oil: What Artificial Intelligence Can Do, What It
                    Can&apos;t, and How to Tell the Difference
                  </h3>
                  <p className="text-secondary text-sm mb-2">
                    05:45 - 27:00 - Presentation from Arvind Narayanan
                  </p>
                  <a
                    href="https://youtu.be/C3TqcUEFR58?si=QoyVjih4zF_X01oP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors underline"
                  >
                    Watch on YouTube →
                  </a>
                </div>

                <div className="bg-secondary/30 p-4 rounded">
                  <h3 className="text-lg text-accent font-bold mb-2">
                    Interview with Geoffrey Hinton on CBS
                  </h3>
                  <a
                    href="https://youtu.be/qyH3NxFz3Aw?si=vU_A7KD_ES2-QHDN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors underline"
                  >
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </section>

            <section className="bg-secondary/50 p-6 rounded-lg">
              <h2 className="text-2xl font-accent text-accent mb-4">
                Good Books
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/30 p-4 rounded">
                  <ul className="space-y-3">
                    <li className="text-primary font-medium">
                      The Optimist: Sam Altman, OpenAI, and the Race to Invent
                      the Future
                    </li>
                    <li className="text-primary font-medium">
                      Nexus by Noah Yuval Harari
                    </li>
                    <li className="text-primary font-medium">
                      The Alignment Problem by Brian Christiansen
                    </li>
                    <li className="text-primary font-medium">
                      Reclaiming Conversation by Sherry Turkle
                    </li>
                    <li className="text-primary font-medium">
                      Supremacy by Parmy Olsen
                    </li>
                    <li className="text-primary font-medium">
                      The Coming Wave: AI, Power and Our Future by Mustafa
                      Suleyman
                    </li>
                    <li className="text-primary font-medium">
                      Empire of AI: Dreams and Nightmares in Sam Altman&apos;s
                      OpenAI by Karen Hao
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-secondary/50 p-6 rounded-lg">
              <h2 className="text-2xl font-accent text-accent mb-4">
                Good Articles
              </h2>
              <div className="space-y-4">
                <div className="bg-secondary/30 p-4 rounded">
                  <ul className="space-y-3">
                    <li>
                      <span className="underline">
                        The False Promise of ChatGPT
                      </span>
                      <span> by Noam Chomsky</span>
                    </li>
                    <li>
                      <span className="underline">
                        ChatGPT is a blurry JPEG of the Web
                      </span>
                      <span> by Ted Chiang</span>
                    </li>
                    <li>
                      <span className="underline">
                        Machines of Loving Grace
                      </span>
                      <span> by Dario Amodei</span>
                    </li>
                    <li>
                      <span className="underline">
                        AI Means the End of Internet Search as We Know It
                      </span>
                      <span> by Mat Honan</span>
                    </li>
                    <li>
                      <span className="underline">
                        The Urgency of Interpretability
                      </span>
                      <span> by Dario Amodei</span>
                    </li>
                    <li>
                      <span className="underline">
                        Beware San Fran&apos;s Rationalist Cult
                      </span>
                      <span> by Matthew Gasda</span>
                    </li>
                    <li>
                      <span className="underline">
                        OpenAI Email Archives (from Musk v. Altman and OpenAI
                        blog)
                      </span>
                      <span> by habryka on Lesswrong</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
