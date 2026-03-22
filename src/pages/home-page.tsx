import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  GiftMagCover,
  MyMagCover,
  CompanyMagCover,
  RuckblickCover,
} from '@/components/covers/MagazineCovers'
import type { MagazineCategory } from '@/types/magazine'

const COVERS: { id: MagazineCategory; label: string; Cover: React.FC<{ onClick?: () => void; className?: string }> }[] = [
  { id: 'gift', label: 'Gift Mag', Cover: GiftMagCover },
  { id: 'personal', label: 'myMag', Cover: MyMagCover },
  { id: 'company', label: 'Company Mag', Cover: CompanyMagCover },
  { id: 'review', label: 'Rückblick', Cover: RuckblickCover },
]

export function HomePage() {
  const navigate = useNavigate()

  function handleSelect(category: MagazineCategory) {
    navigate(`/create?category=${category}`)
  }

  return (
    <div className="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center px-4 py-12 sm:py-16">
      {/* Soft background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <Sparkles className="size-3.5" />
          AI-Powered Magazine Creator
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          What will you create today?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
          Pick a magazine. Click. Done in minutes.
        </p>
      </motion.div>

      {/* Magazine covers grid */}
      <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
        {COVERS.map(({ id, label, Cover }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <Cover
              onClick={() => handleSelect(id)}
              className="w-full max-w-[220px]"
            />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Subtle footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-14 text-center text-xs text-muted-foreground/60"
      >
        Free to try · Printed in Switzerland · Delivered in 5 days
      </motion.p>
    </div>
  )
}
