import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, SkipForward } from 'lucide-react'
import type { ReactNode } from 'react'
import { useWizard } from '@/context/WizardContext'
import { Button } from '@/components/ui/button'

type StepContainerProps = {
  title: string
  subtitle?: string
  children: ReactNode
  stepKey: string
}

const variants = {
  enter: { opacity: 0, x: 60 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
}

export function StepContainer({ title, subtitle, children, stepKey }: StepContainerProps) {
  const { canGoBack, canSkip, dispatch } = useWizard()

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col">
      <div className="flex items-center justify-between px-4 pb-2 sm:px-6">
        {canGoBack ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch({ type: 'PREV_STEP' })}
            className="gap-1.5 text-muted-foreground"
          >
            <ArrowLeft className="size-4" />
            Back
          </Button>
        ) : (
          <div />
        )}
        {canSkip && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => dispatch({ type: 'SKIP_STEP' })}
            className="gap-1.5 text-muted-foreground"
          >
            Skip
            <SkipForward className="size-4" />
          </Button>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-12 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={stepKey}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-4xl"
          >
            <div className="mb-8 text-center sm:mb-10">
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mx-auto mt-3 max-w-lg text-base text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
