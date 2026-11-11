import { Link } from '../../router/Router'

export function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const variantClasses = {
    primary: 'btn-primary',
    navy: 'btn-navy',
    cocoa: 'btn-cocoa',
    rose: 'btn-rose',
    outline: 'btn-outline',
    outlineCaramel: 'btn-outline-caramel',
    outlineRose: 'btn-outline-rose',
    ghost: 'text-[#1F2D44] hover:text-[#C68642] transition-colors font-accent tracking-wide text-sm underline-offset-4 hover:underline',
  }

  const baseClasses = variant === 'ghost'
    ? variantClasses.ghost
    : `btn ${variantClasses[variant] || variantClasses.primary}`
  const combined = `${baseClasses} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={combined} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={combined} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
