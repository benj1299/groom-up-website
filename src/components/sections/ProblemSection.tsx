"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="relative bg-stone-950 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
            Le constat
          </p>

          <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug text-white md:text-4xl md:leading-snug">
            Trouver un professionnel équestre,
            <span className="text-stone-500">
              {" "}
              c&apos;est encore le Far West.
            </span>
          </h2>

          <div className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg">
            <p>
              Groupes Facebook saturés, recommandations de bouche-à-oreille
              hasardeuses, numéros perdus dans un carnet.{" "}
              <span className="text-stone-300">
                Il n&apos;existait aucune plateforme dédiée
              </span>{" "}
              pour connecter cavaliers et professionnels.
            </p>
          </div>
        </motion.div>

        {/* Visual separator — pain points as subtle chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            "Pas de profils vérifiés",
            "Aucun avis fiable",
            "Recherche sans fin",
            "Double-bookings",
            "Temps perdu",
            "Zéro visibilité",
          ].map((pain) => (
            <span
              key={pain}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-stone-500"
            >
              {pain}
            </span>
          ))}
        </motion.div>

        {/* Transition line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mx-auto mt-16 h-px w-16 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm font-medium text-green-400/80"
        >
          Groom Up change la donne.
        </motion.p>
      </div>
    </section>
  );
}
