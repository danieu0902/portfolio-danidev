import Image from "next/image"

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Sobre Mí</h2>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col items-center gap-8">

            {/* FOTO CENTRADA CON ARO HOVER */}
            <div className="relative w-64 h-64 group">

              {/* ARO EXTERIOR */}
              <div
                className="
                  absolute inset-0 rounded-full
                  border-2 border-white/0
                  group-hover:border-white/60
                  group-hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
                  transition-all duration-500
                "
              ></div>

              {/* IMAGEN */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden border border-zinc-800">
                <Image
                  src="/perfil.jpeg"
                  alt="Foto perfil"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* TERMINAL */}
            <div className="w-full max-w-sm bg-black border border-zinc-800 rounded-xl p-6 font-mono text-sm text-green-400">
              <p>// Daniel Eurípides Serrano Portillo</p>
              <p>// Desarrollador Full Stack</p>
              <br />
              <p>$ whoami</p>
              <p className="text-white">Desarrollador Full Stack Junior</p>
              <br />
              <p>$ pwd</p>
              <p className="text-white">Lucena (Córdoba), España</p>
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="space-y-8">

            <h3 className="text-3xl md:text-4xl font-bold">
              Desarrollador <span className="text-cyan-400">Frontend</span>
            </h3>

            <div className="text-zinc-300 space-y-4 leading-relaxed">
              <p>
                Soy un desarrollador full stack junior con 1 año de experiencia
                creando aplicaciones web modernas y responsivas. Me apasiona
                transformar ideas en experiencias digitales funcionales y atractivas.
              </p>

              <p>
                Mi enfoque está en escribir código limpio, eficiente y
                mantenible. Siempre estoy aprendiendo nuevas tecnologías y
                mejorando mis habilidades para crear soluciones innovadoras.
              </p>

              <p>
                Aparte de programar, me encanta jugar videojuegos y
                pasar tiempo con la familia y amigos.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <h4 className="text-3xl font-bold text-cyan-400">1 año</h4>
                <p className="text-zinc-400 text-sm">Experiencia</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                <p className="text-zinc-400 text-sm">Proyectos</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-cyan-400">100%</h4>
                <p className="text-zinc-400 text-sm">Compromiso</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
