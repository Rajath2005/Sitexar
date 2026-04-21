import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for scroll-triggered animations
 * Automatically animates elements with data-scroll-animate attribute
 * 
 * Usage: Add `data-scroll-animate="fadeInUp"` to any element
 * Available animations: fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn, stagger
 */
export function useScrollAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Fade In Up animation
    const fadeInUpElements = containerRef.current.querySelectorAll(
      "[data-scroll-animate='fadeInUp']"
    );
    fadeInUpElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Fade In Down animation
    const fadeInDownElements = containerRef.current.querySelectorAll(
      "[data-scroll-animate='fadeInDown']"
    );
    fadeInDownElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Stagger animation for groups
    const staggerElements = containerRef.current.querySelectorAll(
      "[data-scroll-animate='stagger'] > *"
    );
    if (staggerElements.length > 0) {
      gsap.fromTo(
        staggerElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: staggerElements[0].parentElement,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Scale In animation
    const scaleInElements = containerRef.current.querySelectorAll(
      "[data-scroll-animate='scaleIn']"
    );
    scaleInElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      // Cleanup ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return containerRef;
}

export default useScrollAnimations;
