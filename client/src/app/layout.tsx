import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chhatrapatishivajimaharaj.org"),
  title: {
    default: "Chhatrapati Shivaji Maharaj: History, Forts, Battles and Legacy",
    template: "%s | Chhatrapati Shivaji Maharaj"
  },
  description:
    "A static SEO knowledge hub covering Chhatrapati Shivaji Maharaj, Maratha history, forts, battles, navy, administration, people and travel guides.",
  applicationName: "Chhatrapati Shivaji Maharaj Knowledge Hub"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
