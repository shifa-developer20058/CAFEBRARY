import { Header } from '../common/Header'
import { Footer } from '../common/Footer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4E7D3] text-[#3E2A1F] antialiased">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
