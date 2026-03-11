import { WAITLIST_URL } from "@/lib/utils";

const footerLinks = {
  Produit: [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Comment ça marche", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "Pour les pros", href: "#pros" },
  ],
  Légal: [
    { label: "Conditions générales", href: "#" },
    { label: "Politique de confidentialité", href: "#" },
    { label: "Mentions légales", href: "#" },
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
              <img src="/favicon.png" alt="" className="h-7 w-7 rounded-md" />
              <span className="font-[family-name:var(--font-display)] text-base font-bold text-white">
                Groom Up
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              La première application qui connecte cavaliers et professionnels
              équins en France.
            </p>
            <a
              href={WAITLIST_URL}
              className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-2 text-xs font-medium text-stone-300 transition-all hover:border-white/20 hover:text-white"
            >
              Rejoindre la liste d&apos;attente
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
            Fait avec soin en France
          </p>
        </div>
      </div>
    </footer>
  );
}
