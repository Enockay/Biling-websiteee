import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Features',      href: '#features',      router: false },
  { label: 'Transactions',  href: '/transactions',  router: true  },
  { label: 'Credits',       href: '/credits',       router: true  },
  { label: 'Admin Roles',   href: '#admin-roles',   router: false },
  { label: 'Support',       href: '/support',       router: true  },
  { label: 'Routers',       href: '/routers',       router: true  },
  { label: 'Billing',       href: '/billing',       router: true  },
]

export default function Navbar({ onTrial }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3" fill="#f59e0b" />
              <circle cx="3" cy="4" r="2" fill="white" opacity="0.7" />
              <circle cx="17" cy="4" r="2" fill="white" opacity="0.7" />
              <circle cx="3" cy="16" r="2" fill="white" opacity="0.7" />
              <circle cx="17" cy="16" r="2" fill="white" opacity="0.7" />
              <line x1="5" y1="5" x2="8" y2="8.5" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="15" y1="5" x2="12" y2="8.5" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="5" y1="15" x2="8" y2="11.5" stroke="white" strokeWidth="1" opacity="0.5" />
              <line x1="15" y1="15" x2="12" y2="11.5" stroke="white" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
          <span className="text-gray-900 font-bold text-lg">Blackie</span>
          <span className="text-amber-500 font-bold text-lg">Networks</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href, router }) => (
            <li key={label}>
              {router ? (
                <Link to={href} className="relative px-3 py-5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  {label}
                </Link>
              ) : (
                <a href={href} className="relative px-3 py-5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Sign In
          </button>
          <button
            onClick={onTrial}
            className="px-5 py-2 text-sm font-medium text-gray-900 bg-amber-500 rounded-md hover:bg-amber-400 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Mobile: Sign In + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button className="px-4 py-1.5 text-sm font-medium text-gray-800 border border-gray-300 rounded-md">
            Sign In
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-gray-100 mt-3">
            <button
              onClick={() => { setOpen(false); onTrial() }}
              className="w-full py-2.5 bg-amber-500 text-gray-900 font-bold rounded-md text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
