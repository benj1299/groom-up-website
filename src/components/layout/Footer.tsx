import { DOWNLOAD_ANCHOR } from "@/lib/utils";

const footerLinks = {
  Produit: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "Pour les pros", href: "#pros" },
  ],
  Légal: [
    { label: "Conditions générales", href: "/terms" },
    { label: "Politique de confidentialité", href: "/privacy" },
    { label: "Mentions légales", href: "/legal" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-stone-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Groom Up" className="h-8 w-8" />
              <span className="font-[family-name:var(--font-display)] text-base font-bold text-white">
                Groom Up
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              La première application qui connecte cavaliers et professionnels
              équins en France.
            </p>
            <a
              href={DOWNLOAD_ANCHOR}
              className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-2 text-xs font-medium text-stone-300 transition-all hover:border-white/20 hover:text-white"
            >
              Télécharger l&apos;app
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-500 transition-colors hover:text-stone-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Groom Up Company. Tous droits
            réservés.
          </p>
          <p className="text-xs text-stone-600">
            Site réalisé par{" "}
            <a
              href="https://masterbrain.fr"
              title="Master Brain — agence de développement MVP, automatisation et IA"
              className="font-medium text-stone-400 underline-offset-2 transition-colors hover:text-brand-400 hover:underline"
            >
              Master Brain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
