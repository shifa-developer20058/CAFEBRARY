import { Button } from '../components/common/Button'
import { ImagePlaceholder } from '../components/common/ImagePlaceholder'
import { HeritageDivider } from '../components/common/HeritageDivider'
import { SeatAvailability } from '../components/workspace/SeatAvailability'

export function Workspace() {
  return (
    <div className="page page-workspace flex flex-col">
      {/* =====================================================================
          SECTION A: WORKSPACE HERO
          "A quieter place to concentrate."
          ===================================================================== */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#3E2A1F]/10 bg-gradient-to-b from-[#F4E7D3] via-[#FAF4EB] to-[#F4E7D3]">
        <div className="container-heritage">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] text-[#1F2D44] mb-3 inline-block">
              THE QUIET STUDY HALL
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-[#1F2D44] font-medium leading-[1.12] tracking-tight mb-5">
              A quieter place to concentrate.
            </h1>
            <p className="font-body text-base sm:text-lg md:text-xl text-[#3E2A1F]/85 leading-relaxed mb-8">
              WORKSPACE is CAFEBRARY's dedicated focus room set behind acoustic oak doors. Designed around European heritage reading halls, it provides a quiet, structured environment for writing, deep study, and contemplation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/settle-in" variant="primary" className="px-7 py-3">
                How WORKSPACE Differs
              </Button>
              <a href="#seat-availability" className="btn btn-outline px-7 py-3">
                View Seat Availability
              </a>
            </div>
          </div>

          {/* Planned Workspace Image Container (16:10 Composition) */}
          <div className="max-w-4xl mx-auto">
            <ImagePlaceholder
              slot="workspace-page"
              aspectRatio="16/10"
              variant="study"
              src="/Images/Workspace.png"
              alt="Oak study desks beneath tall arched windows in WORKSPACE"
              priority
              title="The Focus Room & Study Hall"
              subtitle="Symmetrical oak desks, individual brass lamps, and tall arched windows"
              className="w-full shadow-[0_8px_30px_-6px_rgba(31,45,68,0.12)]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: WHAT WORKSPACE IS
          Quiet focus, not corporate coworking
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-3xl md:text-center">
          <div className="space-y-6">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] block">
              SEPARATE SANCTUARY
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight">
              A dedicated room built for deep thought.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed pt-2">
              <p>
                While the main café welcomes conversation, espresso steam, and browsing, WORKSPACE is intentionally separated to protect unbroken concentration. It is not an ordinary commercial coworking hub—there are no neon slogans, networking mixers, or hot-desking scrambles.
              </p>
              <p>
                Here, the atmosphere is modeled on historic European university study halls. Symmetrical oak desks, individual task illumination, and acoustic buffering create a quiet harbor where students, writers, researchers, and readers can work without distraction.
              </p>
              <div className="p-4 bg-[#F4E7D3] border-l-2 border-[#1F2D44] rounded-[2px] italic text-[#1F2D44] font-medium text-sm md:text-base">
                "Membership and reservations are required to guarantee every desk holder a quiet, undisturbed seat."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION C: THE ROOM
          Architectural details: Oak, Arched Windows, Brass
          ===================================================================== */}
      <section className="surface-navy py-20 md:py-28 bg-[#1F2D44] border-b border-[#C68642]/30">
        <div className="container-heritage">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#C68642] mb-3 inline-block">
              ARCHITECTURAL ATMOSPHERE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4">
              Materials that encourage stillness.
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed">
              Every detail in the WORKSPACE room has been chosen to reduce visual noise and cultivate natural focus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-navy p-7 border border-[#F4E7D3]/15">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                01 · JOINERY
              </span>
              <h3 className="font-heading text-xl font-medium mb-3">
                Solid Oak Desks
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Generous, hand-finished European oak work surfaces with privacy dividers, smooth matte lacquer, and warm tactile depth.
              </p>
            </div>

            <div className="card-navy p-7 border border-[#F4E7D3]/15">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                02 · LIGHTING
              </span>
              <h3 className="font-heading text-xl font-medium mb-3">
                Antique Brass Task Lamps
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Individual warm directional task illumination paired with filtered daylight pouring through tall arched heritage windows.
              </p>
            </div>

            <div className="card-navy p-7 border border-[#F4E7D3]/15">
              <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                03 · ACOUSTICS
              </span>
              <h3 className="font-heading text-xl font-medium mb-3">
                Acoustic Buffering
              </h3>
              <p className="font-body text-sm leading-relaxed">
                Heavy timber doors, sound-absorbing wool felts, and quiet-policy guidelines keep the room serene and hushed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION D: MEMBERSHIP
          Clear explanation of the membership requirement
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
              FOCUS ACCESS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Membership for the focus room.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              WORKSPACE requires a dedicated membership to maintain strict capacity limits and preserve the quiet environment.
            </p>
          </div>

          <div className="card-parchment p-8 sm:p-10 border border-[#3E2A1F]/15 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Why Membership is Required
                </h4>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Unlike our main café where anyone can drop in freely, WORKSPACE is intentionally capped. Membership ensures that every registered member has access to an unhurried, quiet desk without competing for crowded seating.
                </p>
                <p className="font-body text-xs text-[#3E2A1F]/65 italic">
                  Ordinary café tables do not require membership.
                </p>
              </div>

              <div>
                <h4 className="font-heading text-xl text-[#1F2D44] font-medium mb-3">
                  Arrangements in Preparation
                </h4>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-4">
                  Full details regarding session allocations, member card issuance, and seasonal enrolment blocks will be published ahead of our upcoming opening schedule.
                </p>
                <div className="p-3 bg-[#FAF4EB] border border-[#C68642]/30 rounded-[2px] text-xs font-accent text-[#C68642] uppercase tracking-wider">
                  Inquire at the counter for upcoming session registration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION E: SEAT AVAILABILITY
          Reusable SeatAvailability Component (Supports AVAILABLE, ALMOST_FULL, FULL)
          ===================================================================== */}
      <section
        id="seat-availability"
        className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB] scroll-mt-24"
      >
        <div className="container-heritage max-w-3xl text-center">
          <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 inline-block">
            DESK STATUS
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
            Current study hall seat availability.
          </h2>
          <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed mb-8">
            WORKSPACE capacity is monitored in blocks to maintain quiet conditions. Check current desk status below.
          </p>

          {/* Reusable Component Supporting All 3 States */}
          <SeatAvailability initialStatus="AVAILABLE" />
        </div>
      </section>

      {/* =====================================================================
          SECTION F: RESERVATIONS
          How WORKSPACE reservations work
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10">
        <div className="container-heritage max-w-4xl">
          <div className="max-w-3xl mx-auto md:text-center mb-8">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#C68642] mb-3 block">
              SESSION RESERVATIONS
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
              How desk reservation works.
            </h2>
            <div className="space-y-4 font-body text-base md:text-lg text-[#3E2A1F]/90 leading-relaxed">
              <p>
                Desks in WORKSPACE are reserved in advance by members or booked at the counter upon arrival if open seats remain. When you arrive for your reserved session, your desk is prepared and waiting.
              </p>
              <p>
                If the room is marked as full, we invite you to enjoy our main café seating, browse BOOKHOUSE, and order coffee while awaiting the next available study block.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm font-body text-[#3E2A1F]/85">
            <div className="p-5 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase block mb-1">
                Step 1
              </span>
              <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-1">
                Member Registration
              </h4>
              <p className="text-xs text-[#3E2A1F]/75">
                Obtain your focus membership ahead of time or at the café counter.
              </p>
            </div>
            <div className="p-5 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase block mb-1">
                Step 2
              </span>
              <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-1">
                Reserve Your Block
              </h4>
              <p className="text-xs text-[#3E2A1F]/75">
                Check seat availability and reserve your scheduled quiet focus block.
              </p>
            </div>
            <div className="p-5 bg-[#FAF4EB] rounded-[3px] border border-[#3E2A1F]/10">
              <span className="font-accent text-xs text-[#C68642] tracking-wider uppercase block mb-1">
                Step 3
              </span>
              <h4 className="font-heading text-base text-[#1F2D44] font-medium mb-1">
                Take Your Desk
              </h4>
              <p className="text-xs text-[#3E2A1F]/75">
                Turn on your brass lamp, mute your devices, and begin your quiet work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION G: WORKSPACE VS MAIN CAFÉ
          Clear editorial comparison
          ===================================================================== */}
      <section className="py-16 md:py-24 border-b border-[#3E2A1F]/10 bg-[#FAF4EB]">
        <div className="container-heritage max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-accent text-xs uppercase tracking-[0.2em] text-[#1F2D44] mb-3 inline-block">
              TWO SPACES · ONE ROOF
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1F2D44] font-medium leading-tight mb-4">
              Main Café vs WORKSPACE: Choosing your space.
            </h2>
            <p className="font-body text-base text-[#3E2A1F]/80 leading-relaxed">
              Understand the difference between our two environments before your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Main Café */}
            <div className="card-parchment p-8 border border-[#3E2A1F]/15 bg-[#F4E7D3] flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  OPEN ATMOSPHERE
                </span>
                <h3 className="font-heading text-2xl text-[#1F2D44] font-medium mb-3">
                  The Main Café
                </h3>
                <p className="font-body text-sm md:text-base text-[#3E2A1F]/85 leading-relaxed mb-6">
                  Welcoming, warm, and gently alive with conversation and coffee aromas. Come whenever you like without reservations or membership.
                </p>
                <ul className="space-y-2.5 text-xs font-body text-[#3E2A1F]/80">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>No membership required; free entry for all guests</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>No reservations needed; sit at any open table</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Full access to fresh bakery and handcrafted coffee</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Free browsing of all BOOKHOUSE library shelves</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#3E2A1F]/10">
                <Button to="/settle-in" variant="outline" className="w-full text-center">
                  Visitor Guide for Main Café
                </Button>
              </div>
            </div>

            {/* WORKSPACE */}
            <div className="card-navy p-8 border border-[#F4E7D3]/15 flex flex-col justify-between">
              <div>
                <span className="font-accent text-xs text-[#C68642] tracking-widest uppercase mb-2 block">
                  DEDICATED SILENCE
                </span>
                <h3 className="font-heading text-2xl font-medium mb-3">
                  The WORKSPACE Room
                </h3>
                <p className="font-body text-sm md:text-base leading-relaxed mb-6">
                  A tranquil European study hall reserved strictly for quiet concentration, writing, and solitary reading.
                </p>
                <ul className="space-y-2.5 text-xs font-body">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Membership required for room admission</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Reserved individual oak desk sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Strict silence and acoustic buffering</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#C68642]">✓</span>
                    <span>Antique brass lamps and filtered natural daylight</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F4E7D3]/10">
                <Button to="/menu" variant="primary" className="w-full text-center">
                  View Café Offerings
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION H: WORKSPACE CLOSING
          "Find room for what matters today."
          ===================================================================== */}
      <section className="py-20 md:py-28 bg-[#FAF4EB] text-center">
        <div className="container-heritage max-w-2xl">
          <span className="font-accent text-xs uppercase tracking-[0.25em] text-[#1F2D44] mb-3 inline-block">
            QUIET SANCTUARY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-[#1F2D44] font-medium leading-tight mb-5">
            Find room for what matters today.
          </h2>
          <p className="font-body text-base md:text-lg text-[#3E2A1F]/85 leading-relaxed mb-8">
            When you need an unhurried hour of focus, a quiet desk and an antique lamp are here.
          </p>

          <HeritageDivider variant="diamond" className="max-w-xs mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/settle-in" variant="primary" className="px-7 py-3">
              How to Settle In
            </Button>
            <Button to="/menu" variant="outline" className="px-7 py-3">
              Explore Our Menu
            </Button>
            <Button to="/visit" variant="outline" className="px-7 py-3">
              Visiting Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
