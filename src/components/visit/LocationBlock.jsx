import { useState } from 'react'
import { CAFEBRARY_LOCATION } from '../../data/locationData'

export function LocationBlock() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const handleCopyAddress = async () => {
    const textToCopy = CAFEBRARY_LOCATION.address.singleLine

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy)
        setCopied(true)
        setCopyError(false)
        setTimeout(() => setCopied(false), 2500)
      } else {
        const textArea = document.createElement('textarea')
        textArea.value = textToCopy
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        if (successful) {
          setCopied(true)
          setCopyError(false)
          setTimeout(() => setCopied(false), 2500)
        } else {
          setCopyError(true)
        }
      }
    } catch {
      setCopyError(true)
      setTimeout(() => setCopyError(false), 3000)
    }
  }

  return (
    <div
      id="location"
      className="card-parchment p-7 sm:p-10 md:p-12 border-2 border-[#C68642]/32 bg-[#FAF4EB] shadow-[0_8px_30px_-6px_rgba(31,45,68,0.09)] scroll-mt-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Address Details & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="font-accent text-[0.75rem] uppercase tracking-[0.22em] text-[#C68642]">
                {CAFEBRARY_LOCATION.area}
              </span>
              <span className="text-[#3E2A1F]/30">·</span>
              <span className="font-body text-sm text-[#3E2A1F]/60 italic">
                The Old Courtyard
              </span>
            </div>
            <h3 className="font-heading text-[1.5rem] sm:text-[1.875rem] md:text-[2.25rem] text-[#1F2D44] font-medium tracking-tight">
              CAFEBRARY
            </h3>
          </div>

          {/* Address Lines — improved to sm:text-lg */}
          <address className="not-italic space-y-1.5 font-body text-[1rem] sm:text-lg text-[#3E2A1F]/88 border-l-2 border-[#C68642]/55 pl-4 py-1 leading-relaxed">
            <p className="font-medium text-[#1F2D44]">No. 18, The Old Courtyard,</p>
            <p>6th Cross Street, Thillai Nagar,</p>
            <p>Tiruchirappalli, Tamil Nadu – 620018</p>
          </address>

          {/* Interactive Actions */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCopyAddress}
              aria-label="Copy CAFEBRARY full address to clipboard"
              className={`btn px-5 py-3 text-sm font-accent tracking-wider uppercase transition-all duration-200 ${
                copied
                  ? 'bg-[#3E2A1F] text-[#F4E7D3] border-[#3E2A1F]'
                  : copyError
                  ? 'bg-[#B67C8A] text-[#FAF4EB] border-[#B67C8A]'
                  : 'bg-[#C68642] text-[#F4E7D3] hover:bg-[#B57535] border-[#C68642]'
              }`}
            >
              {copied ? (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Address Copied</span>
                </span>
              ) : copyError ? (
                <span>Try Again</span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Address</span>
                </span>
              )}
            </button>

            <a
              href={CAFEBRARY_LOCATION.maps.googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open directions to CAFEBRARY in Google Maps (opens in new tab)"
              className="btn btn-outline px-5 py-3 text-sm font-accent tracking-wider uppercase inline-flex items-center gap-1.5"
            >
              <span>Get Directions</span>
              <svg className="w-3.5 h-3.5 text-[#C68642]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* SR-only live region */}
          <div aria-live="polite" className="sr-only">
            {copied ? 'Address copied to clipboard.' : ''}
            {copyError ? 'Unable to copy address automatically. Please copy manually.' : ''}
          </div>

          <p className="text-sm font-body text-[#3E2A1F]/60 italic leading-relaxed">
            Tucked into the quiet courtyard on 6th Cross Street. A gentle harbor away from traffic.
          </p>
        </div>

        {/* Right Column: Editorial Map Visual Area */}
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-[4px] border border-[#3E2A1F]/18 bg-[#EFE2CF] p-6 sm:p-8 flex flex-col justify-between aspect-[4/3] shadow-inner select-none">
            {/* Dot grid pattern */}
            <div className="absolute inset-0 opacity-12 pointer-events-none">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(#3E2A1F 1px, transparent 1px), radial-gradient(#3E2A1F 1px, #EFE2CF 1px)',
                backgroundSize: '24px 24px',
                backgroundPosition: '0 0, 12px 12px'
              }} />
            </div>

            {/* Subtle Road lines */}
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#3E2A1F]/12 -translate-y-1/2" />
            <div className="absolute top-0 bottom-0 left-1/3 w-[1.5px] bg-[#3E2A1F]/12" />
            <div className="absolute top-0 bottom-0 right-1/4 w-[1.5px] bg-[#3E2A1F]/12" />

            {/* Top: Compass & Label */}
            <div className="relative z-10 flex items-center justify-between text-xs font-accent text-[#3E2A1F]/55">
              <span className="tracking-[0.18em] uppercase text-[11px]">
                THILLAI NAGAR · 6TH CROSS
              </span>
              <div className="flex items-center gap-1 text-[11px] tracking-widest font-mono">
                <span>N</span>
                <span className="text-[#C68642]">▲</span>
              </div>
            </div>

            {/* Central Pin */}
            <div className="relative z-10 my-auto text-center py-4">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF4EB] border-2 border-[#C68642] shadow-md mb-3">
                <svg className="w-7 h-7 text-[#C68642]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-heading text-lg sm:text-xl text-[#1F2D44] font-medium tracking-tight">
                No. 18, The Old Courtyard
              </h4>
              <p className="font-body text-sm text-[#3E2A1F]/65 italic mt-1">
                Walk through the arched gateway into the quiet inner courtyard
              </p>
            </div>

            {/* Map Footer */}
            <div className="relative z-10 flex items-center justify-between text-xs text-[#3E2A1F]/55 font-body border-t border-[#3E2A1F]/10 pt-2">
              <span>Tiruchirappalli, Tamil Nadu</span>
              <span className="font-mono text-[#C68642]">620018</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
