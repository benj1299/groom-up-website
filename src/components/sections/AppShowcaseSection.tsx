"use client";

import { motion } from "framer-motion";

const screenshots = [
  { src: "/screenshots/home.png", label: "Accueil" },
  { src: "/screenshots/map.png", label: "Carte" },
  { src: "/screenshots/results.png", label: "Recherche" },
  { src: "/screenshots/messages.png", label: "Messages" },
  { src: "/screenshots/profile.png", label: "Profil" },
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
            Pensée pour le terrain.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Interface épurée, navigation fluide. Utilisable entre deux reprises,
            au paddock ou dans le van.
          </p>
        </motion.div>

        {/* Screenshots row */}
        <div className="mt-16 flex items-end justify-center gap-3 md:gap-5">
          {screenshots.map((shot, i) => {
            const isCenter = i === 2;
            const isAdjacent = i === 1 || i === 3;

            return (
              <motion.div
                key={shot.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.abs(i - 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex-shrink-0 transition-all duration-500 ${
                  isCenter
                    ? "w-[160px] md:w-[220px] z-10"
                    : isAdjacent
                    ? "w-[120px] md:w-[180px] opacity-80"
                    : "hidden w-[100px] opacity-50 sm:block md:w-[150px]"
                }`}
              >
                <div
                  className={`overflow-hidden border border-white/[0.08] bg-stone-900 shadow-2xl shadow-black/40 ${
                    isCenter
                      ? "rounded-[1.8rem] md:rounded-[2.2rem]"
                      : "rounded-[1.4rem] md:rounded-[1.8rem]"
                  }`}
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <p
                  className={`mt-3 text-center text-[11px] font-medium ${
                    isCenter ? "text-stone-300" : "text-stone-600"
                  }`}
                >
                  {shot.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
