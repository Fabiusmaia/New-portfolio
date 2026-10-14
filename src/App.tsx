import './App.css'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import AutomationSection from './components/AutomationSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <HeroSection />
      <section id="skills" className="w-full px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">What I Do</h2>
          <p className="text-lg md:text-xl text-gray-500 text-center mb-16">
            End-to-end web products: Laravel and Node.js APIs, Next.js/React
            interfaces and reliable deployments
          </p>

          <SkillsSection />
          <AutomationSection />
        </div>
      </section>

      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}

export default App
