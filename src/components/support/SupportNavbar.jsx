import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { label: 'Transactions', href: '/transactions' },
  { label: 'Credits',      href: '/credits' },
  { label: 'Support',      href: '/support', active: true },
  { label: 'Routers',      href: '/routers' },
  { label: 'Billing',      href: '/billing' },
]

export default function SupportNavbar({ onTrial }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#f5f0e8] border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-gray-900 font-extrabold text-base">B</span>
          </div>
          <span className="text-gray-900 font-bold text-lg">Blackie Networks</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href, active }) => (
            <li key={label}>
              <Link
                to={href}
                className={`relative px-4 py-5 text-sm font-medium transition-colors block ${
                  active
                    ? 'text-gray-900 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={onTrial} className="px-5 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors">
            Get Started
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 rounded-md hover:bg-gray-200 transition-colors">
          {open
            ? <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            : <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
          }
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-[#f5f0e8] px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map(({ label, href, active }) => (
              <li key={label}>
                <Link to={href} onClick={() => setOpen(false)} className={`block px-3 py-2.5 rounded-md text-sm font-medium ${active ? 'bg-cyan-50 text-cyan-700' : 'text-gray-600 hover:bg-gray-100'}`}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-gray-200 mt-3">
            <button onClick={() => { setOpen(false); onTrial?.() }} className="w-full py-2.5 bg-gray-900 text-white font-bold rounded-md text-sm">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  )
}
