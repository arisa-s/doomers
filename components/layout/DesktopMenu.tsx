"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
  return (
    <div className="sticky top-0 w-80 h-screen overflow-y-auto bg-whity/30 backdrop-blur-xs backdrop-filter z-10">
      <div className="px-6 py-16 flex flex-col h-full">
        <Link href="/">
          <Image
            src="/images/logo/logoTransparent.png"
            alt="DOOMERS"
            width={800}
            height={800}
            className="max-w-full h-auto"
          />
        </Link>

        <nav className="space-y-4 mt-12">
          <ul className="space-y-2">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/cast-and-crew">Cast & Crew</MenuItem>
            <MenuItem href="/press">Press</MenuItem>
            <MenuItem href="/reading-list">Reading List</MenuItem>
          </ul>
        </nav>

        <button className="text-primary bg-white/50 mt-auto py-4 px-4 rounded-md font-accent text-xl">
          Get Ticket Now
        </button>

        <div className="mt-auto border-t border-primary pt-6">
          <h3 className="text-lg font-accent text-accent mb-4">Contacts</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/doomersuk/"
                target="_blank"
                className="block py-1 px-2 text-primary transition-colors"
              >
                Instagram: @doomersuk
              </a>
            </li>
            <li>
              <a
                href="mailto:doomersuk@gmail.com"
                target="_blank"
                className="block py-1 px-2 text-primary transition-colors"
              >
                doomersuk@gmail.com
              </a>
            </li>
          </ul>
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
        className={`text-3xl font-accent block py-2 px-3 hover:opacity-80 rounded transition-colors ${
          selected ? "opacity-100" : "opacity-30"
        }`}
      >
        {selected ? "<" : null}
        {children}
        {selected ? " />" : null}
      </Link>
    </li>
  );
};
