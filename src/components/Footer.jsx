const footerLinks = ['Features', 'Transactions', 'Credits', 'Admin Roles', 'Support', 'Routers', 'Billing']

export default function Footer() {
  return (
    <footer className="bg-[#0a1525] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-extrabold text-base">B</span>
            </div>
            <span className="text-white font-bold text-lg">Blackie Networks</span>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © 2026 Blackie Networks · Built for African ISPs
          </p>
        </div>

      </div>
    </footer>
  )
}
