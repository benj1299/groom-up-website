"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Heart,
  Stethoscope,
  Truck,
  Home,
  Wrench,
  Camera,
  Leaf,
} from "lucide-react";

const categories = [
  { icon: Trophy, name: "Coaching", desc: "Cours, dressage, CSO", color: "text-blue-400" },
  { icon: Heart, name: "Soins", desc: "Grooming, entretien", color: "text-green-400" },
  { icon: Stethoscope, name: "Santé", desc: "Vétérinaire, ostéo", color: "text-red-400" },
  { icon: Truck, name: "Transport", desc: "Van, longue distance", color: "text-amber-400" },
  { icon: Home, name: "Pension", desc: "Box, pré, écurie", color: "text-purple-400" },
  { icon: Wrench, name: "Équipement", desc: "Sellerie, maréchalerie", color: "text-orange-400" },
  { icon: Camera, name: "Événementiel", desc: "Photo, vidéo, concours", color: "text-pink-400" },
  { icon: Leaf, name: "Autres", desc: "Nutrition, comportement", color: "text-teal-400" },
];

export default function CategoriesSection() {
  return (
    <section id="services" className="relative bg-stone-950 py-24 md:py-32">
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
            Services
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Tous les métiers du cheval.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-400">
            8 catégories de professionnels réunis sur une seule plateforme.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.04]"
            >
              <cat.icon
                className={`h-6 w-6 ${cat.color} transition-transform duration-300 group-hover:scale-110`}
                strokeWidth={1.5}
              />
              <h3 className="mt-3 text-sm font-semibold text-white">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-stone-500">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
