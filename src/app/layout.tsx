import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";

import Rodape from "@/components/Rodape/Rodape";
import "./globals.css";

const fonte = Google_Sans({
  variable: "--font-app",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Repositório de recursos digitais pedagógicos",
  description: "Jogos e recursos digitais organizados por ano escolar, com curadoria da UTIN.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${fonte.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col bg-fundo font-sans text-tinta">
        {children}
        <Rodape />
      </body>
    </html>
  );
}
