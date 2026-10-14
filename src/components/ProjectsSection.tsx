import { FaGithub } from 'react-icons/fa'
import { FiHeadphones, FiShield } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import rct23d from '../assets/rct23d.jpg'

type Project = {
  name: string
  description: string
  stack: string[]
  repo: string
  image?: string
  icon?: IconType
}

const projects: Project[] = [
  {
    name: 'RCT23D',
    description:
      'Experimental 3D mode for OpenRCT2, the open-source RollerCoaster Tycoon 2. An OpenGL renderer rebuilds the park from the game’s own map data and sprites, with free-fly and first-person cameras, on-ride view, terrain, water and shadows.',
    stack: ['C++', 'OpenGL', 'CMake'],
    repo: 'https://github.com/Fabiusmaia/RCT23D',
    image: rct23d,
  },
  {
    name: 'LANcord',
    description:
      'Minimal Discord alternative for playing with friends on the same LAN: voice chat, screen sharing and text chat, with no accounts and no cloud server. Desktop client plus a lightweight signaling server.',
    stack: ['Electron', 'React', 'TypeScript', 'Node.js', 'Socket.io'],
    repo: 'https://github.com/Fabiusmaia/LANcord',
    icon: FiHeadphones,
  },
  {
    name: 'DNS Log Classifier',
    description:
      'Laravel application that processes DNS query logs and uses an AI API to classify each query as safe, suspicious or malicious. Results are stored and can be searched with filters.',
    stack: ['Laravel 12', 'PHP 8.2', 'PostgreSQL', 'AI API'],
    repo: 'https://github.com/Fabiusmaia/Classificador-de-DNS',
    icon: FiShield,
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.name}
                className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    loading="lazy"
                    className="w-full h-44 object-cover"
                  />
                ) : (
                  <div className="w-full h-44 flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
                    {Icon && <Icon size={56} />}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-violet-100 text-violet-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-purple-900 hover:underline"
                  >
                    <FaGithub /> View code
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
