import './App.css'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import AutomationSection from './components/AutomationSection'
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <>
      <HeroSection />
      <div className="w-full flex justify-center section section-lg container">
        <h1 className="text-4xl mb-6">What I Do</h1>
        <h2 className="text-2xl text-opacity-50 text-gray-600 mb-20">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </h2>

        <SkillsSection />
        <AutomationSection />
      </div>

      <EducationSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}

export default App
