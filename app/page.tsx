import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { LINKS } from "@/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doomers - In humanity's last act, who plays god?",
  description:
    "A razor-sharp reflection of our accelerating world, where tech, ethics, and ego collide.",
};

export default function Home() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsTwo.png')"
      pageTitle="/"
    >
      <div className="space-y-12 items-center justify-center mt-12 text-xl md:text-3xl lg:text-3xl max-w-4xl ml-auto">
        <p className="text-accent italic">
          In humanity&apos;s last act, who plays god?
        </p>

        {/* Main content sections */}
        <section>
          <p className="text-primary mb-4 ">
            <span className="text-accent">Doomers</span> is a razor-sharp
            reflection of our accelerating world, where tech, ethics, and ego
            collide. It&apos;s about the thrill of creation, the fear of losing
            control, and the uneasy realization that the future might already be
            slipping from our grasp. A provocative and deeply human drama,
            Doomers asks: can we survive the technologies we&apos;ve unleashed?
            And should we even want&nbsp;to?
          </p>
        </section>
        <section>
          <p className="text-primary mb-4">
            <span className=" text-accent ">Matthew Gasda</span> has emerged as
            one of New York&apos;s most innovative theatrical voices, creating
            immersive productions that transform unconventional spaces into
            intimate stages for contemporary drama. As playwright-in-residence
            at the Brooklyn Center for Theater Research, which he co-founded,
            Gasda has garnered attention for works like &quot;Dimes Square&quot;
            (2022) and &quot;Zoomers&quot; (2023)—plays that range from
            razor-sharp social satire to deeply felt family drama, earning
            acclaim for their nuanced exploration of life across generations.
            His latest work, &quot;Doomers&quot; (2024), tackles the cultural
            and philosophical implications of artificial intelligence,
            demonstrating his ability to capture watershed moments in
            contemporary&nbsp;society.
          </p>
        </section>
      </div>
      <div className="mt-24 flex space-x-3 justify-end md:hidden">
        {LINKS.filter((link) => link.href !== "/").map((link) => (
          <PageLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </MainLayout>
  );
}

const PageLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link href={href}>
      <span className="text-primary underline whitespace-nowrap">{label}</span>
    </Link>
  );
};
