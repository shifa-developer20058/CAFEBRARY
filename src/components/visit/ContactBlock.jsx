import { CAFEBRARY_LOCATION } from '../../data/locationData'

export function ContactBlock() {
  const { contact } = CAFEBRARY_LOCATION

  return (
    <div className="card-parchment p-7 sm:p-10 md:p-12 border-2 border-[#3E2A1F]/15 bg-[#FAF4EB] shadow-[0_8px_30px_-6px_rgba(31,45,68,0.07)] max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-accent text-[0.75rem] uppercase tracking-[0.22em] text-[#C68642] mb-2.5 block">
          INQUIRIES & HEARTH
        </span>
        <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] md:text-[2.1rem] text-[#1F2D44] font-medium tracking-tight mb-3">
          A little note is always welcome.
        </h3>
        <p className="font-body text-[1.0625rem] text-[#3E2A1F]/80 leading-relaxed">
          For questions about the café, the books, or finding your way here, here's where to reach us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Telephone */}
        <div className="p-6 sm:p-7 bg-[#F4E7D3] rounded-[3px] border border-[#3E2A1F]/10 flex flex-col justify-between gap-5">
          <div>
            <div className="w-11 h-11 rounded-full bg-[#FAF4EB] border border-[#C68642]/28 flex items-center justify-center text-[#C68642] mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="font-accent text-[0.75rem] uppercase tracking-wider text-[#C68642] block mb-1.5">
              Telephone
            </span>
            <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
              Direct Desk
            </h4>
            <p className="font-body text-sm text-[#3E2A1F]/65 mb-4 leading-relaxed">
              During regular opening hours for table inquiries.
            </p>
          </div>
          <a
            href={contact.phoneTel}
            className="font-mono text-[1rem] sm:text-[1.0625rem] text-[#1F2D44] hover:text-[#C68642] font-semibold transition-colors"
          >
            {contact.phone}
          </a>
        </div>

        {/* Email */}
        <div className="p-6 sm:p-7 bg-[#F4E7D3] rounded-[3px] border border-[#3E2A1F]/10 flex flex-col justify-between gap-5">
          <div>
            <div className="w-11 h-11 rounded-full bg-[#FAF4EB] border border-[#C68642]/28 flex items-center justify-center text-[#C68642] mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="font-accent text-[0.75rem] uppercase tracking-wider text-[#C68642] block mb-1.5">
              Letter & Note
            </span>
            <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
              Written Inquiries
            </h4>
            <p className="font-body text-sm text-[#3E2A1F]/65 mb-4 leading-relaxed">
              For book donation discussions and quiet inquiries.
            </p>
          </div>
          <a
            href={contact.emailMailto}
            className="font-body text-[1rem] sm:text-[1.0625rem] text-[#1F2D44] hover:text-[#C68642] font-medium transition-colors break-all"
          >
            {contact.email}
          </a>
        </div>

        {/* Instagram */}
        <div className="p-6 sm:p-7 bg-[#F4E7D3] rounded-[3px] border border-[#B67C8A]/25 flex flex-col justify-between gap-5">
          <div>
            <div className="w-11 h-11 rounded-full bg-[#FAF4EB] border border-[#B67C8A]/28 flex items-center justify-center text-[#B67C8A] mb-4">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 4h11A2.5 2.5 0 0120 6.5v11a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 17.5v-11A2.5 2.5 0 016.5 4z" />
              </svg>
            </div>
            <span className="font-accent text-[0.75rem] uppercase tracking-wider text-[#B67C8A] block mb-1.5">
              Visual Dispatch
            </span>
            <h4 className="font-heading text-lg text-[#1F2D44] font-medium mb-2">
              Instagram
            </h4>
            <p className="font-body text-sm text-[#3E2A1F]/65 mb-4 leading-relaxed">
              Quiet dispatches of warm bakes, books, and courtyard light.
            </p>
          </div>
          <span className="font-accent text-[1rem] sm:text-[1.0625rem] text-[#B67C8A] font-medium">
            {contact.instagramHandle}
          </span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="p-4 bg-[#EFE2CF]/60 rounded-[2px] border border-[#3E2A1F]/10 text-sm font-body text-[#3E2A1F]/65 italic leading-relaxed">
        <p>
          {contact.emailDisclaimer} {contact.instagramDisclaimer}
        </p>
      </div>
    </div>
  )
}
