import { useRouter } from './RouterContext'

// eslint-disable-next-line react-refresh/only-export-components
export { RouterProvider, useRouter } from './RouterContext'

export function Link({ to, children, className = '', activeClassName = '', onClick, ...props }) {
  const { navigate, isActive } = useRouter()
  const active = isActive(to)
  const combinedClassName = `${className} ${active && activeClassName ? activeClassName : ''}`.trim()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (
      !e.defaultPrevented &&
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a href={to} onClick={handleClick} className={combinedClassName} {...props}>
      {children}
    </a>
  )
}
