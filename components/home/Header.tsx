import Image from "next/image";
import { MapPin } from "lucide-react";

export function Header() {
  return (

<header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-5 py-5 sm:px-9 lg:px-14 lg:py-14">
      <button className="flex h-[73px] min-w-[144px] items-center justify-center rounded-[8px] bg-primary px-8 text-2xl font-black tracking-[0.04em] text-white shadow-lg transition hover:bg-accent">
        MENU
      </button>

      <div className="pointer-events-none absolute left-1/2 top-3 hidden -translate-x-1/2 text-center text-brand-black/35 sm:block">
        <div className="relative mx-auto mb-1 h-14 w-28 overflow-hidden">
          <Image
            src="/gek-gecko-logo-transparent.png"
            alt="Logo gecko de GEK"
            fill
            sizes="112px"
            className="object-contain opacity-90"
          />
        </div>
        <p className="text-[42px] font-black leading-[0.82] tracking-[0.2em]">
          GEK
        </p>
        <p className="text-[26px] font-black leading-none tracking-tight">
          software
        </p>
        <p className="text-xl font-light leading-none">soluciones digitales</p>
      </div>

      <div className="flex items-start gap-5">
        <button
          aria-label="Location"
          className="hidden h-[76px] w-[76px] items-center justify-center rounded-[8px] bg-brand-black text-primary shadow-lg transition hover:scale-105 sm:flex"
        >
          <MapPin size={41} strokeWidth={3.2} fill="currentColor" />
        </button>
        <button className="flex h-[76px] min-w-[170px] items-center justify-center rounded-[8px] bg-primary px-8 text-2xl font-black tracking-[0.04em] text-white shadow-lg transition hover:bg-accent">
          CALL US
        </button>
      </div>
    </header>
  );
}
