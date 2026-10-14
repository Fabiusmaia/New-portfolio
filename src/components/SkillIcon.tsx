import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'

type Props = {
  name: string
  icon: IconType
  color: string
  index?: number
}

export default function SkillIcon({ name, icon: Icon, color, index = 0 }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 w-20"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.06 }}
    >
      <motion.div
        title={name}
        className="rounded-full bg-white shadow-md shadow-black/15 p-3 inline-flex items-center justify-center cursor-default"
        style={{ color }}
        whileHover={{ y: -6, rotate: 8, scale: 1.12, boxShadow: `0 10px 24px ${color}55` }}
      >
        <Icon size={32} />
      </motion.div>
      <span className="text-xs text-gray-500">{name}</span>
    </motion.div>
  )
}
