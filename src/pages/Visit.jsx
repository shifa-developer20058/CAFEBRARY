import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'
import { HeritageDivider } from '../components/common/HeritageDivider'
import { LocationBlock } from '../components/visit/LocationBlock'
import { OpeningHoursBlock } from '../components/visit/OpeningHoursBlock'
import { ContactBlock } from '../components/visit/ContactBlock'

export function Visit() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="page page-visit flex flex-col">
      {/* =====================================================================
          SECTION 04: VISIT HERO
          "There's a place for your quieter hour."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#3E2A1F]/10 bg-gradient-to-b from-[#F4E7D3] via-[#FAF4EB] to-[#F4E7D3]">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              TRICHY · THILLAI NAGAR
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-[#1F2D44] font-medium leading-[1.12] tracking-tight mb-5">
              There's a place for your quieter hour.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed mb-8">
              Come for a welcoming cup, stay for a chapter, or simply give yourself an hour away from everything else.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection('location')}
                className="btn btn-primary px-7 py-3 w-full sm:w-auto"
              >
                Find Your Way
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('before-you-come')}
                className="btn btn-outline px-7 py-3 w-full sm:w-auto"
              >
                Before You Come
              </button>
            </div>
          </div>

          {/* Planned Visit Page Image Container (16:9 Exterior) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="visit-page"
              aspectRatio="16/9"
              variant="cafe"
              src="/Images/Visit.png"
              alt="The CAFEBRARY heritage café exterior beneath a tree at sunset"
              priority
              title="The Courtyard Archway & Café Exterior"
              subtitle="European heritage character · Warm window illumination · No. 18 The Old Courtyard"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: BEFORE YOU COME — VISITOR GUIDE
          "A few small things that make settling in easier."
          ===================================================================== */}
      <section
        id="before-you-come"
        className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB] scroll-mt-24"
      >
        <div className="container-heritage max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              VISITOR GUIDANCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Before you come.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              A few small things that make settling in easier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* The Main Café */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#3E2A1F]/15">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  01 · MAIN CAFÉ
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  The Main Café
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed mb-4">
                  The main café is open to everyone. Find a table, order something warm, bring a book, or simply take your time.
                </p>
              </div>
              <Button to="/settle-in" variant="ghost" className="text-xs text-left justify-start p-0">
                How to Settle In →
              </Button>
            </div>

            {/* BOOKHOUSE */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#B67C8A]/35">
              <div>
                <span className="font-accent text-xs text-[#B67C8A] tracking-widest uppercase mb-2 block">
                  02 · LIBRARY
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  BOOKHOUSE
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Our books are here to be read within the café. You may continue a chapter over several visits, but the books remain with us.
                </p>
              </div>
              <Button to="/bookhouse" variant="ghost" className="text-xs text-left justify-start p-0">
                Explore BOOKHOUSE →
              </Button>
            </div>

            {/* BOOKMARK */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#C68642]/35">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  03 · PASSPORT
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  BOOKMARK
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Your reading passport helps you remember where you left off. Use it whenever you'd like to keep your place.
                </p>
              </div>
              <Button to="/bookhouse" variant="ghost" className="text-xs text-left justify-start p-0">
                Discover BOOKMARK →
              </Button>
            </div>

            {/* WORKSPACE */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#1F2D44]/25">
              <div>
                <span className="font-accent text-xs text-[#1F2D44] tracking-widest uppercase mb-2 block">
                  04 · FOCUS ROOM
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  WORKSPACE
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Looking for uninterrupted concentration? WORKSPACE is our separate quiet room. Membership is required, and desks can be reserved.
                </p>
              </div>
              <Button to="/workspace" variant="ghost" className="text-xs text-left justify-start p-0">
                Discover WORKSPACE →
              </Button>
            </div>

            {/* Personal Books */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#3E2A1F]/15">
              <div>
                <span className="font-accent text-xs text-[#3E2A1F]/65 tracking-widest uppercase mb-2 block">
                  05 · WELCOME
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  Personal Books
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed">
                  You're welcome to bring your own books, journals, and notebooks into the Main Café. We love when our tables hold well-worn pages.
                </p>
              </div>
              <span className="text-xs font-accent text-[#C68642] tracking-wide italic">
                Always welcome
              </span>
            </div>

            {/* Quiet Without Pressure */}
            <div className="card-parchment p-6 sm:p-7 flex flex-col justify-between border border-[#3E2A1F]/15">
              <div>
                <span className="font-accent text-xs text-[#3E2A1F]/65 tracking-widest uppercase mb-2 block">
                  06 · PHILOSOPHY
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-2">
                  Quiet Without Pressure
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/85 leading-relaxed">
                  You don't need to finish a book, be productive, or have anything interesting to say. A quiet hour is reason enough.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                The Quiet Friend
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: LOCATION — FIND CAFEBRARY
          "Find your way to us." — Thillai Nagar, Trichy
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              LOCATION & DIRECTIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Find your way to us.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              Somewhere along a familiar street in Thillai Nagar, a quieter hour is waiting.
            </p>
          </div>

          {/* Location Block Component (Copy Address & Directions Functional) */}
          <LocationBlock />
        </div>
      </section>

      {/* =====================================================================
          SECTION 07: OPENING HOURS — FINAL SCHEDULE
          Schedule with dynamic current day highlight & live status calculation
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              DOORS & HOURS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Opening hours throughout the week.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              Open seven days a week for quiet mornings, unhurried afternoons, and reflective evenings.
            </p>
          </div>

          {/* Opening Hours Block Component */}
          <OpeningHoursBlock />
        </div>
      </section>

      {/* =====================================================================
          SECTION 08: CONTACT — GET IN TOUCH
          Direct phone, illustrative email, and Instagram
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-5xl">
          <ContactBlock />
        </div>
      </section>

      {/* =====================================================================
          SECTION 09: EXPERIENCE PREVIEW — THREE WAYS TO SETTLE IN
          Main Café, BOOKHOUSE, WORKSPACE
          ===================================================================== */}
      <section className="py-20 md:py-28 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              EXPERIENCE PREVIEW
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1F2D44] font-medium leading-tight mb-4">
              Find your kind of quiet.
            </h2>
            <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed">
              Three distinct ways to experience CAFEBRARY under one welcoming roof.
            </p>
          </div>

          <div className="visit-experience-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* The Main Café */}
            <div className="card-parchment p-6 sm:p-7 border border-[#3E2A1F]/15 bg-[#FAF4EB] flex flex-col items-center justify-between">
              <div className="w-full">
                <ImagePlaceholder
                  slot="home-hero"
                  aspectRatio="4/3"
                  variant="cafe"
                  src="/Images/Home%20Page-Full%20view.jpeg"
                  alt="The warmly lit main café with bookshelves and oak tables"
                  title="The Main Café"
                  subtitle="Warm golden café lighting and welcoming tables"
                  className="w-full mb-6"
                />
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-1 block">
                  OPEN ATMOSPHERE
                </span>
                <h3 className="experience-card-title font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  The Main Café
                </h3>
                <p className="font-body text-sm sm:text-base text-[#3E2A1F]/85 leading-relaxed mb-6">
                  Coffee, conversations kept gentle, books, and a table that doesn't ask you to hurry.
                </p>
              </div>
              <Button to="/settle-in" variant="primary" className="text-center">
                Settle In
              </Button>
            </div>

            {/* BOOKHOUSE */}
            <div className="card-parchment p-6 sm:p-7 border border-[#B67C8A]/35 bg-[#FAF4EB] flex flex-col items-center justify-between">
              <div className="w-full">
                <ImagePlaceholder
                  slot="bookhouse-page"
                  aspectRatio="4/3"
                  variant="study"
                  src="/Images/Bookhouse.jpeg"
                  alt="Book-lined shelves and reading tables in BOOKHOUSE"
                  title="BOOKHOUSE"
                  subtitle="Book-lined interior, oak shelves, and warm reading light"
                  className="w-full mb-6"
                />
                <span className="font-accent text-xs text-[#B67C8A] tracking-widest uppercase mb-1 block">
                  SHARED IN-HOUSE LIBRARY
                </span>
                <h3 className="experience-card-title font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  BOOKHOUSE
                </h3>
                <p className="font-body text-sm sm:text-base text-[#3E2A1F]/85 leading-relaxed mb-6">
                  A shared reading library where unfinished chapters are welcome.
                </p>
              </div>
              <Button to="/bookhouse" variant="navy" className="visit-experience-cta text-center">
                Explore BOOKHOUSE
              </Button>
            </div>

            {/* WORKSPACE */}
            <div className="card-parchment p-6 sm:p-7 border border-[#1F2D44]/25 bg-[#FAF4EB] flex flex-col items-center justify-between">
              <div className="w-full">
                <ImagePlaceholder
                  slot="workspace-page"
                  aspectRatio="4/3"
                  variant="study"
                  src="/Images/Workspace.png"
                  alt="Quiet desks and arched windows in WORKSPACE"
                  title="WORKSPACE"
                  subtitle="Neutral study hall, oak desks, and antique brass lamps"
                  className="w-full mb-6"
                />
                <span className="font-accent text-xs text-[#1F2D44] tracking-widest uppercase mb-1 block">
                  SEPARATE FOCUS ROOM
                </span>
                <h3 className="experience-card-title font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  WORKSPACE
                </h3>
                <p className="font-body text-sm sm:text-base text-[#3E2A1F]/85 leading-relaxed mb-6">
                  A separate quiet room for the things that need your full attention.
                </p>
              </div>
              <Button to="/workspace" variant="outline" className="visit-experience-cta text-center">
                Discover WORKSPACE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 10: FINAL VISIT INVITATION
          "We'll keep your place."
          ===================================================================== */}
      <section className="surface-navy py-20 md:py-28 bg-[#1F2D44] border-b border-[#C68642]/30 text-center">
        <div className="container-heritage max-w-3xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            OUR DOORS ARE OPEN
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5">
            We'll keep your place.
          </h2>
          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8">
            Whether you arrive with a book, a notebook, or nothing at all, there's room for you here.
          </p>

          <HeritageDivider variant="diamond" className="max-w-xs mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/menu" variant="primary" className="px-7 py-3">
              Explore the Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
