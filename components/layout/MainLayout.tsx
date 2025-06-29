"use client";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import PixelDistortionBackground from "../PixelDistortionBackground";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
  pageTitle?: string;
}

// Helper function to extract URL from CSS background-image string
function extractImageUrl(backgroundImage: string): string {
  const match = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
  return match ? match[1] : backgroundImage;
}

export default function MainLayout({
  children,
  backgroundImage,
  pageTitle,
}: MainLayoutProps) {
  // Extract the actual image URL from the CSS background-image string
  const imageUrl = extractImageUrl(backgroundImage);

  // Debug logging

  return (
    <>
      {/* Three.js Pixel Distortion Background - Fixed to viewport */}
      {/* Key prop forces re-mount when image changes */}
      <PixelDistortionBackground
        key={imageUrl} // Force re-mount on image change
        imageSrc={imageUrl}
        distortionStrength={50}
        mouseRadius={0.3}
        relaxationSpeed={0.1}
      />

      <div className="min-h-screen flex-col text-sm md:text-lg relative z-10">
        <MobileMenu />
        <div className="flex relative z-20">
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
    </>
  );
}
