import React from 'react'
import LazyLottie from './LazyLottie'
import {
  SiLaravel,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import SkillIcon from './SkillIcon'

const loadTools = () => import('../assets/tools.json')

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
]

const SkillsSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
      <div className="flex-1 flex justify-center">
        <LazyLottie load={loadTools} aspectRatio="1021 / 1024" className="w-full max-w-[220px] sm:max-w-xs lg:max-w-md" />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-3xl font-semibold mb-6">Full Stack Development</h3>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} index={index} {...skill} />
          ))}
        </div>
        <ul className="text-gray-600 text-base sm:text-lg space-y-2 text-left inline-block">
          <li>⚡ RESTful APIs with Laravel and Node.js/NestJS</li>
          <li>⚡ Admin panels and web apps with Next.js, React and TypeScript</li>
          <li>⚡ Reusable UI components with Tailwind CSS</li>
          <li>⚡ Unit and integration tests with Jest and PHPUnit</li>
        </ul>
      </div>
    </div>
  )
}

export default SkillsSection
