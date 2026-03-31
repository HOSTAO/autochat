import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoChat - The Most Advanced WhatsApp Automation Platform",
  description: "Transform your WhatsApp into a powerful business tool. Automate conversations, boost sales, and deliver exceptional customer experiences 24/7.",
  keywords: "WhatsApp automation, WhatsApp business, chatbot, customer support, marketing automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}