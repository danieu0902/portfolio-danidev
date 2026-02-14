import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Gestión Club TFG",
      type: "dashboard",
      description:
        "Aplicación web full stack desarrollada para la gestión integral de un club deportivo con autenticación segura y panel administrativo completo.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
      ],
      github: "https://github.com/tuusuario/proyecto-club",
      demo: "https://proyecto-club.vercel.app",
    },
    {
      title: "Ecommerce Full Stack",
      type: "web",
      description:
        "Plataforma de comercio electrónico con sistema de usuarios, carrito de compra y arquitectura basada en API REST.",
      tech: [
        "Next.js",
        "Node.js",
        "MySQL",
        "API REST",
        "TailwindCSS",
      ],
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://ecommerce.vercel.app",
    },
    {
      title: "App Mobile React Native",
      type: "mobile",
      description:
        "Aplicación móvil desarrollada con React Native con integración de APIs externas y arquitectura modular escalable.",
      tech: [
        "React Native",
        "JavaScript",
        "API REST",
        "Android Studio",
      ],
      github: "https://github.com/tuusuario/app-mobile",
      demo: "https://expo.dev/tuapp",
    },
  ]

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos</h2>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  )
}