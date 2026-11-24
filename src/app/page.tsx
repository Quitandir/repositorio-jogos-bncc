import CardAnoEscolar from "@/components/CardAnoEscolar/CardAnoEscolar";
import FaixaGoogle from "@/components/FaixaGoogle/FaixaGoogle";
import jogos from "@/data/jogos.json";

import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const anosComJogos = [...new Set(jogos.map((jogo) => jogo.ano))].sort((a, b) => a - b);

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-8 px-6 py-10 md:px-10">
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Repositório de recursos digitais pedagógicos
        </h1>
        <FaixaGoogle />
      </header>

      {/* Os cards dividem todo o espaço restante da tela, em quantas colunas couberem. */}
      <nav
        aria-label="Anos escolares"
        className="grid flex-1 auto-rows-[minmax(12rem,1fr)] grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-6"
      >
        {anosComJogos.map((ano) => (
          <CardAnoEscolar key={ano} ano={ano} />
        ))}
      </nav>
    </main>
  );
}
