import Image from "next/image";
import logo from '../../../public/image.png'

export default function Rodape() {
  return (
    <footer className="border-t border-borda bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-tinta-suave md:flex-row md:items-center md:justify-between md:px-10">
        <Image src={logo} alt='Logo da UTIN' className="w-20"/>
        
        <div className="space-y-1">
          <p>
            Curadoria do repositório: <strong className="font-semibold text-tinta">UTIN</strong>.
          </p>
          <p>
            As imagens dos jogos pertencem aos seus respectivos autores e são usadas apenas para
            identificar cada recurso, com link para o site original.
          </p>
        </div>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSeM2pY1Gv1ozu3ZsHzRAhAuTNcu9_l6PTJMI264dH1zivEFBQ/viewform?usp=publish-editor'
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-google-blue-strong px-5 py-2.5 font-medium text-white transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-google-blue"
        >
          Professor(a), sugira um jogo
        </a>
      </div>
    </footer>
  );
}
