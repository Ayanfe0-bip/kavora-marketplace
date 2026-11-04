import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KAVORA | Shop Everything. Discover More.",
    template: "%s | KAVORA",
  },
  description:
    "Discover products, explore trusted vendors, and shop conveniently with KAVORA.",
  applicationName: "KAVORA",
  keywords: [
    "KAVORA",
    "online marketplace",
    "Nigeria shopping",
    "fashion",
    "beauty products",
    "multi-vendor marketplace",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
