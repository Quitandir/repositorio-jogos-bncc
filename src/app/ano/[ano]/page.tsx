import Link from "next/link";
import { notFound } from "next/navigation";

import CardJogo from "@/components/CardJogo/CardJogo";
import FaixaGoogle from "@/components/FaixaGoogle/FaixaGoogle";
import { corDoAno } from "@/components/cores";
import jogos from "@/data/jogos.json";

// Gera /ano/3 e /ano/5 no build, a partir do JSON
export async function generateStaticParams() {
  const anos = [...new Set(jogos.map((jogo) => jogo.ano))];
  return anos.map((ano) => ({ ano: String(ano) }));
}

export default async function PaginaAno({ params }: PageProps<"/ano/[ano]">) {
  const { ano } = await params; // params é uma Promise e o valor vem como string
  const jogosDoAno = jogos.filter((jogo) => jogo.ano === Number(ano));

  if (jogosDoAno.length === 0) notFound(); // /ano/99 ou /ano/abc → 404

  const cor = corDoAno(Number(ano));

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-10 md:px-10">
      <Link
        href="/"
        className="text-sm font-medium text-google-blue-strong hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
      >
        ← Todos os anos
      </Link>

      <header className="mt-4 mb-8 flex flex-col gap-3">
        <h1 className={`text-4xl font-bold md:text-5xl ${cor.texto}`}>{ano}º ano</h1>
        <p className="text-tinta-suave">
          {jogosDoAno.length} {jogosDoAno.length === 1 ? "jogo" : "jogos"}
        </p>
        <FaixaGoogle />
      </header>

      <ul className="flex flex-wrap justify-center gap-6 md:justify-start">
        {jogosDoAno.map((jogo) => (
          <li key={jogo.id} className="w-full sm:w-72">
            <CardJogo
              nome={jogo.nome}
              descricao={jogo.descricao}
              link={jogo.link}
              habilidades={jogo.habilidades}
              imagem={jogo.imagem}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
