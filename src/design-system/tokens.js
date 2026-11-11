/**
 * CAFEBRARY — Global Design System & Brand Foundation
 * Concept: Café first, library second (60% café / 40% library)
 * Style: Modern Heritage
 */

export const BRAND_IDENTITY = {
  name: 'CAFEBRARY',
  concept: 'Café first, library second',
  ratio: {
    cafe: '60%',
    library: '40%',
  },
  tagline: "Between the pages and the pour, you're home!",
  brandPromise: 'We keep your place.',
  mission: 'Make a quiet hour easy to have.',
  personality: 'The Quiet Friend',
  vibe: 'Warmth, belonging, quiet escape, nostalgia, familiarity, understated sophistication',
}

export const BRAND_COLORS = {
  caramel: {
    hex: '#C68642',
    rgb: '198, 134, 66',
    proportion: '60%',
    role: 'Primary brand surfaces, accents, highlights, selected states, warm focal elements',
    cssVar: 'var(--color-caramel)',
  },
  darkNavy: {
    hex: '#1F2D44',
    rgb: '31, 45, 68',
    proportion: '20%',
    role: 'Navigation, important headings, contrast elements, selected controls, deep grounding',
    cssVar: 'var(--color-dark-navy)',
  },
  dustyRose: {
    hex: '#B67C8A',
    rgb: '182, 124, 138',
    proportion: '10%',
    role: 'Subtle secondary accents, delicate details, warm dividers',
    cssVar: 'var(--color-dusty-rose)',
  },
  darkCocoa: {
    hex: '#3E2A1F',
    rgb: '62, 42, 31',
    proportion: '5%',
    role: 'Body-text contrast, deep warm details, rich architectural walnut tones',
    cssVar: 'var(--color-dark-cocoa)',
  },
  latteFoam: {
    hex: '#F4E7D3',
    rgb: '244, 231, 211',
    proportion: '5%',
    role: 'Primary warm backgrounds, light surfaces, parchment surfaces, text contrast',
    cssVar: 'var(--color-latte-foam)',
  },
}

export const TYPOGRAPHY_SYSTEM = {
  logo: {
    name: 'Bogale',
    usage: 'CAFEBRARY logo and wordmark ONLY. Never use for headings, paragraphs, buttons, or ordinary text.',
    fallback: "'Bogale', 'Didot', 'Bodoni MT', 'Cinzel', 'Cinzel Decorative', 'Georgia', serif",
    cssVar: 'var(--font-logo)',
    className: 'font-logo',
  },
  headings: {
    name: 'Sanrello',
    usage: 'All major headings and section headings. Editorial hierarchy and elegant proportions.',
    fallback: "'Sanrello', 'Playfair Display', 'Cormorant Garamond', 'Baskerville', 'Georgia', serif",
    cssVar: 'var(--font-heading)',
    className: 'font-heading',
  },
  body: {
    name: 'The Seasons',
    usage: 'Body text, paragraphs, descriptions, and longer reading content. Readability and comfortable line lengths.',
    fallback: "'The Seasons', 'EB Garamond', 'Garamond', 'Libre Baskerville', 'Georgia', serif",
    cssVar: 'var(--font-body)',
    className: 'font-body',
  },
  supporting: {
    name: 'Abril Fatface',
    usage: 'Supporting typography: Subtitles, menu-card supporting details, seat availability, labels, selected highlights, short expressive text.',
    fallback: "'Abril Fatface', 'Playfair Display', 'Bodoni MT', 'Didot', 'Georgia', serif",
    cssVar: 'var(--font-accent)',
    className: 'font-accent',
  },
}

export const VISUAL_REFERENCES = {
  referenceA: {
    code: 'CAFÉ',
    style: 'European heritage café architecture',
    character: 'Vintage character, rich wood, warm golden lighting, atmospheric illumination, inviting windows, nostalgic warmth',
    grading: 'Golden, atmospheric, nostalgic, welcoming',
  },
  referenceB: {
    code: 'WORKSPACE',
    style: 'European heritage study hall',
    character: 'Tall arched windows, architectural symmetry, rich wooden desks, antique brass details, comfortable individual seating, neutral daylight, clear task lighting',
    grading: 'Neutral, clear, comfortable, calm, structured, productive',
  },
}

/**
 * EXACTLY EIGHT PLANNED WEBSITE IMAGES
 * Art direction, reference mapping, aspect ratios, and architectural role
 */
