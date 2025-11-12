import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const links = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="group inline-flex items-center gap-2"
            aria-label="Go to top"
          >
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 shadow-sm" />
            <span className="font-semibold tracking-tight text-gray-900 group-hover:text-gray-700">
              Your Name
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-gray-800 transition-colors"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    setOpen(false)
                    scrollTo(l.id)
                  }}
                  className="text-left px-2 py-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                  {l.label}
                </button>
              ))}
              <a
                href="#"
                className="px-2 py-2 rounded-md bg-gray-900 text-white text-center"
              >
                <span className="inline-flex items-center gap-2 justify-center"><Download className="h-4 w-4" /> Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
