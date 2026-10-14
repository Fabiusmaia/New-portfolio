import { FaGithub, FaLinkedin, FaMapPin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import Reveal from './Reveal'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-16"
    >
      <Reveal className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          Open to fullstack and back-end opportunities, remote. Have a
          role or project in mind? Send me an email.
        </p>

        <a
          href="mailto:ffam-20@hotmail.com"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-base sm:text-lg font-semibold px-6 py-3 rounded-lg shadow-lg shadow-fuchsia-900/30 transition hover:scale-105 hover:shadow-fuchsia-500/40 mb-8 break-all"
        >
          <FiMail /> ffam-20@hotmail.com
        </a>

        <div className="flex items-center justify-center gap-2 text-gray-300 mb-6">
          <FaMapPin />
          <p>São José do Rio Preto, São Paulo, Brazil</p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/fabius-maia-622988242/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-violet-600 hover:-translate-y-1 transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Fabiusmaia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-violet-600 hover:-translate-y-1 transition"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
