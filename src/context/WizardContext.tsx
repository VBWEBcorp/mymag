import { createContext, useContext, useReducer, type ReactNode } from 'react'
import type { MagazineCategory, MagazineData, Chapter, MagazinePage, WizardStep } from '@/types/magazine'
import { WIZARD_STEPS } from '@/types/magazine'

type WizardMode = 'wizard' | 'editor'

type WizardState = {
  currentStep: WizardStep
  stepIndex: number
  mode: WizardMode
  magazine: MagazineData
}

type WizardAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'SKIP_STEP' }
  | { type: 'SET_CATEGORY'; payload: MagazineCategory }
  | { type: 'SET_SUBTHEME'; payload: string }
  | { type: 'SET_PERSONALIZATION'; payload: Partial<MagazineData> }
  | { type: 'SET_CHAPTERS'; payload: Chapter[] }
  | { type: 'SET_PAGES'; payload: MagazinePage[] }
  | { type: 'UNLOCK_EDITOR' }
  | { type: 'RESET' }

const initialMagazine: MagazineData = {
  category: null,
  subTheme: null,
  title: '',
  recipientName: '',
  senderName: '',
  message: '',
  chapters: [],
  pages: [],
}

const initialState: WizardState = {
  currentStep: 'category',
  stepIndex: 0,
  mode: 'wizard',
  magazine: initialMagazine,
}

function wizardReducer(state: WizardState, action: WizardAction): WizardState {
  switch (action.type) {
    case 'NEXT_STEP': {
      const next = state.stepIndex + 1
      if (next >= WIZARD_STEPS.length) return { ...state, mode: 'editor' }
      return { ...state, stepIndex: next, currentStep: WIZARD_STEPS[next]! }
    }
    case 'PREV_STEP': {
      const prev = Math.max(0, state.stepIndex - 1)
      return { ...state, stepIndex: prev, currentStep: WIZARD_STEPS[prev]! }
    }
    case 'SKIP_STEP': {
      const next = state.stepIndex + 1
      if (next >= WIZARD_STEPS.length) return { ...state, mode: 'editor' }
      return { ...state, stepIndex: next, currentStep: WIZARD_STEPS[next]! }
    }
    case 'SET_CATEGORY':
      return { ...state, magazine: { ...state.magazine, category: action.payload, subTheme: null } }
    case 'SET_SUBTHEME':
      return { ...state, magazine: { ...state.magazine, subTheme: action.payload } }
    case 'SET_PERSONALIZATION':
      return { ...state, magazine: { ...state.magazine, ...action.payload } }
    case 'SET_CHAPTERS':
      return { ...state, magazine: { ...state.magazine, chapters: action.payload } }
    case 'SET_PAGES':
      return { ...state, magazine: { ...state.magazine, pages: action.payload } }
    case 'UNLOCK_EDITOR':
      return { ...state, mode: 'editor' }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

type WizardContextValue = {
  state: WizardState
  dispatch: React.Dispatch<WizardAction>
  canGoBack: boolean
  canSkip: boolean
  progress: number
}

const WizardContext = createContext<WizardContextValue | null>(null)

export function WizardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wizardReducer, initialState)

  const canGoBack = state.stepIndex > 0 && state.mode === 'wizard'
  const canSkip = state.currentStep !== 'category' && state.mode === 'wizard'
  const progress = state.mode === 'editor' ? 100 : ((state.stepIndex) / WIZARD_STEPS.length) * 100

  return (
    <WizardContext.Provider value={{ state, dispatch, canGoBack, canSkip, progress }}>
      {children}
    </WizardContext.Provider>
  )
}

export function useWizard() {
  const ctx = useContext(WizardContext)
  if (!ctx) throw new Error('useWizard must be used within WizardProvider')
  return ctx
}
