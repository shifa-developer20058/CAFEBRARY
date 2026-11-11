import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'
import { HeritageDivider } from '../components/common/HeritageDivider'
import { BookmarkPassport } from '../components/bookhouse/BookmarkPassport'

export function Bookhouse() {
  return (
    <div className="page page-bookhouse flex flex-col">
      {/* =====================================================================
          SECTION A: BOOKHOUSE HERO
          "Some chapters can wait."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#3E2A1F]/10 bg-gradient-to-b from-[#F4E7D3] via-[#FAF4EB] to-[#F4E7D3]">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#B67C8A] mb-3 inline-block">
              THE IN-HOUSE LIBRARY
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-[#1F2D44] font-medium leading-[1.12] tracking-tight mb-5">
              Some chapters can wait.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed mb-8">
              BOOKHOUSE is CAFEBRARY's shared reading collection tucked within the café. Over one hundred and fifty curated volumes that stay within our walls, waiting for your return.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/settle-in" variant="primary" className="px-7 py-3">
                How to Settle In
              </Button>
              <Button to="/menu" variant="outline" className="px-7 py-3">
                Explore the Menu
              </Button>
            </div>
          </div>

          {/* Planned Bookhouse Image Container (16:10 Composition) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="bookhouse-page"
              aspectRatio="16/10"
              variant="study"
              src="/Images/Bookhouse.jpeg"
              alt="Wooden bookshelves, reading tables, and warm light in BOOKHOUSE"
              priority
              title="The BOOKHOUSE Library Room"
              subtitle="Tall wooden bookshelves, curated literature, and soft reading illumination"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: THE SHARED READING LIBRARY
          How the in-house library works
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-3xl md:text-center">
          <div className="space-y-6">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] block">
              READING PHILOSOPHY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight">
              A library where books never leave the house.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed pt-2">
              <p>
                In an era of fleeting digital feeds, BOOKHOUSE offers the permanence of ink on paper. We are neither a commercial bookstore selling copies nor a lending library that lets books vanish into someone else’s home.
              </p>
              <p>
                Every volume in our collection lives permanently inside CAFEBRARY. When you find a story that speaks to you, pull out a chair, order a warm pour, and read as much or as little as your hour allows. When you are ready to leave, slip in your bookmark and rest the book back on the shelf.
              </p>
              <p className="p-4 bg-[#F4E7D3] border-l-2 border-[#B67C8A] rounded-[2px] italic text-[#1F2D44] font-medium text-sm md:text-base">
                "Because our books never leave the building, your unfinished volume will always be here when you return tomorrow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION C: THE COLLECTION
          150 books at opening, Literature & Non-Fiction foundations
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#B67C8A] mb-3 inline-block">
              CURATED SHELVES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              An opening collection of 150 volumes.
            </h2>
            <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed">
              Carefully chosen to accompany an unhurried mind. Built upon two foundational pillars, with room to grow through community and time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {/* Shelf Bay 1: Literature */}
            <div className="card-parchment p-8 border border-[#B67C8A]/35 bg-[#FAF4EB] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-xs text-[#B67C8A] tracking-widest uppercase">
                    BAY I · FOUNDATION
                  </span>
                  <span className="text-xs font-mono text-[#3E2A1F]/60">
                    ~75 Volumes
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  Literature & Timeless Prose
                </h3>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Classical novels, twentieth-century translated European prose, short-form essays, and quiet contemplative poetry. Written to be read slowly, revisited, and savored sentence by sentence.
                </p>
                <ul className="space-y-2 text-xs font-body text-[#3E2A1F]/75">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#B67C8A]">✦</span>
                    <span>European classical and twentieth-century fiction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#B67C8A]">✦</span>
                    <span>Collected essays on art, nature, and quiet observation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#B67C8A]">✦</span>
                    <span>Translated literary works in cloth-bound editions</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#3E2A1F]/10 text-xs font-accent text-[#B67C8A] uppercase tracking-wider">
                Open to all visitors in the café
              </div>
            </div>

            {/* Shelf Bay 2: Non-Fiction */}
            <div className="card-parchment p-8 border border-[#C68642]/35 bg-[#FAF4EB] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase">
                    BAY II · FOUNDATION
                  </span>
                  <span className="text-xs font-mono text-[#3E2A1F]/60">
                    ~75 Volumes
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  Non-Fiction & Cultural Thought
                </h3>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Thoughtful monographs exploring architecture, craft traditions, natural history, philosophical inquiries, and biographies of quiet masters.
                </p>
                <ul className="space-y-2 text-xs font-body text-[#3E2A1F]/75">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✦</span>
                    <span>Architectural history and European café heritage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✦</span>
                    <span>Philosophy of time, solitude, and slow craft</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✦</span>
                    <span>Botanical histories and geography of coffee</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-[#3E2A1F]/10 text-xs font-accent text-[#C68642] uppercase tracking-wider">
                Open to all visitors in the café
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION D: BOOKMARK
          "Never lose the page you were on." — Reading Passport Feature
          ===================================================================== */}
      <section className="surface-navy py-20 md:py-28 bg-[#1F2D44] border-b border-[#C68642]/30">
        <div className="container-heritage">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3">
                THE READING PASSPORT
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5">
                Never lose the page you were on.
              </h2>
              <div className="space-y-4 font-body text-base md:text-lg leading-relaxed mb-6">
                <p>
                  BOOKMARK is CAFEBRARY's distinctive reading passport. It records the book you were reading, the shelf bay where it rests, and the exact page where your hour drew to a close.
                </p>
                <p>
                  Available as both a physical keepsake card at the counter and an optional digital record, BOOKMARK makes returning to your unfinished reading seamless and completely effortless.
                </p>
                <p className="text-sm italic">
                  Participation is entirely optional. Your reading records are strictly private and will never be used for marketing or algorithms.
                </p>
              </div>

              <div className="p-4 bg-[#F4E7D3]/10 border border-[#C68642]/30 rounded-[3px] text-xs font-body text-[#C68642]">
                <span className="font-accent uppercase tracking-widest block mb-1">
                  Brand Promise
                </span>
                <span>
                  "We keep your place." Your bookmark stays right where you left it.
                </span>
              </div>
            </div>

            {/* Right Column: Visual Bookmark Passport Component */}
            <div className="lg:col-span-6">
              <BookmarkPassport />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION E: BOOK DONATIONS
          Inspection required, complimentary bakery token of gratitude
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              COMMUNITY CURATION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Passing along a good volume.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              We welcome thoughtful contributions to the BOOKHOUSE collection from visitors who cherish fine books.
            </p>
          </div>

          <div className="card-parchment p-8 sm:p-10 border border-[#3E2A1F]/15 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Inspection & Acceptance
                </h4>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-3">
                  To protect the atmosphere of our shelves, every donated volume is personally inspected by our team. We seek clean, durable copies of literature, essays, art, and thoughtful non-fiction.
                </p>
                <p className="font-body text-xs text-[#3E2A1F]/65 italic">
                  CAFEBRARY may politely decline books that do not align with our collection focus or physical condition guidelines.
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  A Quiet Token of Gratitude
                </h4>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-3">
                  When a donated volume finds a home on our shelves, we invite the donor to enjoy one complimentary bakery item from our morning bake—such as a warm cinnamon roll or fresh brioche—with their next coffee.
                </p>
                <div className="p-3 bg-[#F4E7D3] border border-[#C68642]/30 rounded-[2px] text-xs font-accent text-[#C68642] uppercase tracking-wider">
                  One complimentary bakery item per accepted volume
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION F: READING AT CAFEBRARY
          Reading without rushing
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-4xl text-center">
          <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#B67C8A] mb-3 inline-block">
            THE UNHURRIED HOUR
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            Reading without performance or rush.
          </h2>
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed max-w-2xl mx-auto mb-10">
            You do not need to prove you are well-read, finish every chapter before sundown, or display what you are reading to the room. Here, books are simply a quiet friend.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-1 block">
                01 · PACE
              </span>
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Your own rhythm
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#3E2A1F]/80 leading-relaxed">
                A single page can take thirty minutes if it invites deep thought. No one will hurry you along.
              </p>
            </div>

            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#B67C8A] tracking-widest uppercase mb-1 block">
                02 · TACTILE
              </span>
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Paper and cloth
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#3E2A1F]/80 leading-relaxed">
                Experience the weight of paper, the aroma of aged print, and the quiet relief of turning actual pages.
              </p>
            </div>

            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#1F2D44] tracking-widest uppercase mb-1 block">
                03 · COMPANION
              </span>
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Coffee and books
              </h4>
              <p className="font-body text-xs sm:text-sm text-[#3E2A1F]/80 leading-relaxed">
                Coffee warms the hands; books calm the mind. At CAFEBRARY, they belong together naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION G: BOOKHOUSE CLOSING
          "Your unfinished chapter is welcome here."
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF4EB] text-center">
        <div className="container-heritage max-w-2xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            PULL OUT A CHAIR
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            Your unfinished chapter is welcome here.
          </h2>
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed mb-8">
            The shelves are open, the chairs are comfortable, and your place is waiting.
          </p>

          <HeritageDivider variant="diamond" className="max-w-xs mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/settle-in" variant="primary" className="px-7 py-3">
              How to Settle In
            </Button>
            <Button to="/menu" variant="outline" className="px-7 py-3">
              Café & Bakery Menu
            </Button>
            <Button to="/visit" variant="outline" className="px-7 py-3">
              Visiting Details
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
