import { Suspense, lazy, useEffect, useState } from "react";

const SplineHero = lazy(() => import("./SplineHero"));

// Placeholder gradient while Spline loads
const SplineHeroPlaceholder = () => (
  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
);

export default function LazySplineHero() {
  const [mounted, setMounted] = useState(false);

  // Only render Spline after page is interactive (requestIdleCallback)
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setMounted(true));
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(() => setMounted(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Suspense fallback={<SplineHeroPlaceholder />}>
      {mounted ? <SplineHero /> : <SplineHeroPlaceholder />}
    </Suspense>
  );
}
