import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresh Eye Foundation — Intelligence Infrastructure for India's Public Systems",
  description: "Fresh Eye Foundation builds data intelligence infrastructure for India's underserved public systems. We started with education. CatalystBox is our first instrument.",
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
