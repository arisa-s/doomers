"use client";
import { LINKS, TICKETTAILOR_LINK } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu({
  accentColor = "#8E3823",
}: {
  accentColor?: string;
}) {
  return (
    <div className="sticky top-0 w-96 h-screen overflow-y-auto bg-white/20 backdrop-blur-xl backdrop-saturate-150 z-20 border-accent hidden md:block shadow-2xl">
      <div className="px-8 py-12 flex flex-col h-full">
        <Link href="/">
          <h1
            className={`text-[60px] lg:text-[68px] tracking-tighter font-accent`}
            style={{ color: accentColor }}
          >
            Doomers
          </h1>
        </Link>
        <span className="text -mt-4">18 Sept - 3 Oct</span>

        <nav className="mt-24">
          <ul className="">
            {LINKS.map((link) => (
              <MenuItem key={link.href} href={link.href}>
                {link.label}
              </MenuItem>
            ))}
          </ul>
        </nav>

        <div className="mt-auto space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <button
              className={`mb-4 text-white/90 py-2 px-4 lg:px-7 mt-auto bg-[${accentColor}] font-accent w-full cursor-pointer uppercase`}
              style={{ backgroundColor: accentColor }}
              onClick={() => {
                window.open(TICKETTAILOR_LINK, "_blank");
              }}
            >
              Get Tickets Now
            </button>
          </div>

          <div className="mt-auto border-t border-accent pt-4">
            <h3 className="text-lg  text-accent mb-4 uppercase">Contacts</h3>

            <div className="text-sm">
              <a
                href="https://www.instagram.com/doomers.uk/"
                target="_blank"
                className="block text-primary transition-colors"
              >
                <label className="font-bold">Instagram:</label> @doomersuk
              </a>
              <a
                href="mailto:doomersuk@gmail.com"
                target="_blank"
                className="block text-primary transition-colors"
              >
                <label className="font-bold">Email:</label> doomersuk@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const selected = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={`text-xl lg:text-2xl block py-1 hover:opacity-80 rounded transition-colors uppercase cursor-pointer hover:text-accent ${
          selected ? "text-accent" : "text-black"
        }`}
      >
        {/* {selected ? "<" : null} */}
        {children}
        {/* {selected ? " />" : null} */}
      </Link>
    </li>
  );
};
