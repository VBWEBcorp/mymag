import { motion } from 'framer-motion'

const stats = [
  { label: 'Temps de build', value: '1.8s', hint: 'Vite + TS' },
  { label: 'Composants UI', value: '24+', hint: 'Extensible' },
  { label: 'Score accessibilité', value: 'AA', hint: 'Focus & contrastes' },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function StatsSection() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease }}
          className="grid gap-4 rounded-3xl border border-border/80 bg-linear-to-br from-card/90 via-card/70 to-muted/25 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 sm:grid-cols-3 sm:p-10"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="border-border/60 px-2 py-4 text-center sm:border-r sm:py-0 sm:last:border-r-0"
            >
              <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </p>
              <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.hint}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
