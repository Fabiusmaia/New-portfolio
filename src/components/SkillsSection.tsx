import React from 'react'
import tools from '../assets/tools.json'
import Lottie from 'lottie-react'
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
    <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
      <div className="flex-1 flex justify-center">
        <Lottie animationData={tools} loop={true} className="w-full max-w-md" />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-semibold mb-6">Full Stack Development</h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
          {skills.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
        <ul className="text-gray-600 text-lg space-y-2">
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
