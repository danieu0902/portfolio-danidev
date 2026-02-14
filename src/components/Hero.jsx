export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-black overflow-hidden">

      {/* Glow de fondo */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-4xl text-center">

        {/* Subtítulo */}
        <p className="text-sm tracking-widest text-cyan-400 uppercase mb-6">
          Desarrollador Full Stack
        </p>

        {/* Título */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Construyo experiencias web
          <br />
          <span className="text-zinc-400">
            modernas, rápidas y bien estructuradas
          </span>
        </h1>

        {/* Stack */}
        <p className="text-lg mb-12">
          <span className="text-zinc-400">Next.js</span> ·{" "}
          <span className="text-cyan-400">React</span> ·{" "}
          <span className="text-green-400">Node.js</span> ·{" "}
          <span className="text-emerald-400">Prisma ORM</span> ·{" "}
          <span className="text-blue-400">PostgreSQL</span>
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#projects"
            className="
              px-8 py-3 rounded-xl
              bg-cyan-400 text-black font-semibold
              hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
              transition-all duration-300
            "
          >
            Ver proyectos
          </a>

          <a
            href="#contacto"
            className="
              px-8 py-3 rounded-xl
              border border-zinc-700
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all duration-300
            "
          >
            Contacto
          </a>

        </div>

      </div>
    </section>
  )
}