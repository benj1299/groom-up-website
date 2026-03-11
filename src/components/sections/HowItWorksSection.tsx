"use client";

import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Send } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Recherchez",
    description:
      "Entrez votre localisation et le type de service dont vous avez besoin. L'app trouve les pros autour de vous.",
    screenshot: "/screenshots/search.png",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Comparez",
    description:
      "Consultez les profils, spécialités, tarifs et avis. Trouvez le professionnel qui correspond à vos besoins.",
    screenshot: "/screenshots/results.png",
  },
  {
    number: "03",
    icon: Send,
    title: "Contactez",
    description:
      "Envoyez un message directement au professionnel. Organisez votre rendez-vous en quelques échanges.",
    screenshot: "/screenshots/messages.png",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Comment ça marche
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            3 étapes, c&apos;est tout.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-stone-200">
                  {step.number}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                    <step.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-stone-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Screenshot */}
              <div className="flex-1">
                <div className="mx-auto w-[220px] md:w-[250px]">
                  <div className="overflow-hidden rounded-[2rem] border-[5px] border-stone-200 bg-white shadow-xl">
                    <img
                      src={step.screenshot}
                      alt={`Étape ${step.number} — ${step.title}`}
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
