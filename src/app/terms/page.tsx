import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Groom Up",
  description:
    "CGU de l'application Groom Up. Règles d'utilisation, abonnement, contenu utilisateur, responsabilités.",
  alternates: { canonical: "https://groom-up-company.com/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 avril 2026";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-poppins text-4xl font-bold text-stone-100 md:text-5xl">
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="mt-3 text-sm text-stone-400">
          Dernière mise à jour&nbsp;: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              1. Objet
            </h2>
            <p className="mt-3">
              Les présentes Conditions Générales d&apos;Utilisation (&quot;CGU&quot;)
              régissent l&apos;accès et l&apos;utilisation de l&apos;application
              mobile Groom Up et du site
              <em> groom-up-company.com</em> (ensemble, &quot;le Service&quot;),
              édité par <strong>Groom Up Company</strong>.
            </p>
            <p className="mt-3">
              Le Service met en relation des cavaliers (&quot;Owners&quot;) et des
              professionnels équins (&quot;Providers&quot;) pour permettre l&apos;échange
              d&apos;informations et la prise de contact. Groom Up
              n&apos;intervient ni dans la prestation, ni dans la facturation des
              services entre utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              2. Acceptation
            </h2>
            <p className="mt-3">
              En créant un compte ou en utilisant le Service, vous acceptez
              sans réserve les présentes CGU et notre{" "}
              <a href="/privacy" className="text-stone-100 underline">
                Politique de confidentialité
              </a>
              . Si vous n&apos;acceptez pas, vous devez cesser d&apos;utiliser
              le Service.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              3. Compte utilisateur
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                Vous devez avoir au moins <strong>16&nbsp;ans</strong> pour
                créer un compte.
              </li>
              <li>
                Les informations fournies à l&apos;inscription doivent être
                exactes. Vous êtes responsable de la confidentialité de votre
                mot de passe.
              </li>
              <li>
                Le type de compte (cavalier ou professionnel) est défini à
                l&apos;inscription et ne peut pas être modifié sans suppression
                puis recréation du compte.
              </li>
              <li>
                Nous nous réservons le droit de suspendre ou supprimer un
                compte qui contreviendrait aux CGU, à la loi, ou aux droits de
                tiers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              4. Abonnement et paiement
            </h2>
            <p className="mt-3">
              L&apos;accès à la messagerie entre utilisateurs nécessite un
              abonnement premium. Le paiement et la facturation sont opérés
              par <strong>Apple App Store</strong> (iOS) ou
              <strong> Google Play Billing</strong> (Android), via notre
              prestataire RevenueCat. Aucun moyen de paiement n&apos;est stocké
              par Groom Up.
            </p>
            <p className="mt-3">
              Les conditions de remboursement, renouvellement et résiliation
              suivent celles de la plateforme (App Store ou Play Store) où
              l&apos;abonnement a été souscrit. Vous pouvez gérer ou annuler à
              tout moment depuis les paramètres de votre compte Apple/Google.
            </p>
            <p className="mt-3">
              Conformément à l&apos;article L221-28 du Code de la consommation,
              en commençant à utiliser le Service immédiatement après
              l&apos;achat, vous renoncez expressément à votre droit de
              rétractation.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              5. Comportement des utilisateurs
            </h2>
            <p className="mt-3">Vous vous engagez à ne pas&nbsp;:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                Publier de contenu illicite, diffamatoire, haineux, harcelant
                ou portant atteinte à la vie privée de tiers,
              </li>
              <li>
                Usurper l&apos;identité d&apos;un tiers ou créer plusieurs
                comptes pour contourner les règles,
              </li>
              <li>
                Publier de faux avis (avis sur soi-même, sur des concurrents,
                avis monnayés),
              </li>
              <li>
                Solliciter des transactions hors plateforme avant l&apos;échange
                via la messagerie premium,
              </li>
              <li>Utiliser le Service à des fins automatisées (scraping, bots).</li>
            </ul>
            <p className="mt-3">
              Tout signalement peut être adressé à{" "}
              <a
                href="mailto:contact@groom-up-company.com"
                className="text-stone-100 underline"
              >
                contact@groom-up-company.com
              </a>
              . Nous nous réservons le droit de retirer un contenu et/ou
              suspendre un compte sans préavis.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              6. Contenu utilisateur
            </h2>
            <p className="mt-3">
              Vous restez propriétaire des contenus que vous publiez (photos,
              textes, avis). En les publiant, vous accordez à Groom Up une
              licence mondiale, non exclusive, gratuite, pour les héberger,
              afficher et distribuer dans le cadre du Service.
            </p>
            <p className="mt-3">
              Les avis sont soumis à des règles anti-abus&nbsp;: seul un
              cavalier ayant échangé via la messagerie peut laisser un avis,
              un avis par professionnel et par cavalier, modération a
              posteriori possible.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              7. Responsabilités
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                Groom Up est une plateforme de mise en relation. Nous ne
                sommes ni partie ni garant des prestations conclues entre
                utilisateurs.
              </li>
              <li>
                Les informations affichées sur les profils (certifications,
                expérience, zones d&apos;intervention) sont
                <strong> déclaratives</strong>. Nous n&apos;effectuons pas de
                vérification systématique. Les utilisateurs sont invités à
                effectuer leurs propres diligences.
              </li>
              <li>
                Le Service est fourni &quot;en l&apos;état&quot;. Nous nous
                efforçons d&apos;assurer sa disponibilité, sans garantir
                l&apos;absence d&apos;interruptions ou d&apos;erreurs.
              </li>
              <li>
                Notre responsabilité ne saurait être engagée pour les préjudices
                indirects résultant de l&apos;utilisation du Service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              8. Propriété intellectuelle
            </h2>
            <p className="mt-3">
              Le nom &quot;Groom Up&quot;, le logo, le design de
              l&apos;application et tout autre élément distinctif sont la
              propriété exclusive de Groom Up Company. Toute reproduction non
              autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              9. Modification des CGU
            </h2>
            <p className="mt-3">
              Nous pouvons modifier les présentes CGU à tout moment. Les
              modifications substantielles sont notifiées dans
              l&apos;application. La poursuite de l&apos;utilisation du Service
              vaut acceptation des CGU modifiées.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              10. Loi applicable et juridiction
            </h2>
            <p className="mt-3">
              Les présentes CGU sont soumises au droit français. En cas de
              litige, les tribunaux français seront seuls compétents, sous
              réserve des dispositions impératives applicables au consommateur.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              11. Contact
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
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
