import React from "react";

type ParallaxProps = {
  children: React.ReactNode;
  speed?: number; // default 0.08
  axis?: "both" | "x" | "y";
  className?: string;
};

export default function Parallax({ children, speed = 0.08, axis = "both", className }: ParallaxProps) {
  // This component simply applies data attributes the global ParallaxProvider listens to
  return (
    <div data-parallax data-parallax-speed={String(speed)} data-parallax-axis={axis} className={className}>
      {children}
    </div>
  );
}
