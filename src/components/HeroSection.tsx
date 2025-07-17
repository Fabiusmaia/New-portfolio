import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import codingAnimation from '../assets/coding.json'
import Lottie from 'lottie-react'

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900
 text-white px-6 md:px-16 py-12"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between  w-full gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hello, I’m<span className="block">Fabius</span>
          </h1>

          <p className="text-lg md:text-2xl leading-relaxed mb-6">
            I’m a fullstack developer passionate about creating efficient and
            modern solutions. I have experience with technologies like React,
            Node.js, and TypeScript, as well as a strong background in mobile
            development and responsive design.
            <br />I love learning new languages and frameworks, and enjoy
            working in collaborative teams to build products that positively
            impact users.
          </p>

          <div className="flex gap-4 items-center justify-center md:justify-start mb-6">
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-blue-500 text-white p-3 rounded-full transition shadow-md"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-gray-800 text-white p-3 rounded-full transition shadow-md"
            >
              <FaGithub size={20} />
            </a>
          </div>

          <a
            href="/curriculo.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-2xl text-black font-semibold px-5 py-3 rounded shadow hover:bg-gray-200 transition"
          >
            <FiDownload />
            SEE MY RESUME
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <Lottie
            animationData={codingAnimation}
            style={{ width: 800 }}
            loop={true}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
