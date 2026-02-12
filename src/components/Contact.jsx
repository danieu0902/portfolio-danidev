import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Contact() {
  const items = [
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-zinc-200",
      url: "https://github.com/danieu0902",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      color: "text-blue-500",
      url: "https://www.linkedin.com/in/daniel-serrano-portillo-543a71328/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      color: "text-red-500",
      url: "https://www.instagram.com/_danisrranoo/",
    },
  ]

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Contacto</h2>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-4 rounded"></div>
        </div>

        <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-12">
          Estoy activo en mis redes, por si quieres pasarte.
          Si te apetece hablar de desarrollo o montar algo chulo, aquí estoy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-10
                           flex flex-col items-center gap-4
                           hover:border-white/40 hover:-translate-y-1
                           transition-all duration-300"
              >
                <Icon size={38} className={item.color} />
                <span className="text-lg font-medium">{item.name}</span>
              </a>
            )
          })}
        </div>

      </div>
    </section>
  )
}