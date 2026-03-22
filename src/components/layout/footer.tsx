import { Link } from 'react-router-dom'

import { Logo } from '@/components/layout/logo'
import { Separator } from '@/components/ui/separator'

const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Categories', href: '#categories' },
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Imprint', href: '#' },
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
              Create professional-quality personalized magazines
              in minutes with the power of AI.
              Printed in Switzerland, delivered across Europe.
            </p>
          </div>
          <nav aria-label="Footer links" className="grid gap-10 sm:grid-cols-3">
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
            © {new Date().getFullYear()} myMag — Zurich, Switzerland. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <li>
              <Link className="hover:text-foreground" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground" to="/create">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
