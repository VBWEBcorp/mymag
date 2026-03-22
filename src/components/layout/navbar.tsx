import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from '@/components/layout/logo'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#product', label: 'Produit' },
  { href: '#features', label: 'Fonctionnalités' },
  { href: '#pricing', label: 'Tarifs' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navigation principale"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <a href="#login">Connexion</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#cta">Essayer gratuitement</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="rounded-full"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-4">
                <Button variant="outline" asChild>
                  <a href="#login" onClick={() => setOpen(false)}>
                    Connexion
                  </a>
                </Button>
                <Button asChild>
                  <a href="#cta" onClick={() => setOpen(false)}>
                    Essayer gratuitement
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
