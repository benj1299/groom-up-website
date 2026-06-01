"use client";

import { motion } from "framer-motion";

const slides = [
  { src: "/screenshots/slide-home.png", label: "Découverte" },
  { src: "/screenshots/slide-search.png", label: "Recherche" },
  { src: "/screenshots/slide-messages.png", label: "Messagerie" },
  { src: "/screenshots/slide-intro.png", label: "L'app" },
];

export default function AppShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-24 md:py-32">
      {/* Border top */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(34,197,94,0.06),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400/70">
            L&apos;application
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Un aperçu de l&apos;app.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Recherche géolocalisée, filtres précis et messagerie intégrée —
            utilisable entre deux reprises, au paddock ou dans le van.
          </p>
        </motion.div>

        {/* Slides grid */}
        <div className="mt-16 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4">
          {slides.map((slide, i) => (
            <motion.div
              key={slide.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/[0.08] transition-transform duration-500 hover:-translate-y-1.5">
                <img
                  src={slide.src}
                  alt={slide.label}
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-[11px] font-medium text-stone-500">
                {slide.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
