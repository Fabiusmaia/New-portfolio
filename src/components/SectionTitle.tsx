import { motion } from 'framer-motion'

type Props = {
  children: string
  light?: boolean
}

// Section heading with an underline that grows in when scrolled into view
export default function SectionTitle({ children, light = false }: Props) {
  return (
    <div className="flex flex-col items-center mb-12">
      <motion.h2
        className={`text-4xl md:text-5xl font-bold text-center ${light ? 'text-white' : 'text-gray-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.h2>
      <motion.span
        className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
    </div>
  )
}
