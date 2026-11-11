import { Button } from '../components/common/Button'
import { HeritageDivider } from '../components/common/HeritageDivider'

export function ComingSoon({ route = '/menu' }) {
  const routeContent = {
    '/menu': {
      eyebrow: 'CAFÉ & BAKERY SELECTION',
      title: 'The Menu is Being Curated',
      subtitle: 'Handcrafted coffees, single-origin pour-overs, whole-leaf teas, and daily oven bakes.',
      description:
        'Our seasonal menu and baker’s list are being prepared for publication. Every coffee at CAFEBRARY is prepared with care and served without rush, inviting you to savor the quiet hour between the pages and the pour.',
      primaryCta: { label: 'Explore Our Story', to: '/our-story' },
      secondaryCta: { label: 'How to Settle In', to: '/settle-in' },
    },
    '/bookhouse': {
      eyebrow: 'SHARED IN-HOUSE COLLECTION',
      title: 'BOOKHOUSE Library Catalog',
      subtitle: 'Volumes that stay within the café, always waiting for your return.',
      description:
        'The complete catalog and reading guides for our in-house collection are being compiled. At CAFEBRARY, books are meant to be read slowly across multiple visits. Slip in your bookmark and we will keep your place.',
      primaryCta: { label: 'Discover the Philosophy', to: '/our-story' },
      secondaryCta: { label: 'Settle In for an Hour', to: '/settle-in' },
    },
    '/workspace': {
      eyebrow: 'DEDICATED SILENT STUDY HALL',
      title: 'WORKSPACE Details in Preparation',
      subtitle: 'A quiet heritage study hall inspired by classic European reading rooms.',
      description:
        'Full details regarding WORKSPACE memberships, reserved oak desks, and quiet-hour access will be available soon. Unlike the open main café, WORKSPACE provides a dedicated sanctuary for deep concentration and writing.',
      primaryCta: { label: 'Understanding Settle In', to: '/settle-in' },
      secondaryCta: { label: 'Return Home', to: '/' },
    },
    '/visit': {
      eyebrow: 'PLAN YOUR ARRIVAL',
      title: 'Visiting CAFEBRARY',
      subtitle: 'Architecture, atmosphere, and finding your quiet corner.',
      description:
        'Visiting schedules and arrival guidance will be published ahead of our upcoming season. Ordinary café seating requires no reservation—you are welcome to come in, order a warm cup, and find your seat.',
      primaryCta: { label: 'Explore Our Story', to: '/our-story' },
      secondaryCta: { label: 'How to Settle In', to: '/settle-in' },
    },
  }

  const content = routeContent[route] || routeContent['/menu']

  return (
    <section className="py-20 md:py-28">
      <div className="container-heritage max-w-3xl text-center">
        <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
          {content.eyebrow}
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1F2D44] font-medium mb-4 leading-tight">
          {content.title}
        </h1>
        <p className="font-accent text-base md:text-lg text-[#3E2A1F]/80 italic mb-6">
          {content.subtitle}
        </p>

        <HeritageDivider variant="diamond" className="max-w-md mx-auto my-8" />

        <div className="card-parchment p-8 md:p-10 mb-10 text-left">
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-6">
            {content.description}
          </p>
          <div className="p-4 bg-[#F4E7D3] rounded-[3px] border border-[#3E2A1F]/10 flex items-center justify-between text-xs text-[#3E2A1F]/70 font-body">
            <span>Section currently being finalized for upcoming release.</span>
            <span className="font-accent text-[#C68642]">We keep your place.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button to={content.primaryCta.to} variant="primary">
            {content.primaryCta.label}
          </Button>
          <Button to={content.secondaryCta.to} variant="outline">
            {content.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  )
}
