import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { WizardProvider, useWizard } from '@/context/WizardContext'
import { ProgressBar } from '@/components/wizard/ProgressBar'
import { CategoryStep } from '@/components/wizard/steps/CategoryStep'
import { SubThemeStep } from '@/components/wizard/steps/SubThemeStep'
import { PersonalizeStep } from '@/components/wizard/steps/PersonalizeStep'
import { AIContentsStep } from '@/components/wizard/steps/AIContentsStep'
import { ContentStep } from '@/components/wizard/steps/ContentStep'
import { ReviewStep } from '@/components/wizard/steps/ReviewStep'
import { MagazineEditor } from '@/components/editor/MagazineEditor'
import type { MagazineCategory } from '@/types/magazine'

const VALID_CATEGORIES: MagazineCategory[] = ['gift', 'personal', 'company', 'review', 'story']

function CategoryFromUrl() {
  const [params] = useSearchParams()
  const { dispatch } = useWizard()

  useEffect(() => {
    const cat = params.get('category') as MagazineCategory | null
    if (cat && VALID_CATEGORIES.includes(cat)) {
      dispatch({ type: 'SET_CATEGORY', payload: cat })
      dispatch({ type: 'NEXT_STEP' })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}

function WizardContent() {
  const { state } = useWizard()

  if (state.mode === 'editor') {
    return <MagazineEditor />
  }

  const stepComponents: Record<string, React.ReactNode> = {
    category: <CategoryStep />,
    subtheme: <SubThemeStep />,
    personalize: <PersonalizeStep />,
    'ai-contents': <AIContentsStep />,
    content: <ContentStep />,
    review: <ReviewStep />,
  }

  return (
    <div className="flex min-h-dvh flex-col overflow-hidden bg-background">
      <ProgressBar />
      <div className="flex-1">
        {stepComponents[state.currentStep]}
      </div>
    </div>
  )
}

export function CreatePage() {
  return (
    <WizardProvider>
      <CategoryFromUrl />
      <WizardContent />
    </WizardProvider>
  )
}
