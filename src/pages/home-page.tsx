import {
  organizationJsonLd,
  softwareApplicationJsonLd,
  webPageJsonLd,
  webSiteJsonLd,
} from '@/components/seo/json-ld'
import { SeoHead } from '@/components/seo/seo-head'
import { BentoSection } from '@/components/sections/bento-section'
import { CtaSection } from '@/components/sections/cta-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { HeroSection } from '@/components/sections/hero-section'
import { LogosStrip } from '@/components/sections/logos-strip'
import { PricingSection } from '@/components/sections/pricing-section'
import { StatsSection } from '@/components/sections/stats-section'
import { siteConfig } from '@/lib/seo'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    webSiteJsonLd(),
    organizationJsonLd(),
    webPageJsonLd(siteConfig.name, siteConfig.description, '/'),
    softwareApplicationJsonLd(),
  ],
}

export function HomePage() {
  return (
    <>
      <SeoHead
        description={siteConfig.description}
        canonical="/"
        jsonLd={jsonLd}
      />
      <HeroSection />
      <LogosStrip />
      <FeaturesSection />
      <BentoSection />
      <StatsSection />
      <PricingSection />
      <CtaSection />
    </>
  )
}
