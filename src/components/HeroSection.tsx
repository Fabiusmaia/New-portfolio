import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiChevronDown, FiDownload, FiMail } from 'react-icons/fi'
import LazyLottie from './LazyLottie'
import curriculo from '../assets/fabius-maia-cv-en.pdf?url'

const loadCoding = () => import('../assets/coding.json')

const roles = ['Fullstack Developer', 'Laravel Developer', 'Next.js Developer', 'Node.js Developer']

const socials = [
  { href: 'https://www.linkedin.com/in/fabius-maia-622988242/', label: 'LinkedIn', icon: FaLinkedin, external: true },
  { href: 'https://github.com/Fabiusmaia', label: 'GitHub', icon: FaGithub, external: true },
  { href: 'mailto:ffam-20@hotmail.com', label: 'Email', icon: FiMail, external: false },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="block text-fuchsia-200"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white px-6 md:px-16 pt-24 pb-16"
    >
      {/* Floating background blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-fuchsia-500/30 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-indigo-400/30 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full gap-10">
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-violet-200 font-medium mb-3">
            <span className="inline-block animate-wave origin-[70%_70%]">👋</span> Hello, I’m
          </motion.p>
          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Fabius Maia
          </motion.h1>
          <motion.p variants={item} className="text-2xl md:text-3xl font-semibold mb-3">
            <RotatingRole />
          </motion.p>
          <motion.p variants={item} className="text-base sm:text-lg text-violet-200 mb-6">
            Laravel · Next.js · TypeScript · Node.js
          </motion.p>

          <motion.p variants={item} className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
            I build web products end to end: Laravel and Node.js/NestJS APIs,
            Next.js and React interfaces with TypeScript, and CI/CD pipelines
            for reliable production deployments. Since 2022 I have shipped
            ticketing platforms, admin backoffices and SaaS features, working
            fully remote.
          </motion.p>

          <motion.div variants={item} className="flex gap-4 items-center justify-center lg:justify-start mb-8">
            {socials.map(({ href, label, icon: Icon, external }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 border border-white/20 hover:bg-white/20 text-white p-3 rounded-full shadow-md backdrop-blur"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.a
              href={curriculo}
              download="Fabius-Maia-CV.pdf"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-white text-lg text-purple-950 font-semibold px-5 py-3 rounded-lg shadow-lg shadow-purple-950/40"
            >
              <FiDownload />
              DOWNLOAD RESUME
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/70 text-lg font-semibold px-5 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              SEE PROJECTS
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.4 },
            scale: { duration: 0.8, delay: 0.4 },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <LazyLottie
            load={loadCoding}
            aspectRatio="500 / 500"
            className="w-full max-w-[280px] sm:max-w-sm lg:max-w-xl"
          />
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        aria-label="Scroll down"
        className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <FiChevronDown size={32} />
      </motion.a>
    </section>
  )
}

export default HeroSection
