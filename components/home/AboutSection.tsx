import Image from "next/image";
import {
  Aperture,
  BadgeCheck,
  BarChart3,
  Boxes,
  CircleDotDashed,
  Component,
  Orbit,
  ReceiptText,
  Sparkles,
  Store,
} from "lucide-react";

const partners = [
  { name: "Via Provisiones", icon: Orbit },
  { name: "Veryfrut", icon: Component },
  { name: "IncaTravel Peru", icon: CircleDotDashed },
  { name: "Andes Cloud", icon: Aperture },
  { name: "Nexo Retail", icon: Sparkles },
  { name: "Data Norte", icon: Orbit },
  { name: "Finova Labs", icon: Component },
  { name: "Mercado Sur", icon: CircleDotDashed },
];

const partnerLoop = [...partners, ...partners];

const posHighlights = [
  {
    title: "Ventas rapidas",
    text: "Caja, tickets y flujo diario sin friccion.",
    icon: Store,
  },
  {
    title: "Stock claro",
    text: "Inventario visible antes de perder ventas.",
    icon: Boxes,
  },
  {
    title: "Control SaaS",
    text: "Reportes y operacion desde cualquier lugar.",
    icon: BarChart3,
  },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-brand-black px-0 pb-16 pt-0 text-white sm:pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden select-none text-center text-[clamp(5rem,14vw,18rem)] font-black uppercase leading-[0.78] text-white/[0.035] sm:block">
        Impacto
      </div>

      <div className="mx-auto max-w-[1540px]">
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-primary py-3 text-brand-black shadow-[0_24px_70px_rgba(20,184,166,0.18)] sm:py-5">
          <div className="flex w-max shrink-0 animate-[partners-marquee_28s_linear_infinite] items-center gap-8 sm:gap-12">
            {partnerLoop.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-[0.08em] sm:gap-3 sm:text-lg"
                  aria-hidden={index >= partners.length}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.6} />
                  <span>{partner.name}</span>
                  <span className="h-2 w-2 rounded-full bg-brand-black/35" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-5 pt-8 sm:px-9 sm:pt-10 lg:px-14">
          <p className="mx-auto flex w-max items-center gap-2 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white/65 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Empresas que trabajan con nosotros
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1320px] gap-8 px-4 sm:mt-16 sm:px-9 lg:mt-22 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-14">
          <div>
            <div className="mb-5 flex w-max items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-brand-black shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:mb-7 sm:text-sm">
              <ReceiptText className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              Punto de venta SaaS
            </div>
            <h2 className="max-w-[860px] text-[clamp(2.55rem,12vw,5.7rem)] font-black uppercase leading-[0.88] text-white sm:text-[clamp(3rem,6vw,6.8rem)]">
              <span className="block">Vende.</span>
              <span className="block text-primary">Controla.</span>
              <span className="block">Crece.</span>
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {posHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex min-h-[112px] items-center gap-4 rounded-[8px] border border-white/14 bg-white/[0.06] p-4 transition hover:-translate-y-1 hover:border-primary/70 hover:bg-primary hover:text-brand-black sm:min-h-[132px] lg:min-h-[116px]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-primary text-brand-black transition group-hover:bg-brand-black group-hover:text-primary">
                    <Icon className="h-6 w-6" strokeWidth={2.7} />
                  </span>
                  <span>
                    <span className="block text-lg font-black uppercase leading-none">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm font-medium leading-5 text-white/62 transition group-hover:text-brand-black/70">
                      {item.text}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative left-1/2 mt-12 w-[calc(100vw-1rem)] -translate-x-1/2 overflow-hidden rounded-[8px] bg-primary sm:mt-18 sm:w-[calc(100vw-3rem)] lg:mt-22 lg:w-[calc(100vw-4.5rem)] lg:rounded-[18px]">
          <div className="absolute left-5 top-5 z-10 hidden items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-brand-black shadow-[0_18px_45px_rgba(0,0,0,0.18)] lg:flex">
            <BadgeCheck className="h-5 w-5 text-primary" />
            GEK Team
          </div>
          <Image
            src="https://res.cloudinary.com/drmoz88zw/image/upload/v1777411694/pexels-mikhail-nilov-7988237_ehsorz.jpg"
            alt="Equipo de GEK colaborando en productos digitales"
            width={1600}
            height={900}
            className="h-[300px] w-full object-cover object-center sm:h-[520px] lg:h-[650px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-brand-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
