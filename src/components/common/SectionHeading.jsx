export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  titleClassName = '',
  eyebrowClassName = '',
  descriptionClassName = '',
  theme = 'light', // 'light' (on latte foam), 'dark' (on dark navy), 'rose' (literary contexts)
  divider = false,
  eyebrowVariant = 'caramel', // 'caramel' | 'rose' | 'navy'
}) {
  const alignClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right ml-auto items-end',
  }

  const isDark = theme === 'dark'
  const isRose = theme === 'rose'

  const eyebrowColors = {
    caramel: 'text-[#C68642]',
    rose: 'text-[#B67C8A]',
    navy: 'text-[#1F2D44]',
  }

  return (
    <div className={`flex flex-col ${alignClasses[align] || alignClasses.center} ${className}`}>
      {eyebrow && (
        <span
          className={`font-accent text-xs md:text-[0.8125rem] uppercase tracking-[0.22em] mb-3 select-none ${
            isDark ? 'text-[#C68642]' : eyebrowColors[eyebrowVariant] || eyebrowColors.caramel
          } ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`font-heading text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium leading-[1.18] tracking-tight mb-4 ${
            isDark ? 'text-[#C68642]' : isRose ? 'text-[#3E2A1F]' : 'text-[#1F2D44]'
          } ${titleClassName}`}
        >
          {title}
        </h2>
      )}
      {divider && (
        <div
          className={`w-12 h-[2px] my-3 rounded-full ${
            isDark ? 'bg-[#C68642]/70' : isRose ? 'bg-[#B67C8A]/60' : 'bg-[#C68642]/60'
          }`}
        />
      )}
      {description && (
        <p
          className={`font-body text-[1.0625rem] md:text-lg leading-relaxed max-w-2xl ${
            isDark ? 'text-[#C68642]' : isRose ? 'text-[#3E2A1F]/80' : 'text-[#3E2A1F]/85'
          } ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