export const IMAGE_PLAN = [
  {
    id: 'home-hero',
    name: 'Home Hero',
    category: 'CAFÉ',
    reference: 'REFERENCE A',
    aspectRatio: '16/9',
    aspectClass: 'aspect-home-hero',
    description: "A beautiful wide café interior image, establishing CAFEBRARY's architecture, warmth, and atmosphere.",
    materials: 'Rich walnut, aged oak, brass fixtures, soft golden illumination',
  },
  {
    id: 'home-coffee',
    name: 'Home Coffee Introduction',
    category: 'CAFÉ',
    reference: 'REFERENCE A',
    aspectRatio: '4/3',
    aspectClass: 'aspect-coffee-intro',
    description: 'A close-up coffee photograph, warm natural light, tactile details, refined café atmosphere.',
    materials: 'Ceramic cups, latte art, steam, weathered wooden tabletop, brass spoon',
  },
  {
    id: 'home-bookhouse',
    name: 'Home Bookhouse Preview',
    category: 'CAFÉ / LIBRARY BLEND',
    reference: 'REFERENCE A & B BLEND',
    aspectRatio: '4/5',
    aspectClass: 'aspect-bookhouse-preview',
    description: 'A quiet reading corner within the same café building, shelves, books, comfortable seating, welcoming atmosphere.',
    materials: 'Floor-to-ceiling bookshelves, vintage leather armchair, warm amber reading lamp',
  },
  {
    id: 'our-story',
    name: 'Our Story',
    category: 'EDITORIAL STILL-LIFE',
    reference: 'REFERENCE A & B BLEND',
    aspectRatio: '3/2',
    aspectClass: 'aspect-our-story',
    description: 'A thoughtful still-life photograph with books, coffee, paper, writing materials, and heritage textures.',
    materials: 'Aged book pages, fountain pen, linen napkin, warm porcelain, Dark Cocoa shadows',
  },
  {
    id: 'bookhouse-page',
    name: 'Bookhouse Page',
    category: 'LIBRARY',
    reference: 'REFERENCE B',
    aspectRatio: '16/10',
    aspectClass: 'aspect-bookhouse-page',
    description: 'A dedicated reading-library interior, visually connected to the café architecture but emphasizing books and quiet reading.',
    materials: 'Tall wooden bookshelves, ladder, curated literature, gentle natural daylight',
  },
  {
    id: 'workspace-page',
    name: 'Workspace Page',
    category: 'WORKSPACE / STUDY HALL',
    reference: 'REFERENCE B',
    aspectRatio: '16/10',
    aspectClass: 'aspect-workspace-page',
    description: 'A dedicated focus-room interior following the approved neutral heritage study-hall reference.',
    materials: 'Symmetrical oak study desks, individual green banker or brass lamps, arched windows, clear task lighting',
  },
  {
    id: 'visit-page',
    name: 'Visit Page',
    category: 'EXTERIOR',
    reference: 'REFERENCE A & B',
    aspectRatio: '16/9',
    aspectClass: 'aspect-visit-page',
    description: "A CAFEBRARY exterior photograph following the approved European heritage exterior reference.",
    materials: 'Stone facade, arched entrance, warm window glow, understated brass signage',
  },
  {
    id: 'menu-page',
    name: 'Menu Page',
    category: 'CAFÉ / BAKERY',
    reference: 'REFERENCE A',
    aspectRatio: '4/3',
    aspectClass: 'aspect-menu-page',
    description: "An elegant food-and-coffee table photograph featuring the café's bakery and dessert atmosphere.",
    materials: 'Fresh pastries, artisan bread, rich espresso, marble or oak tabletop, soft morning light',
  },
]

export const UI_CONVENTIONS = {
  buttons: {
    style: 'Refined, understated, confident, strong contrast, comfortable padding, no exaggerated pills',
    variants: {
      primary: 'btn btn-primary',
      navy: 'btn btn-navy',
      outline: 'btn btn-outline',
      outlineCaramel: 'btn btn-outline-caramel',
    },
  },
  surfaces: {
    parchment: 'card-parchment',
    navy: 'card-navy',
    cocoa: 'card-cocoa',
  },
  dividers: {
    heritage: 'divider-heritage',
    brass: 'divider-brass',
  },
  badges: {
    heritage: 'badge-heritage',
    rose: 'badge-rose',
  },
  container: 'container-heritage',
}
