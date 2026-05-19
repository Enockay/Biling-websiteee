const features = [
  {
    icon: '🛰️',
    title: 'Hotspot & PPPoE Billing',
    description: 'Unified management for both hotspot voucher users and PPPoE subscribers. Packages, speed profiles, expiry, and session history — all in one view.',
    badge: 'MikroTik integrated',
  },
  {
    icon: '💳',
    title: 'M-Pesa STK Push',
    description: 'Subscribers pay directly from their phone via M-Pesa STK push. Payments auto-match to accounts, packages activate instantly, receipts sent automatically.',
    badge: 'Safaricom Daraja API',
  },
  {
    icon: '🌐',
    title: 'Credit Management',
    description: 'Every payment earns credits. When packages expire, credits keep subscribers online automatically — zero interruptions, zero support calls.',
    badge: 'Auto-continuity',
  },
  {
    icon: '🧾',
    title: 'Transaction Stamps',
    description: 'Full audit trail of every M-Pesa payment with Checkout IDs, real-time status, and one-click retry for failed transactions. Filter by any field.',
    badge: 'Full audit trail',
  },
  {
    icon: '💬',
    title: 'Built-in Chat Support',
    description: "Direct subscriber-to-team messaging built into the platform. Every conversation is logged, searchable, and linked to the subscriber's account and router.",
    badge: 'Real-time messaging',
  },
  {
    icon: '🔐',
    title: 'Multi-level Admin Roles',
    description: 'Super admin controls everything. Sub-accounts handle subscribers and support — but financial data, cash reports, and revenue stay permanently restricted.',
    badge: 'Role-based access',
  },
  {
    icon: '📊',
    title: 'Analytics Hub',
    description: 'WiFi analytics, income trends, and detailed breakdowns across all routers. Compare daily performance and track revenue in real time.',
    badge: 'WiFi + Income analytics',
  },
  {
    icon: '🖨️',
    title: 'Voucher Management',
    description: 'Generate and print hotspot vouchers in batches. Assign digital tokens directly to subscribers or print physical vouchers for resale agents.',
    badge: 'Print & digital',
  },
  {
    icon: '🌍',
    title: 'Router Auto-Configure',
    description: 'Add a MikroTik router and generate one terminal command. Paste it in and the router configures itself — hotspot, PPPoE, and IP pools all set up automatically.',
    badge: 'One-command setup',
  },
]

function FeatureCard({ icon, title, description, badge }) {
  return (
    <div className="flex flex-col p-5 sm:p-7 bg-white">
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl mb-4 sm:mb-5 shrink-0">
        {icon}
      </div>
      <h3 className="text-[#0d1b2e] font-bold text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">{description}</p>
      <div className="mt-4 sm:mt-5">
        <span className="inline-block bg-[#0d1b2e] text-amber-400 text-xs font-mono px-3 py-1.5 rounded">
          {badge}
        </span>
      </div>
    </div>
  )
}

export default function Features() {
  const rows = [features.slice(0, 3), features.slice(3, 6), features.slice(6, 9)]

  return (
    <section id="features" className="bg-[#f5f6f9] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
            Core Features
          </span>
        </div>

        <h2
          className="text-[#0d1b2e] font-extrabold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          Everything your ISP needs,<br />
          nothing it doesn't
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mb-10 sm:mb-12 leading-relaxed">
          Nine purpose-built modules covering every part of your ISP billing,
          subscriber management, and network operations.
        </p>

        {/* Grid */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200"
            >
              {row.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
