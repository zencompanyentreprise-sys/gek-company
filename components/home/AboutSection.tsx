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
    <section className="relative overflow-hidden bg-[#f4f4f4] px-5 py-24 sm:px-9 lg:px-14 lg:py-32">
      <div className="mx-auto max-w-[1540px]">
        <p className="text-center text-base font-medium text-brand-black/80 sm:text-lg">
          Mas de 190 proyectos digitales creados para empresas que necesitan
          tecnologia clara, estable y escalable.
        </p>

        <div className="mx-auto mt-8 flex max-w-[1180px] overflow-hidden text-brand-black/55 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max shrink-0 animate-[partners-marquee_28s_linear_infinite] items-center gap-12">
            {partnerLoop.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap text-lg font-black"
                  aria-hidden={index >= partners.length}
                >
                  <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={2.4} />
                  <span>{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-[980px] text-center lg:mt-40">
          <div className="mx-auto mb-7 flex w-max items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-black text-brand-black shadow-[0_12px_35px_rgba(0,0,0,0.05)]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Quienes somos
          </div>
          <h2 className="text-[clamp(2.8rem,5vw,5.7rem)] font-black uppercase leading-[0.88] text-brand-black">
            <span className="block">Ideas que se convierten en</span>
            <span className="block">software con impacto.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[470px] text-lg font-medium leading-6 text-brand-black/75">
            Convertimos estrategia, diseno y desarrollo en productos B2B,
            plataformas SaaS y sistemas que tus equipos pueden usar todos los
            dias.
          </p>
        </div>

        <div className="relative left-1/2 mt-20 w-[calc(100vw-2rem)] -translate-x-1/2 overflow-hidden rounded-[18px] bg-primary sm:w-[calc(100vw-3rem)] lg:mt-24 lg:w-[calc(100vw-4.5rem)]">
          <div className="absolute left-8 top-8 z-10 hidden items-center gap-3 rounded-full bg-brand-black px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white lg:flex">
            <BadgeCheck className="h-5 w-5 text-primary" />
            GEK Team
          </div>
          <Image
            src="https://res.cloudinary.com/drmoz88zw/image/upload/v1777411694/pexels-mikhail-nilov-7988237_ehsorz.jpg"
            alt="Equipo de GEK colaborando en productos digitales"
            width={1600}
            height={900}
            className="h-[360px] w-full object-cover object-center sm:h-[520px] lg:h-[650px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
