"use client";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import PixelDistortionBackground from "../PixelDistortionBackground";
import { useResponsive } from "@/utils/useResponsive";
import { getImageProps } from "next/image";

interface MainLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
  pageTitle?: string;
  accentColor?: string;
}

// Helper function to extract URL from CSS background-image string
function extractImageUrl(backgroundImage: string): string {
  const match = backgroundImage.match(/url\(['"]?(.*?)['"]?\)/);
  return match ? match[1] : backgroundImage;
}

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function MainLayout({
  children,
  backgroundImage,
  pageTitle,
  accentColor,
}: MainLayoutProps) {
  // Extract the actual image URL from the CSS background-image string
  const baseImageUrl = extractImageUrl(backgroundImage);
  const { isMobile } = useResponsive();

  // Append 'Mobile' to the image URL when on mobile
  const imageUrl = isMobile
    ? baseImageUrl.replace(/(\.[^.]+)$/, "Mobile$1")
    : baseImageUrl;

  // Generate optimized background image using Next.js
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: isMobile ? 768 : 1920,
    height: isMobile ? 1024 : 1080,
    src: baseImageUrl,
    quality: isMobile ? 70 : 85,
  });
  const optimizedBackgroundImage = getBackgroundImage(srcSet);

  return (
    <div className="relative min-h-screen">
      {/* Fixed background for mobile */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: optimizedBackgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Content wrapper with higher z-index */}
      <div className="relative z-10">
        <>
          {/* Three.js Pixel Distortion Background - Fixed to viewport */}
          {/* Key prop forces re-mount when image changes */}
          {!isMobile && (
            <PixelDistortionBackground
              key={imageUrl} // Force re-mount on image change
              imageSrc={imageUrl}
              distortionStrength={100}
              mouseRadius={0.15}
              relaxationSpeed={0.05}
            />
          )}

          <div className="min-h-screen flex-col text-sm md:text-lg relative z-10 ">
            <MobileMenu />
            <div className="flex relative z-20">
              <DesktopMenu accentColor={accentColor} />
              <div className="w-full p-6 md:p-20 pt-24 md:pt-20">
                <div className="max-w-6xl mx-auto">
                  {pageTitle ? (
                    <div className="md:text-center mb-12 hidden">
                      <h1 className="text-lg md:text-2xl font-accent text-accent mb-4">
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
      </div>
    </div>
  );
}
