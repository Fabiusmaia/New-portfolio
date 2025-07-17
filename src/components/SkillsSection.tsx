import React from 'react'
import './styles/SkillsSection.css'
import tools from '../assets/tools.json'
import Lottie from 'lottie-react'
import {
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNode,
  FaNpm,
  FaPhp,
  FaReact,
  FaYarn,
} from 'react-icons/fa'

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <div className="vw-1/2">
          <Lottie
            animationData={tools}
            loop={true}
            className="skill-gif slideInLeft"
          />
        </div>
        <div className="vw-1/2">
          <div className="skill-icons w-full slide-out-right gap-4">
            <div className="flex flex-col items-center gap-4">
              <div>
                <h2 className="text-4xl mb-4">Full Stack Development</h2>
              </div>
              <div className="flex gap-4">
                <div
                  title="HTML5"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#E34F26]"
                >
                  <FaHtml5 size={32} />
                </div>
                <div
                  title="CSS3"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#1572B6]"
                >
                  <FaCss3 size={32} />
                </div>
                <div
                  title="JavaScript"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#F7DF1E]"
                >
                  <FaJs size={32} />
                </div>
                <div
                  title="Node.js"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#339933]"
                >
                  <FaNode size={32} />
                </div>
                <div
                  title="React.js"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#61DAFB]"
                >
                  <FaReact size={32} />
                </div>
                <div
                  title="GitHub"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#181717]"
                >
                  <FaGithub size={32} />
                </div>
              </div>

              <div className="flex gap-4 justify-center mt-4">
                <div
                  title="Yarn"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#2C8EBB]"
                >
                  <FaYarn size={32} />
                </div>
                <div
                  title="NPM"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#CB3837]"
                >
                  <FaNpm size={32} />
                </div>
                <div
                  title="Laravel"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#FF2D20]"
                >
                  <FaLaravel size={32} />
                </div>
                <div
                  title="PHP"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#777BB4]"
                >
                  <FaPhp size={32} />
                </div>
                <div
                  title="Docker"
                  className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-[#2496ED]"
                >
                  <FaDocker size={32} />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <div>
                  <h2 className="text-gray-500 text-xl text-opacity-50 mt-2">
                    ⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js
                  </h2>
                </div>
                <h2 className="text-gray-500  text-xl  text-opacity-50 mt-2">
                  ⚡ Building responsive static websites using Next.js
                </h2>
                <div>
                  <h2 className="text-gray-500  text-xl text-opacity-50 mt-2">
                    ⚡ Building RESTful APIs in Laravel Framework
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
