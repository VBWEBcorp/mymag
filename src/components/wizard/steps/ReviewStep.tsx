import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Edit3, RotateCcw } from 'lucide-react'
import { useWizard } from '@/context/WizardContext'
import { generateMockPages } from '@/data/categories'
import { StepContainer } from '@/components/wizard/StepContainer'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ReviewStep() {
  const { state, dispatch } = useWizard()
  const [flipped, setFlipped] = useState(false)

  const pages = generateMockPages(
    state.magazine.chapters,
    state.magazine.title || 'My Magazine'
  )

  function handleUnlockEditor() {
    dispatch({ type: 'SET_PAGES', payload: pages })
    dispatch({ type: 'UNLOCK_EDITOR' })
  }

  return (
    <StepContainer
      stepKey="review"
      title="Preview your magazine"
      subtitle="See your creation before moving to the final editor."
    >
      <div className="mx-auto max-w-3xl space-y-8">
        {/* 3D Flip Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <div
            className="relative cursor-pointer"
            style={{ perspective: '1200px' }}
            onClick={() => setFlipped(!flipped)}
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative h-[340px] w-[240px] sm:h-[420px] sm:w-[300px]"
            >
              {/* Front cover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/90 to-primary shadow-2xl shadow-primary/20"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="px-6 text-center">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                    myMag
                  </p>
                  <h2 className="font-display text-xl font-bold text-primary-foreground sm:text-2xl">
                    {state.magazine.title || 'My Magazine'}
                  </h2>
                  {state.magazine.recipientName && (
                    <p className="mt-3 text-sm text-primary-foreground/80">
                      For {state.magazine.recipientName}
                    </p>
                  )}
                  <div className="mx-auto mt-6 h-px w-16 bg-primary-foreground/30" />
                  <p className="mt-3 text-xs text-primary-foreground/60">
                    {pages.length} pages
                  </p>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-primary-foreground/40">
                  Click to flip
                </div>
              </div>

              {/* Back cover */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-muted to-muted/80 shadow-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="px-6 text-center">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Table of Contents
                  </p>
                  <div className="space-y-2">
                    {state.magazine.chapters.slice(0, 5).map((ch, i) => (
                      <p key={ch.id} className="text-sm text-foreground/80">
                        <span className="text-primary">{i + 1}.</span> {ch.title}
                      </p>
                    ))}
                    {state.magazine.chapters.length > 5 && (
                      <p className="text-xs text-muted-foreground">
                        +{state.magazine.chapters.length - 5} more chapters
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shadow */}
            <div className="mx-auto mt-4 h-4 w-3/4 rounded-full bg-foreground/5 blur-xl" />
          </div>

          <button
            onClick={() => setFlipped(!flipped)}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <RotateCcw className="size-3" />
            Flip the magazine
          </button>
        </motion.div>

        {/* Info summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass mx-auto max-w-md rounded-2xl p-5"
        >
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-foreground">{pages.length}</p>
              <p className="text-xs text-muted-foreground">Pages</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{state.magazine.chapters.length}</p>
              <p className="text-xs text-muted-foreground">Chapters</p>
            </div>
          </div>
          {state.magazine.message && (
            <div className="mt-4 border-t border-border/60 pt-4">
              <p className="text-center text-xs italic text-muted-foreground">
                "{state.magazine.message}"
              </p>
            </div>
          )}
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={handleUnlockEditor}
            className={cn('h-12 gap-2 rounded-xl px-8 text-sm font-semibold')}
          >
            <Edit3 className="size-4" />
            Open full editor
          </Button>
          <Button
            variant="outline"
            onClick={handleUnlockEditor}
            className="h-12 gap-2 rounded-xl px-8 text-sm font-semibold"
          >
            <BookOpen className="size-4" />
            Order directly (demo)
          </Button>
        </div>
      </div>
    </StepContainer>
  )
}
