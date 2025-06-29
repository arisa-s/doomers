"use client";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
  pageTitle?: string;
}

export default function MainLayout({
  children,
  backgroundImage,
  pageTitle,
}: MainLayoutProps) {
  return (
    <div
      className="min-h-screen flex-col text-sm md:text-lg"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MobileMenu />
      <div className="flex">
        <DesktopMenu />
        <div className="w-full p-6 md:p-20">
          <div className="max-w-6xl mx-auto">
            {pageTitle ? (
              <div className="md:text-center mb-12 hidden">
                <h1 className="text-lg md:text-2xl font-accent text-accents mb-4">
                  {pageTitle}
                </h1>
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
