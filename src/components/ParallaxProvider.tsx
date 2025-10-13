import React, { useEffect, useRef } from "react";

// Lightweight global parallax provider.
// Usage: add `data-parallax` and optional attributes `data-parallax-speed="0.2"` and `data-parallax-axis="both|x|y"` to any element.
// Keep speeds small (0.02 - 0.6). Positive values move in same direction as scroll, negative invert.

const query = "[data-parallax]";

const getSpeed = (el: Element) => {
  const s = el.getAttribute("data-parallax-speed");
  return s ? parseFloat(s) : 0.08;
};

const getAxis = (el: Element) => el.getAttribute("data-parallax-axis") ?? "both";

export default function ParallaxProvider({ children }: { children: React.ReactNode }) {
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const scrollY = useRef(0);

  useEffect(() => {
    const els = () => Array.from(document.querySelectorAll(query)) as Element[];

    const onMouseMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      // normalize to -0.5..0.5
      pointer.current.x = (e.clientX / w - 0.5);
      pointer.current.y = (e.clientY / h - 0.5);
      scheduleUpdate();
    };

    const onScroll = () => {
      scrollY.current = window.scrollY || window.pageYOffset;
      scheduleUpdate();
    };

    const update = () => {
      const elements = els();
      const px = pointer.current.x;
      const py = pointer.current.y;
      const sy = scrollY.current;

      elements.forEach((el) => {
        const speed = getSpeed(el);
        const axis = getAxis(el);

        // Mouse-based parallax (subtle)
        const mx = px * 20 * speed; // multiply to get visible effect
        const my = py * 20 * speed;

        // Scroll-based parallax (vertical)
        const syOffset = sy * speed * 0.15; // smaller multiplier for subtlety

        let tx = 0;
        let ty = 0;

        if (axis === "both" || axis === "x") tx = mx;
        if (axis === "both" || axis === "y") ty = my + syOffset;

        // Apply using transform for hardware acceleration
        (el as HTMLElement).style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        (el as HTMLElement).style.willChange = `transform`;
      });

      rafRef.current = null;
    };

    const scheduleUpdate = () => {
      if (rafRef.current == null) rafRef.current = window.requestAnimationFrame(update);
    };

    // add listeners
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // initial update
    onScroll();
    scheduleUpdate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <>{children}</>;
}
