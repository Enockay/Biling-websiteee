import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Transactions', href: '/transactions' },
  { label: 'Credits',      href: '/credits' },
  { label: 'Support',      href: '/support' },
  { label: 'Routers',      href: '/routers' },
  { label: 'Billing',      href: '/billing' },
]

export default function BillingCTAFooter({ onTrial }) {
  return (
    <>
      {/* CTA */}
      <section className="bg-[#111111] py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="flex-1 max-w-16 h-px bg-amber-500/60" />
            <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Ready to Start?</span>
            <span className="flex-1 max-w-16 h-px bg-amber-500/60" />
          </div>

          <h2 className="font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <span className="text-white">One platform.</span><br />
            <span className="text-amber-500">Complete control.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Transactions, credits, chat support, MikroTik routers, and billing — all in one system built for
            African ISPs. Setup takes minutes, not days.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={onTrial} className="px-8 py-3.5 bg-amber-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3.5 border border-gray-700 text-gray-300 font-medium text-sm rounded-xl hover:border-gray-500 hover:text-white transition-colors">
              Explore Features
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2744]">
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
                  <Link to={href} className="text-gray-400 text-sm hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm">© 2026 Blackie Networks · Built for African ISPs</p>
          </div>
        </div>
      </footer>
    </>
  )
}
