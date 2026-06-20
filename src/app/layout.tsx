import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "The Glutony — Evolve or Be Consumed",
  description:
    "A dark fantasy monster evolution RPG set in The Hollow — a world born from the death of a god. Consume. Adapt. Surpass everything.",
  openGraph: {
    title: "The Glutony",
    description: "Those who cannot evolve will be consumed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
