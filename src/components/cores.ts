// Classes completas (o Tailwind só gera classes que aparecem escritas por inteiro no código).
const CORES = [
  { fundo: "bg-google-blue-soft", texto: "text-google-blue-strong", borda: "border-google-blue", contorno: "focus-visible:outline-google-blue" },
  { fundo: "bg-google-red-soft", texto: "text-google-red-strong", borda: "border-google-red", contorno: "focus-visible:outline-google-red" },
  { fundo: "bg-google-yellow-soft", texto: "text-google-yellow-strong", borda: "border-google-yellow", contorno: "focus-visible:outline-google-yellow" },
  { fundo: "bg-google-green-soft", texto: "text-google-green-strong", borda: "border-google-green", contorno: "focus-visible:outline-google-green" },
] as const;

// A cor depende do ano (1º azul, 2º vermelho, 3º amarelo, 4º verde, 5º azul...),
// assim o card da página inicial e o título da página do ano ficam com a mesma cor.
export function corDoAno(ano: number) {
  return CORES[(((ano - 1) % CORES.length) + CORES.length) % CORES.length];
}
