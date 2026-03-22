import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  return (
    <section
      id="product"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,oklch(0.62_0.18_285/0.18),transparent_55%),radial-gradient(900px_circle_at_90%_20%,oklch(0.58_0.14_220/0.14),transparent_50%),radial-gradient(700px_circle_at_50%_100%,oklch(0.55_0.12_185/0.1),transparent_45%)] dark:bg-[radial-gradient(1200px_circle_at_20%_-10%,oklch(0.55_0.2_285/0.22),transparent_55%),radial-gradient(900px_circle_at_90%_20%,oklch(0.45_0.12_220/0.18),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="space-y-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                Nouveau · Studio visuel
              </Badge>
              <span className="text-sm text-muted-foreground">
                Référence qualité&nbsp;: Linear · Vercel · Stripe
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="font-display text-balance text-4xl leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.35rem]">
                L’interface qui fait{' '}
                <span className="bg-linear-to-r from-primary via-primary to-foreground/80 bg-clip-text text-transparent">
                  immédiatement sérieux
                </span>{' '}
                votre produit.
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Une base React premium, modulaire et prête pour la croissance.
                Typographie nette, espacements généreux, micro-interactions
                fluides — le niveau attendu d’une landing SaaS moderne.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="group shadow-sm" asChild>
                <a href="#cta">
                  Démarrer
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">
                  <Play className="size-4" />
                  Voir la démo
                </a>
              </Button>
            </div>

            <dl className="grid gap-6 sm:grid-cols-3">
              {[
                { k: 'Latence', v: '< 40ms', d: 'Temps de réponse médian' },
                { k: 'Uptime', v: '99.99%', d: 'SLA entreprise' },
                { k: 'Équipes', v: '2.4k+', d: 'Sur la preview' },
              ].map((row) => (
                <div key={row.k} className="rounded-2xl border border-border/70 bg-card/40 p-4 shadow-[var(--shadow-xs)] ring-1 ring-foreground/5 backdrop-blur-sm">
                  <dt className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {row.k}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {row.v}
                  </dd>
                  <p className="mt-1 text-xs text-muted-foreground">{row.d}</p>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-primary/15 via-transparent to-transparent blur-2xl dark:from-primary/25"
            />
            <Card className="relative overflow-hidden rounded-2xl border-border/80 bg-card/80 shadow-[var(--shadow-lg)] ring-1 ring-foreground/10 backdrop-blur-md">
              <CardHeader className="border-b border-border/60 bg-muted/30">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2.5 rounded-full bg-red-400/90" />
                    <span className="size-2.5 rounded-full bg-amber-400/90" />
                    <span className="size-2.5 rounded-full bg-emerald-400/90" />
                  </div>
                  <Badge variant="outline" className="rounded-full">
                    Live
                  </Badge>
                </div>
                <CardTitle className="font-display text-lg">
                  Pipeline · validation
                </CardTitle>
                <CardDescription>
                  Carte produit avec hiérarchie nette et surfaces calmes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-2">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-background/60 p-4 shadow-[var(--shadow-xs)]">
                    <p className="text-xs font-medium text-muted-foreground">
                      Conversion
                    </p>
                    <p className="mt-2 font-display text-3xl font-semibold tracking-tight">
                      +18.4%
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      vs. baseline
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background/60 p-4 shadow-[var(--shadow-xs)]">
                    <p className="text-xs font-medium text-muted-foreground">
                      Qualité perçue
                    </p>
                    <p className="mt-2 font-display text-3xl font-semibold tracking-tight">
                      4.9
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      score utilisateur
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-border/80 bg-muted/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">Synchronisation</p>
                      <p className="text-xs text-muted-foreground">
                        Webhooks · audit trail
                      </p>
                    </div>
                    <div className="h-9 w-24 rounded-full bg-linear-to-r from-primary/30 to-primary/5 ring-1 ring-primary/20" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
