"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Blocks,
  Bot,
  BrainCircuit,
  CloudCog,
  Headphones,
  Smartphone,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "SaaS B2B para operar, vender y escalar.",
    label: "SaaS B2B",
    image: "/service-saas.png",
    icon: Blocks,
    tone: "bg-primary",
  },
  {
    title: "Software a medida para procesos reales.",
    label: "Custom Software",
    image: "/service-custom-software.png",
    icon: Bot,
    tone: "bg-accent",
  },
  {
    title: "Consultoria, cloud e integraciones.",
    label: "Consultoria",
    image: "/service-consulting.png",
    icon: CloudCog,
    tone: "bg-primary",
  },
  {
    title: "Automatizaciones que reducen trabajo manual.",
    label: "Automatizacion",
    image: "/service-custom-software.png",
    icon: Workflow,
    tone: "bg-accent",
  },
  {
    title: "Apps web y moviles listas para crecer.",
    label: "Web & Mobile",
    image: "/service-saas.png",
    icon: Smartphone,
    tone: "bg-primary",
  },
  {
    title: "IA, datos y tableros para decidir mejor.",
    label: "IA & Datos",
    image: "/service-consulting.png",
    icon: BrainCircuit,
    tone: "bg-accent",
  },
  {
    title: "Soporte evolutivo para mantener el ritmo.",
    label: "Soporte",
    image: "/service-custom-software.png",
    icon: Headphones,
    tone: "bg-primary",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const track = trackRef.current;

    if (!section || !panel || !track) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getDistance = () => track.scrollWidth - panel.clientWidth;

        gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(getDistance(), 1) + 900}`,
            scrub: 1,
            pin: panel,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.fromTo(
          ".services-copy",
          { y: 70, opacity: 0.35 },
          {
            y: -55,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          },
        );

        cardRefs.current.forEach((card, index) => {
          const isFirstCard = index === 0;

          gsap.fromTo(
            card,
            {
              y: isFirstCard ? 0 : index % 2 === 0 ? 36 : -28,
              rotate: isFirstCard ? 0 : index % 2 === 0 ? 0 : -1,
            },
            {
              y: isFirstCard ? -24 : index % 2 === 0 ? -28 : 34,
              rotate: isFirstCard ? 0 : index % 2 === 0 ? -1 : 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        cardRefs.current.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
                end: "top 58%",
                scrub: 0.7,
              },
            },
          );
        });
      });

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-inherit">
      <div
        ref={panelRef}
        className="relative min-h-screen overflow-hidden bg-inherit"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 hidden select-none text-center text-[clamp(4.4rem,13vw,17rem)] font-black uppercase leading-[0.78] text-black/[0.045] sm:block">
          Servicios
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[19%] hidden -translate-x-1/2 select-none whitespace-nowrap text-[clamp(4rem,10vw,12rem)] font-black uppercase leading-none text-black/[0.04] lg:block">
          Software
        </div>

        <div className="services-copy relative z-10 mx-auto flex min-h-[280px] max-w-[1780px] flex-col justify-end gap-5 px-4 pb-8 pt-20 sm:min-h-[330px] sm:gap-8 sm:px-10 sm:pb-10 sm:pt-24 lg:grid lg:min-h-[42vh] lg:grid-cols-[1fr_1.05fr] lg:items-end lg:px-14 lg:pb-0">
          <p className="w-max rounded-full bg-brand-black px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white sm:hidden">
            Servicios
          </p>
          <h2 className="max-w-[790px] text-[clamp(2.15rem,11vw,5.6rem)] font-black uppercase leading-[0.9] text-brand-black sm:text-[clamp(2.35rem,5vw,5.6rem)] sm:leading-[0.88]">
            Servicios para construir productos digitales serios.
          </h2>
          <p className="max-w-[790px] text-left text-xl font-black uppercase leading-[1] text-brand-black sm:text-[clamp(1.7rem,3.2vw,4.2rem)] sm:leading-[0.9] lg:justify-self-end lg:text-right">
            B2B, SaaS, sistemas, consultoria y crecimiento continuo.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-[1780px] px-4 pb-14 sm:px-10 sm:pb-16 lg:max-w-none lg:px-14 lg:pb-20">
          <div
            ref={trackRef}
            className="grid gap-4 sm:gap-7 lg:flex lg:w-max lg:gap-9"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  ref={(node) => {
                    if (node) {
                      cardRefs.current[index] = node;
                    }
                  }}
                  className="relative min-h-[300px] overflow-hidden rounded-[8px] bg-brand-black text-white shadow-[0_18px_45px_rgba(0,0,0,0.16)] sm:min-h-[345px] lg:h-[390px] lg:w-[560px] lg:shrink-0 lg:rounded-[16px]"
                >
                  <div className={`absolute inset-0 ${service.tone}`} />
                  <div className="absolute inset-y-0 right-0 w-[62%] opacity-80 [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%,22%_50%)] sm:w-[64%] sm:opacity-100 sm:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,28%_50%)]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0)_100%)] sm:bg-gradient-to-t sm:from-black/20 sm:via-transparent sm:to-transparent" />
                  <span className="absolute right-4 top-4 z-10 text-sm font-black text-white/70 sm:hidden">
                    0{index + 1}
                  </span>

                  <div className="relative z-10 flex h-full min-h-[300px] max-w-[76%] flex-col justify-end p-5 sm:min-h-[345px] sm:max-w-[62%] sm:p-7 lg:min-h-[390px] lg:p-8">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 sm:mb-7 sm:h-auto sm:w-auto sm:justify-start sm:rounded-none sm:bg-transparent sm:ring-0">
                      <Icon
                        className="h-6 w-6 text-white sm:h-12 sm:w-12"
                        strokeWidth={1.8}
                      />
                    </div>
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-white/75 sm:mb-3 sm:text-sm">
                      {service.label}
                    </p>
                    <h3 className="text-[clamp(1.55rem,7vw,2.05rem)] font-black leading-[0.96] tracking-normal sm:text-[clamp(1.65rem,1.9vw,2.25rem)] sm:leading-[0.94]">
                      {service.title}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
