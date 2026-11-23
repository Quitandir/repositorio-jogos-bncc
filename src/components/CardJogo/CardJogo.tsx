import Image from "next/image";

type Props = {
  nome: string;
  descricao: string;
  link: string;
  habilidades: string[];
  imagem: string;
};

export default function CardJogo({ nome, descricao, link, habilidades, imagem }: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-borda bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
    >
      {/* object-contain: as imagens têm proporções diferentes (logos finos e telas inteiras). */}
      <div className="relative aspect-video bg-fundo">
        <Image
          src={imagem}
          alt=""
          fill
          sizes="(min-width: 640px) 18rem, 100vw"
          className="object-contain p-3"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h2 className="text-lg leading-snug font-semibold">
          {nome}
          <span className="sr-only"> (abre em nova aba)</span>
        </h2>
        {descricao && <p className="text-sm text-tinta-suave">{descricao}</p>}
        {habilidades.length > 0 && (
          <ul aria-label="Habilidades da BNCC" className="mt-auto flex flex-wrap gap-2">
            {habilidades.map((habilidade) => (
              <li
                key={habilidade}
                className="rounded-full bg-google-green-soft px-3 py-1 text-xs font-medium text-google-green-strong"
              >
                {habilidade}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
