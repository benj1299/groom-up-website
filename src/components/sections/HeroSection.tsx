"use client";

import { motion } from "framer-motion";
import { WAITLIST_URL } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.12),transparent)]" />
        {/* Secondary glow */}
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.06),transparent_70%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-36 md:pb-32 md:pt-44">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-stone-400">
              Lancement printemps 2026
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-center font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-balance"
        >
          <span className="text-white">Trouvez le bon pro</span>
          <br />
          <span className="bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
            pour votre cheval.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-center text-base leading-relaxed text-stone-400 md:text-lg"
        >
          Groom Up connecte cavaliers et professionnels équestres.
          Géolocalisation, messagerie, profils vérifiés&nbsp;&mdash;&nbsp;le tout
          dans une seule app.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href={WAITLIST_URL}
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/5 transition-all hover:shadow-white/10 hover:shadow-2xl"
          >
            Rejoindre la liste d&apos;attente
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-stone-400 transition-colors hover:text-white"
          >
            En savoir plus
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </motion.div>

        {/* Phone mockups */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 md:mt-28"
        >
          {/* Glow behind phones */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(34,197,94,0.12),transparent_70%)] blur-xl" />

          <div className="flex items-end justify-center gap-4 md:gap-6">
            {/* Left phone — secondary */}
            <div className="hidden w-[180px] -translate-y-6 opacity-60 blur-[0.5px] md:block">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-stone-900 shadow-2xl">
                <img
                  src="/screenshots/results.png"
                  alt="Résultats de recherche"
                  className="w-full"
                />
              </div>
            </div>

            {/* Center phone — hero */}
            <div className="relative w-[240px] md:w-[270px]">
              <div className="overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-stone-900 shadow-2xl shadow-black/50 md:rounded-[2.5rem]">
                <img
                  src="/screenshots/home.png"
                  alt="Groom Up — Accueil"
                  className="w-full"
                  loading="eager"
                />
              </div>
              {/* Glass reflection */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] phone-glass md:rounded-[2.5rem]" />
            </div>

            {/* Right phone — secondary */}
            <div className="hidden w-[180px] -translate-y-6 opacity-60 blur-[0.5px] md:block">
              <div className="overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-stone-900 shadow-2xl">
                <img
                  src="/screenshots/messages.png"
                  alt="Messagerie"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute -bottom-1 left-0 right-0 h-32 bg-gradient-to-t from-stone-950 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
