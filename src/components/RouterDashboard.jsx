const routerInfo = [
  { label: 'IP Address',     value: '192.168.3.0 / 23',  style: '' },
  { label: 'Address Pool',   value: '510 addresses',      style: '' },
  { label: 'Total Clients',  value: '0',                  style: '' },
  { label: 'Router Income',  value: 'KES 0',              style: '' },
  { label: 'Configuration',  value: 'Auto-Configured',    style: 'text-blue-500 font-semibold' },
  { label: 'Credentials',    value: 'Stored securely',    style: 'text-green-500 font-semibold' },
]

const features = [
  {
    icon: '⚡',
    title: 'One-command auto-setup',
    desc: 'Generate a single terminal command. Paste into your MikroTik router and it configures hotspot, PPPoE, and IP pools automatically — no manual setup.',
  },
  {
    icon: '📊',
    title: 'Per-router income tracking',
    desc: 'See exactly how much revenue each router location is generating. Compare income across all your deployment sites in one dashboard.',
  },
  {
    icon: '🔢',
    title: 'Flexible IP pool sizes',
    desc: 'Choose from /24 (254 addresses) up to /19 (8,190+ addresses). The system scales from small rural hotspots to large urban deployments.',
  },
  {
    icon: '🔐',
    title: 'Encrypted credential storage',
    desc: 'Router API credentials are encrypted and stored securely in the backend. Sub-admin accounts never see router configuration or access details.',
  },
  {
    icon: '🛰️',
    title: 'Real-time session monitoring',
    desc: 'View active hotspot and PPPoE sessions per router in real time — track client count, last IP, and connection status from anywhere.',
  },
]

export default function RouterDashboard() {
  return (
    <section id="routers" className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Router Dashboard</span>
        </div>
        <h2 className="text-[#0d1b2e] font-extrabold leading-tight mb-10 sm:mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          MikroTik infrastructure,<br />fully managed
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — router card + terminal */}
          <div className="w-full lg:max-w-sm shrink-0">
            {/* Router card */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden mb-5">
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-4 bg-[#0d1b2e]">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🌍</span>
                  <span className="text-white font-bold text-sm">Router: Kalundu</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                  <span className="text-red-400 text-xs font-medium">Offline</span>
                </div>
              </div>
              {/* Info rows */}
              <div className="divide-y divide-gray-100">
                {routerInfo.map(({ label, value, style }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-gray-600 text-sm">{label}</span>
                    <span className={`text-sm ${style || 'text-[#0d1b2e] font-medium'}`}>{value}</span>
                  </div>
                ))}
              </div>
              {/* Action buttons */}
              <div className="flex items-center gap-2 px-5 py-4 border-t border-gray-100">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-[#0d1b2e] text-white text-xs font-semibold rounded-md hover:bg-gray-800 transition-colors">
                  ⚙ Configure
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-700 text-xs font-semibold rounded-md hover:bg-gray-50 transition-colors">
                  Open
                </button>
                <button className="px-4 py-2 border border-gray-200 text-gray-700 text-xs font-semibold rounded-md hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            </div>

            {/* Terminal command box */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
              <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">
                Auto-Configure: One Command Setup
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Fill in the network settings → click{' '}
                <strong className="text-[#0d1b2e]">Generate Command</strong> → paste the
                one-liner into your MikroTik terminal → the router configures itself.
              </p>
              <div className="bg-[#0d1b2e] rounded-lg px-4 py-3 overflow-x-auto">
                <code className="text-green-400 text-xs font-mono whitespace-nowrap">
                  /ip pool add name=hs-pool ranges=192.168.3.0/23 ...
                </code>
              </div>
            </div>
          </div>

          {/* Right — feature list */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-xl shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-[#0d1b2e] font-bold text-base sm:text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
