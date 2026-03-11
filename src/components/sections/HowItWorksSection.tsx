"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Recherchez",
    description:
      "Renseignez votre localisation et le service dont vous avez besoin. L'app identifie les professionnels disponibles autour de vous.",
    screenshot: "/screenshots/search.png",
  },
  {
    number: "02",
    title: "Comparez",
    description:
      "Parcourez les profils détaillés : spécialités, tarifs, avis, temps de réponse. Trouvez celui qui correspond à vos attentes.",
    screenshot: "/screenshots/results.png",
  },
  {
    number: "03",
    title: "Contactez",
    description:
      "Envoyez un message directement. Échangez, planifiez et organisez votre rendez-vous en quelques minutes.",
    screenshot: "/screenshots/messages.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative bg-stone-950 py-24 md:py-32">
      {/* Border top */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400/70">
            Comment ça marche
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Simple. Rapide. Efficace.
          </h2>
        </motion.div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col items-center gap-12 md:flex-row md:gap-20 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-display)] text-6xl font-extrabold text-white/[0.04] md:text-7xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-md text-stone-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Phone */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-[200px] md:w-[230px]">
                  {/* Glow */}
                  <div className="absolute -inset-8 -z-10 rounded-full bg-green-500/[0.04] blur-2xl" />
                  {/* Phone */}
                  <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-stone-900 shadow-2xl shadow-black/40">
                    <img
                      src={step.screenshot}
                      alt={step.title}
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
