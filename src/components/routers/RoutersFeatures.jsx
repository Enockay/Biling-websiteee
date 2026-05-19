const features = [
  {
    icon: '🌐',
    title: 'Multi-router management',
    desc: 'Manage all your MikroTik routers from one dashboard. Add unlimited routers across multiple locations — each with its own stats and configuration.',
  },
  {
    icon: '📊',
    title: 'Per-router income tracking',
    desc: 'See exactly how much revenue each router location generates. Compare income across all sites and identify your best-performing deployments.',
  },
  {
    icon: '👥',
    title: 'Live client count',
    desc: 'See how many subscribers are actively connected to each router in real time. Monitor peak usage across all your hotspot and PPPoE deployments.',
  },
  {
    icon: '🔒',
    title: 'Encrypted credentials',
    desc: 'Router API credentials are encrypted and stored securely. Sub-admin accounts never see router configuration details — financial and network security are separate.',
  },
  {
    icon: '🛰️',
    title: 'Hotspot + PPPoE',
    desc: 'Each router supports both hotspot (voucher-based) and PPPoE (username/password) subscriber types — configured automatically in the same command.',
  },
  {
    icon: '📡',
    title: 'Real-time session monitoring',
    desc: 'View active sessions, last IP, and connection status for every subscriber on every router — right from the Server Instances dashboard.',
  },
]

export default function RoutersFeatures() {
  return (
    <section className="bg-[#111111] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-green-500 inline-block" />
          <span className="text-green-400 text-xs font-bold tracking-widest uppercase">Router Features</span>
        </div>
        <h2 className="font-extrabold leading-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          <span className="text-white">Everything you need to<br />manage your </span>
          <span className="text-cyan-400">infrastructure</span>
        </h2>

        <div className="border border-gray-700/60 rounded-2xl overflow-hidden divide-y divide-gray-700/60">
          {[features.slice(0, 3), features.slice(3, 6)].map((row, ri) => (
            <div key={ri} className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700/60">
              {row.map(({ icon, title, desc }) => (
                <div key={title} className="p-7 sm:p-8 flex flex-col gap-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
