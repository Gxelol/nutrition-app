import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutrition Chatbot",
  description: "A chatbot for nutrition advice and information.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
