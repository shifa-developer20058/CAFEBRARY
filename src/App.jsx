import { RouterProvider, useRouter } from './router/Router'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { OurStory } from './pages/OurStory'
import { SettleIn } from './pages/SettleIn'
import { Menu } from './pages/Menu'
import { Bookhouse } from './pages/Bookhouse'
import { Workspace } from './pages/Workspace'
import { Visit } from './pages/Visit'

function PageRenderer() {
  const { currentPath } = useRouter()

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <Home />
      case '/our-story':
        return <OurStory />
      case '/settle-in':
        return <SettleIn />
      case '/menu':
        return <Menu />
      case '/bookhouse':
        return <Bookhouse />
      case '/workspace':
        return <Workspace />
      case '/visit':
        return <Visit />
      default:
        if (currentPath.startsWith('/menu')) {
          return <Menu />
        }
        if (currentPath.startsWith('/bookhouse')) {
          return <Bookhouse />
        }
        if (currentPath.startsWith('/workspace')) {
          return <Workspace />
        }
        if (currentPath.startsWith('/visit')) {
          return <Visit />
        }
        return <Home />
    }
  }

  return <Layout>{renderContent()}</Layout>
}

export default function App() {
  return (
    <RouterProvider>
      <PageRenderer />
    </RouterProvider>
  )
}
