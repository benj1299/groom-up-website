"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Recherche géolocalisée",
    description:
      "Trouvez les professionnels autour de vous en un instant. Filtrez par spécialité, distance et disponibilité.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: MessageSquare,
    title: "Messagerie instantanée",
    description:
      "Échangez directement avec les pros. Messages en temps réel, notifications push, tout est fluide.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Profils détaillés",
    description:
      "Consultez les spécialités, certifications et tarifs de chaque professionnel avant de le contacter.",
    color: "bg-amber-500/10 text-amber-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Fonctionnalités
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            Tout ce qu&apos;il faut,
            <br className="hidden sm:block" /> rien de superflu
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-stone-200 bg-stone-50 p-8 transition-all hover:border-stone-300 hover:shadow-md"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
