import { motion } from 'framer-motion'

const brands = ['Northwind', 'Aperture', 'Helix', 'Kite', 'Orbital', 'Lattice']

export function LogosStrip() {
  return (
    <section className="border-b border-border/60 bg-muted/15">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Ils cherchent le même niveau de finition
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
        >
          {brands.map((b) => (
            <div
              key={b}
              className="text-center font-display text-sm font-semibold tracking-tight text-foreground/70 transition-colors hover:text-foreground"
            >
              {b}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
