"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      anchors: true,
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.1,
      wheelMultiplier: 0.9,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return children;
}
