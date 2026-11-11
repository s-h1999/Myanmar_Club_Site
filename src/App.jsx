import { useState } from 'react'
import About from './components/About.jsx'
import Contact, { JoinUs } from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'

const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Events & Activities', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join Us', href: '#contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-stone-50 text-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-stone-50/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8"
        >
          <a className="flex items-center gap-3 text-lg font-bold tracking-tight" href="#home">
            <span className="flex size-9 items-center justify-center rounded-full bg-amber-400 text-sm text-slate-950">C</span>
            Myanmar Club Community
          </a>
          <button
            type="button"
            className="rounded-lg border border-slate-300 p-2 text-slate-700 sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
          <div
            id="main-menu"
            className={`${menuOpen ? 'flex' : 'hidden'} w-full flex-col gap-1 border-t border-slate-200 pt-3 sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-x-6 sm:border-0 sm:pt-0`}
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
        <JoinUs />
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Myanmar Club Community.</p>
          <p>A place to connect, grow, and belong.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
