"use client";

import { motion } from "framer-motion";
import { WAITLIST_URL } from "@/lib/utils";

export default function CTASection() {
  return (
    <section id="waitlist" className="relative bg-stone-950 py-24 md:py-32">
      {/* Border top */}
      <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,197,94,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl"
        >
          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-10 md:p-16">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.05),transparent_70%)]" />

            <div className="relative text-center">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                Soyez parmi
                <br />
                les premiers.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-stone-400">
                Inscrivez-vous pour être informé du lancement et bénéficier
                d&apos;un accès prioritaire à l&apos;application.
              </p>

              <div className="mt-8">
                <a
                  href={WAITLIST_URL}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-stone-950 shadow-xl shadow-white/5 transition-all hover:shadow-white/10 hover:shadow-2xl"
                >
                  Rejoindre la liste d&apos;attente
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>

              <p className="mt-5 text-xs text-stone-500">
                Gratuit &middot; Aucun engagement &middot; Notification au
                lancement
              </p>

              {/* Store badges */}
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="flex h-10 items-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-4">
                  <svg className="mr-2 h-4 w-4 text-stone-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <span className="text-xs font-medium text-stone-500">
                    App Store — Bientôt
                  </span>
                </div>
                <div className="flex h-10 items-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-4">
                  <svg className="mr-2 h-4 w-4 text-stone-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198 2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658 16.8 8.99l-2.3 2.3-8.636-8.632z"/>
                  </svg>
                  <span className="text-xs font-medium text-stone-500">
                    Google Play — Bientôt
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
