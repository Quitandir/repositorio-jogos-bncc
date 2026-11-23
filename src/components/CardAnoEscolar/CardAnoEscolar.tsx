import Link from "next/link";

import { corDoAno } from "@/components/cores";

type Props = {
  ano: number;
};

export default function CardAnoEscolar({ ano }: Props) {
  const cor = corDoAno(ano);

  return (
    <Link
      href={`/ano/${ano}`}
      className={`flex flex-col items-center justify-center rounded-3xl border-b-8 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-4 focus-visible:outline-offset-4 ${cor.fundo} ${cor.borda} ${cor.contorno}`}
    >
      <span className={`text-[clamp(6rem,16vw,14rem)] leading-none font-bold ${cor.texto}`}>
        {ano}º
      </span>
      <span className="mt-2 text-2xl font-medium text-tinta-suave md:text-3xl">ano</span>
    </Link>
  );
}
