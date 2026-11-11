import { Link } from '../router/Router'
import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'

export function Home() {
  return (
    <div className="page page-home flex flex-col">
      {/* =====================================================================
          SECTION 01: HERO
          Editorial hero establishing CAFEBRARY as a welcoming European heritage café
          ===================================================================== */}
      <section className="pt-10 pb-16 md:pt-14 md:pb-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              Welcome to CAFEBRARY
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-[#1F2D44] font-medium leading-[1.12] tracking-tight mb-5">
              Between the pages and the pour, you're home!
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed max-w-2xl mx-auto mb-8">
              A welcoming café where coffee, books, and quiet time belong together—designed to make an unhurried hour easy to have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/settle-in" variant="primary" className="w-full sm:w-auto px-7 py-3">
                Settle In
              </Button>
              <Button to="/our-story" variant="outline" className="w-full sm:w-auto px-7 py-3">
                Explore Our Café
              </Button>
            </div>
          </div>

          {/* Planned Home Hero Image Container (16:9 Composition) */}
          <div className="max-w-5xl mx-auto">
            <ImagePlaceholder
              slot="home-hero"
              aspectRatio="16/9"
              variant="cafe"
              src="/Images/Home%20page%20Cafebrary.png"
              alt="The CAFEBRARY heritage café entrance glowing in warm evening light"
              priority
              title="The Main Café Hall & Hearth"
              subtitle="European heritage café architecture · Warm golden illumination · Aged oak tables"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02: CAFÉ INTRODUCTION
          Coffee as the welcoming beginning of an unhurried hour
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Editorial Text */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3">
                A Place to Pause
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                Coffee served without rush, in rooms built for quiet time.
              </h2>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-4">
                At CAFEBRARY, coffee is neither an afterthought nor a rush to fuel productivity. It is the welcoming beginning of an unhurried hour.
              </p>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed mb-6">
                Brewed with care and served in an atmosphere of aged oak, soft shadows, and warm conversation, every cup invites you to put down your phone and inhabit the moment.
              </p>
              <div className="p-4 bg-[#F4E7D3] rounded-[3px] border border-[#3E2A1F]/10 text-sm font-body text-[#3E2A1F]/85 italic mb-6">
                "We believe the best coffee is the one you enjoy without checking the time."
              </div>
              <Link to="/our-story" className="link-editorial font-accent text-sm tracking-wide">
                Read about our café philosophy →
              </Link>
            </div>

            {/* Right Column: Close-up Coffee Image Placeholder (4:3) */}
            <div className="lg:col-span-6">
              <ImagePlaceholder
                slot="home-coffee"
                aspectRatio="4/3"
                variant="cafe"
                src="/Images/Home%20Page-Coffeee.jpeg"
                alt="A latte in a ceramic cup on a wooden café table"
                title="The Tactile Pour"
                subtitle="Slow-crafted espresso, warm natural light, and porcelain on aged wood"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03: BOOKHOUSE PREVIEW
          The shared reading library within the café
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Reading Corner Image (4:5) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ImagePlaceholder
                slot="home-bookhouse"
                aspectRatio="4/5"
                variant="study"
                src="/Images/Bookhouse.jpeg"
                alt="Tall book-lined shelves and reading tables in the BOOKHOUSE library"
                title="The BOOKHOUSE Corner"
                subtitle="Curated library shelves, vintage armchairs, and gentle natural light"
                className="w-full"
              />
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3">
                SHARED READING LIBRARY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                Books that stay with us, waiting for your return.
              </h2>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-4">
                BOOKHOUSE is CAFEBRARY's shared reading collection tucked within the café. Unlike a bookstore, nothing here is for sale; unlike a lending library, our volumes never leave our shelves.
              </p>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed mb-6">
                You are welcome to pull down a volume, read a single chapter or five, slip in a bookmark, and return tomorrow to pick up exactly where you left off. We keep your place.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button to="/bookhouse" variant="navy">
                  Explore BOOKHOUSE
                </Button>
                <span className="text-xs font-accent text-[#C68642] tracking-wider uppercase">
                  Open to all café visitors
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 04: WORKSPACE PREVIEW
          The separate quiet focus room with membership
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#1F2D44] mb-3">
                QUIET STUDY HALL
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                A separate room set apart for peaceful focus.
              </h2>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-4">
                Beyond the gentle conversation of the café counter lies WORKSPACE: a dedicated study room inspired by classic European heritage reading halls.
              </p>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed mb-6">
                Tall arched windows, symmetrical oak desks, and individual brass task lamps create a serene environment for writing, deep reading, and study. To preserve stillness, WORKSPACE requires dedicated membership and reserved seating.
              </p>
              <div className="flex items-center gap-4">
                <Button to="/workspace" variant="outline">
                  Discover WORKSPACE
                </Button>
                <Link to="/settle-in" className="link-editorial font-accent text-sm">
                  How WORKSPACE differs →
                </Link>
              </div>
            </div>

            {/* Right Column: Architectural Study Hall Placeholder (16:10) */}
            <div className="lg:col-span-6">
              <ImagePlaceholder
                slot="workspace-focus"
                aspectRatio="16/10"
                variant="study"
                src="/Images/Workspace.png"
                alt="Quiet oak desks and tall arched windows in WORKSPACE"
                title="The WORKSPACE Reading Room"
                subtitle="European heritage study hall · Arched windows · Oak desks & brass lamps"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 05: BRAND PHILOSOPHY
          "Make a quiet hour easy to have."
          ===================================================================== */}
      <section className="surface-navy py-20 md:py-28 bg-[#1F2D44] border-b border-[#C68642]/30">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              OUR MISSION & PHILOSOPHY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-5">
              Make a quiet hour easy to have.
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed">
              Everyday life demands performance, productivity, and constant digital availability. CAFEBRARY was created as an antidote—a physical sanctuary where you can pause without having to justify your presence.
            </p>
          </div>

          {/* 4 Thoughtful Brand Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="card-navy p-6 md:p-7 border border-[#F4E7D3]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                01 · QUIET
              </span>
              <h3 className="font-heading text-xl mb-3 font-medium">
                Quiet without pressure
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Sit as long as your tea is warm. No staff will rush your table or nudge you toward another purchase.
              </p>
            </div>

            <div className="card-navy p-6 md:p-7 border border-[#F4E7D3]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                02 · BOOKS
              </span>
              <h3 className="font-heading text-xl mb-3 font-medium">
                Reading without rushing
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Books here are not for rapid consumption. Take your time with a single paragraph or an entire volume.
              </p>
            </div>

            <div className="card-navy p-6 md:p-7 border border-[#F4E7D3]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                03 · COFFEE
              </span>
              <h3 className="font-heading text-xl mb-3 font-medium">
                Coffee without performance
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Honest, carefully roasted coffee crafted to be tasted and savored, not staged for social feeds.
              </p>
            </div>

            <div className="card-navy p-6 md:p-7 border border-[#F4E7D3]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                04 · PROMISE
              </span>
              <h3 className="font-heading text-xl mb-3 font-medium">
                We keep your place
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Leave your bookmark on the shelf. When you return tomorrow, your place is preserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 06: COFFEE / MENU PREVIEW
          Café bakery & dessert atmosphere
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Menu Image Placeholder (4:3) */}
            <div className="lg:col-span-6">
              <ImagePlaceholder
                slot="menu-table"
                aspectRatio="4/3"
                variant="cafe"
                src="/Images/Menu.png"
                alt="Coffee and fresh pastries served on a café table"
                title="The Pour & The Hearth"
                subtitle="Slow-roasted coffee, whole-leaf tea pots, and morning bakery selections"
                className="w-full"
              />
            </div>

            {/* Right Column: Menu Categories */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3">
                CAFÉ & BAKERY
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                Simple pours, warm hearths, and honest ingredients.
              </h2>
              <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed mb-6">
                Our coffee and bakery offerings celebrate classic craftsmanship. From small-batch pour-overs to warm cardamom buns, everything is made to complement a quiet hour of reading.
              </p>

              {/* Editorial Category Highlights */}
              <div className="w-full space-y-4 mb-8">
                <div className="card-parchment p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-0.5">
                      Single Origin & Slow Pours
                    </h4>
                    <p className="font-body text-xs text-[#3E2A1F]/70">
                      Hand-brewed filter coffees, velvety flat whites, and double espressos.
                    </p>
                  </div>
                  <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase">
                    Roasted In-House
                  </span>
                </div>

                <div className="card-parchment p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-0.5">
                      Whole-Leaf Teas & Infusions
                    </h4>
                    <p className="font-body text-xs text-[#3E2A1F]/70">
                      Served in cast iron pots, including English breakfast, chamomile, and herbal blends.
                    </p>
                  </div>
                  <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase">
                    Steeped Slow
                  </span>
                </div>

                <div className="card-parchment p-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-0.5">
                      Artisan Bakery & Hearth Tarts
                    </h4>
                    <p className="font-body text-xs text-[#3E2A1F]/70">
                      Fresh almond croissants, warm brioche, and rustic cinnamon rolls.
                    </p>
                  </div>
                  <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase">
                    Baked Daily
                  </span>
                </div>
              </div>

              <Button to="/menu" variant="primary">
                See the Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07: VISIT INVITATION
          Welcoming closing invitation
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF4EB] text-center">
        <div className="container-heritage max-w-3xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            AN OPEN INVITATION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1F2D44] font-medium leading-tight mb-5">
            There's a place for your next quiet hour.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3E2A1F]/85 leading-relaxed max-w-xl mx-auto mb-8">
            Whether you come with an open notebook, an unfinished novel, or simply the desire for a warm cup in a quiet corner, our doors are open.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/settle-in" variant="primary" className="px-7 py-3">
              How to Settle In
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
