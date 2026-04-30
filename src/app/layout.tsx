import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Labs 24K | Franquicia Global de IA N°1 - Inversión & Futuro",
  description: "Descubra la oportunidad millonaria en la era de la IA con Labs 24K. Red global de líderes tecnológicos, implementación de agentes autónomos y exclusividad territorial.",
  keywords: ["Franquicia IA", "Labs 24K", "Inteligencia Artificial Negocios", "Inversión Tecnológica 2026", "Socio Fundador IA", "Automatización Global"],
  authors: [{ name: "Labs 24K Global" }],
  metadataBase: new URL("https://labs24kfranquicias.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Labs 24K | La Mayor Transferencia de Riqueza en la Era de la IA",
    description: "Únase a la red de élite que está dominando el mercado global de la Inteligencia Artificial.",
    url: "https://labs24kfranquicias.com",
    siteName: "Labs 24K Global",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Labs 24K Global AI Franchise",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs 24K | Elite AI Franchise",
    description: "Lidere la revolución tecnológica en su territorio.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-gold/30 selection:text-white bg-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
