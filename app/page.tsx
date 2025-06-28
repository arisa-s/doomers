import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doomers - In humanity's last act, who plays god?",
  description:
    "A razor-sharp reflection of our accelerating world, where tech, ethics, and ego collide.",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Main content area with side-by-side layout */}
      <div className="flex-1 w-full">
        <div className="max-w-6xl text-xl text-right py-24 px-20">
          {/* <Image
            src="/images/hands/handsThree.png"
            alt="AI generated hands"
            width={400}
            height={400}
            className="w-full h-screen mx-auto"
          /> */}
          <p className="text-primary leading-relaxed">
            In humanyty&apos;s last act, who plays god?
          </p>

          {/* Main content sections */}
          <div className="mt-12 space-y-12">
            <section>
              <p className="text-primary leading-relaxed mb-4">
                <span className="font-accent text-accent">DOOMERS</span> is a
                razor-sharp reflection of our accelerating world, where tech,
                ethics, and ego collide. It&apos;s about the thrill of creation,
                the fear of losing control, and the uneasy realization that the
                future might already be slipping from our grasp. A provocative
                and deeply human drama, Doomers asks: can we survive the
                technologies we&apos;ve unleashed? And should we even want to?
              </p>
            </section>
            <section>
              <p className="text-primary leading-relaxed mb-4">
                <span className="font-accent text-accent">Matthew Gasda</span>{" "}
                has emerged as one of New York&apos;s most innovative theatrical
                voices, creating immersive productions that transform
                unconventional spaces into intimate stages for contemporary
                drama. As playwright-in-residence at the Brooklyn Center for
                Theater Research, which he co-founded, Gasda has garnered
                attention for works like &quot;Dimes Square&quot; (2022) and
                &quot;Zoomers&quot; (2023)—plays that range from razor-sharp
                social satire to deeply felt family drama, earning acclaim for
                their nuanced exploration of life across generations. His latest
                work, &quot;Doomers&quot; (2024), tackles the cultural and
                philosophical implications of artificial intelligence,
                demonstrating his ability to capture watershed moments in
                contemporary society.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
