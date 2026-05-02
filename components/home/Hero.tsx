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
  MessageCircle,
  Presentation,
  Rocket,
  Target,
  Volume2,
  VolumeX,
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
  const [isSoundOn, setIsSoundOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  const handleSoundToggle = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const nextSoundState = !isSoundOn;
    video.muted = !nextSoundState;
    video.volume = nextSoundState ? 0.72 : 0;
    setIsSoundOn(nextSoundState);

    if (nextSoundState) {
      void video.play();
    }
  }, [isSoundOn]);

  return (
    <section
      onPointerMove={handlePointerMove}
      className="relative min-h-[calc(100vh-1rem)] overflow-hidden rounded-[18px] bg-black sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4.5rem)]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        src="https://res.cloudinary.com/drmoz88zw/video/upload/v1777734525/adidas-mini-showreel_dl63dw.mp4"
        autoPlay
        muted={!isSoundOn}
        loop
        playsInline
        preload="metadata"
        aria-label="Video de fondo de una empresa de software"
      />
      <div className="absolute inset-0 bg-black/14" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
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

      <div className="relative z-20 flex min-h-[calc(100vh-1rem)] items-end justify-start px-5 pb-8 pt-28 text-left sm:min-h-[calc(100vh-3rem)] sm:px-9 sm:pb-10 lg:min-h-[calc(100vh-4.5rem)] lg:px-14 lg:pb-14">
        <h1 className="max-w-[920px] text-[clamp(2.1rem,9vw,4.15rem)] font-black uppercase leading-[0.92] tracking-normal text-white sm:text-[clamp(2.75rem,5.2vw,5.15rem)] lg:max-w-[1120px] lg:text-[clamp(3.3rem,4.65vw,5.8rem)]">
          <span className="block">Software que impulsa</span>
          <span className="block">empresas con futuro</span>
        </h1>
      </div>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-4 sm:bottom-7 sm:right-7 sm:gap-8">
        <a
          aria-label="WhatsApp"
          href="https://wa.me/"
          className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#25D366] text-white shadow-[0_18px_42px_rgba(37,211,102,0.42)] transition hover:scale-110 hover:bg-[#1ebe5d] sm:h-[68px] sm:w-[68px] sm:border-[5px]"
        >
          <MessageCircle
            className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
            strokeWidth={3.2}
            fill="currentColor"
          />
        </a>
        <button
          type="button"
          aria-label={isSoundOn ? "Silenciar video" : "Activar musica del video"}
          aria-pressed={isSoundOn}
          onClick={handleSoundToggle}
          className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#FF3D71] text-white shadow-[0_18px_42px_rgba(255,61,113,0.42)] transition hover:scale-110 hover:bg-[#ff245f] sm:h-[68px] sm:w-[68px] sm:border-[5px]"
        >
          {isSoundOn ? (
            <Volume2
              className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
              strokeWidth={3}
            />
          ) : (
            <VolumeX
              className="h-6 w-6 sm:h-[34px] sm:w-[34px]"
              strokeWidth={3}
            />
          )}
        </button>
      </div>
    </section>
  );
}
