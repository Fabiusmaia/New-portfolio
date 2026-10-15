import { lazy, Suspense, useEffect, useState } from 'react'

const Lottie = lazy(() => import('lottie-react'))

type Props = {
  load: () => Promise<{ default: unknown }>
  aspectRatio: string
  className?: string
}

// Loads lottie-react and the animation JSON after first render so they stay
// out of the main bundle. The wrapper reserves the space to avoid layout shift.
export default function LazyLottie({ load, aspectRatio, className }: Props) {
  const [data, setData] = useState<unknown>(null)

  useEffect(() => {
    let alive = true
    load().then((mod) => {
      if (alive) setData(mod.default)
    })
    return () => {
      alive = false
    }
  }, [load])

  return (
    <div className={className} style={{ aspectRatio }}>
      {data !== null && (
        <Suspense fallback={null}>
          <Lottie animationData={data} loop={true} />
        </Suspense>
      )}
    </div>
  )
}
