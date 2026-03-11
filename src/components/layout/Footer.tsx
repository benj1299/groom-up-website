export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold">
              Groom Up
            </span>
            <p className="mt-1 text-sm text-stone-500">
              Services équestres premium
            </p>
          </div>

          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#" className="hover:text-stone-700">
              Conditions générales
            </a>
            <a href="#" className="hover:text-stone-700">
              Confidentialité
            </a>
            <a href="mailto:contact@groomup.fr" className="hover:text-stone-700">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-100 pt-6 text-center text-xs text-stone-400">
          &copy; {new Date().getFullYear()} Groom Up Company. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
