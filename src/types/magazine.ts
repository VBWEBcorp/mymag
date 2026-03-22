export type MagazineCategory = 'gift' | 'personal' | 'company' | 'review' | 'story'

export type SubThemeOption = {
  id: string
  label: string
  description: string
  emoji: string
}

export type WizardStep =
  | 'category'
  | 'subtheme'
  | 'personalize'
  | 'ai-contents'
  | 'content'
  | 'review'

export const WIZARD_STEPS: WizardStep[] = [
  'category',
  'subtheme',
  'personalize',
  'ai-contents',
  'content',
  'review',
]

export type Chapter = {
  id: string
  title: string
  type: 'standard' | 'quiz' | 'crossword' | 'photo-collage' | 'astrology' | 'letter'
  description: string
  enabled: boolean
}

export type MagazinePage = {
  id: string
  type: 'cover' | 'toc' | 'chapter' | 'quiz' | 'crossword' | 'photo' | 'back-cover'
  title: string
  content: string
  imageUrl?: string
}

export type MagazineData = {
  category: MagazineCategory | null
  subTheme: string | null
  title: string
  recipientName: string
  senderName: string
  message: string
  chapters: Chapter[]
  pages: MagazinePage[]
}
