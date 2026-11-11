export function HeritageDivider({ variant = 'diamond', className = '' }) {
  if (variant === 'brass') {
    return <hr className={`divider-brass ${className}`} />
  }

  if (variant === 'subtle') {
    return <hr className={`divider-heritage ${className}`} />
  }

  if (variant === 'rose') {
    return <hr className={`divider-rose ${className}`} />
  }

  // Diamond accented heritage divider (default)
  return (
    <div className={`relative flex items-center justify-center my-10 ${className}`}>
      <div className="w-full border-t border-[#3E2A1F]/12" />
      <div className="absolute px-4 bg-[#F4E7D3] flex items-center space-x-2 text-xs text-[#C68642]">
        <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-[#C68642]/70" />
        <span className="font-accent tracking-widest text-[11px] text-[#C68642]/80 select-none">
          ◆
        </span>
        <span className="inline-block transform rotate-45 w-1.5 h-1.5 bg-[#C68642]/70" />
      </div>
    </div>
  )
}
