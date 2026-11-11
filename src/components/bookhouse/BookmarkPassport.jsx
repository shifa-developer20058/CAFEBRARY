export function BookmarkPassport() {
  return (
    <div className="relative mx-auto max-w-md p-7 sm:p-9 rounded-[4px] bg-[#FAF4EB] border-2 border-[#B67C8A]/45 shadow-[0_12px_36px_-8px_rgba(182,124,138,0.25)] select-none">
      {/* Corner filigree tabs — Caramel */}
      <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C68642]/65" />
      <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C68642]/65" />
      <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C68642]/65" />
      <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C68642]/65" />

      {/* Dusty Rose top accent bar */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#B67C8A]/50 to-transparent rounded-full" />

      {/* Passport Header */}
      <div className="text-center pb-5 mb-5 border-b border-[#B67C8A]/20">
        <span className="font-accent text-[11px] tracking-[0.28em] text-[#B67C8A] uppercase block mb-2">
          CAFEBRARY · READING PASSPORT
        </span>
        <h4 className="font-heading text-2xl sm:text-3xl text-[#1F2D44] font-medium tracking-tight mb-1">
          BOOKMARK
        </h4>
        <span className="font-body text-sm text-[#3E2A1F]/65 italic">
          &ldquo;We keep your place.&rdquo;
        </span>
      </div>

      {/* Passport Fields */}
      <div className="space-y-2.5 font-body text-sm text-[#3E2A1F]">
        <div className="flex items-baseline justify-between p-3 bg-[#F4E7D3]/70 rounded-[3px] border border-[#B67C8A]/18">
          <span className="font-accent text-[#3E2A1F]/60 uppercase tracking-wider text-xs">
            Current Volume
          </span>
          <span className="font-heading text-[0.9375rem] text-[#1F2D44] italic text-right max-w-[55%]">
            The Shape of Time & Memory
          </span>
        </div>

        <div className="flex items-baseline justify-between p-3 bg-[#F4E7D3]/70 rounded-[3px] border border-[#B67C8A]/18">
          <span className="font-accent text-[#3E2A1F]/60 uppercase tracking-wider text-xs">
            Library Shelf
          </span>
          <span className="font-mono text-sm text-[#1F2D44]">
            Bay II · Literature
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-[#F4E7D3]/70 rounded-[3px] border border-[#C68642]/20">
            <span className="font-accent text-[#3E2A1F]/55 uppercase tracking-wider text-[11px] block mb-1">
              Page Marked
            </span>
            <span className="font-heading text-base text-[#C68642] font-semibold">
              Page 184
            </span>
          </div>
          <div className="p-3 bg-[#F4E7D3]/70 rounded-[3px] border border-[#B67C8A]/20">
            <span className="font-accent text-[#3E2A1F]/55 uppercase tracking-wider text-[11px] block mb-1">
              Status
            </span>
            <span className="font-heading text-sm text-[#B67C8A] font-medium">
              Awaiting Return
            </span>
          </div>
        </div>
      </div>

      {/* Passport Seal & Privacy */}
      <div className="mt-6 pt-4 border-t border-[#B67C8A]/18 flex items-center justify-between text-xs text-[#3E2A1F]/55 font-body">
        <span className="italic">Private reading record</span>
        <div className="flex items-center space-x-1.5 font-accent text-[#C68642] tracking-wider uppercase text-[11px]">
          <span>◆</span>
          <span>In-House Passport</span>
          <span>◆</span>
        </div>
      </div>
    </div>
  )
}
