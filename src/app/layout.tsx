import type { Metadata } from "next";
import { Google_Sans } from "next/font/google";

import Rodape from "@/components/Rodape/Rodape";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const fonte = Google_Sans({
  variable: "--font-app",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jogos educacionais de Computação por ano escolar | UTIN",
    template: "%s | UTIN",
  },
  description: "Jogos e recursos digitais gratuitos por ano escolar, alinhados à BNCC Computação, com curadoria da UTIN.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Repositório de recursos digitais pedagógicos" },
  twitter: { card: "summary_large_image" },
  //verification: { google: "CÓDIGO_DO_SEARCH_CONSOLE" },
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
