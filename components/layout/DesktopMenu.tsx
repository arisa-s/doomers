"use client";
import { LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
  return (
    <div className="sticky top-0 w-80 h-screen overflow-y-auto bg-white/20 backdrop-blur-xl backdrop-saturate-150 z-20 border-primary hidden md:block shadow-2xl">
      <div className="px-8 py-16 flex flex-col h-full">
        <Link href="/">
          <Image
            src="/images/logo/logoTransparent.png"
            alt="DOOMERS"
            width={800}
            height={800}
            className="h-auto mr-auto max-w-42"
          />
        </Link>
        <span className="text-sm mt-6 italic">18th of Sept - 4th of Oct</span>

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
            <button className="text-white/90 py-2 px-6 mt-auto bg-[#8E3823] font-accent w-full cursor-pointer uppercase">
              Get Ticket Now
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
