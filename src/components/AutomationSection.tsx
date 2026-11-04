import React from 'react'
import LazyLottie from './LazyLottie'
import {
  SiDocker,
  SiGithubactions,
  SiMysql,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import SkillIcon from './SkillIcon'

const loadInfrastructure = () => import('../assets/infrastructure.json')

const skills = [
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
]

const AutomationSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
      <div className="flex-1 flex justify-center">
        <LazyLottie load={loadInfrastructure} aspectRatio="912 / 824" className="w-full max-w-[220px] sm:max-w-xs lg:max-w-md" />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-3xl font-semibold mb-6">
          Databases, Automation & Deployment
        </h3>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
          {skills.map((skill, index) => (
            <SkillIcon key={skill.name} index={index} {...skill} />
          ))}
        </div>
        <ul className="text-gray-600 text-base sm:text-lg space-y-2 text-left inline-block">
          <li>⚡ Modeling and optimizing PostgreSQL and MySQL databases</li>
          <li>⚡ CI/CD pipelines with GitHub Actions and Docker</li>
          <li>⚡ Queues and caching with RabbitMQ and Redis</li>
          <li>⚡ Cloud infrastructure on Amazon Web Services (AWS): EC2, S3, RDS, Lambda, CloudFront and IAM</li>
        </ul>
      </div>
    </div>
  )
}

export default AutomationSection
