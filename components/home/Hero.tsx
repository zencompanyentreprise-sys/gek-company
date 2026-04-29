import { Mail, MessageCircle } from "lucide-react";
import { Header } from "@/components/home/Header";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-1rem)] overflow-hidden rounded-[18px] bg-black  sm:min-h-[calc(100vh-3rem)] lg:min-h-[calc(100vh-4.5rem)]">
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

      <div className="relative z-10 flex min-h-[calc(100vh-1rem)] items-center justify-center px-0 pt-24 text-center sm:min-h-[calc(100vh-3rem)] sm:px-5 lg:min-h-[calc(100vh-4.5rem)]">
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
