import { createContext, useContext, useState, useEffect } from 'react'

const RouterContext = createContext(null)

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/'
    }
    return '/'
  })

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/')
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (to) => {
    const normalized = to.startsWith('/') ? to : `/${to}`
    if (normalized === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    window.history.pushState({}, '', normalized)
    setCurrentPath(normalized)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (path) => {
    if (path === '/') return currentPath === '/'
    return currentPath === path || currentPath.startsWith(`${path}/`)
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate, isActive }}>
      {children}
    </RouterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider')
  }
  return context
}
