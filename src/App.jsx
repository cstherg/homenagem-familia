export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-16">
        {/* Cabeçalho */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Homenagem à <span className="underline decoration-slate-300">Família</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            À base de tudo que eu sou: amor, apoio, fé e união.
          </p>
        </header>

        {/* Destaque principal */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
          {/* Texto */}
          <div className="p-6 rounded-2xl shadow-sm bg-white/80 border">
            <h2 className="text-2xl font-semibold">Por que a família é tão importante?</h2>
            <p className="mt-3 leading-7">
              A família é o primeiro lugar onde aprendemos valores, construímos sonhos e encontramos
              força nos dias difíceis. É o abraço que acolhe, a palavra que orienta e o sorriso que
              celebra cada conquista. Obrigada por serem meu porto seguro.
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-1">
              <li>Amor que ensina e transforma</li>
              <li>União que sustenta</li>
              <li>Exemplo que inspira</li>
            </ul>
          </div>

          {/* DUAS IMAGENS LADO A LADO (arquivos reais do /public) */}
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border bg-white/60 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
              <img
                src="/familia.jpg"
                alt="Foto principal da família"
                className="h-full w-full object-cover rounded-xl"
              />
              <img
                src="/foto1.jpg"
                alt="Foto extra da família"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Citações */}
        <section className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            "Família: onde a vida começa e o amor nunca termina.",
            "Lar é onde está o nosso coração… e os nossos.",
            "Somos mais fortes quando estamos juntos.",
          ].map((q, i) => (
            <figure key={i} className="p-5 rounded-2xl bg-white border">
              <blockquote className="italic">“{q}”</blockquote>
            </figure>
          ))}
        </section>

        {/* Rodapé */}
        <footer className="mt-14 text-center text-sm text-slate-600">
          Feito com ❤️ por Stheffany — {new Date().getFullYear()}
        </footer>
      </section>
    </main>
  );
}
