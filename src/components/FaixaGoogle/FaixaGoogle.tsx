// Faixa decorativa com as quatro cores do Google.
export default function FaixaGoogle() {
  return (
    <div aria-hidden="true" className="flex h-1.5 w-28 overflow-hidden rounded-full">
      <span className="flex-1 bg-google-blue" />
      <span className="flex-1 bg-google-red" />
      <span className="flex-1 bg-google-yellow" />
      <span className="flex-1 bg-google-green" />
    </div>
  );
}
