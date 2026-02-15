import ProjectCard from "./ProjectCard"

export default function Projects() {
  const projects = [
    {
      title: "Gestión Club Deportivo",
      type: "dashboard",
      description:
        "Aplicación web full stack para la gestión integral de un club deportivo, desarrollada con arquitectura basada en APIs REST (CRUD completo), sistema de autenticación segura y múltiples módulos funcionales. Implementada como Progressive Web App (PWA), permitiendo acceso offline y mejorando la experiencia de usuario.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "NextAuth",
        "API REST",
        "PWA",
      ],
      github: "https://github.com/danieu0902/gestionClub-TFG",
      demo: "https://gestion-club-tfg.vercel.app/",
    },
    {
  title: "Blog F1",
  type: "web",
  description:
    "Blog temático sobre Fórmula 1 con sistema de publicaciones dinámicas, panel de administración para crear y editar artículos y diseño optimizado para lectura. Incluye renderizado dinámico, rutas dinámicas y arquitectura basada en API REST.",
  tech: [
    "Vite",
    "React",
    "Node.js",
    "Prisma ORM",
    "PostgreSQL",
    "TailwindCSS",
  ],
  github: "https://github.com/danieu0902/20pilotos1sueno",
  demo: "https://20pilotos1sueno.vercel.app/",
},
    {
      title: "Mollina Culture",
      type: "mobile",
      description:
        "Desarrollo de aplicación móvil para Android con React Native y TypeScript, apoyada en Android SDK y Android Studio, implementando arquitectura modular orientada a escalabilidad y buenas prácticas.",
      tech: [
        "React Native",
        "TypeScript",
        "Android SDK",
        "Android Studio",
        "Expo",
        "TailwindCSS",
      ],
      github: "https://github.com/danieu0902/mollina-app-mobile",
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