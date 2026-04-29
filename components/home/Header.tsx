"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";

const menuItems = [
  "Inicio",
  "Servicios",
  "Productos",
  "Nosotros",
  "Proyectos",
  "Contacto",
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between px-4 py-4 sm:px-9 lg:px-14 lg:py-14">
      <Link
        href="/"
        aria-label="GEK home"
        className="relative z-50 flex items-center gap-2 text-white transition hover:scale-[1.03] sm:gap-3"
      >
        <div className="relative h-9 w-12 overflow-hidden sm:h-12 sm:w-16">
          <Image
            src="/gek-gecko-logo-transparent.png"
            alt="Logo gecko de GEK"
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>
        <span className="text-xl font-black leading-none tracking-[0.16em] sm:text-[34px]">
          GEK
        </span>
      </Link>

      <div className="flex items-start gap-2 sm:gap-4 lg:gap-5">
        <button
          aria-label="Location"
          className="hidden h-14 w-14 items-center justify-center rounded-[8px] bg-brand-black text-primary shadow-lg transition hover:scale-105 lg:flex lg:h-[76px] lg:w-[76px]"
        >
          <MapPin
            className="h-7 w-7 lg:h-[41px] lg:w-[41px]"
            strokeWidth={3.2}
            fill="currentColor"
          />
        </button>
        <button className="flex h-12 min-w-28 items-center justify-center rounded-[8px] bg-primary px-5 text-base font-black tracking-[0.04em] text-white shadow-lg transition hover:bg-accent sm:h-[76px] sm:min-w-[170px] sm:px-8 sm:text-2xl">
          CALL US
        </button>
        <div>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMenuOpen(true)}
            className={`relative z-50 flex h-12 min-w-12 items-center justify-center rounded-[8px] bg-brand-black px-4 text-white shadow-lg transition hover:bg-primary hover:text-brand-black sm:h-[76px] sm:min-w-[144px] sm:gap-3 sm:px-8 ${
              isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <Menu className="h-5 w-5 sm:h-8 sm:w-8" strokeWidth={3} />
            <span className="hidden text-2xl font-black tracking-[0.04em] sm:inline">
              MENU
            </span>
          </button>

          <div
            id="main-menu"
            className={`fixed inset-0 z-[60] flex flex-col justify-between overflow-y-auto bg-primary px-5 py-18 text-brand-black transition duration-300 sm:px-10 sm:py-20 lg:px-16 lg:py-14 ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none translate-y-3 opacity-0"
            }`}
          >
            <button
              type="button"
              aria-label="Cerrar menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute right-4 top-4 z-[70] flex h-12 w-12 items-center justify-center rounded-[8px] bg-brand-black text-white shadow-lg transition hover:bg-white hover:text-brand-black sm:right-9 sm:top-6 sm:h-16 sm:w-16 lg:right-14 lg:top-10 lg:h-[76px] lg:w-[76px]"
            >
              <X className="h-6 w-6 sm:h-9 sm:w-9" strokeWidth={3} />
            </button>

            <div className="mt-10 max-w-[980px] sm:mt-12 lg:mt-16">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-brand-black/55 sm:mb-4 sm:text-sm">
                Menu
              </p>
              <nav className="flex flex-col">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className="group/link flex items-center justify-between border-t border-brand-black/20 py-3 text-[clamp(2.05rem,10vw,4.6rem)] font-black uppercase leading-[0.88] transition hover:pl-3 hover:text-white sm:py-3.5 sm:text-[clamp(2.4rem,7vw,5.6rem)] lg:py-4 lg:text-[clamp(2.8rem,5.8vw,6.2rem)]"
                  >
                    {item}
                    <ArrowUpRight
                      className="h-7 w-7 shrink-0 opacity-45 transition group-hover/link:translate-x-1 group-hover/link:-translate-y-1 group-hover/link:opacity-100 sm:h-10 sm:w-10 lg:h-12 lg:w-12"
                      strokeWidth={3}
                    />
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.16em] text-brand-black/70 sm:gap-3 sm:text-sm">
              <span>Software</span>
              <span>Consultoria</span>
              <span>SaaS B2B</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
