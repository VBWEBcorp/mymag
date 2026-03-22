import type { MagazineCategory, SubThemeOption, Chapter } from '@/types/magazine'

export type CategoryOption = {
  id: MagazineCategory
  label: string
  tagline: string
  description: string
}

export const CATEGORIES: CategoryOption[] = [
  {
    id: 'gift',
    label: 'Gift Mag',
    tagline: 'The most personal gift',
    description: 'Birthdays, weddings, farewells & Christmas',
  },
  {
    id: 'personal',
    label: 'myMag',
    tagline: 'Your story, your magazine',
    description: 'Portfolio, travel journal & personal diary',
  },
  {
    id: 'company',
    label: 'Company Mag',
    tagline: 'Professional. Premium. Printed.',
    description: 'Real estate, fashion, corporate & restaurant',
  },
  {
    id: 'review',
    label: 'Rückblick',
    tagline: 'Relive your best moments',
    description: 'Yearly reviews, baby books & memory collections',
  },
]

export const SUB_THEMES: Record<MagazineCategory, SubThemeOption[]> = {
  gift: [
    { id: 'birthday', label: 'Birthday', description: 'A surprise magazine to celebrate another year', emoji: '🎂' },
    { id: 'love', label: 'Love & Wedding', description: 'Tell your love story in a beautiful magazine', emoji: '💕' },
    { id: 'christmas', label: 'Christmas', description: 'The most personal Christmas gift there is', emoji: '🎄' },
    { id: 'farewell', label: 'Farewell & Thank You', description: 'A memorable tribute or goodbye', emoji: '🌟' },
  ],
  personal: [
    { id: 'portfolio', label: 'Portfolio', description: 'Showcase your projects and achievements', emoji: '🎨' },
    { id: 'travel', label: 'Travel', description: 'Immortalize your adventures in print', emoji: '✈️' },
    { id: 'journal', label: 'Personal Journal', description: 'Your story, your words, your style', emoji: '📝' },
  ],
  company: [
    { id: 'real-estate', label: 'Real Estate', description: 'High-end property presentations', emoji: '🏠' },
    { id: 'fashion', label: 'Fashion', description: 'Lookbooks and trend collections', emoji: '👗' },
    { id: 'business', label: 'Corporate', description: 'Annual reports or company brochures', emoji: '💼' },
    { id: 'restaurant', label: 'Restaurant', description: 'Menu, story, and ambiance of your venue', emoji: '🍽️' },
  ],
  review: [
    { id: 'yearly', label: 'Yearly Review', description: 'The best moments of the past year', emoji: '📆' },
    { id: 'monthly', label: 'Monthly Review', description: 'A month captured in words and images', emoji: '📋' },
    { id: 'baby', label: 'Baby Book', description: 'The first months of your little treasure', emoji: '👶' },
  ],
  story: [
    { id: 'children', label: 'Children\'s Tale', description: 'A magical adventure with your child as the hero', emoji: '🧚' },
    { id: 'adventure', label: 'Adventure', description: 'An epic, personalized story', emoji: '⚔️' },
    { id: 'romance', label: 'Romance', description: 'Your love story, novel-style', emoji: '💝' },
  ],
}

export function generateMockChapters(category: MagazineCategory, subTheme: string): Chapter[] {
  const chaptersMap: Record<string, Chapter[]> = {
    'gift-birthday': [
      { id: '1', title: 'The Stars Say...', type: 'astrology', description: 'A personalized horoscope for the year ahead', enabled: true },
      { id: '2', title: 'How It All Began', type: 'standard', description: 'The story of how you met', enabled: true },
      { id: '3', title: 'Photo Album', type: 'photo-collage', description: 'Your most beautiful memories together', enabled: true },
      { id: '4', title: 'The Big Quiz', type: 'quiz', description: 'Who knows them best?', enabled: true },
      { id: '5', title: 'Special Crossword', type: 'crossword', description: 'A word game about your shared memories', enabled: true },
      { id: '6', title: 'Letters From Loved Ones', type: 'letter', description: 'Personal messages from family and friends', enabled: true },
    ],
    'gift-love': [
      { id: '1', title: 'Our Story', type: 'standard', description: 'The tale of your love', enabled: true },
      { id: '2', title: 'Our Travels', type: 'photo-collage', description: 'The destinations that shaped your relationship', enabled: true },
      { id: '3', title: 'Couple\'s Quiz', type: 'quiz', description: 'Test how well you know each other', enabled: true },
      { id: '4', title: 'Playlist of the Heart', type: 'standard', description: 'The songs that tell your story', enabled: true },
      { id: '5', title: 'Our Future', type: 'standard', description: 'What the future holds for you both', enabled: true },
    ],
    'company-real-estate': [
      { id: '1', title: 'Our Agency', type: 'standard', description: 'Meet the team and our values', enabled: true },
      { id: '2', title: 'Exceptional Properties', type: 'photo-collage', description: 'A selection of our finest listings', enabled: true },
      { id: '3', title: 'Market Insights', type: 'standard', description: 'Analysis and real estate trends', enabled: true },
      { id: '4', title: 'Client Testimonials', type: 'letter', description: 'What our satisfied clients say', enabled: true },
      { id: '5', title: 'Neighborhood Guide', type: 'standard', description: 'Discover the area\'s best features', enabled: true },
    ],
    'review-baby': [
      { id: '1', title: 'Welcome to the World', type: 'standard', description: 'The day you were born', enabled: true },
      { id: '2', title: 'Month by Month', type: 'photo-collage', description: 'Your growth in photos', enabled: true },
      { id: '3', title: 'First Times', type: 'standard', description: 'First smile, first steps, first words...', enabled: true },
      { id: '4', title: 'The Family', type: 'letter', description: 'Messages from mom, dad, and loved ones', enabled: true },
      { id: '5', title: 'Tiny Prints', type: 'standard', description: 'Your little hands and feet', enabled: true },
    ],
    'story-children': [
      { id: '1', title: 'Chapter 1: The Call to Adventure', type: 'standard', description: 'The beginning of an extraordinary journey', enabled: true },
      { id: '2', title: 'Chapter 2: The Enchanted Forest', type: 'standard', description: 'Discovering a magical world', enabled: true },
      { id: '3', title: 'Chapter 3: The Challenge', type: 'quiz', description: 'Riddles to solve along the way', enabled: true },
      { id: '4', title: 'Chapter 4: Victory!', type: 'standard', description: 'The hero triumphs!', enabled: true },
      { id: '5', title: 'Bonus Games', type: 'crossword', description: 'Crosswords and coloring pages', enabled: true },
    ],
  }

  const key = `${category}-${subTheme}`
  return chaptersMap[key] || chaptersMap['gift-birthday']!
}

export function generateMockPages(chapters: Chapter[], title: string): import('@/types/magazine').MagazinePage[] {
  const pages: import('@/types/magazine').MagazinePage[] = [
    { id: 'cover', type: 'cover', title, content: '', imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&q=80' },
    { id: 'toc', type: 'toc', title: 'Table of Contents', content: chapters.map((c, i) => `${i + 1}. ${c.title}`).join('\n') },
  ]

  chapters.forEach((chapter) => {
    pages.push({
      id: `page-${chapter.id}`,
      type: chapter.type === 'quiz' ? 'quiz' : chapter.type === 'crossword' ? 'crossword' : chapter.type === 'photo-collage' ? 'photo' : 'chapter',
      title: chapter.title,
      content: chapter.description,
      imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    })
  })

  pages.push({ id: 'back', type: 'back-cover', title: 'Thank You', content: 'Made with love on myMag' })
  return pages
}
