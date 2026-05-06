import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — Groom Up",
  description:
    "Mentions légales de l'éditeur Groom Up Company : raison sociale, siège social, identifiants RCS et SIRET, contact et hébergeur.",
  alternates: { canonical: "https://groom-up-company.com/legal" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "6 mai 2026";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-poppins text-4xl font-bold text-stone-100 md:text-5xl">
          Mentions légales
        </h1>
        <p className="mt-3 text-sm text-stone-400">
          Dernière mise à jour&nbsp;: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              1. Éditeur du site et de l&apos;application
            </h2>
            <p className="mt-3">
              Le présent site <em>groom-up-company.com</em> ainsi que
              l&apos;application mobile Groom Up (iOS et Android) sont édités
              par&nbsp;:
            </p>
            <p className="mt-3">
              <strong>Groom Up Company</strong>
              <br />
              Forme juridique&nbsp;: à compléter (SAS, SARL, EI, etc.)
              <br />
              Capital social&nbsp;: à compléter
              <br />
              Siège social&nbsp;: à compléter
              <br />
              RCS&nbsp;: à compléter (ville + numéro)
              <br />
              SIRET&nbsp;: à compléter
              <br />
              N° TVA intracommunautaire&nbsp;: à compléter
              <br />
              Email&nbsp;:{" "}
              <a
                href="mailto:groomup.company@gmail.com"
                className="text-stone-100 underline"
              >
                groomup.company@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              2. Directrice de la publication
            </h2>
            <p className="mt-3">
              <strong>Noa Caudrelier</strong>, en qualité de représentante
              légale de Groom Up Company.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              3. Délégué à la protection des données (DPO)
            </h2>
            <p className="mt-3">
              <strong>Noa Caudrelier</strong>
              <br />
              Email&nbsp;:{" "}
              <a
                href="mailto:groomup.company@gmail.com"
                className="text-stone-100 underline"
              >
                groomup.company@gmail.com
              </a>
            </p>
            <p className="mt-3">
              Pour toute question liée à la protection de vos données
              personnelles, consultez notre{" "}
              <a href="/privacy" className="text-stone-100 underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              4. Hébergement
            </h2>
            <p className="mt-3">
              Le site <em>groom-up-company.com</em> est hébergé par&nbsp;:
            </p>
            <p className="mt-3">
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              <br />
              Site web&nbsp;:{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-100 underline"
              >
                vercel.com
              </a>
            </p>
            <p className="mt-3">
              Les données de l&apos;application Groom Up sont hébergées dans
              l&apos;Union européenne par&nbsp;:
            </p>
            <p className="mt-3">
              <strong>Supabase Inc.</strong>
              <br />
              970 Toa Payoh North #07-04, Singapour 318992
              <br />
              Région de stockage&nbsp;: <em>eu-central-1 (Francfort, Allemagne)</em>
              <br />
              Site web&nbsp;:{" "}
              <a
                href="https://supabase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-100 underline"
              >
                supabase.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              5. Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des éléments présents sur le site et dans
              l&apos;application Groom Up (textes, images, logos, code source,
              base de données, marques) est la propriété exclusive de Groom Up
              Company ou de ses partenaires, et est protégé par les législations
              françaises et internationales relatives au droit d&apos;auteur et
              au droit des marques.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou
              adaptation, totale ou partielle, sans autorisation écrite
              préalable de Groom Up Company est interdite et constituerait une
              contrefaçon sanctionnée par les articles L335-2 et suivants du
              Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              6. Liens hypertextes
            </h2>
            <p className="mt-3">
              Le site et l&apos;application peuvent contenir des liens vers des
              sites tiers. Groom Up Company décline toute responsabilité quant
              au contenu de ces sites externes.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              7. Loi applicable et juridiction compétente
            </h2>
            <p className="mt-3">
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige et après échec de toute tentative de résolution
              amiable, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              8. Contact
            </h2>
            <p className="mt-3">
              Pour toute question concernant ces mentions légales ou pour
              signaler un contenu inapproprié dans l&apos;application&nbsp;:
            </p>
            <p className="mt-3">
              <strong>Groom Up Company</strong>
              <br />
              Email&nbsp;:{" "}
              <a
                href="mailto:groomup.company@gmail.com"
                className="text-stone-100 underline"
              >
                groomup.company@gmail.com
              </a>
            </p>
          </section>

          <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
            <p className="text-sm text-amber-200">
              <strong>Note de l&apos;éditeur&nbsp;:</strong> certaines
              informations (forme juridique, capital, siège, RCS, SIRET, n°
              TVA) sont à compléter avant la mise en ligne définitive. Cette
              page sera mise à jour dès l&apos;immatriculation finalisée.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
