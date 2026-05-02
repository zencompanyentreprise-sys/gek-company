import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

const menuLinks = ["Inicio", "Productos", "Servicios", "Nosotros", "Contacto"];
const quickLinks = ["Privacidad", "Terminos", "Cookies"];
const productLinks = ["SaaS B2B", "Inmobiliaria", "Reservas"];
const socialLinks = ["FB", "IG", "X", "IN", "YT"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-black px-4 pb-8 pt-16 text-white sm:px-10 sm:pt-20 lg:px-14 lg:pt-24">
      <div className="pointer-events-none absolute left-0 top-[42%] h-28 w-36 -translate-x-1/2 rounded-full border-[5px] border-white/90" />
      <div className="pointer-events-none absolute -left-6 top-[48%] h-20 w-20 rounded-full border-[5px] border-white/90 border-r-transparent border-t-transparent" />
      <Sparkles className="pointer-events-none absolute right-8 top-[36%] h-16 w-16 rotate-12 text-white sm:right-16 sm:h-24 sm:w-24" />

      <div className="mx-auto max-w-[1780px]">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr] lg:items-start">
          <div>
            <Link href="/" aria-label="GEK home" className="inline-flex items-center gap-4">
              <div className="relative h-16 w-20 overflow-hidden sm:h-20 sm:w-24">
                <Image
                  src="/gek-gecko-logo-transparent.png"
                  alt="Logo gecko de GEK"
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <span className="text-[42px] font-black leading-none tracking-[0.16em] sm:text-[58px]">
                GEK
              </span>
            </Link>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  aria-label={item}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xs font-black text-brand-black transition hover:bg-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-black text-primary">Menu</h3>
            <nav className="grid gap-3 text-base font-medium text-white/62">
              {menuLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-primary">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-black text-primary">Quick Links</h3>
            <nav className="grid gap-3 text-base font-medium text-white/62">
              {quickLinks.map((link) => (
                <a key={link} href="#" className="transition hover:text-primary">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-12">
          <h2 className="text-[clamp(4.1rem,16vw,17rem)] font-black uppercase italic leading-[0.78] tracking-normal text-primary">
            LET&apos;S. BUILD.
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 sm:grid-cols-3">
          {productLinks.map((product) => (
            <a
              key={product}
              href="#"
              className="group flex min-h-[112px] items-center justify-between rounded-[8px] border border-white px-6 py-5 text-white shadow-[8px_8px_0_0_rgba(255,255,255,0.9)] transition hover:-translate-y-1 hover:bg-primary hover:text-brand-black"
            >
              <span className="text-2xl font-black leading-none">{product}</span>
              <ArrowUpRight
                className="h-7 w-7 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={3}
              />
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/20 pt-8 text-sm font-medium text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 GEK. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-primary">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/"
        aria-label="WhatsApp"
        className="absolute bottom-28 right-8 hidden h-16 w-16 items-center justify-center rounded-full border-[5px] border-white bg-primary text-brand-black shadow-lg transition hover:bg-white sm:flex"
      >
        <MessageCircle className="h-8 w-8" strokeWidth={3} fill="currentColor" />
      </a>

      <div className="absolute bottom-10 right-8 hidden h-14 w-14 items-center justify-center rounded-full bg-primary text-brand-black sm:flex">
        <TerminalSquare className="h-7 w-7" strokeWidth={2.8} />
      </div>
    </footer>
  );
}
