import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed } from "next/font/google";
import Navbar from "@/components/catalog/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/catalogo/WhatsAppFloat";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Pura Pasion Futbol Store | Cali, Colombia",
  description:
    "Camisetas de futbol, clubes y selecciones. Envios a toda Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className={`${bebasNeue.variable} ${barlowCondensed.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
