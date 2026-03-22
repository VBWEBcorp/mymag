import { motion } from 'framer-motion'
import { BarChart3, Layers, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const items = [
  {
    icon: Layers,
    title: 'Design system cohérent',
    desc: 'Tokens, rayons, ombres et contrastes calibrés pour éviter le rendu “template”.',
  },
  {
    icon: Zap,
    title: 'Performance ressentie',
    desc: 'Animations discrètes, focus visibles, états hover soignés — sans surcharge.',
  },
  {
    icon: ShieldCheck,
    title: 'Prêt pour la prod',
    desc: 'TypeScript strict, structure modulaire, composants pensés pour évoluer.',
  },
  {
    icon: Workflow,
    title: 'Parcours clair',
    desc: 'Hiérarchie lisible, sections aérées, CTA évidents sur desktop comme mobile.',
  },
  {
    icon: BarChart3,
    title: 'Mesure & clarté',
    desc: 'Cartes et tableaux légers, chiffres mis en valeur sans bruit visuel.',
  },
  {
    icon: Sparkles,
    title: 'Micro-interactions',
    desc: 'Framer Motion au bon dosage : fluidité premium, jamais gadget.',
  },
] as const

const ease = [0.22, 1, 0.36, 1] as const

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Une base UI qui élève la perception du produit"
          description="Chaque composant est pensé comme une pièce de mobilier haut de gamme : précis, durable, agréable au toucher visuel."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease, delay: i * 0.04 }}
            >
              <Card className="h-full rounded-2xl border-border/80 bg-card/70 shadow-[var(--shadow-sm)] ring-1 ring-foreground/5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        'flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15'
                      )}
                    >
                      <it.icon className="size-5" aria-hidden />
                    </span>
                    <Badge variant="outline" className="rounded-full">
                      Core
                    </Badge>
                  </div>
                  <CardTitle className="font-display text-base">{it.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {it.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
