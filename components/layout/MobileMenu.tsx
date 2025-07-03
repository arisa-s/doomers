import { LINKS } from "@/constants";
import { useClickOutside } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const displayPathname = pathname.split("/").pop()?.replace(/-/g, " ");
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useClickOutside<HTMLDivElement>(() => setMenuOpen(false));

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    setMenuOpen(false); // Close the menu when the route changes
  }, [pathname]);

  return (
    <header className="fixed w-full z-50 transition-colors duration-300 md:hidden">
      <div className="bg-white/20 backdrop-blur-md backdrop-filter">
        <div className="max-w-8xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Left side - Hamburger and Logo */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none lg:hidden -m-2 touch-manipulation mr-4"
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
            >
              <svg
                className="h-6 w-6 text-dimmed"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              className="touch-manipulation"
            >
              <Image
                className="w-24 cursor-pointer"
                src="/images/logo/logoTransparent.png"
                width={200}
                height={200}
                alt="Doomers"
              />
            </button>
          </div>

          {/* Right side - Ticket info */}
          <div className="flex flex-col items-end">
            <span className="text-sm">18 Sept - 4 Oct</span>
            <button className="text-primary underline rounded-md font-accent touch-manipulation">
              Get Tickets Now
            </button>
          </div>
        </div>
      </div>

      {/* Animated dropdown (mobile only) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={ref}
            key="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed flex flex-col top-0 left-0 right-0 w-full lg:hidden z-60 transition-colors duration-300 bg-primary-bg/90 backdrop-blur-md backdrop-filter"
          >
            <button
              className="ml-auto mr-4 mt-4 cursor-pointer font-accent p-2 touch-manipulation"
              onClick={toggleMenu}
            >
              CLOSE
            </button>
            <span className="text-center mx-auto uppercase text-sm font-accent text-primary">
              {displayPathname}
            </span>
            <div className="relative">
              <NavigationMenu orientation="vertical" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const NavigationMenu = ({
  orientation,
}: {
  orientation: "horizontal" | "vertical";
}) => {
  const pathname = usePathname();

  return (
    <nav
      className={
        orientation === "horizontal"
          ? "flex space-x-6"
          : "flex flex-col p-5 space-y-6 text-center"
      }
    >
      {LINKS.map(({ href, label }) => {
        if (orientation === "vertical" && href === pathname) return null;
        return (
          <NavLink key={href} href={href} selected={pathname === href}>
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
  selected,
}: {
  href: string;
  children: React.ReactNode;
  selected?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`${
        selected ? "text-primary underline" : "text-muted"
      } hover:underline hover:text-primary uppercase text-xs font-accent`}
    >
      {children}
    </Link>
  );
};
