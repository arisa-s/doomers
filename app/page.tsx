import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { LINKS } from "@/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Doomers - In humanity's last act, who plays god?",
  description:
    "A razor-sharp reflection of our accelerating world, where tech, ethics, and ego collide.",
};

export default function NewHome() {
  return (
    <MainLayout
      backgroundImage="url('/images/hands/handsTwo.png')"
      pageTitle="/"
    >
      <div className="space-y-36 items-center justify-center mt-12 text-xl md:text-3xl lg:text-3xl max-w-4xl ml-auto">
        <section>
          <p className="text-accent mb-4 text-right text-2xl md:text-5xl">
            Post-show talk
            <br /> on 20th September, 21:30 - 22:30 <br />
            with Alexandra Mousavizadeh <br />& Jennifer Nadel
          </p>
        </section>

        {/* Main content sections */}
        <section className="flex flex-col space-y-24">
          <p className="text-primary mb-4 text-right">
            18 September - 3 October, 19:30 - 22:00 <br />
            (18, 19, 22, 24, 25, 26, 27 September, 1, 2, 3 October)
          </p>
          <p className="text-primary text-right">
            Rose Lipman Building, 43 De Beauvoir Rd, London N1 5TH, UK
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
