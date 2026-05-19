import { Link } from 'react-router-dom'

const pools = [
  { range: '192.168.x.0/24', addresses: '254' },
  { range: '192.168.x.0/23', addresses: '510' },
  { range: '192.168.x.0/22', addresses: '1,022' },
  { range: '192.168.x.0/21', addresses: '2,046' },
  { range: '192.168.x.0/20', addresses: '4,094' },
  { range: '192.168.x.0/19', addresses: '8,190' },
]

const footerLinks = [
  { label: 'Transactions', href: '/transactions' },
  { label: 'Credits',      href: '/credits' },
  { label: 'Support',      href: '/support' },
  { label: 'Routers',      href: '/routers' },
  { label: 'Billing',      href: '/billing' },
]

export default function RoutersIPPools() {
  return (
    <>
      <section className="bg-[#f5f0e8] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-gray-500 inline-block" />
            <span className="text-gray-500 text-xs font-bold tracking-widest uppercase">Flexible IP Pool Sizes</span>
          </div>
          <h2 className="text-gray-900 font-extrabold leading-tight mb-10 sm:mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            Scale from a small hotspot<br />to a city-wide network
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {pools.map(({ range, addresses }) => (
              <div key={range} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 text-center hover:shadow-md transition-shadow">
                <p className="text-gray-500 text-xs font-mono mb-2">{range}</p>
                <p className="text-cyan-600 font-extrabold text-xl sm:text-2xl leading-tight">{addresses}</p>
                <p className="text-gray-400 text-xs mt-1">addresses</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
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
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-gray-500 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 text-sm">© 2026 Blackie Networks</p>
          </div>
        </div>
      </footer>
    </>
  )
}
