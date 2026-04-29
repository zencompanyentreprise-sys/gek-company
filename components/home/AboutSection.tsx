import Image from "next/image";
import {
  Aperture,
  BadgeCheck,
  CircleDotDashed,
  Component,
  Orbit,
  Sparkles,
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

export function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-brand-black px-0 py-16 text-white sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden select-none text-center text-[clamp(5rem,14vw,18rem)] font-black uppercase leading-[0.78] text-white/[0.035] sm:block">
        Impacto
      </div>

      <div className="mx-auto max-w-[1540px]">
        <div className="px-5 sm:px-9 lg:px-14">
          <p className="mx-auto hidden max-w-[720px] text-center text-lg font-medium text-white/70 sm:block">
            Mas de 190 proyectos digitales creados para empresas que necesitan
            tecnologia clara, estable y escalable.
          </p>
          <p className="mx-auto mt-0 mb-4 flex w-max items-center gap-2 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white/65 sm:mt-8 sm:mb-0 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Empresas que ya confiaron en nosotros
          </p>
        </div>

        <div className="relative left-1/2 mt-0 w-screen -translate-x-1/2 overflow-hidden bg-primary py-3 text-brand-black shadow-[0_24px_70px_rgba(20,184,166,0.18)] sm:mt-6 sm:py-5">
          <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-brand-black/25 to-transparent sm:w-24" />
          <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-brand-black/25 to-transparent sm:w-24" />
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

        <div className="mx-auto mt-16 max-w-[980px] px-4 text-center sm:mt-24 sm:px-9 lg:mt-36 lg:px-14">
          <div className="mx-auto mb-5 flex w-max items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-black text-brand-black shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:mb-7 sm:text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(20,184,166,0.14)]" />
            Quienes somos
          </div>
          <h2 className="text-[clamp(2.55rem,13vw,5.7rem)] font-black uppercase leading-[0.9] text-white sm:text-[clamp(2.8rem,5vw,5.7rem)] sm:leading-[0.88]">
            <span className="block sm:hidden">Ideas en</span>
            <span className="hidden sm:block">Ideas que se convierten en</span>
            <span className="block text-primary">software con impacto.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[330px] text-base font-medium leading-5 text-white/68 sm:mt-7 sm:max-w-[500px] sm:text-lg sm:leading-6">
            Diseno y desarrollo para productos que tu equipo usa todos los
            dias.
          </p>
        </div>

        <div className="relative left-1/2 mt-12 w-[calc(100vw-1rem)] -translate-x-1/2 overflow-hidden rounded-[8px] bg-primary sm:mt-20 sm:w-[calc(100vw-3rem)] lg:mt-24 lg:w-[calc(100vw-4.5rem)] lg:rounded-[18px]">
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
