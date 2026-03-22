import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen,
  ChevronDown,
  Download,
  Eye,
  Image,
  Palette,
  ShoppingCart,
  Type,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useWizard } from '@/context/WizardContext'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { MagazinePage } from '@/types/magazine'

function PageRenderer({ page, index }: { page: MagazinePage; index: number }) {
  const [editing, setEditing] = useState(false)

  const bgByType: Record<string, string> = {
    cover: 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground',
    toc: 'bg-card',
    chapter: 'bg-card',
    quiz: 'bg-gradient-to-br from-amber-50 to-orange-50',
    crossword: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    photo: 'bg-card',
    'back-cover': 'bg-gradient-to-br from-muted to-muted/60',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group relative"
    >
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-xs font-medium text-muted-foreground">
          Page {index + 1}
        </span>
        <button
          onClick={() => setEditing(!editing)}
          className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground"
        >
          {editing ? 'Done' : 'Edit'}
        </button>
      </div>

      <div
        className={cn(
          'relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/60 shadow-sm transition-shadow hover:shadow-md',
          bgByType[page.type] || 'bg-card'
        )}
      >
        {page.type === 'cover' && (
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] opacity-60">
              myMag
            </p>
            {editing ? (
              <input
                className="w-full bg-transparent text-center font-display text-xl font-bold outline-none placeholder:opacity-50 sm:text-2xl"
                defaultValue={page.title}
                autoFocus
              />
            ) : (
              <h2 className="font-display text-xl font-bold sm:text-2xl">{page.title}</h2>
            )}
            <div className="mx-auto mt-4 h-px w-12 bg-current opacity-30" />
          </div>
        )}

        {page.type === 'toc' && (
          <div className="flex h-full flex-col p-6 sm:p-8">
            <h3 className="mb-4 font-display text-lg font-bold text-foreground">Table of Contents</h3>
            <div className="space-y-2.5">
              {page.content.split('\n').map((line, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border-b border-border/40 pb-2 last:border-0"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/80">{line.replace(/^\d+\.\s*/, '')}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {(page.type === 'chapter' || page.type === 'photo') && (
          <div className="flex h-full flex-col">
            {page.imageUrl && (
              <div className="h-2/5 w-full overflow-hidden">
                <img
                  src={page.imageUrl}
                  alt={page.title}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 font-display text-base font-bold text-foreground">
                {page.title}
              </h3>
              {editing ? (
                <textarea
                  className="flex-1 resize-none bg-transparent text-sm text-muted-foreground outline-none"
                  defaultValue={page.content}
                  autoFocus
                />
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">{page.content}</p>
              )}
            </div>
          </div>
        )}

        {page.type === 'quiz' && (
          <div className="flex h-full flex-col p-6">
            <div className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-semibold text-amber-700">
              Interactive Quiz
            </div>
            <h3 className="mb-4 font-display text-base font-bold text-foreground">{page.title}</h3>
            <div className="space-y-3">
              {['What is their favorite color?', 'What is their favorite dish?', 'Where do they dream of traveling?'].map(
                (q, i) => (
                  <div key={i} className="rounded-lg bg-white/60 p-3">
                    <p className="text-xs font-medium text-foreground">{q}</p>
                    <div className="mt-2 flex gap-2">
                      {['A', 'B', 'C'].map((opt) => (
                        <span
                          key={opt}
                          className="rounded-md bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary"
                        >
                          {opt}. ???
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {page.type === 'crossword' && (
          <div className="flex h-full flex-col items-center justify-center p-6">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-semibold text-emerald-700">
              Crossword Puzzle
            </div>
            <h3 className="mb-4 font-display text-base font-bold text-foreground">{page.title}</h3>
            <div className="grid grid-cols-6 gap-0.5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex size-7 items-center justify-center border text-[9px] font-bold sm:size-8',
                    Math.random() > 0.3
                      ? 'border-foreground/20 bg-white'
                      : 'bg-foreground/10'
                  )}
                >
                  {Math.random() > 0.5 ? String.fromCharCode(65 + Math.floor(Math.random() * 26)) : ''}
                </div>
              ))}
            </div>
          </div>
        )}

        {page.type === 'back-cover' && (
          <div className="flex h-full flex-col items-center justify-center p-8 text-center">
            <BookOpen className="mb-4 size-8 text-muted-foreground/40" />
            <h3 className="font-display text-lg font-bold text-foreground">{page.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{page.content}</p>
            <div className="mt-6 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              myMag.ch
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function MagazineEditor() {
  const { state, dispatch } = useWizard()
  const [zoom, setZoom] = useState(100)

  const pages = state.magazine.pages

  return (
    <div className="flex min-h-dvh flex-col bg-muted/30">
      {/* Toolbar */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => dispatch({ type: 'RESET' })}
              className="text-muted-foreground"
            >
              <BookOpen className="mr-1.5 size-4" />
              myMag
            </Button>
            <span className="text-sm font-medium text-foreground">
              {state.magazine.title || 'My Magazine'}
            </span>
            <ChevronDown className="size-3 text-muted-foreground" />
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            <Button variant="ghost" size="icon-sm" title="Text">
              <Type className="size-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" title="Image">
              <Image className="size-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" title="Style">
              <Palette className="size-4" />
            </Button>
            <div className="mx-2 h-5 w-px bg-border" />
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setZoom(Math.max(50, zoom - 10))}
            >
              <ZoomOut className="size-4" />
            </Button>
            <span className="w-10 text-center text-xs text-muted-foreground">{zoom}%</span>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setZoom(Math.min(150, zoom + 10))}
            >
              <ZoomIn className="size-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden gap-1.5 sm:inline-flex">
              <Eye className="size-4" />
              Preview
            </Button>
            <Button variant="ghost" size="sm" className="hidden gap-1.5 sm:inline-flex">
              <Download className="size-4" />
              PDF
            </Button>
            <Button size="sm" className="gap-1.5">
              <ShoppingCart className="size-4" />
              Order
            </Button>
          </div>
        </div>
      </div>

      {/* Vertical scroll editor — the "Unlock" moment */}
      <div
        className="flex-1 overflow-y-auto px-4 py-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div
          className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2"
          style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
        >
          {pages.map((page, i) => (
            <PageRenderer key={page.id} page={page} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
