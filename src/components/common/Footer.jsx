import { Link } from '../../router/Router'
import { CAFEBRARY_LOCATION } from '../../data/locationData'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { address, contact } = CAFEBRARY_LOCATION

  return (
    <footer className="site-footer bg-[#1F2D44] text-white border-t border-[#C68642]/30 pt-16 pb-12 mt-auto">
      <div className="container-heritage">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-[#F4E7D3]/12">
          {/* Brand & Address Column */}
          <div className="md:col-span-5 flex flex-col space-y-5">
            <Link to="/" className="inline-block group focus-visible:outline-2 focus-visible:outline-[#C68642]">
              <span className="font-logo text-2xl sm:text-3xl tracking-[0.16em] transition-colors">
                CAFEBRARY
              </span>
            </Link>

            <p className="font-accent text-sm tracking-wide italic leading-snug">
              &ldquo;Between the pages and the pour, you&apos;re home!&rdquo;
            </p>
            <p className="font-body text-[0.9375rem] leading-relaxed max-w-sm">
              Café first, library second. Dedicated to unhurried coffee, quiet reading, and making a quiet hour easy to have.
            </p>

            <div className="pt-1 font-body space-y-0.5 border-l-2 border-[#C68642]/50 pl-3">
              <p className="text-sm font-medium">{address.name} · {address.courtyard}</p>
              <p className="text-sm">{address.street}</p>
              <p className="text-sm">{address.cityStateZip}</p>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 text-xs font-body italic">
                <span className="w-4 h-[1px] bg-[#B67C8A]/50 inline-block" />
                <span>We keep your place.</span>
                <span className="w-4 h-[1px] bg-[#B67C8A]/50 inline-block" />
              </div>
            </div>
          </div>

          {/* Navigation Column 1: Exploration */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="font-accent text-[0.75rem] uppercase tracking-[0.2em] mb-1">
              Explore
            </h4>
            <ul className="space-y-2.5 font-body text-[0.9375rem]">
              <li>
                <Link to="/" className="transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/settle-in" className="transition-colors">
                  Settle In
                </Link>
              </li>
              <li>
                <Link to="/menu" className="transition-colors">
                  Menu
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: The Spaces */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <h4 className="font-accent text-[0.75rem] uppercase tracking-[0.2em] mb-1">
              The Spaces
            </h4>
            <ul className="space-y-2.5 font-body text-[0.9375rem]">
              <li>
                <Link to="/bookhouse" className="transition-colors">
                  BOOKHOUSE
                </Link>
              </li>
              <li>
                <Link to="/workspace" className="transition-colors">
                  WORKSPACE
                </Link>
              </li>
              <li>
                <Link to="/visit" className="transition-colors">
                  Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Contact Summary */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <h4 className="font-accent text-[0.75rem] uppercase tracking-[0.2em] mb-1">
              Hours & Contact
            </h4>
            <div className="space-y-1.5 font-body text-sm">
              <p className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="font-mono text-right">9:00 AM – 9:00 PM</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="font-mono text-right">9:00 AM – 10:00 PM</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="font-mono text-right">10:00 AM – 9:00 PM</span>
              </p>
            </div>

            <div className="pt-3 border-t border-[#F4E7D3]/10 space-y-2 text-sm font-body">
              <p>
                <a href={contact.phoneTel} className="transition-colors font-mono">
                  {contact.phone}
                </a>
              </p>
              <p>
                <a href={contact.emailMailto} className="transition-colors break-all">
                  {contact.email}
                </a>
              </p>
              <p className="font-accent text-sm">
                {contact.instagramHandle}
              </p>
            </div>

            <p className="text-xs font-body italic pt-1">
              Illustrative contact reference (.example domain).
            </p>
          </div>
        </div>

        {/* Bottom Bar: Quiet Brand Line & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm font-body space-y-3 sm:space-y-0">
          <p className="italic">
            A quiet friend where you can pause without performance.
          </p>
          <p>
            &copy; {currentYear} CAFEBRARY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
