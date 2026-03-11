"use client";

import { motion } from "framer-motion";
import { Eye, Users, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Visibilité immédiate",
    description:
      "Votre profil est visible par tous les cavaliers et propriétaires de votre zone géographique.",
  },
  {
    icon: Users,
    title: "Clients qualifiés",
    description:
      "Les utilisateurs vous contactent parce qu'ils ont un besoin réel. Plus de démarchage inutile.",
  },
  {
    icon: CreditCard,
    title: "Zéro commission",
    description:
      "Pas de frais par prestation. Votre tarif, c'est votre tarif. Groom Up ne prend aucune commission.",
  },
];

export default function ForProsSection() {
  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-14 md:flex-row md:gap-16">
          {/* Left — text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Professionnels
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
                Vous êtes pro équestre ?
                <br />
                <span className="text-green-500">On vous met en avant.</span>
              </h2>
              <p className="mt-4 max-w-md text-stone-500">
                Groom Up vous connecte directement aux cavaliers de votre
                région. Créez votre profil, définissez vos services et recevez
                des demandes.
              </p>
            </motion.div>

            <div className="mt-10 space-y-6">
              {benefits.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10">
                    <item.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-stone-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="mx-auto w-[240px] md:w-[280px]">
              <div className="overflow-hidden rounded-[2.5rem] border-[5px] border-stone-200 bg-white shadow-xl">
                <img
                  src="/screenshots/profile.png"
                  alt="Profil professionnel"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
