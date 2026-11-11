import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'

export function SettleIn() {
  return (
    <div className="page page-settle-in flex flex-col">
      {/* =====================================================================
          A. HERO
          "Take your time here."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              VISITOR EXPERIENCE GUIDE
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] text-[#1F2D44] font-medium leading-[1.15] tracking-tight mb-5">
              Take your time here.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed">
              CAFEBRARY welcomes anyone seeking a warm cup, an unhurried read, private writing time, or simply a quieter place away from the rush of the world.
            </p>
          </div>

          {/* Atmospheric Visitor Image Placeholder (4:3) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="settle-in-atmosphere"
              aspectRatio="4/3"
              variant="cafe"
              src="/Images/Settle%20In.jpeg"
              alt="An open book and coffee resting on a warmly lit wooden table"
              priority
              title="The Unhurried Table"
              subtitle="Natural window light, walnut table surface, and an open volume"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          B. FIND YOUR KIND OF HOUR
          Real visitor possibilities, not corporate personas
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              WAYS TO SPEND AN HOUR
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Find your kind of hour.
            </h2>
            <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed">
              There is no prescribed way to experience CAFEBRARY. Our spaces adapt naturally to how you wish to spend your time.
            </p>
          </div>

          {/* 5 Thoughtfully Designed Visitor Possibilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="card-parchment p-7 flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  01 · MORNING PAUSE
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Coffee and a little pause
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  A fresh flat white, soft morning light through the tall windows, and twenty unhurried minutes before the demands of your schedule begin.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                Best in the main café counter area
              </span>
            </div>

            <div className="card-parchment p-7 flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  02 · UNFINISHED CHAPTER
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  A book and comfortable chair
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  Pull down a volume from the BOOKHOUSE shelves, settle into a leather armchair by the hearth, and lose track of an entire afternoon.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                BOOKHOUSE corner & hearth seating
              </span>
            </div>

            <div className="card-parchment p-7 flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  03 · NOTEBOOK & PEN
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Ink, paper, and solitary thought
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  Spread out an open notebook, order a cast iron pot of whole-leaf tea, and write private reflections or letters without feeling rushed.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                Window tables & quiet alcoves
              </span>
            </div>

            <div className="card-parchment p-7 flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  04 · QUIET CONVERSATION
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  A low-voice afternoon
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  Sit opposite an old friend over coffee and warm brioche, speaking quietly in an atmosphere that welcomes intimate, meaningful dialogue.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                Main café floor tables
              </span>
            </div>

            <div className="card-parchment p-7 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  05 · DIGITAL RETREAT
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  A deliberate moment away from the screen
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  Leave laptops closed, mute notifications, and let your eyes rest on printed paper, natural timber, and warm ceramic. Give yourself permission to disconnect completely.
                </p>
              </div>
              <span className="text-xs font-accent text-[#3E2A1F]/60 italic">
                Throughout all CAFEBRARY rooms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          C. BOOKHOUSE EXPERIENCE
          How reading inside CAFEBRARY works
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-10 md:text-center">
            {/* Left Column: Explanation */}
            <div className="flex flex-col items-start md:items-center">
              <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3">
                THE READING RITUAL
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
                How reading works at CAFEBRARY.
              </h2>
              <div className="space-y-4 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed mb-6">
                <p>
                  You are welcome to browse and read any book on our shelves during your visit. There is no fee to access BOOKHOUSE, and no library card is required.
                </p>
                <p>
                  Our books never leave the building. When your visit is complete, simply take one of our signature paper bookmarks, mark your page, and return the volume to its designated shelf. When you return tomorrow or next week, your book will be waiting in its place.
                </p>
              </div>

              <div className="space-y-3 w-full max-w-lg mb-6">
                <div className="flex items-start space-x-3 text-sm font-body text-[#3E2A1F]/85 md:justify-center">
                  <span className="font-accent text-[#C68642] font-semibold">1.</span>
                  <span>Browse freely among curated shelves in the main café.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-body text-[#3E2A1F]/85 md:justify-center">
                  <span className="font-accent text-[#C68642] font-semibold">2.</span>
                  <span>Take any book to your table, sofa, or armchair.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-body text-[#3E2A1F]/85 md:justify-center">
                  <span className="font-accent text-[#C68642] font-semibold">3.</span>
                  <span>Slip a bookmark between your pages before leaving.</span>
                </div>
                <div className="flex items-start space-x-3 text-sm font-body text-[#3E2A1F]/85 md:justify-center">
                  <span className="font-accent text-[#C68642] font-semibold">4.</span>
                  <span>Return the volume to the shelf for your next visit.</span>
                </div>
              </div>

              <Button to="/bookhouse" variant="navy">
                Discover BOOKHOUSE
              </Button>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="mx-auto w-full max-w-2xl md:text-center">
              <div className="card-parchment p-8 border border-[#3E2A1F]/15">
                <span className="font-accent text-xs uppercase tracking-widest text-[#C68642] block mb-2">
                  THE BOOKMARK PROMISE
                </span>
                <h3 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  "We keep your place."
                </h3>
                <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed mb-4">
                  We believe unfinished books are an invitation to return. We respect your reading pace and will never rush your chapters.
                </p>
                <div className="border-t border-[#3E2A1F]/10 pt-4 text-xs font-accent text-[#C68642] uppercase tracking-wider">
                  Open to all guests · No membership required for BOOKHOUSE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          D. WORKSPACE DISTINCTION
          Clear distinction between café and WORKSPACE
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#1F2D44] mb-3 inline-block">
              TWO DISTINCT EXPERIENCES
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Understanding the difference: Main Café vs WORKSPACE.
            </h2>
            <p className="font-body text-base md:text-lg text-[#3E2A1F]/80 leading-relaxed">
              CAFEBRARY houses two distinct environments designed for different states of mind. Please choose the space that best suits your hour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
            {/* The Main Café */}
            <div className="card-parchment p-8 border border-[#3E2A1F]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase">
                    OPEN EXPERIENCE
                  </span>
                  <span className="text-xs font-body text-[#3E2A1F]/60">
                    No reservations
                  </span>
                </div>
                <h3 className="font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  The Main Café
                </h3>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-4">
                  A warm, welcoming, gently atmospheric European café. Enjoy fresh coffee, daily baking, open conversation, and unrestricted browsing of BOOKHOUSE shelves.
                </p>
                <ul className="space-y-2 text-xs font-body text-[#3E2A1F]/75 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Open to all visitors upon arrival</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Gentle café ambience and background warmth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Free access to BOOKHOUSE reading library</span>
                  </li>
                </ul>
              </div>
              <Button to="/our-story" variant="outline" className="w-full text-center">
                Explore Café Atmosphere
              </Button>
            </div>

            {/* WORKSPACE Focus Room */}
            <div className="card-navy p-8 border border-[#F4E7D3]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase">
                    DEDICATED SILENCE
                  </span>
                  <span className="text-xs font-body">
                    Membership required
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-medium mb-3">
                  The WORKSPACE Room
                </h3>
                <p className="font-body text-sm md:text-base leading-relaxed mb-4">
                  A heritage study hall behind acoustic oak doors. Dedicated to absolute quiet, deep reading, writing, and uninterrupted study with individual oak desks and brass task lamps.
                </p>
                <ul className="space-y-2 text-xs font-body mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Strict silence policy for focused study</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Individual oak desks with brass lamps</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Operates through dedicated membership & bookings</span>
                  </li>
                </ul>
              </div>
              <Button to="/workspace" variant="primary" className="w-full text-center">
                Explore WORKSPACE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          E. BEFORE YOU COME
          Grounded, authentic facts — NO fabricated hours/addresses/parking
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              VISITOR GUIDANCE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Before you come.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              Helpful considerations to ensure a peaceful visit for yourself and fellow guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Café First
              </h4>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                Ordinary café seating requires no reservation. Feel free to come in, order at the counter, and choose any available table or armchair.
              </p>
            </div>

            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Books Stay Inside
              </h4>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                All BOOKHOUSE volumes are enjoyed within the café so that every returning reader can find their book right where they left it.
              </p>
            </div>

            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                Considerate Volumes
              </h4>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                We ask visitors to keep mobile phones on silent and step outside for phone calls to protect the peaceful atmosphere of the rooms.
              </p>
            </div>

            <div className="p-6 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
                WORKSPACE Reserved Seating
              </h4>
              <p className="font-body text-sm text-[#3E2A1F]/80 leading-relaxed">
                While ordinary café tables are open to all, the separate WORKSPACE study room requires reserved membership.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#EFE2CF] rounded-[3px] border border-[#3E2A1F]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h5 className="font-heading text-base text-[#1F2D44] font-medium mb-1">
                Visiting Schedule & Location
              </h5>
              <p className="font-body text-xs text-[#3E2A1F]/70">
                Opening schedules and verified location guidance will be published ahead of our upcoming season.
              </p>
            </div>
            <Button to="/visit" variant="outline" className="text-xs px-4 py-2 shrink-0">
              Visiting Details
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          F. FINAL INVITATION
          CTA: Explore Menu / Visit
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF4EB] text-center">
        <div className="container-heritage max-w-2xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
            YOUR QUIET HOUR
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            Your next quiet hour can begin here.
          </h2>
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed mb-8">
            Step inside, order a warm pour, and let the quiet take over. We look forward to keeping your place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/menu" variant="primary" className="px-7 py-3">
              Explore the Menu
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
