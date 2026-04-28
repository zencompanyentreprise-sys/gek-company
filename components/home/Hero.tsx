import { Music2, Phone } from "lucide-react";
import { Header } from "@/components/home/Header";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-2rem)] overflow-hidden rounded-[18px] bg-black shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4.5rem)]">
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

      <Header />

      <div className="relative z-10 flex min-h-[calc(100vh-2rem)] items-center justify-center px-5 pt-24 text-center sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4.5rem)]">
        <h1 className="max-w-[1260px] text-[clamp(3rem,7.2vw,8.7rem)] font-black uppercase leading-[0.93] tracking-normal text-white">
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

      <div className="absolute bottom-7 right-7 z-20 flex flex-col items-center gap-8">
        <a
          aria-label="WhatsApp"
          href="https://wa.me/"
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[5px] border-brand-white bg-primary text-primary-foreground shadow-lg transition hover:scale-105"
        >
          <Phone size={34} strokeWidth={3.4} fill="currentColor" />
        </a>
        <button
          aria-label="Music"
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition hover:scale-105"
        >
          <Music2 size={34} strokeWidth={3.2} />
        </button>
      </div>
    </section>
  );
}
