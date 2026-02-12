import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAndroid,
} from "react-icons/fa"

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiChartdotjs,
  SiVite,
} from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "Vite", icon: SiVite },

    { name: "API REST", icon: FaNodeJs },
    { name: "Prisma ORM", icon: SiPrisma },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },

    { name: "NextAuth", icon: SiNextdotjs },
    { name: "Git", icon: FaGitAlt },
    { name: "Chart.js", icon: SiChartdotjs },

    { name: "React Native", icon: FaReact },
    { name: "Android Studio", icon: FaAndroid },
  ]

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* título */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
          <div className="w-20 h-1 bg-white/70 mx-auto mt-4 rounded"></div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon

            return (
              <div
                key={i}
                className="
                  bg-zinc-900 border border-zinc-800
                  rounded-xl p-6
                  flex flex-col items-center gap-3
                  hover:border-white/40 hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <Icon size={28} className="text-zinc-200" />
                <span className="font-medium text-sm text-center">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
