import type { IconType } from 'react-icons'

type Props = {
  name: string
  icon: IconType
  color: string
}

export default function SkillIcon({ name, icon: Icon, color }: Props) {
  return (
    <div className="flex flex-col items-center gap-1 w-20">
      <div
        title={name}
        className="rounded-full shadow-md shadow-black/20 p-3 inline-flex items-center justify-center"
        style={{ color }}
      >
        <Icon size={32} />
      </div>
      <span className="text-xs text-gray-500">{name}</span>
    </div>
  )
}
