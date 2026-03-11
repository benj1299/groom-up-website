"use client";

import { motion } from "framer-motion";
import { Eye, Users, Ban, ArrowUpRight } from "lucide-react";
import { WAITLIST_URL } from "@/lib/utils";

const benefits = [
  {
    icon: Eye,
    title: "Visibilité immédiate",
    description:
      "Votre profil apparaît auprès de tous les cavaliers et propriétaires de votre zone.",
  },
  {
    icon: Users,
    title: "Clients qualifiés",
    description:
      "Les utilisateurs vous contactent avec un besoin réel. Fini le démarchage à l'aveugle.",
  },
  {
    icon: Ban,
    title: "Zéro commission",
    description:
      "Votre tarif reste votre tarif. Groom Up ne prélève aucune commission sur vos prestations.",
  },
];

export default function ForProsSection() {
  return (
    <section id="pros" className="relative bg-stone-950 py-24 md:py-32">
      {/* Border top */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[220px] md:w-[260px]">
              {/* Glow */}
              <div className="absolute -inset-10 -z-10 rounded-full bg-gold/[0.06] blur-3xl" />
              {/* Phone */}
              <div className="overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-stone-900 shadow-2xl shadow-black/40">
                <img
                  src="/screenshots/profile.png"
                  alt="Profil professionnel"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Professionnels
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                Développez votre
                <br />
                activité équestre.
              </h2>
              <p className="mt-4 max-w-md text-stone-400">
                Rejoignez la plateforme et connectez-vous directement aux
                cavaliers de votre région.
              </p>
            </motion.div>

            <div className="mt-10 space-y-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03]">
                    <item.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href={WAITLIST_URL}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
              >
                Inscrire mon activité
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
