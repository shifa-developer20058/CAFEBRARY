export function ImagePlaceholder({
  slot = 'generic',
  aspectRatio = '16/9',
  title = 'Atmospheric Café Interior',
  subtitle = 'European Heritage Architecture · Natural Illumination',
  variant = 'cafe', // 'cafe', 'study', 'still-life', 'editorial'
  src,
  alt = 'CAFEBRARY heritage atmosphere',
  priority = false,
  className = '',
}) {
  // Map aspect ratio string to standard CSS
  const aspectStyle = {
    aspectRatio: aspectRatio.replace(':', '/'),
  }

  // If a real image src is provided, render it seamlessly
  if (src) {
    return (
      <div
        className={`image-placeholder relative overflow-hidden rounded-[4px] border border-[#3E2A1F]/15 bg-[#EFE2CF] shadow-[0_4px_16px_-4px_rgba(31,45,68,0.08)] ${className}`}
        style={aspectStyle}
        data-image-slot={slot}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
        />
      </div>
    )
  }

  // Visual variants for variety across sections
  const variantStyles = {
    cafe: {
      bg: 'bg-gradient-to-br from-[#EFE2CF] via-[#E7D5BC] to-[#DECAA5]',
      border: 'border-[#C68642]/35',
      innerBorder: 'border-[#3E2A1F]/08',
      badge: 'bg-[#C68642]/15 text-[#3E2A1F] border-[#C68642]/30',
      iconColor: 'text-[#C68642]',
      icon: (
        <svg className="w-8 h-8 text-[#C68642]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.5A1.5 1.5 0 1010.5 10 1.5 1.5 0 009 11.5zM3 9v9a2 2 0 002 2h14a2 2 0 002-2V9M3 9l9-6 9 6" />
        </svg>
      ),
    },
    study: {
      bg: 'bg-gradient-to-br from-[#E8DEC8] via-[#DDD2BA] to-[#D2C5A8]',
      border: 'border-[#1F2D44]/25',
      innerBorder: 'border-[#1F2D44]/08',
      badge: 'bg-[#1F2D44]/10 text-[#C68642] border-[#1F2D44]/25',
      iconColor: 'text-[#1F2D44]',
      icon: (
        <svg className="w-8 h-8 text-[#1F2D44]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    'still-life': {
      bg: 'bg-gradient-to-br from-[#EEE3D4] via-[#E6D8C4] to-[#DACBB4]',
      border: 'border-[#B67C8A]/35',
      innerBorder: 'border-[#B67C8A]/12',
      badge: 'bg-[#B67C8A]/15 text-[#3E2A1F] border-[#B67C8A]/35',
      iconColor: 'text-[#B67C8A]',
      icon: (
        <svg className="w-8 h-8 text-[#B67C8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    editorial: {
      bg: 'bg-[#EBE1CE]',
      border: 'border-[#3E2A1F]/20',
      innerBorder: 'border-[#C68642]/15',
      badge: 'bg-[#FAF4EB] text-[#3E2A1F] border-[#3E2A1F]/15',
      iconColor: 'text-[#C68642]',
      icon: (
        <svg className="w-8 h-8 text-[#C68642]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  }

  const v = variantStyles[variant] || variantStyles.cafe

  return (
    <div
      className={`image-placeholder relative overflow-hidden rounded-[4px] border ${v.border} ${v.bg} shadow-[0_4px_20px_-4px_rgba(31,45,68,0.07)] p-6 md:p-8 flex flex-col justify-between select-none ${className}`}
      style={aspectStyle}
      data-image-slot={slot}
      data-aspect-ratio={aspectRatio}
    >
      {/* Decorative inner frame */}
      <div className={`absolute inset-3 md:inset-4 border ${v.innerBorder} pointer-events-none rounded-[2px]`} />

      {/* Heritage corner markers */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C68642]/50" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C68642]/50" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#C68642]/50" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C68642]/50" />

      {/* Top bar: slot identifier tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className={`inline-flex items-center px-2.5 py-1 text-[11px] font-accent tracking-widest uppercase border rounded-[2px] ${v.badge}`}>
          CAFEBRARY ARCHIVE
        </span>
        <span className="font-mono text-[11px] text-[#3E2A1F]/45 tracking-wider">
          {aspectRatio}
        </span>
      </div>

      {/* Centerpiece: refined icon and editorial title */}
      <div className="relative z-10 my-auto text-center py-4 px-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF4EB]/65 border border-[#C68642]/18 mb-3 shadow-sm">
          {v.icon}
        </div>
        <h4 className="font-heading text-lg md:text-xl text-[#1F2D44] font-medium tracking-tight mb-1.5">
          {title}
        </h4>
        <p className="font-body text-[0.8125rem] md:text-sm text-[#3E2A1F]/65 italic max-w-sm mx-auto leading-snug">
          {subtitle}
        </p>
      </div>

      {/* Bottom seal */}
      <div className="relative z-10 flex items-center justify-center text-xs text-[#3E2A1F]/45 font-body">
        <span className="inline-block w-5 h-[1px] bg-[#3E2A1F]/18 mr-2" />
        <span>Between the pages and the pour</span>
        <span className="inline-block w-5 h-[1px] bg-[#3E2A1F]/18 ml-2" />
      </div>
    </div>
  )
}
