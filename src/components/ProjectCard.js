import { 
  FaGlobe, 
  FaMobileAlt, 
  FaLayerGroup, 
  FaGithub, 
  FaExternalLinkAlt 
} from "react-icons/fa"

export default function ProjectCard({ 
  title, 
  description, 
  tech, 
  type,
  github,
  demo
}) {

  const icons = {
    web: <FaGlobe className="text-cyan-400 text-xl" />,
    mobile: <FaMobileAlt className="text-green-400 text-xl" />,
    dashboard: <FaLayerGroup className="text-purple-400 text-xl" />,
  }

  return (
    <div
      className="
        bg-black border border-zinc-800
        rounded-xl p-6
        hover:border-cyan-400
        hover:-translate-y-2
        transition-all duration-300
      "
    >
      {/* Icono + título */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-zinc-800 rounded-lg">
          {icons[type]}
        </div>
        <h3 className="text-xl font-bold">
          {title}
        </h3>
      </div>

      {/* Descripción */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item, index) => (
          <span
            key={index}
            className="
              text-xs px-3 py-1
              bg-zinc-800 border border-zinc-700
              rounded-full
              hover:border-cyan-400
              transition
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            text-sm px-4 py-2
            bg-zinc-800 border border-zinc-700
            rounded-lg
            hover:border-cyan-400
            hover:bg-zinc-700
            transition
          "
        >
          <FaGithub />
          Código
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            text-sm px-4 py-2
            bg-cyan-500 text-black font-medium
            rounded-lg
            hover:bg-cyan-400
            transition
          "
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      </div>
    </div>
  )
}