export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-3xl">
        <p className="text-sm text-zinc-500 mb-6">
          Desarrollador Frontend
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Construyo productos web
          <br />
          <span className="text-zinc-400">
            rápidos y bien diseñados
          </span>
        </h1>

        <p className="text-zinc-500 mb-10">
          Next.js · React · UI limpia · Arquitectura clara
        </p>

        <div className="flex gap-4 justify-center">
          <a className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">
            Ver proyectos
          </a>

          <a className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500">
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}