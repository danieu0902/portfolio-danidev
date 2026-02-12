"use client"

export default function Navbar() {
  const links = ["Sobre mí", "Proyectos", "Skills", "Contacto"]

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur bg-black/40 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
        <span className="font-semibold tracking-wide"><span className="text-cyan-400">&lt;</span>
            DANIdev
            <span className="text-cyan-400">/&gt;</span></span>

        <div className="flex gap-8 text-sm text-zinc-400">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-white transition"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
