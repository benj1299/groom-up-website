"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    title: "Groupes Facebook",
    description:
      "Chercher un pro dans des dizaines de groupes, scroller sans fin, espérer une réponse... Ce n'est pas un système.",
  },
  {
    icon: Clock,
    title: "Bouche-à-oreille",
    description:
      "Demander autour de soi, attendre des recommandations, rappeler trois fois. Ça prend des jours.",
  },
  {
    icon: AlertTriangle,
    title: "Aucune garantie",
    description:
      "Pas de profils vérifiés, pas d'avis, pas de disponibilités en temps réel. C'est le flou total.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Le problème
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            Fini les groupes Facebook
            <br className="hidden sm:block" /> et le bouche-à-oreille
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-500">
            Trouver un groom, un coach ou un transporteur ne devrait pas être un
            parcours du combattant.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100">
                <item.icon className="h-6 w-6 text-stone-600" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
