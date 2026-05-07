import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Supprimer mon compte — Groom Up",
  description:
    "Comment supprimer définitivement votre compte Groom Up et toutes les données associées.",
  alternates: { canonical: "https://groom-up-company.com/delete-account" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 avril 2026";

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-poppins text-4xl font-bold text-stone-100 md:text-5xl">
          Supprimer mon compte Groom Up
        </h1>
        <p className="mt-3 text-sm text-stone-400">
          Dernière mise à jour&nbsp;: {LAST_UPDATED}
        </p>

        <div className="prose prose-invert mt-10 max-w-none space-y-8 text-stone-300 leading-relaxed">
          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Méthode 1&nbsp;: directement dans l&apos;application
              (recommandée)
            </h2>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              <li>Ouvrez l&apos;application Groom Up sur votre téléphone.</li>
              <li>
                Connectez-vous avec votre compte si ce n&apos;est pas déjà
                fait.
              </li>
              <li>
                Allez dans l&apos;onglet <strong>Profil</strong> en bas à
                droite.
              </li>
              <li>
                Touchez l&apos;icône <strong>Réglages</strong> en haut à
                droite.
              </li>
              <li>
                Faites défiler jusqu&apos;à la section{" "}
                <strong>&quot;Zone de danger&quot;</strong>.
              </li>
              <li>
                Touchez <strong>&quot;Supprimer mon compte&quot;</strong>.
              </li>
              <li>
                Confirmez la suppression. Votre compte est immédiatement
                désactivé&nbsp;: vous ne pouvez plus vous connecter.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Méthode 2&nbsp;: par email
            </h2>
            <p className="mt-3">
              Si vous n&apos;avez plus accès à l&apos;application, envoyez un
              email à{" "}
              <a
                href="mailto:groomup.company@gmail.com?subject=Demande%20de%20suppression%20de%20compte%20Groom%20Up"
                className="text-stone-100 underline"
              >
                groomup.company@gmail.com
              </a>{" "}
              avec&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                L&apos;adresse email associée à votre compte Groom Up
              </li>
              <li>
                L&apos;objet&nbsp;: <em>Demande de suppression de compte</em>
              </li>
              <li>
                Une confirmation que vous êtes bien le titulaire du compte
              </li>
            </ul>
            <p className="mt-3">
              Nous traitons les demandes sous <strong>72&nbsp;heures
              ouvrées</strong>. Vous recevrez une confirmation par email
              après suppression.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Quelles données sont supprimées&nbsp;?
            </h2>
            <p className="mt-3">
              Lorsque vous supprimez votre compte, les données suivantes sont
              traitées immédiatement&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Profil&nbsp;</strong>: nom, photo, bannière, bio,
                spécialités, tarif, zones d&apos;intervention, langues, liens
                — supprimés sous 30&nbsp;jours.
              </li>
              <li>
                <strong>Localisation&nbsp;</strong>: adresse et coordonnées —
                supprimées sous 30&nbsp;jours.
              </li>
              <li>
                <strong>Messages et photos partagés&nbsp;</strong>:
                anonymisés immédiatement (le contenu reste visible aux autres
                participants des conversations comme &quot;Utilisateur
                supprimé&quot;).
              </li>
              <li>
                <strong>Avis laissés&nbsp;</strong>: anonymisés immédiatement.
              </li>
              <li>
                <strong>Galerie portfolio&nbsp;</strong>: supprimée
                immédiatement.
              </li>
              <li>
                <strong>Compte d&apos;authentification&nbsp;</strong>:
                supprimé immédiatement (impossible de se reconnecter).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Quelles données sont conservées&nbsp;?
            </h2>
            <p className="mt-3">
              Conformément à nos obligations légales, certaines données sont
              conservées au-delà de la suppression du compte&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>Factures et historique des paiements&nbsp;</strong>:
                conservés <strong>5&nbsp;ans</strong> (obligation comptable
                française).
              </li>
              <li>
                <strong>Logs de sécurité anonymisés&nbsp;</strong>: conservés
                jusqu&apos;à <strong>1&nbsp;an</strong> pour la lutte contre la
                fraude.
              </li>
            </ul>
            <p className="mt-3">
              Aucune donnée personnelle identifiante n&apos;est conservée
              au-delà de 30&nbsp;jours, sauf les données de facturation
              légalement requises.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Suppression de l&apos;abonnement premium
            </h2>
            <p className="mt-3">
              La suppression de votre compte Groom Up <strong>n&apos;annule
              pas automatiquement</strong> votre abonnement premium. Pour
              annuler l&apos;abonnement&nbsp;:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                <strong>iOS&nbsp;</strong>: Réglages → votre nom →
                Abonnements → Groom Up → Annuler l&apos;abonnement
              </li>
              <li>
                <strong>Android&nbsp;</strong>: Google Play Store →
                Paiements et abonnements → Abonnements → Groom Up → Annuler
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold text-stone-100">
              Contact
            </h2>
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
              <br />
              Politique de confidentialité&nbsp;:{" "}
              <a href="/privacy" className="text-stone-100 underline">
                /privacy
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
