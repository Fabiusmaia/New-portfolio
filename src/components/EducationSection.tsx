import React, { useEffect, useRef, useState } from 'react'
import { FaGraduationCap, FaNetworkWired, FaReact } from 'react-icons/fa'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaComputer } from 'react-icons/fa6'

const educationTimeline = [
  {
    title: 'Computer and Notebook Assembly and Maintenance Course',
    institution: 'Prepara Cursos',
    period: '2016 – 2018',
    icon: FaComputer,
    description:
      'Practical learning on assembling, maintaining, and configuring computers and notebooks, including fault diagnosis, part replacement, operating system installation, and performance optimization.',
  },
  {
    title: 'Networking Course',
    institution: 'Prepara Cursos',
    period: '2019',
    icon: FaNetworkWired,
    description:
      'Practical learning on assembling, maintaining, and configuring computers and notebooks, including fault diagnosis, part replacement, operating system installation, and performance optimization.',
  },
  {
    title: 'Technology in Systems Analysis and Development',
    institution: 'UNIRP',
    period: '2022 – 2025',
    icon: FaGraduationCap,
    description:
      'Comprehensive study of software development including system analysis, design, programming, and deployment using modern technologies and best practices.',
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
]

const EducationSection: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null)
  const [animateLine, setAnimateLine] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return
      const top = lineRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      if (top < windowHeight - 100) {
        setAnimateLine(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="w-full min-h-screen px-6 md:px-16 py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900
text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center md:text-left">
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

              {educationTimeline.map((item, index) => {
                const Icon = item.icon
                const [ref, inView] = useInView({
                  triggerOnce: true,
                  threshold: 0.2,
                })
                const controls = useAnimation()

                useEffect(() => {
                  if (inView) {
                    controls.start('visible')
                  }
                }, [controls, inView])

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    className="relative group z-10"
                    initial="hidden"
                    animate={controls}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: index * 0.3 },
                      },
                    }}
                  >
                    <span className="absolute -left-4 top-2 bg-violet-400 p-2 rounded-full shadow-lg z-20">
                      <Icon size={20} />
                    </span>
                    <div className="bg-white/10 p-6 rounded-lg shadow-md group-hover:bg-white/20 transition">
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 italic mb-1">
                        {item.institution}
                      </p>
                      <p className="text-xs text-gray-400 mb-2">
                        {item.period}
                      </p>
                      <p className="text-gray-200 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EducationSection
