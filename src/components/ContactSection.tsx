import { FaGithub, FaLinkedin, FaMapPin } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Reach Out to me!</h2>
        <p className="text-lg font-medium mb-10">
          DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
        </p>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-white rounded-lg p-3 shadow-md mb-2">
            <FaMapPin className="text-purple-900 w-6 h-6" />
          </div>
          <p className="text-base">São José do Rio Preto, São Paulo, Brazil</p>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-900 transition"
          >
            <FaGithub className="text-white w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
