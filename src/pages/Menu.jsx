import { useState } from 'react'
import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'
import { HeritageDivider } from '../components/common/HeritageDivider'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData'
import { MenuCategoryNav } from '../components/menu/MenuCategoryNav'
import { MenuItem } from '../components/menu/MenuItem'

export function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categoriesToDisplay =
    activeCategory === 'all'
      ? MENU_CATEGORIES
      : MENU_CATEGORIES.filter((c) => c.id === activeCategory)

  return (
    <div className="page page-menu flex flex-col bg-[#B67C8A]/[0.035]">
      {/* =====================================================================
          SECTION A: MENU HERO
          "A little something for your hour."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#B67C8A]/25 bg-[#B67C8A]/[0.08]">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#3E2A1F] mb-3 inline-block">
              CAFÉ & HEARTH SELECTIONS
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-[#3E2A1F] font-medium leading-[1.12] tracking-tight mb-5">
              A little something for your hour.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed">
              Every cup at CAFEBRARY is brewed with patience and served in porcelain meant to be held with both hands. From slow-roasted heritage espresso to morning brioche, our menu is designed to companion an unhurried read.
            </p>
          </div>

          {/* Planned Menu Image Container (4:3 Composition) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="menu-page"
              aspectRatio="4/3"
              variant="still-life"
              src="/Images/Menu.png"
              alt="Latte, pastries, and cake on a table in the café"
              priority
              title="The Pour & The Hearth Table"
              subtitle="Artisan pastries, rich espresso, and dessert atmosphere"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: MENU CATEGORY NAVIGATION
          Sticky category bar with accessible tabs
          ===================================================================== */}
      <MenuCategoryNav
        categories={MENU_CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      {/* =====================================================================
          SECTIONS C-J: MENU CATEGORIES
          Eight approved menu categories
          ===================================================================== */}
      <div className="container-heritage pb-20 md:pb-28">
        <div className="space-y-16 md:space-y-24">
          {categoriesToDisplay.map((cat) => {
            const items = MENU_ITEMS[cat.id] || []
            const isSeasonal = cat.id === 'seasonal'

            return (
              <section
                key={cat.id}
                id={`menu-${cat.id}`}
                className="scroll-mt-36 p-6 sm:p-8 md:p-12 rounded-[6px] border border-[#B67C8A]/35 bg-[#B67C8A]/10 shadow-sm transition-all"
              >
                {/* Category Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-6 mb-8 border-b border-[#B67C8A]/30">
                  <div>
                    <span className="font-accent text-xs tracking-[0.2em] uppercase block mb-1 px-2 py-1 rounded-sm bg-[#B67C8A]/15 text-[#3E2A1F]">
                      {isSeasonal ? 'Seasonal Specials' : 'Curated Selection'}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#3E2A1F] font-medium tracking-tight">
                      {cat.name}
                    </h2>
                  </div>
                  {cat.description && (
                    <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 italic max-w-md">
                      {cat.description}
                    </p>
                  )}
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {items.map((item) => (
                    <MenuItem key={item.id} item={item} />
                  ))}
                </div>

              </section>
            )
          })}
        </div>
      </div>

      {/* =====================================================================
          SECTION G: MENU CLOSING
          "Something warm is waiting."
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#B67C8A]/10 border-t border-[#B67C8A]/30 text-center">
        <div className="container-heritage max-w-3xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#3E2A1F] mb-3 inline-block">
            TAKE YOUR TIME
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#3E2A1F] font-medium leading-tight mb-5">
            Something warm is waiting.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3E2A1F]/90 leading-relaxed max-w-xl mx-auto mb-8">
            Order at the counter, choose your corner, and let your hour unfold naturally. There is no rush to drink, and no pressure to move on.
          </p>

          <HeritageDivider variant="diamond" className="max-w-xs mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/settle-in" variant="rose" className="px-7 py-3">
              How to Settle In
            </Button>
            <Button to="/visit" variant="outlineRose" className="px-7 py-3">
              Visiting Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
