import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ease = [0.22, 1, 0.36, 1] as const

export function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/70 p-10 shadow-[var(--shadow-lg)] ring-1 ring-foreground/10 sm:p-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,oklch(0.62_0.18_285/0.18),transparent_55%),radial-gradient(700px_circle_at_90%_30%,oklch(0.58_0.14_220/0.14),transparent_55%)]"
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="font-display text-xs font-semibold tracking-[0.22em] text-primary uppercase">
                Accès anticipé
              </p>
              <h2 className="font-display text-balance text-3xl tracking-tight text-foreground sm:text-4xl">
                Recevez la prochaine salve de patterns premium.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Pas de spam — uniquement des mises à jour utiles, des
                composants et des décisions design expliquées clairement.
              </p>
            </div>

            <form
              className="space-y-4 rounded-2xl border border-border/70 bg-background/60 p-6 shadow-[var(--shadow-xs)] backdrop-blur-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email professionnel</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@entreprise.com"
                  className="h-11 rounded-xl bg-background/80"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Rejoindre la liste
                <ArrowRight className="size-4" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                En continuant, vous acceptez une expérience sans friction — et
                sans look cheap.
              </p>
            </form>
          </div>
        </motion.div>

        <div
          id="login"
          className="mt-10 rounded-2xl border border-dashed border-border/80 bg-muted/10 px-6 py-8 text-center text-sm text-muted-foreground"
        >
          Espace démo : utilisez cette zone pour brancher votre auth (Clerk,
          Auth.js, etc.) sans casser la direction artistique.
        </div>
      </div>
    </section>
  )
}
