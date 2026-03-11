import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groom Up — La plateforme des professionnels équestres",
  description:
    "Trouvez et contactez les meilleurs professionnels équins près de chez vous. Coaching, soins, transport, pension — tout est sur Groom Up.",
  openGraph: {
    title: "Groom Up — La plateforme des professionnels équestres",
    description:
      "La première application qui connecte cavaliers et professionnels équins en France.",
    type: "website",
    locale: "fr_FR",
    siteName: "Groom Up",
  },
  twitter: {
    card: "summary_large_image",
    title: "Groom Up — La plateforme des professionnels équestres",
    description:
      "La première application qui connecte cavaliers et professionnels équins en France.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Poppins:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="bg-stone-950 text-stone-200 antialiased">
        {children}
      </body>
    </html>
  );
}
