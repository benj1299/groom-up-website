"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Coaching",
    description: "Cours, dressage, CSO",
    emoji: "🏇",
    color: "bg-blue-50 border-blue-100",
  },
  {
    name: "Soins",
    description: "Grooming, entretien",
    emoji: "✨",
    color: "bg-green-50 border-green-100",
  },
  {
    name: "Santé",
    description: "Vétérinaire, ostéopathe",
    emoji: "🩺",
    color: "bg-red-50 border-red-100",
  },
  {
    name: "Transport",
    description: "Van, camion, longue distance",
    emoji: "🚛",
    color: "bg-amber-50 border-amber-100",
  },
  {
    name: "Pension",
    description: "Box, pré, écurie",
    emoji: "🏠",
    color: "bg-purple-50 border-purple-100",
  },
  {
    name: "Équipement",
    description: "Sellerie, maréchalerie",
    emoji: "🔧",
    color: "bg-orange-50 border-orange-100",
  },
  {
    name: "Événementiel",
    description: "Photo, vidéo, concours",
    emoji: "📸",
    color: "bg-pink-50 border-pink-100",
  },
  {
    name: "Autres",
    description: "Nutritionniste, comportementaliste",
    emoji: "🌿",
    color: "bg-teal-50 border-teal-100",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categories" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Services
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            8 catégories de professionnels
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-stone-500">
            Quel que soit votre besoin, Groom Up réunit tous les métiers du
            monde équestre sur une seule plateforme.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border p-6 text-center transition-shadow hover:shadow-md ${cat.color}`}
            >
              <span className="text-3xl">{cat.emoji}</span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] font-semibold">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-stone-500">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
