export default function ProjectCard({ title, desc, tech }) {
  return (
    <div className="
      bg-zinc-900
      border border-zinc-800
      rounded-2xl
      p-7
      hover:border-zinc-600
      hover:-translate-y-1
      transition
    ">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      <p className="text-zinc-400 mb-5 text-sm leading-relaxed">
        {desc}
      </p>

      <span className="text-xs text-zinc-500">
        {tech}
      </span>
    </div>
  )
}