"use client";

import { useCallback, useRef, useState, type PointerEvent } from "react";
import {
  BadgeDollarSign,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Handshake,
  Laptop,
  Lightbulb,
  Mail,
  MessageCircle,
  Presentation,
  Rocket,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/home/Header";

const cursorIcons: LucideIcon[] = [
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Handshake,
  Laptop,
  Rocket,
  Building2,
  Target,
  BadgeDollarSign,
  Presentation,
  Lightbulb,
];

type CursorIcon = {
  id: number;
  iconIndex: number;
  x: number;
  y: number;
  rotate: number;
};

export function Hero() {
  const [cursorTrail, setCursorTrail] = useState<CursorIcon[]>([]);
  const iconIndexRef = useRef(0);
  const lastPointRef = useRef({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const rawX = event.clientX - bounds.left;
    const rawY = event.clientY - bounds.top;
    const lastPoint = lastPointRef.current;
    const distance = Math.hypot(rawX - lastPoint.x, rawY - lastPoint.y);

    if (distance < 52) {
      return;
    }

    lastPointRef.current = { x: rawX, y: rawY };
    const id = window.performance.now();
    const iconIndex = iconIndexRef.current % cursorIcons.length;
    iconIndexRef.current += 1;
    const spread = ((iconIndex % 5) - 2) * 10;
    const stickerRadius = 48;
    const x = Math.min(
      Math.max(rawX + spread, stickerRadius),
      bounds.width - stickerRadius,
    );
    const y = Math.min(
      Math.max(rawY + (iconIndex % 2 === 0 ? -10 : 10), stickerRadius),
      bounds.height - stickerRadius,
    );

    setCursorTrail((items) => [
      ...items.slice(-9),
      {
        id,
        iconIndex,
        x,
        y,
        rotate: (iconIndex % 2 === 0 ? 1 : -1) * (10 + iconIndex * 3),
      },
    ]);

    window.setTimeout(() => {
      setCursorTrail((items) => items.filter((item) => item.id !== id));
    }, 1650);
  }, []);

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative min-h-[calc(100vh-1rem)] overflow-hidden rounded-[18px] bg-black sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4.5rem)]"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://res.cloudinary.com/drmoz88zw/video/upload/v1777398189/14218772_1920_1080_25fps_wmt6ug.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video de fondo de una empresa de software"
      />
      <div className="absolute inset-0 bg-black/38" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_33%,rgba(0,0,0,0)_68%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[8] hidden md:block">
        {cursorTrail.map((item) => {
          const Icon = cursorIcons[item.iconIndex];

          return (
            <span
              key={item.id}
              className="absolute flex h-24 w-24 items-center justify-center rounded-full border-[9px] border-white bg-primary text-brand-black shadow-[0_28px_70px_rgba(0,0,0,0.36)] animate-[cursor-icon-pop_1650ms_cubic-bezier(0.16,1,0.3,1)_forwards]"
              style={{
                left: item.x,
                top: item.y,
                transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
              }}
            >
              <Icon className="h-12 w-12" strokeWidth={2.7} />
            </span>
          );
        })}
      </div>

      <Header />

      <div className="relative z-20 flex min-h-[calc(100vh-1rem)] items-center justify-center px-0 pt-24 text-center sm:min-h-[calc(100vh-3rem)] sm:px-5 lg:min-h-[calc(100vh-4.5rem)]">
        <h1 className="w-full max-w-[1260px] text-[clamp(3.55rem,16.8vw,8.7rem)] font-black uppercase leading-[0.9] tracking-normal text-white sm:text-[clamp(3rem,7.2vw,8.7rem)] sm:leading-[0.93]">
          <span className="block text-[0.63em] leading-[1.02]">
            Software Que
          </span>
          <span className="block">Impulsa</span>
          <span className="block text-[0.63em] leading-[1.02]">
            Empresas Con
          </span>
          <span className="block">Futuro</span>
        </h1>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-4 sm:bottom-7 sm:right-7 sm:gap-8">
        <a
          aria-label="WhatsApp"
          href="https://wa.me/"
          className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-brand-white bg-primary text-brand-black shadow-lg transition hover:scale-105 hover:bg-white sm:h-[68px] sm:w-[68px] sm:border-[5px]"
        >
          <MessageCircle
            className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
            strokeWidth={3.2}
            fill="currentColor"
          />
        </a>
        <a
          aria-label="Email"
          href="mailto:hola@gek.pe"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-black shadow-lg transition hover:scale-105 hover:bg-accent hover:text-white sm:h-[68px] sm:w-[68px]"
        >
          <Mail
            className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
            strokeWidth={3}
          />
        </a>
      </div>
    </section>
  );
}
