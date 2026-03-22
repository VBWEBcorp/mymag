import { motion } from 'framer-motion'
import { useWizard } from '@/context/WizardContext'
import { CATEGORIES } from '@/data/categories'
import { MagazineCover } from '@/components/covers/MagazineCovers'
import { StepContainer } from '@/components/wizard/StepContainer'

export function CategoryStep() {
  const { dispatch } = useWizard()

  function handleSelect(id: typeof CATEGORIES[number]['id']) {
    dispatch({ type: 'SET_CATEGORY', payload: id })
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <StepContainer
      stepKey="category"
      title="Choose your magazine"
      subtitle="Pick a template to get started."
    >
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <MagazineCover
              category={cat.id}
              onClick={() => handleSelect(cat.id)}
              className="w-full max-w-[220px]"
            />
            <span className="text-sm font-medium text-foreground">{cat.label}</span>
          </motion.div>
        ))}
      </div>
    </StepContainer>
  )
}
