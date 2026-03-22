import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { WIZARD_STEPS } from '@/types/magazine'
import { useWizard } from '@/context/WizardContext'
import { cn } from '@/lib/utils'

const STEP_LABELS: Record<string, string> = {
  category: 'Category',
  subtheme: 'Theme',
  personalize: 'Personalize',
  'ai-contents': 'AI Contents',
  content: 'Content',
  review: 'Preview',
}

export function ProgressBar() {
  const { state } = useWizard()

  return (
    <div className="w-full px-4 py-4">
      <div className="mx-auto flex max-w-2xl items-center justify-between">
        {WIZARD_STEPS.map((step, i) => {
          const isCompleted = i < state.stepIndex
          const isCurrent = i === state.stepIndex
          return (
            <div key={step} className="flex items-center gap-0 flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.15 : 1,
                    backgroundColor: isCompleted
                      ? 'oklch(0.58 0.16 235)'
                      : isCurrent
                        ? 'oklch(0.58 0.16 235 / 0.15)'
                        : 'oklch(0.92 0.01 240)',
                  }}
                  className={cn(
                    'flex size-9 items-center justify-center rounded-full text-xs font-semibold transition-colors',
                    isCompleted && 'text-white',
                    isCurrent && 'text-primary ring-2 ring-primary/30',
                    !isCompleted && !isCurrent && 'text-muted-foreground'
                  )}
                >
                  {isCompleted ? <Check className="size-4" /> : i + 1}
                </motion.div>
                <span
                  className={cn(
                    'hidden text-[11px] font-medium sm:block',
                    isCurrent ? 'text-foreground' : 'text-muted-foreground'
                  )}
                >
                  {STEP_LABELS[step]}
                </span>
              </div>
              {i < WIZARD_STEPS.length - 1 && (
                <div className="mx-2 h-px flex-1 bg-border sm:mx-3">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: isCompleted ? '100%' : '0%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
