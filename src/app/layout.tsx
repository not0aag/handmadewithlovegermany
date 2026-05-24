import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handmade with LOVE ♥️ | Custom Gifts & Bouquets — Germany",
  description:
    "Customised bouquets, personalised cards, hampers, albums, photo frames & Polaroids. Handcrafted with love in Germany. Order yours today.",
  keywords: "handmade gifts germany, custom bouquets, personalised hampers, photo albums, polaroids",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
