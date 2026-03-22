import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const plans = [
  {
    name: 'Studio',
    price: '29€',
    cadence: '/mois',
    blurb: 'Pour prototyper vite, sans sacrifier le niveau visuel.',
    features: [
      'Design system de base',
      'Sections landing prêtes',
      'Thème clair / sombre',
      'Animations Framer Motion',
    ],
    cta: 'Choisir Studio',
    highlight: false,
  },
  {
    name: 'Scale',
    price: '89€',
    cadence: '/mois',
    blurb: 'Pour une équipe produit qui veut tenir la distance.',
    features: [
      'Tout dans Studio',
      'Layouts & patterns avancés',
      'Priorité sur les composants',
      'Checklist accessibilité',
    ],
    cta: 'Passer à Scale',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Sur mesure',
    cadence: '',
    blurb: 'Pour les exigences sécurité, marque et gouvernance.',
    features: [
      'Revue UI/UX dédiée',
      'Design tokens sur mesure',
      'Accompagnement rollout',
      'SLA & support prioritaire',
    ],
    cta: 'Parler à l’équipe',
    highlight: false,
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Tarifs"
          title="Des offres nettes, sans jargon inutile"
          description="Une structure pricing lisible — comme les SaaS modernes qui respectent votre temps."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
            >
              <Card
                className={
                  p.highlight
                    ? 'relative h-full overflow-hidden rounded-3xl border-primary/35 bg-card/80 shadow-[var(--shadow-md)] ring-2 ring-primary/25'
                    : 'h-full rounded-3xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5'
                }
              >
                {p.highlight ? (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(600px_circle_at_50%_0%,oklch(0.62_0.18_285/0.22),transparent_60%)]"
                  />
                ) : null}
                <CardHeader className="relative">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="font-display text-lg">{p.name}</CardTitle>
                    {p.highlight ? (
                      <Badge className="rounded-full">Populaire</Badge>
                    ) : (
                      <Badge variant="outline" className="rounded-full">
                        Flexible
                      </Badge>
                    )}
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-semibold tracking-tight">
                      {p.price}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground">
                      {p.cadence}
                    </span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {p.blurb}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{f}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    className="w-full"
                    variant={p.highlight ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="#cta">{p.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
