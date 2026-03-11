import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groom Up — Services équestres premium",
  description:
    "La première application qui connecte cavaliers et professionnels équins en France. Trouvez un groom, un coach, un transporteur près de chez vous.",
  openGraph: {
    title: "Groom Up — Services équestres premium",
    description:
      "La première application qui connecte cavaliers et professionnels équins en France.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-50 text-stone-900 antialiased">{children}</body>
    </html>
  );
}
