import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiDownload, FiMail } from 'react-icons/fi'
import codingAnimation from '../assets/coding.json'
import Lottie from 'lottie-react'
import curriculo from '../assets/fabius-maia-cv-en.pdf?url'

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900
 text-white px-6 md:px-16 py-12"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hello, I’m<span className="block">Fabius Maia</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-violet-200 mb-6">
            Fullstack Developer · Laravel · Next.js · TypeScript · Node.js
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
            I build web products end to end: Laravel and Node.js/NestJS APIs,
            Next.js and React interfaces with TypeScript, and CI/CD pipelines
            for reliable production deployments. Since 2022 I have shipped
            ticketing platforms, admin backoffices and SaaS features, working
            fully remote.
          </p>

          <div className="flex gap-4 items-center justify-center md:justify-start mb-8">
            <a
              href="https://www.linkedin.com/in/fabius-maia-622988242/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-black hover:bg-blue-500 text-white p-3 rounded-full transition shadow-md"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Fabiusmaia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition shadow-md"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:ffam-20@hotmail.com"
              aria-label="Email"
              className="bg-black hover:bg-violet-500 text-white p-3 rounded-full transition shadow-md"
            >
              <FiMail size={20} />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href={curriculo}
              download="Fabius-Maia-CV.pdf"
              className="inline-flex items-center gap-2 bg-white text-lg text-black font-semibold px-5 py-3 rounded shadow hover:bg-gray-200 transition"
            >
              <FiDownload />
              DOWNLOAD RESUME
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white text-lg font-semibold px-5 py-3 rounded hover:bg-white/10 transition"
            >
              SEE PROJECTS
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <Lottie
            animationData={codingAnimation}
            loop={true}
            className="w-full max-w-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
