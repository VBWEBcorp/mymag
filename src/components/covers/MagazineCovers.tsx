import { motion } from 'framer-motion'
import type { MagazineCategory } from '@/types/magazine'
import { cn } from '@/lib/utils'

type CoverProps = {
  onClick?: () => void
  className?: string
}

function CoverShell({ children, onClick, className }: CoverProps & { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      className={cn(
        'group relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50',
        className
      )}
    >
      {children}
      {/* Glossy reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.button>
  )
}

export function GiftMagCover({ onClick, className }: CoverProps) {
  return (
    <CoverShell onClick={onClick} className={className}>
      <div className="relative flex h-full flex-col bg-gradient-to-b from-rose-50 via-white to-rose-50">
        {/* Background image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=80"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-5 sm:p-7">
          {/* Top */}
          <div className="w-full text-center">
            <div className="mx-auto mb-2 h-px w-12 bg-rose-300/60" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-rose-400">
              The most personal gift
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl">
              Gift
            </h2>
            <h2 className="font-display text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl">
              Mag
            </h2>
            <div className="mx-auto mt-3 h-px w-8 bg-rose-300/80" />
            <p className="mt-2 text-[10px] tracking-widest text-rose-500/80 uppercase">
              Birthdays · Love · Christmas
            </p>
          </div>

          {/* Bottom */}
          <div className="flex w-full items-center justify-between">
            <span className="text-[8px] font-medium tracking-widest text-rose-400/70 uppercase">
              myMag
            </span>
            <span className="text-[8px] font-medium tracking-widest text-rose-400/70 uppercase">
              2026
            </span>
          </div>
        </div>
      </div>
    </CoverShell>
  )
}

export function MyMagCover({ onClick, className }: CoverProps) {
  return (
    <CoverShell onClick={onClick} className={className}>
      <div className="relative flex h-full flex-col bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-5 sm:p-7">
          {/* Top bar */}
          <div className="flex w-full items-center justify-between">
            <div className="h-px flex-1 bg-sky-300/40" />
            <span className="px-3 text-[9px] font-bold uppercase tracking-[0.3em] text-sky-500">
              Personal Edition
            </span>
            <div className="h-px flex-1 bg-sky-300/40" />
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sky-400">
              Your story
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl">
              my
            </h2>
            <h2 className="-mt-1 font-display text-4xl font-bold tracking-tight text-sky-600 sm:text-5xl">
              Mag
            </h2>
            <div className="mx-auto mt-3 flex items-center gap-2">
              <div className="h-px w-6 bg-sky-300" />
              <div className="size-1.5 rounded-full bg-sky-400" />
              <div className="h-px w-6 bg-sky-300" />
            </div>
            <p className="mt-2 text-[10px] text-slate-500">
              Portfolio · Travel · Journal
            </p>
          </div>

          {/* Bottom */}
          <div className="w-full text-center">
            <div className="mx-auto mb-2 h-px w-16 bg-sky-200" />
            <span className="text-[8px] font-semibold tracking-[0.25em] text-sky-400/80 uppercase">
              Zurich · Switzerland
            </span>
          </div>
        </div>
      </div>
    </CoverShell>
  )
}

export function CompanyMagCover({ onClick, className }: CoverProps) {
  return (
    <CoverShell onClick={onClick} className={className}>
      <div className="relative flex h-full flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-5 sm:p-7">
          {/* Top */}
          <div className="flex w-full items-center justify-between">
            <div className="h-px flex-1 bg-white/10" />
            <span className="px-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50">
              Business Edition
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Center */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Company
            </h2>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white/70 sm:text-4xl">
              Mag
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <p className="mt-3 text-[10px] tracking-widest text-white/40 uppercase">
              Real Estate · Fashion · Corporate
            </p>
          </div>

          {/* Bottom */}
          <div className="flex w-full items-center justify-between">
            <span className="text-[8px] font-medium tracking-widest text-white/30 uppercase">
              myMag
            </span>
            <span className="rounded-sm border border-white/15 px-2 py-0.5 text-[8px] font-medium tracking-widest text-white/40 uppercase">
              Premium
            </span>
          </div>
        </div>
      </div>
    </CoverShell>
  )
}

export function RuckblickCover({ onClick, className }: CoverProps) {
  return (
    <CoverShell onClick={onClick} className={className}>
      <div className="relative flex h-full flex-col bg-gradient-to-b from-amber-50 via-orange-50/50 to-amber-50">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-between p-5 sm:p-7">
          {/* Top */}
          <div className="w-full text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-amber-500">
              Look back. Smile forward.
            </p>
            <div className="mx-auto mt-2 h-px w-12 bg-amber-300/50" />
          </div>

          {/* Center */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl">
              Rück
            </h2>
            <h2 className="-mt-0.5 font-display text-3xl font-bold tracking-tight text-amber-700 sm:text-4xl">
              blick
            </h2>
            <div className="mx-auto mt-3 flex items-center gap-1.5">
              {['J', 'F', 'M', 'A', 'M', 'J'].map((m, i) => (
                <span
                  key={i}
                  className="flex size-4 items-center justify-center rounded-full bg-amber-200/60 text-[7px] font-bold text-amber-700"
                >
                  {m}
                </span>
              ))}
              <span className="text-[8px] text-amber-400">...</span>
            </div>
            <p className="mt-3 text-[10px] text-amber-600/70">
              Yearly · Monthly · Baby Book
            </p>
          </div>

          {/* Bottom */}
          <div className="flex w-full items-center justify-between">
            <span className="text-[8px] font-medium tracking-widest text-amber-400/70 uppercase">
              myMag
            </span>
            <span className="text-[8px] font-medium tracking-widest text-amber-400/70 uppercase">
              Memories
            </span>
          </div>
        </div>
      </div>
    </CoverShell>
  )
}

const COVER_MAP: Record<MagazineCategory, React.FC<CoverProps>> = {
  gift: GiftMagCover,
  personal: MyMagCover,
  company: CompanyMagCover,
  review: RuckblickCover,
  story: MyMagCover,
}

export function MagazineCover({ category, ...props }: CoverProps & { category: MagazineCategory }) {
  const Cover = COVER_MAP[category] || MyMagCover
  return <Cover {...props} />
}
