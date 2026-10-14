import './App.css'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import AutomationSection from './components/AutomationSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Reveal from './components/Reveal'
import SectionTitle from './components/SectionTitle'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <HeroSection />
        <section id="skills" className="w-full px-6 md:px-16 py-20">
          <div className="max-w-6xl mx-auto">
            <SectionTitle>What I Do</SectionTitle>
            <Reveal>
              <p className="text-lg md:text-xl text-gray-500 text-center -mt-6 mb-16">
                End-to-end web products: Laravel and Node.js APIs, Next.js/React
                interfaces and reliable deployments
              </p>
            </Reveal>

            <Reveal>
              <SkillsSection />
            </Reveal>
            <Reveal>
              <AutomationSection />
            </Reveal>
          </div>
        </section>

        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-950 text-gray-500 text-sm text-center py-6">
        © {new Date().getFullYear()} Fabius Maia
      </footer>
    </MotionConfig>
  )
}

export default App
