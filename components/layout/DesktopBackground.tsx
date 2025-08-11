"use client";

import PixelDistortionBackground from "../PixelDistortionBackground";
import { useResponsive } from "@/utils/useResponsive";

interface MainLayoutProps {
  imageUrl: string;
}

export default function DesktopBackground({ imageUrl }: MainLayoutProps) {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return null;
  }

  return (
    <PixelDistortionBackground
      key={imageUrl} // Force re-mount on image change
      imageSrc={imageUrl}
      distortionStrength={15}
      mouseRadius={0.15}
      relaxationSpeed={0.05}
    />
  );
}
