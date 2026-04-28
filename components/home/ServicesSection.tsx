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
          gsap.fromTo(
            card,
            { y: index % 2 === 0 ? 90 : -40, rotate: index % 2 === 0 ? 0 : -1 },
            {
              y: index % 2 === 0 ? -45 : 55,
              rotate: index % 2 === 0 ? -1 : 0,
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
        <div className="pointer-events-none absolute inset-x-0 top-0 select-none text-center text-[clamp(4.4rem,13vw,17rem)] font-black uppercase leading-[0.78] text-black/[0.045]">
          Servicios
        </div>
        <div className="pointer-events-none absolute left-1/2 top-[19%] hidden -translate-x-1/2 select-none whitespace-nowrap text-[clamp(4rem,10vw,12rem)] font-black uppercase leading-none text-black/[0.04] lg:block">
          Software
        </div>

        <div className="services-copy relative z-10 mx-auto flex min-h-[330px] max-w-[1780px] flex-col justify-end gap-8 px-6 pb-10 pt-24 sm:px-10 lg:grid lg:min-h-[42vh] lg:grid-cols-[1fr_1.05fr] lg:items-end lg:px-14 lg:pb-0">
          <h2 className="max-w-[790px] text-[clamp(2.35rem,5vw,5.6rem)] font-black uppercase leading-[0.88] text-brand-black">
            Servicios para construir productos digitales serios.
          </h2>
          <p className="max-w-[790px] text-left text-[clamp(1.7rem,3.2vw,4.2rem)] font-black uppercase leading-[0.9] text-brand-black lg:justify-self-end lg:text-right">
            B2B, SaaS, sistemas, consultoria y crecimiento continuo.
          </p>
        </div>

        <div className="relative z-10 mx-auto max-w-[1780px] px-6 pb-16 sm:px-10 lg:max-w-none lg:px-14 lg:pb-20">
          <div
            ref={trackRef}
            className="grid gap-7 lg:flex lg:w-max lg:gap-9"
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
                  className="relative min-h-[345px] overflow-hidden rounded-[16px] bg-brand-black text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)] lg:h-[390px] lg:w-[560px] lg:shrink-0"
                >
                  <div className={`absolute inset-0 ${service.tone}`} />
                  <div className="absolute inset-y-0 right-0 w-[64%] [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%,28%_50%)]">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div className="relative z-10 flex h-full min-h-[345px] max-w-[62%] flex-col justify-end p-7 lg:min-h-[390px] lg:p-8">
                    <Icon
                      className="mb-7 h-12 w-12 text-white"
                      strokeWidth={1.8}
                    />
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-white/75">
                      {service.label}
                    </p>
                    <h3 className="text-[clamp(1.65rem,1.9vw,2.25rem)] font-black leading-[0.94] tracking-normal">
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
