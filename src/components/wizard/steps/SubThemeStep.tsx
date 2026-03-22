import { motion } from 'framer-motion'
import { useWizard } from '@/context/WizardContext'
import { SUB_THEMES } from '@/data/categories'
import { StepContainer } from '@/components/wizard/StepContainer'
import { cn } from '@/lib/utils'

export function SubThemeStep() {
  const { state, dispatch } = useWizard()
  const category = state.magazine.category
  const themes = category ? SUB_THEMES[category] : []

  function handleSelect(id: string) {
    dispatch({ type: 'SET_SUBTHEME', payload: id })
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <StepContainer
      stepKey="subtheme"
      title="Choose your theme"
      subtitle="What type of content would you like to create?"
    >
      <div className="mx-auto grid max-w-2xl gap-3">
        {themes.map((theme, i) => (
          <motion.button
            key={theme.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => handleSelect(theme.id)}
            className={cn(
              'group flex items-center gap-4 rounded-xl border border-border/60 bg-card px-5 py-4 text-left transition-all duration-200',
              'hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-sm',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
              state.magazine.subTheme === theme.id && 'border-primary/50 bg-primary/5'
            )}
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted/60 text-xl transition-transform group-hover:scale-110">
              {theme.emoji}
            </span>
            <div className="min-w-0">
              <h3 className="font-medium text-foreground">{theme.label}</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{theme.description}</p>
            </div>
          </motion.button>
        ))}
      </div>
    </StepContainer>
  )
}
