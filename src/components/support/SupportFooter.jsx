import { Link } from 'react-router-dom'

const links = [
  { label: 'Transactions', href: '/transactions' },
  { label: 'Credits',      href: '/credits' },
  { label: 'Support',      href: '/support' },
  { label: 'Routers',      href: '#' },
  { label: 'Billing',      href: '#' },
]

export default function SupportFooter() {
  return (
    <footer className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-extrabold text-base">B</span>
            </div>
            <span className="text-white font-bold text-lg">Blackie Networks</span>
          </Link>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link to={href} className="text-gray-500 text-sm hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>

          <p className="text-gray-600 text-sm">© 2026 Blackie Networks</p>
        </div>
      </div>
    </footer>
  )
}
