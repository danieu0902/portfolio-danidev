import ProjectCard from "./ProjectCard"

export default function Projects() {
  return (
    <section id="proyectos" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-semibold mb-12">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectCard
            title="Gestión Club"
            desc="Sistema completo de gestión deportiva con panel admin."
            tech="Next.js"
          />

          <ProjectCard
            title="Dashboard"
            desc="Panel con CRUD, métricas y control de usuarios."
            tech="React"
          />

          <ProjectCard
            title="Portfolio"
            desc="Sitio personal optimizado y responsive."
            tech="Next.js"
          />
        </div>

      </div>
    </section>
  )
}