"use client";
import { LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu({
  accentColor = "#8E3823",
}: {
  accentColor?: string;
}) {
  return (
    <div className="sticky top-0 w-80 h-screen overflow-y-auto bg-white/20 backdrop-blur-xl backdrop-saturate-150 z-20 border-primary hidden md:block shadow-2xl">
      <div className="px-8 py-16 flex flex-col h-full">
        <Link href="/">
          <h1
            className={`text-5xl tracking-tighter font-accent`}
            style={{ color: accentColor }}
          >
            Doomers
          </h1>
        </Link>
        <span className="text-sm mt-3">18 Sept - 4 Oct</span>

        <nav className="space-y-4 mt-12">
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
              className={`text-white/90 py-2 px-6 mt-auto bg-[${accentColor}] font-accent w-full cursor-pointer uppercase`}
              style={{ backgroundColor: accentColor }}
            >
              Get Tickets Now
            </button>
          </div>

          <div className="mt-auto border-t border-primary pt-4">
            <h3 className="text-lg font-accent text-accent mb-4 uppercase">
              Contacts
            </h3>

            <div className="text-sm">
              <a
                href="https://www.instagram.com/doomers.uk/"
                target="_blank"
                className="block py-1 text-primary transition-colors"
              >
                Instagram: @doomersuk
              </a>
              <a
                href="mailto:doomersuk@gmail.com"
                target="_blank"
                className="block py-1 text-primary transition-colors"
              >
                Email: doomersuk@gmail.com
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
        className={`text-2xl font-accent block py-2 px-3 hover:opacity-80 rounded transition-colors uppercase ${
          selected ? "opacity-100" : "opacity-30"
        }`}
      >
        {/* {selected ? "<" : null} */}
        {children}
        {/* {selected ? " />" : null} */}
      </Link>
    </li>
  );
};
