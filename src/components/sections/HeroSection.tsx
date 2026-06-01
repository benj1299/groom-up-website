"use client";

import { motion } from "framer-motion";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-stone-950">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(92,225,230,0.12),transparent)]" />
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            <span className="text-xs font-medium text-stone-400">
              Disponible sur iOS &amp; Android
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
          <span className="bg-gradient-to-r from-brand-500 via-brand-400 to-brand-200 bg-clip-text text-transparent">
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
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 shadow-xl shadow-white/5 transition-all hover:shadow-white/10 hover:shadow-2xl"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            App Store
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.06]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658 16.8 8.99l-2.3 2.3-8.636-8.632z" />
            </svg>
            Google Play
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
          <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(92,225,230,0.12),transparent_70%)] blur-xl" />

          <div className="flex items-end justify-center gap-4 md:gap-6">
            {/* Left slide — secondary */}
            <div className="hidden w-[200px] -translate-y-8 opacity-70 md:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/[0.08]">
                <img
                  src="/screenshots/slide-search.png"
                  alt="Recherche et filtres"
                  className="w-full"
                />
              </div>
            </div>

            {/* Center slide — hero */}
            <div className="relative w-[260px] md:w-[300px]">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/[0.1]">
                <img
                  src="/screenshots/slide-home.png"
                  alt="Groom Up — Découverte"
                  className="w-full"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right slide — secondary */}
            <div className="hidden w-[200px] -translate-y-8 opacity-70 md:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/[0.08]">
                <img
                  src="/screenshots/slide-messages.png"
                  alt="Messagerie intégrée"
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
