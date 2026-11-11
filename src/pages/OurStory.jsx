import { Link } from '../router/Router'
import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'

export function OurStory() {
  return (
    <div className="page page-story flex flex-col">
      {/* =====================================================================
          A. STORY HERO
          "Some places make room for you."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              OUR ORIGIN & PHILOSOPHY
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] text-[#1F2D44] font-medium leading-[1.15] tracking-tight mb-5">
              Some places make room for you.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed">
              CAFEBRARY began with a simple observation: how difficult it has become to find a welcoming hour in the day that asks nothing of you in return.
            </p>
          </div>

          {/* Planned Our Story Image Placeholder (3:2) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="our-story"
              aspectRatio="3/2"
              variant="still-life"
              src="/Images/Home%20Page-Full%20view.jpeg"
              alt="Warm, book-lined café interior with oak tables and arched windows"
              priority
              title="Between the Pages & the Pour"
              subtitle="Curated volumes, fresh espresso, fountain pen, and textured linen"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          B. WHY CAFEBRARY EXISTS
          The vanishing unhurried hour
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-3xl md:text-center">
          <div className="space-y-6">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] block">
              THE OBSERVATION
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight">
              Most cafés are built around transactions. We wanted to build around time.
            </h2>
            <div className="space-y-5 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed pt-2">
              <p>
                In most modern cafés, the unspoken expectation is clear: order quickly, find whatever seat is free, drink with haste, and eventually make room for the next customer. If you pull out a book or write in a notebook, you can often feel the quiet pressure of occupying space that someone else wants to turn over.
              </p>
              <p>
                CAFEBRARY was imagined around another possibility: a café designed from the ground up for people who want to spend an hour without having to justify how they spend it.
              </p>
              <p className="p-4 bg-[#F4E7D3] border-l-2 border-[#C68642] rounded-[2px] italic text-[#1F2D44] font-medium text-sm md:text-base">
                "An unhurried hour should not be a luxury you have to apologize for."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          C. THE CAFÉ COMES FIRST
          Explicitly 60% café / 40% library
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 md:text-center">
            {/* Left Column: Narrative */}
            <div className="flex flex-col items-start md:items-center">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3">
                FOUNDATIONAL IDENTITY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                The café comes first, always.
              </h2>
              <div className="space-y-4 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-6">
                <p>
                  We are not a bookstore, nor are we a public library that happens to set up an espresso machine in the vestibule. CAFEBRARY is sixty percent café and forty percent library—and that balance is deliberate.
                </p>
                <p>
                  The warmth of hospitality, the aroma of slow-roasted beans, the gentle clink of ceramic on aged oak, and the friendly greeting at the counter anchor everything we do. Without great coffee, warm baking, and genuine hospitality, books alone do not create a home.
                </p>
                <p>
                  Books enrich the café; they do not replace it. They give the coffee experience a quiet depth, encouraging you to linger where you might otherwise rush.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-xs font-accent text-[#C68642] tracking-wider uppercase md:justify-center">
                <span>60% Café Atmosphere</span>
                <span>·</span>
                <span>40% Shared Library</span>
              </div>
            </div>

            {/* Right Column: Highlight Card */}
            <div className="mx-auto w-full max-w-2xl md:text-center">
              <div className="card-parchment p-8 md:p-10 border border-[#3E2A1F]/15">
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase block mb-3">
                  OUR BALANCE
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Why Coffee Anchors the Quiet
                </h3>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/80 leading-relaxed mb-4">
                  A cup of coffee provides natural punctuation. It creates a beginning, a measured middle, and a gentle conclusion to a quiet hour. It grounds the space in physical comfort and sensory pleasure.
                </p>
                <div className="border-t border-[#3E2A1F]/10 pt-4 text-xs font-body text-[#3E2A1F]/70 italic">
                  Handcrafted espresso and whole-leaf infusions prepared with care.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          D. BOOKS THAT KEEP YOUR PLACE
          BOOKHOUSE philosophy and "We keep your place."
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              THE BOOKHOUSE PHILOSOPHY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Books that stay in the house, awaiting your return.
            </h2>
            <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed">
              Reading in public has too often become a performance—a carefully curated spine displayed on a table. At CAFEBRARY, reading is private, personal, and unhurried.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            <div className="card-parchment p-6">
              <h3 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Unfinished by Design
              </h3>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                You never need to finish a book in one sitting. Reading at CAFEBRARY is an ongoing relationship that spans days, weeks, or seasons.
              </p>
            </div>

            <div className="card-parchment p-6">
              <h3 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Books Stay Inside
              </h3>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                Our volumes remain within the café walls. Because no books are borrowed home, the volume you love will always be here when you return.
              </p>
            </div>

            <div className="card-parchment p-6">
              <h3 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Your Bookmark Stays
              </h3>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                Slip a bookmark between the pages when your hour is done. Place the book back on its designated shelf, secure in knowing it waits for you.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button to="/bookhouse" variant="outline" className="text-xs">
              Learn more about the BOOKHOUSE collection →
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          E. A QUIETER KIND OF SPACE
          WORKSPACE focus and freedom from digital pressure
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-3xl md:text-center">
          <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#1F2D44] mb-3 block">
            QUIET SANCTUARY
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            A sanctuary that asks nothing of your productivity.
          </h2>
          <div className="space-y-5 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-6">
            <p>
              Contemporary public life is filled with places that expect you to produce: coworking offices where productivity is metricized, networking cafés where social performance is required, and loud dining halls where quiet thought is impossible.
            </p>
            <p>
              CAFEBRARY provides two distinct atmospheres under one roof: the open, gently conversational café for relaxed reading and warm coffee, and the separate, silent WORKSPACE focus room for deep study and contemplation.
            </p>
            <p>
              Neither space demands that you accomplish anything. Whether you write three chapters of a manuscript or gaze out of an arched window for an hour, your time is entirely your own.
            </p>
          </div>
          <div>
            <Link to="/workspace" className="link-editorial font-accent text-sm tracking-wide">
              Discover the WORKSPACE focus room →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          F. THE BRAND PROMISE
          "We keep your place."
          ===================================================================== */}
      <section className="surface-navy py-20 md:py-28 bg-[#1F2D44] border-b border-[#C68642]/30">
        <div className="container-heritage max-w-3xl text-center">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            OUR CORE PROMISE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6">
            "We keep your place."
          </h2>
          <div className="space-y-4 font-body text-base md:text-lg leading-relaxed mb-8">
            <p>
              To us, this is more than a reference to a bookmark resting between the pages of an unfinished volume.
            </p>
            <p>
              It is our commitment that when the noise of the city becomes overwhelming, there is a corner table, a comfortable armchair, and a familiar cup waiting for you. It means a place in the world where you are remembered without fanfare—where you can step back inside and pick up your life exactly where you left off.
            </p>
          </div>
          <div className="inline-block p-4 bg-[#FAF4EB]/10 rounded-[3px] border border-[#C68642]/30 font-accent text-sm text-[#C68642] tracking-wide">
            The Quiet Friend · Always Familiar · Never Demanding
          </div>
        </div>
      </section>

      {/* =====================================================================
          G. CLOSING INVITATION
          CTAs: Settle In & Visit
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF4EB] text-center">
        <div className="container-heritage max-w-2xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            EXPERIENCE CAFEBRARY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            Come spend an hour with us.
          </h2>
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed mb-8">
            Read a chapter, enjoy a warm pour, or simply sit quietly with your thoughts. Learn how to settle into our spaces or plan your visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/settle-in" variant="primary" className="px-7 py-3">
              How to Settle In
            </Button>
            <Button to="/visit" variant="outline" className="px-7 py-3">
              Plan Your Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
