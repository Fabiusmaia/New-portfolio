import sunset from '../assets/sunset.jpg'
import oak from '../assets/oak.jpg'

const experiences = [
  {
    company: 'Sunset Tires',
    role: 'Developer',
    period: 'Jul 2024 - Aug 2024',
    logo: sunset,
    points: [
      'Developed a back-office system using NestJS for Sunset Tires.',
      'Built API endpoints with a modular architecture and implemented authentication using JWT.',
      'Designed and optimized database schema using PostgreSQL and TypeORM.',
      'Created an intuitive and responsive dashboard interface for internal operations.',
    ],
  },
  {
    company: 'Oak Tecnologia',
    role: 'Full Stack Developer',
    period: 'Jun 2024 - Jul 2025',
    logo: oak,
    points: [
      'Maintenance of a load recovery system using PHP Zend, Angular, and Java.',
      'Reduced client infrastructure costs by implementing caching systems.',
      'Developed a Salesforce mobile app using Laravel for backend, PostgreSQL for database, and React Native with SQLite for frontend.',
      'Improved sales processes by providing a seamless experience across multiple platforms.',
      'Worked with TypeScript, Docker, and more than 18 other technologies.',
    ],
  },
  {
    company: 'Oak Tecnologia',
    role: 'Intern',
    period: 'May 2022 - Jun 2024',
    logo: oak,
    points: [
      'Supported development and maintenance of internal systems and client applications.',
      'Assisted in data analysis and system performance optimizations.',
      'Collaborated with senior developers in Agile sprints to deliver new features.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition ${
                exp.role === 'Intern' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex justify-center mb-4">
                <img src={exp.logo} alt={exp.company} className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold text-center">
                {exp.company}
              </h3>
              <p className="text-center text-gray-600">{exp.role}</p>
              <p className="text-center text-gray-500 text-sm mb-4">
                {exp.period}
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 max-w-3xl mx-auto">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
