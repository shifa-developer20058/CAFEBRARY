import { useState, useEffect } from 'react'
import { Link, useRouter } from '../../router/Router'
import { Button } from './Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { currentPath } = useRouter()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/our-story' },
    { label: 'Settle In', path: '/settle-in' },
    { label: 'Menu', path: '/menu' },
    { label: 'BOOKHOUSE', path: '/bookhouse' },
    { label: 'WORKSPACE', path: '/workspace' },
    { label: 'Visit', path: '/visit' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F4E7D3]/96 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(31,45,68,0.09)] border-b border-[#3E2A1F]/15 py-3'
          : 'bg-[#F4E7D3] border-b border-[#3E2A1F]/10 py-4'
      }`}
    >
      <div className="container-heritage flex items-center justify-between">
        {/* Brand Logo & Wordmark (Bogale font stack strictly for logo) */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="group flex flex-col focus-visible:outline-2 focus-visible:outline-[#C68642] rounded-sm"
          aria-label="CAFEBRARY Home"
        >
          <span className="font-logo text-xl sm:text-2xl md:text-[1.75rem] text-[#1F2D44] tracking-[0.14em] font-normal leading-none group-hover:text-[#C68642] transition-colors">
            CAFEBRARY
          </span>
          {/* Improved: 11px subtitle — border-b Dusty Rose accent */}
          <span className="font-body text-[11px] sm:text-[11px] text-[#3E2A1F]/60 tracking-[0.16em] uppercase -mt-0.5 group-hover:text-[#B67C8A]/70 transition-colors">
            Café & Library
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isActive =
              item.path === '/'
                ? currentPath === '/'
                : currentPath === item.path || currentPath.startsWith(`${item.path}/`)

            return (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-3 py-2 text-[0.8125rem] font-accent tracking-[0.05em] transition-colors rounded-sm focus-visible:outline-2 focus-visible:outline-[#C68642] ${
                  isActive
                    ? 'text-[#C68642]'
                    : 'text-[#1F2D44] hover:text-[#C68642]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C68642] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Primary CTA button on Desktop */}
          <div className="hidden sm:block">
            <Button to="/settle-in" variant="primary" className="text-sm px-5 py-2.5">
              Settle In
            </Button>
          </div>

          {/* Mobile Menu Toggle Button — min 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-[#1F2D44] hover:text-[#C68642] focus-visible:outline-2 focus-visible:outline-[#C68642] rounded-sm transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#3E2A1F]/15 bg-[#F4E7D3] shadow-lg">
          <nav className="container-heritage flex flex-col py-5 space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const isActive =
                item.path === '/'
                  ? currentPath === '/'
                  : currentPath === item.path || currentPath.startsWith(`${item.path}/`)

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between min-h-[48px] px-3 py-3 rounded-[3px] text-[0.9375rem] font-accent tracking-wide transition-colors ${
                    isActive
                      ? 'bg-[#C68642]/12 text-[#C68642] border-l-2 border-[#C68642]'
                      : 'text-[#1F2D44] hover:bg-[#EFE2CF] hover:text-[#C68642]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C68642]" aria-hidden="true" />
                  )}
                </Link>
              )
            })}
            {/* Rose accent separator */}
            <div className="pt-3 mt-2 border-t border-[#B67C8A]/20">
              <Button
                to="/settle-in"
                variant="primary"
                onClick={closeMobileMenu}
                className="w-full text-center min-h-[48px]"
              >
                Settle In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
