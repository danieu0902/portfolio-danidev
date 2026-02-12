export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6 items-center">

          {/* izquierda */}
          <div className="text-center md:text-left text-xl font-semibold">
            <span className="text-cyan-400">&lt;</span>
            DANIdev
            <span className="text-cyan-400">/&gt;</span>
          </div>

          {/* derecha */}
          <div className="text-center md:text-right text-sm text-zinc-500">
            © 2026 Daniel Eurípides Serrano Portillo
          </div>

        </div>

      </div>
    </footer>
  )
}