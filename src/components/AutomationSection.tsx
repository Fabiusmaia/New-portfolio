import React from 'react'
import './styles/AutomationSection.css'
import tools from '../assets/infrastructure.json'
import Lottie from 'lottie-react'

import {
  SiDocker,
  SiGithub,
  SiGithubactions,
  SiPostgresql,
} from 'react-icons/si'

const AutomationSection: React.FC = () => {
  return (
    <section className="skills-section">
      <div className="automation-content flex vw-100 vh-100 justify-between">
        <div className="vw-1/2 mr-20">
          <Lottie
            animationData={tools}
            loop={true}
            className="automation-gif slideInLeft"
          />
        </div>
        <div className="vw-1/2">
          <div className="skill-icons w-full slide-out-right gap-4">
            <div className="w-full text-nowrap">
              <h2 className="text-4xl mb-4">Automation and Deployment</h2>
            </div>
            <div className="flex gap-4 justify-center">
              <div
                title="HTML5"
                className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center "
              >
                <SiPostgresql size={32} />
              </div>
              <div
                title="CSS3"
                className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center"
              >
                <SiGithub size={32} />
              </div>
              <div
                title="JavaScript"
                className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-blue-500"
              >
                <SiDocker size={32} />
              </div>
              <div
                title="Github Actions"
                className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center text-blue-500"
              >
                <SiGithubactions size={32} />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <div>
                <h2 className="text-gray-500 text-opacity-50 text-xl mt-2">
                  ⚡ Hosting and maintaining websites on virtual machine
                  instances along with integration of databases
                </h2>
              </div>

              <div>
                <h2 className="text-gray-500 text-opacity-50 text-xl  mt-2">
                  ⚡ Building CI/CD pipelines for automated testing & deployment
                  using Github Actions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AutomationSection
