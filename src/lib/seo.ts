export const siteConfig = {
  name: 'Mymag',
  url: 'https://mymag.app',
  locale: 'fr_FR',
  description:
    'Mymag — interface SaaS premium, modulaire et prête pour la croissance. Base React, TypeScript, Tailwind, shadcn/ui.',
  ogImage: 'https://mymag.app/og.png',
  twitterHandle: '@mymag',
  themeColor: '#6d28d9',
} as const

export type SeoMeta = {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  noindex?: boolean
  jsonLd?: Record<string, unknown>
}

export function buildTitle(page?: string) {
  if (!page) return siteConfig.name
  return `${page} — ${siteConfig.name}`
}

export const routes = ['/', '/features', '/pricing'] as const
