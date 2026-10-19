import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fresh Eye Foundation — Supporting Products & Services That Improve Lives",
  description: "Fresh Eye Foundation is a non-profit that builds, backs and partners on products and services that improve lives — in education, health, skills, the environment and more. We started with education. CatalystBox is our first initiative.",
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
