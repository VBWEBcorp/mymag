import { motion } from 'framer-motion'
import { Cpu, Fingerprint, LineChart, MessageSquare } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const

export function BentoSection() {
  return (
    <section className="border-b border-border/60 bg-muted/10">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Architecture"
          title="Une grille qui respire — comme les meilleures landings modernes"
          description="Des surfaces variées, des contrastes maîtrisés, et une narration visuelle qui guide sans crier."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,oklch(0.62_0.18_285/0.16),transparent_55%)]"
              />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-xl space-y-3">
                  <Badge className="rounded-full">Observabilité</Badge>
                  <h3 className="font-display text-2xl tracking-tight text-foreground sm:text-3xl">
                    Tableaux de bord nets, sans look “admin cheap”.
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Axes lisibles, hiérarchie des chiffres, tons neutres — le
                    sérieux d’une fintech, la finesse d’un produit design-first.
                  </p>
                </div>
                <div className="w-full max-w-md rounded-2xl border border-border/70 bg-background/60 p-4 shadow-[var(--shadow-sm)] backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Rétention</span>
                    <span className="font-medium text-foreground">12 semaines</span>
                  </div>
                  <div className="mt-4 h-28 rounded-xl bg-linear-to-t from-primary/15 via-primary/5 to-transparent ring-1 ring-primary/15">
                    <div className="flex h-full items-end gap-2 px-3 pb-3">
                      {[40, 55, 48, 70, 62, 78, 74, 90].map((h, idx) => (
                        <div
                          key={idx}
                          className="w-full rounded-md bg-primary/35"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease, delay: 0.05 }}
            className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <Fingerprint className="size-6" aria-hidden />
            </div>
            <h3 className="mt-6 font-display text-xl tracking-tight">
              Accès & identité
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              SSO, rôles, journaux d’audit — présentés avec des surfaces calmes
              et des états focus premium.
            </p>
            <Button className="mt-6 w-full" variant="outline" asChild>
              <a href="#cta">Configurer</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease, delay: 0.08 }}
            className="rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
              <MessageSquare className="size-6" aria-hidden />
            </div>
            <h3 className="mt-6 font-display text-xl tracking-tight">
              Collaboration
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Commentaires, mentions, activité — le tout dans une timeline
              élégante, pas une liste brute.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card/70 p-8 shadow-[var(--shadow-md)] ring-1 ring-foreground/5">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_20%,oklch(0.58_0.14_220/0.14),transparent_55%)]"
              />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <Cpu className="size-6" aria-hidden />
                    </span>
                    <Badge variant="secondary" className="rounded-full">
                      Edge
                    </Badge>
                  </div>
                  <h3 className="font-display text-2xl tracking-tight">
                    API stable, docs claires, DX soignée.
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    Le bon équilibre entre puissance technique et lisibilité
                    humaine — comme les références que vous aimez.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/60 p-5 shadow-[var(--shadow-xs)] backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-muted text-foreground ring-1 ring-border/70">
                        <LineChart className="size-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-sm font-medium">SLI / SLO</p>
                        <p className="text-xs text-muted-foreground">
                          Suivi en temps réel
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-500/20 dark:text-emerald-300">
                      Healthy
                    </span>
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Disponibilité</span>
                      <span className="font-medium text-foreground">99.992%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[82%] rounded-full bg-linear-to-r from-primary/70 to-primary/30" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Budget erreurs</span>
                      <span className="font-medium text-foreground">0.08%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
