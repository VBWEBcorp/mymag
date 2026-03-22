import { Link } from 'react-router-dom'

import { Logo } from '@/components/layout/logo'
import { Separator } from '@/components/ui/separator'

const cols = [
  {
    title: 'Produit',
    links: [
      { label: 'Vue d’ensemble', href: '#product' },
      { label: 'Intégrations', href: '#features' },
      { label: 'Sécurité', href: '#features' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '#' },
      { label: 'Conditions', href: '#' },
      { label: 'Mentions', href: '#' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/25">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Une base UI premium pour lancer vos produits avec une esthétique
              alignée sur les meilleures références SaaS modernes.
            </p>
          </div>
          <nav aria-label="Liens du pied de page" className="grid gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                  {c.title}
                </h3>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <Separator className="my-10 bg-border/80" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mymag. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <li>
              <Link className="hover:text-foreground" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <a className="hover:text-foreground" href="#cta">
                Démo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
