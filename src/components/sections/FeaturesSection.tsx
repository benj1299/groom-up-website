"use client";

import { motion } from "framer-motion";
import { MapPin, MessageSquare, ShieldCheck, Star, Zap, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Géolocalisation",
    description:
      "Trouvez les professionnels autour de vous instantanément. Filtrez par spécialité, distance et disponibilité.",
    gradient: "from-green-500/20 to-emerald-500/0",
    iconColor: "text-green-400",
  },
  {
    icon: MessageSquare,
    title: "Messagerie temps réel",
    description:
      "Échangez directement avec les pros. Messages instantanés, notifications push, historique complet.",
    gradient: "from-blue-500/20 to-sky-500/0",
    iconColor: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Profils vérifiés",
    description:
      "Consultez spécialités, certifications, tarifs et avis de chaque professionnel en un coup d'œil.",
    gradient: "from-amber-500/20 to-yellow-500/0",
    iconColor: "text-amber-400",
  },
  {
    icon: Star,
    title: "Avis & notations",
    description:
      "Choisissez en confiance grâce aux retours d'expérience des autres cavaliers de votre région.",
    gradient: "from-purple-500/20 to-violet-500/0",
    iconColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Réponse rapide",
    description:
      "Voyez les temps de réponse moyens de chaque pro. Trouvez ceux qui sont réactifs et disponibles.",
    gradient: "from-orange-500/20 to-red-500/0",
    iconColor: "text-orange-400",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Restez informé à chaque étape : nouveau message, confirmation de rendez-vous, rappels.",
    gradient: "from-pink-500/20 to-rose-500/0",
    iconColor: "text-pink-400",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-stone-950 py-24 md:py-32">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(34,197,94,0.03),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-400/70">
            Fonctionnalités
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Conçue pour le terrain.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            Chaque fonctionnalité a été pensée pour le quotidien des cavaliers
            et des professionnels équestres.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]"
            >
              {/* Gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />

              <div className="relative">
                <feature.icon
                  className={`h-5 w-5 ${feature.iconColor}`}
                  strokeWidth={1.5}
                />
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[15px] font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
