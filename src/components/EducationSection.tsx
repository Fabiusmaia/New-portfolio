import React, { useEffect, useRef, useState } from 'react'
import { FaGraduationCap, FaNetworkWired, FaReact } from 'react-icons/fa'
import { FaComputer } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { IconType } from 'react-icons'

type EducationItem = {
  title: string
  institution: string
  period: string
  icon: IconType
  description: string
}

const educationTimeline: EducationItem[] = [
  {
    title: 'Bachelor’s in Information Systems',
    institution: 'UFMG – Universidade Federal de Minas Gerais',
    period: 'Completed Apr 2025',
    icon: FaGraduationCap,
    description:
      'Software development, systems analysis and design, databases, networks and information management.',
  },
  {
    title: 'Fullstack Web Development Course',
    institution: 'Rocketseat',
    period: '2022',
    icon: FaReact,
    description:
      'Development of complete applications with React, Node.js, TypeScript, and automated testing.',
  },
  {
    title: 'Mobile Development with React Native',
    institution: 'Udemy',
    period: '2022',
    icon: FaReact,
    description:
      'Creation of hybrid apps with React Native, API integration, and publishing on app stores.',
  },
  {
    title: 'Networking Course',
    institution: 'Prepara Cursos',
    period: '2019',
    icon: FaNetworkWired,
    description:
      'Fundamentals of computer networks: cabling, TCP/IP addressing, router and switch configuration, and troubleshooting.',
  },
  {
    title: 'Computer and Notebook Assembly and Maintenance Course',
    institution: 'Prepara Cursos',
    period: '2016 – 2018',
    icon: FaComputer,
    description:
      'Assembling, maintaining and configuring computers and notebooks, including fault diagnosis, part replacement and operating system installation.',
  },
]

function TimelineItem({ item, index }: { item: EducationItem; index: number }) {
  const Icon = item.icon
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="relative group z-10"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <span className="absolute -left-4 top-2 bg-violet-400 p-2 rounded-full shadow-lg z-20">
        <Icon size={20} />
      </span>
      <div className="bg-white/10 p-6 rounded-lg shadow-md group-hover:bg-white/20 transition">
        <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-gray-300 italic mb-1">{item.institution}</p>
        <p className="text-xs text-gray-400 mb-2">{item.period}</p>
        <p className="text-gray-200 text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

const EducationSection: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const [animateLine, setAnimateLine] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return
      const top = lineRef.current.getBoundingClientRect().top
      if (top < window.innerHeight - 100) {
        setAnimateLine(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="education"
      className="w-full px-6 md:px-16 py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Education
        </h2>

        <div className="relative pl-8 space-y-12 z-10">
          <div className="absolute left-[9px] top-[12px] bottom-0 w-1 overflow-hidden z-0">
            <div
              ref={lineRef}
              className={`w-full bg-violet-400 transition-all duration-1000 origin-top ${
                animateLine ? 'animate-grow-line' : 'h-0'
              }`}
            />
          </div>

          {educationTimeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
