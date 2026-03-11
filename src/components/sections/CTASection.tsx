"use client";

import { motion } from "framer-motion";
import { WAITLIST_URL } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="waitlist" className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm md:p-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold md:text-4xl">
            Soyez parmi les premiers.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-stone-500">
            Groom Up arrive bientôt. Inscrivez-vous pour être informé du
            lancement et bénéficier d&apos;un accès prioritaire.
          </p>
          <div className="mt-8">
            <a
              href={WAITLIST_URL}
              className="inline-flex rounded-full bg-green-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition-all hover:bg-green-600 hover:shadow-green-500/40"
            >
              Rejoindre la liste d&apos;attente
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            Gratuit &middot; Aucun engagement &middot; On vous prévient au
            lancement
          </p>

          {/* Store badges placeholder */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex h-12 items-center rounded-lg bg-stone-100 px-5">
              <span className="text-xs font-medium text-stone-400">
                App Store — Bientôt
              </span>
            </div>
            <div className="flex h-12 items-center rounded-lg bg-stone-100 px-5">
              <span className="text-xs font-medium text-stone-400">
                Google Play — Bientôt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
