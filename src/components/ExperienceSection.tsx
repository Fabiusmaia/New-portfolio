import sunset from '../assets/sunset.jpg'
import oak from '../assets/oak.jpg'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'

type Experience = {
  company: string
  role: string
  period: string
  logo?: string
  points: string[]
}

const experiences: Experience[] = [
  {
    company: 'Private Code Soluções Digitais',
    role: 'Back-end Developer',
    period: 'Oct 2025 – Sep 2026 · Remote',
    points: [
      'Built and maintained a Laravel platform for technical inspections and reporting, from backend logic to Blade/Livewire interfaces.',
      'Reduced response times on high-traffic endpoints by reworking database queries and adding Redis caching.',
      'Moved heavy PDF report generation into queued background jobs, eliminating timeouts on large documents.',
      'Maintained a barbershop-management SaaS (Laravel, Blade, MySQL, Redis), shipping improvements to scheduling, payments and customer management.',
      'Fixed production data-integrity issues with custom Artisan commands and targeted migrations; wrote PHPUnit tests for permission rules and status-dependent workflows.',
    ],
  },
  {
    company: 'Oak Tecnologia',
    role: 'Fullstack Developer',
    period: 'Sep 2022 – May 2025 · Remote',
    logo: oak,
    points: [
      'Built a ticketing platform (event ticket sales and issuance) with a Laravel (PHP 8.1) API that generates ticket PDFs and a Next.js frontend.',
      'Built XBRI’s admin backoffice: NestJS/TypeORM backend with JWT auth, Swagger docs, AWS S3 file storage and RabbitMQ queues, plus a Next.js frontend.',
      'Developed and maintained the Next.js admin panel of a project-management system consuming Laravel REST APIs.',
      'Created reusable UI components with TypeScript and Tailwind CSS, standardizing frontend work across projects.',
      'Implemented CI/CD pipelines with GitHub Actions and Docker, significantly reducing deployment time.',
      'Wrote unit and integration tests (Jest and PHPUnit), ran code reviews and mentored junior developers.',
    ],
  },
  {
    company: 'Sunset Tires',
    role: 'Fullstack Developer',
    period: 'Feb 2022 – May 2022 · Remote',
    logo: sunset,
    points: [
      'Developed a complete back-office system (products, orders, customers and inventory) for a tire company.',
      'Built RESTful APIs with NestJS and interfaces with React and TypeScript.',
      'Modeled a PostgreSQL database and implemented JWT authentication with role-based access control.',
      'Deployed with Docker and Docker Compose, managing development and production environments.',
    ],
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>Experience</SectionTitle>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Reveal key={exp.company} delay={index * 0.1}>
            <article className="relative bg-white shadow-lg rounded-2xl p-6 md:p-8 ring-1 ring-black/5 overflow-hidden transition duration-300 hover:shadow-2xl hover:shadow-purple-900/15 hover:-translate-y-1">
              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-fuchsia-400" />
              <div className="flex items-center gap-4 mb-4">
                {exp.logo ? (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-14 h-14 rounded"
                  />
                ) : (
                  <div className="w-14 h-14 rounded bg-purple-900 text-white flex items-center justify-center font-bold">
                    {initials(exp.company)}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
