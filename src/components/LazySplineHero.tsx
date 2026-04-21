import { Suspense, lazy, useEffect, useState } from "react";

const SplineHero = lazy(() => import("./SplineHero"));

// Placeholder gradient while Spline loads
const SplineHeroPlaceholder = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
);

export default function LazySplineHero() {
  const [mounted, setMounted] = useState(false);
  const [enableSpline, setEnableSpline] = useState(false);

  // Only render the heavy 3D scene on capable devices after idle time.
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowMemory = typeof navigator !== "undefined" && "deviceMemory" in navigator
      ? ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4
      : false;
    const isMobile = window.innerWidth < 1024;

    if (reducedMotion || lowMemory || isMobile) {
      setEnableSpline(false);
      return;
    }

    setEnableSpline(true);

    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setMounted(true));
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(() => setMounted(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Suspense fallback={<SplineHeroPlaceholder />}>
      {enableSpline && mounted ? <SplineHero /> : <SplineHeroPlaceholder />}
    </Suspense>
  );
}
