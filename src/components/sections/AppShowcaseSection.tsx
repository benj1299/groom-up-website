"use client";

import { motion } from "framer-motion";

const screenshots = [
  { src: "/screenshots/home.png", alt: "Accueil" },
  { src: "/screenshots/map.png", alt: "Carte" },
  { src: "/screenshots/results.png", alt: "Résultats" },
  { src: "/screenshots/messages.png", alt: "Messages" },
];

export default function AppShowcaseSection() {
  return (
    <section className="overflow-hidden bg-stone-950 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
            Aperçu
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Une app pensée pour le terrain
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-400">
            Interface épurée, navigation intuitive. Conçue pour être utilisée
            entre deux reprises, au paddock ou dans le van.
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center gap-6 md:gap-10">
          {screenshots.map((shot, i) => (
            <motion.div
              key={shot.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-[140px] flex-shrink-0 md:w-[200px]"
            >
              <div className="overflow-hidden rounded-[1.5rem] border-[4px] border-stone-700 bg-stone-800 shadow-2xl md:rounded-[2rem] md:border-[5px]">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center text-xs font-medium text-stone-500">
                {shot.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
