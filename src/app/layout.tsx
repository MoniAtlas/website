import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoniAtlas | One map for all your money",
  description:
    "MoniAtlas is an AI-first financial clarity platform for UK professionals who want to understand their net worth, cash flow, and future outlook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}