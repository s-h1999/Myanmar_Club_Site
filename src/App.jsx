import { useState } from 'react'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Gallery from './components/Gallery.jsx'
import Home from './components/Home.jsx'
import JoinUs from './components/JoinUs.jsx'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Events & Activities', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Join Us', href: '#join-us' },
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
          <a aria-label="Home" className="flex items-center gap-3" href="#home">
            <span aria-hidden="true" className="size-9 rounded-full bg-amber-400" />
            <span aria-hidden="true" className="h-4 w-36 rounded bg-slate-200" />
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
        <Events />
        <Gallery />
        <JoinUs />
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span aria-hidden="true" className="h-3 w-40 rounded bg-slate-200" />
          <span aria-hidden="true" className="h-3 w-28 rounded bg-slate-200" />
        </div>
      </footer>
    </div>
  )
}

export default App
