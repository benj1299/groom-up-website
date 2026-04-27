import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Groom Up",
  description:
    "Comment Groom Up collecte, utilise et protège vos données personnelles. Conforme RGPD et Google Play Data Safety.",
  alternates: { canonical: "https://groom-up-company.com/privacy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 avril 2026";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-poppins text-4xl font-bold text-stone-100 md:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-sm text-stone-400">
          Dernière mise à jour&nbsp;: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              1. Qui sommes-nous&nbsp;?
            </h2>
            <p className="mt-3">
              Groom Up (&quot;l&apos;application&quot;, &quot;nous&quot;) est un service édité
              par <strong>Groom Up Company</strong>, dont le siège est en France.
              Cette politique explique comment nous collectons, utilisons,
              partageons et protégeons les données personnelles que vous nous
              confiez en utilisant l&apos;application Groom Up (iOS, Android) ou
              le site <em>groom-up-company.com</em>.
            </p>
            <p className="mt-3">
              Nous agissons en qualité de <strong>responsable de traitement</strong> au
              sens du Règlement européen 2016/679 (RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              2. Données que nous collectons
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Identité et compte&nbsp;</strong>: prénom, nom, email,
                téléphone, mot de passe (haché), date de naissance, type
                d&apos;utilisateur (cavalier ou professionnel).
              </li>
              <li>
                <strong>Profil public&nbsp;</strong>: photo, bannière, bio,
                spécialités, années d&apos;expérience, langues parlées, site web,
                Instagram, zones d&apos;intervention déclarées.
              </li>
              <li>
                <strong>Localisation&nbsp;</strong>: adresse renseignée
                (géocodée pour la recherche), localisation GPS approximative
                (au km près) si vous activez la permission, jamais en
                arrière-plan.
              </li>
              <li>
                <strong>Contenu utilisateur&nbsp;</strong>: messages,
                photos, audios, PDFs partagés via la messagerie, avis laissés
                sur des professionnels.
              </li>
              <li>
                <strong>Données d&apos;abonnement&nbsp;</strong>: statut premium
                géré via RevenueCat&nbsp;; les paiements sont opérés par Apple
                (App Store) ou Google (Play Billing) — nous ne stockons
                <strong> aucun numéro de carte</strong>.
              </li>
              <li>
                <strong>Données techniques&nbsp;</strong>: identifiant
                d&apos;appareil, version OS, langue, journal d&apos;erreurs,
                événements d&apos;usage anonymisés (analytics produit).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              3. Finalités et bases légales
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Fournir le service&nbsp;</strong>(création de compte,
                profil, recherche de professionnels, messagerie, avis) — base
                légale&nbsp;: <em>exécution du contrat</em>.
              </li>
              <li>
                <strong>Authentification et sécurité&nbsp;</strong>(blocage,
                modération) — base légale&nbsp;: <em>intérêt légitime</em>.
              </li>
              <li>
                <strong>Abonnement premium&nbsp;</strong>(messagerie réservée aux
                abonnés via RevenueCat) — base légale&nbsp;:
                <em> exécution du contrat</em>.
              </li>
              <li>
                <strong>Notifications push&nbsp;</strong>(messages, alertes) —
                base légale&nbsp;: <em>consentement</em>, révocable à tout
                moment dans les paramètres.
              </li>
              <li>
                <strong>Analytics produit et détection de bugs&nbsp;</strong>
                (PostHog, Sentry) — base légale&nbsp;: <em>intérêt légitime</em>,
                données minimisées.
              </li>
              <li>
                <strong>Communications marketing&nbsp;</strong>: aucun email
                marketing n&apos;est envoyé sans votre consentement explicite.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              4. Sous-traitants et tiers
            </h2>
            <p className="mt-3">
              Pour fournir le service, nous faisons appel à des sous-traitants
              encadrés par des accords conformes à l&apos;article 28 RGPD&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Supabase</strong> (hébergement base de données, stockage
                médias, authentification) — région UE.
              </li>
              <li>
                <strong>RevenueCat</strong> (gestion des abonnements premium).
              </li>
              <li>
                <strong>Apple App Store / Google Play Billing</strong>{" "}
                (encaissement, facturation).
              </li>
              <li>
                <strong>Sentry</strong> (capture des erreurs applicatives —
                région UE/Allemagne).
              </li>
              <li>
                <strong>PostHog</strong> (analytics produit
                pseudonymisée).
              </li>
              <li>
                <strong>Vercel / Cloudflare</strong> (hébergement du site web).
              </li>
            </ul>
            <p className="mt-3">
              Aucune donnée n&apos;est vendue ni partagée à des fins
              publicitaires.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              5. Durée de conservation
            </h2>
            <p className="mt-3">
              Les données de votre compte sont conservées tant que celui-ci est
              actif. À la suppression du compte, elles sont&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Anonymisées immédiatement</strong> pour les contenus
                partagés (avis, messages),
              </li>
              <li>
                <strong>Supprimées sous 30&nbsp;jours</strong> pour les données
                de profil,
              </li>
              <li>
                <strong>Conservées jusqu&apos;à 5&nbsp;ans</strong> pour les
                données comptables (factures, transactions) au titre des
                obligations légales.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              6. Vos droits
            </h2>
            <p className="mt-3">
              Conformément au RGPD, vous disposez à tout moment des droits
              suivants&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>Droit d&apos;accès et de copie de vos données,</li>
              <li>Droit de rectification,</li>
              <li>
                Droit à l&apos;effacement (suppression du compte directement
                dans l&apos;application&nbsp;: Profil → Réglages → Supprimer mon
                compte),
              </li>
              <li>Droit à la portabilité,</li>
              <li>Droit d&apos;opposition au traitement,</li>
              <li>Droit de retirer votre consentement à tout moment,</li>
              <li>
                Droit d&apos;introduire une réclamation auprès de la CNIL
                (<a
                  href="https://www.cnil.fr"
                  className="text-stone-100 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cnil.fr
                </a>
                ).
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:contact@groom-up-company.com"
                className="text-stone-100 underline"
              >
                contact@groom-up-company.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              7. Sécurité
            </h2>
            <p className="mt-3">
              Toutes les communications sont chiffrées en transit (HTTPS / TLS).
              Les mots de passe sont hachés. Les accès aux données sont protégés
              par des règles RLS (row-level security) côté Supabase. La
              localisation précise n&apos;est jamais exposée à des tiers — elle
              est arrondie à environ 1&nbsp;km avant publication.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              8. Mineurs
            </h2>
            <p className="mt-3">
              Le service est réservé aux personnes âgées d&apos;au moins
              <strong> 16&nbsp;ans</strong>. Si vous êtes parent et pensez que
              votre enfant nous a fourni des données, contactez-nous pour
              suppression immédiate.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              9. Modifications
            </h2>
            <p className="mt-3">
              Cette politique peut évoluer. Toute modification substantielle
              sera notifiée dans l&apos;application ou par email. La date de
              dernière mise à jour figure en haut de cette page.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              10. Contact
            </h2>
            <p className="mt-3">
              <strong>Groom Up Company</strong>
              <br />
              Email&nbsp;:{" "}
              <a
                href="mailto:contact@groom-up-company.com"
                className="text-stone-100 underline"
              >
                contact@groom-up-company.com
              </a>
              <br />
              Site&nbsp;:{" "}
              <a
                href="https://groom-up-company.com"
                className="text-stone-100 underline"
              >
                groom-up-company.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
