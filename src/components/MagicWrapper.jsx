"use client";
import React from "react";
import MagicBento from "./MagicBento";

export default function MagicWrapper({ children }) {
  return (
    <div className="relative">
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="132, 0, 255"
      />
      {/* Wrap the actual page content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
