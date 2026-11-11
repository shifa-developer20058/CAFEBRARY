export function MenuCategoryNav({ categories, activeCategory, onSelectCategory }) {
  const handleTabKeyDown = (event, index) => {
    const tabCount = categories.length + 1
    let nextIndex

    if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabCount
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabCount) % tabCount
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = tabCount - 1

    if (nextIndex === undefined) return

    event.preventDefault()
    event.currentTarget.parentElement.children[nextIndex]?.focus()
    onSelectCategory(nextIndex === 0 ? 'all' : categories[nextIndex - 1].id)
  }

  return (
    <nav
      className="sticky top-[78px] z-30 py-3 bg-[#B67C8A]/20 backdrop-blur-md border-y border-[#B67C8A]/35 mb-10 shadow-sm"
      aria-label="Menu Categories"
    >
      <div className="container-heritage">
        <div
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1"
          role="tablist"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'all'}
            tabIndex={activeCategory === 'all' ? 0 : -1}
            onKeyDown={(event) => handleTabKeyDown(event, 0)}
            onClick={() => onSelectCategory('all')}
            className={`px-4 py-2 min-h-[40px] rounded-[3px] text-[0.8125rem] sm:text-sm font-accent tracking-wider uppercase transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#C68642] ${
              activeCategory === 'all'
                ? 'bg-[#B67C8A] text-[#3E2A1F] font-semibold shadow-sm'
                : 'text-[#3E2A1F] hover:bg-[#B67C8A]/10 hover:text-[#3E2A1F]'
            }`}
          >
            All (30)
          </button>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onKeyDown={(event) => handleTabKeyDown(event, categories.indexOf(cat) + 1)}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 min-h-[40px] rounded-[3px] text-[0.8125rem] sm:text-sm font-accent tracking-wider uppercase transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#C68642] ${
                  isActive
                    ? 'bg-[#B67C8A] text-[#3E2A1F] font-semibold shadow-sm'
                    : 'text-[#3E2A1F] hover:bg-[#B67C8A]/10'
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
