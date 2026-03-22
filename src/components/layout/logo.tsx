import { Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90',
        className
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15 transition-transform duration-300 group-hover:scale-[1.03]">
        <Sparkles className="size-[18px]" aria-hidden />
      </span>
      <span>Mymag</span>
    </Link>
  )
}
