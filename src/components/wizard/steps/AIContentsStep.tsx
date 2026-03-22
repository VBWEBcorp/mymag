import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GripVertical, Sparkles, ToggleLeft, ToggleRight } from 'lucide-react'
import { useWizard } from '@/context/WizardContext'
import { generateMockChapters } from '@/data/categories'
import { StepContainer } from '@/components/wizard/StepContainer'
import { Button } from '@/components/ui/button'
import type { Chapter } from '@/types/magazine'
import { cn } from '@/lib/utils'

export function AIContentsStep() {
  const { state, dispatch } = useWizard()
  const [loading, setLoading] = useState(true)
  const [chapters, setChapters] = useState<Chapter[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const generated = generateMockChapters(
        state.magazine.category || 'gift',
        state.magazine.subTheme || 'birthday'
      )
      setChapters(generated)
      setLoading(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [state.magazine.category, state.magazine.subTheme])

  function toggleChapter(id: string) {
    setChapters((prev) =>
      prev.map((c) => (c.id === id ? { ...c, enabled: !c.enabled } : c))
    )
  }

  function handleContinue() {
    dispatch({ type: 'SET_CHAPTERS', payload: chapters.filter((c) => c.enabled) })
    dispatch({ type: 'NEXT_STEP' })
  }

  const typeLabels: Record<string, string> = {
    standard: 'Article',
    quiz: 'Interactive Quiz',
    crossword: 'Crossword',
    'photo-collage': 'Photos',
    astrology: 'Astrology',
    letter: 'Letters',
  }

  return (
    <StepContainer
      stepKey="ai-contents"
      title="Your AI-generated table of contents"
      subtitle="Our AI created a personalized outline. Toggle chapters on or off."
    >
      <div className="mx-auto max-w-2xl">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-6 py-16"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="flex size-16 items-center justify-center rounded-2xl bg-primary/10"
                >
                  <Sparkles className="size-7 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-primary/20"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-semibold text-foreground">
                  AI is composing your magazine...
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Analyzing theme and crafting the perfect outline
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="chapters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              {chapters.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    'group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition-all',
                    chapter.enabled
                      ? 'border-border/60'
                      : 'border-border/30 opacity-50'
                  )}
                >
                  <GripVertical className="size-4 shrink-0 text-muted-foreground/40 cursor-grab" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{chapter.title}</span>
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        {typeLabels[chapter.type] || chapter.type}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{chapter.description}</p>
                  </div>
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={chapter.enabled ? 'Disable' : 'Enable'}
                  >
                    {chapter.enabled ? (
                      <ToggleRight className="size-6 text-primary" />
                    ) : (
                      <ToggleLeft className="size-6" />
                    )}
                  </button>
                </motion.div>
              ))}

              <div className="flex justify-center pt-6">
                <Button
                  onClick={handleContinue}
                  className="h-11 gap-2 rounded-xl px-8 text-sm font-semibold"
                >
                  Confirm outline
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StepContainer>
  )
}
