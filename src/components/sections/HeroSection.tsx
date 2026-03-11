"use client";

import { motion } from "framer-motion";
import { WAITLIST_URL } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 pt-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-stone-800)_0%,_transparent_70%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center md:pb-28 md:pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900 px-4 py-1.5 text-xs font-medium text-stone-300"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500" />
          Bientôt disponible sur iOS &amp; Android
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Tous les pros équestres,
          <br />
          <span className="text-green-500">à portée de main.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-stone-400 md:text-xl"
        >
          La première application qui connecte cavaliers et professionnels
          équins en France. Coaching, soins, transport&nbsp;&mdash;&nbsp;tout
          est là.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={WAITLIST_URL}
            className="rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-green-500/40"
          >
            Rejoindre la liste d&apos;attente
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-stone-700 px-8 py-3.5 text-base font-medium text-stone-300 transition-colors hover:border-stone-500 hover:text-white"
          >
            Découvrir
          </a>
        </motion.div>

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 md:mt-20"
        >
          <div className="relative mx-auto w-[260px] md:w-[300px]">
            {/* Phone frame */}
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-stone-700 bg-stone-900 shadow-2xl shadow-black/50">
              <img
                src="/screenshots/home.png"
                alt="Groom Up — écran d'accueil"
                className="w-full"
                loading="eager"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-green-500/10 blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into light bg */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-50 to-transparent" />
    </section>
  );
}
