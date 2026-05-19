const cards = [
  {
    icon: '📞',
    title: 'Fewer support calls',
    desc: 'Subscribers don\'t call when their internet keeps working. Credits bridge the gap silently — your support team handles fewer "why is my internet off?" tickets.',
  },
  {
    icon: '🔄',
    title: 'Reduced subscriber churn',
    desc: 'Subscribers who stay connected during package expiry are far more likely to renew. Credits act as a loyalty buffer that keeps them on your network.',
  },
  {
    icon: '⚡',
    title: 'Zero manual work',
    desc: 'Credits are earned, tracked, and consumed automatically. Your team doesn\'t need to touch anything — the system handles the entire lifecycle.',
  },
  {
    icon: '🎁',
    title: 'Admin bonus credits',
    desc: 'Super admins can manually add bonus credits to any account — useful for goodwill gestures, compensation for outages, or promotional rewards.',
  },
  {
    icon: '📊',
    title: 'Full utilization tracking',
    desc: 'See exactly how many credits have been earned vs redeemed across all accounts. A 97%+ utilization rate means your subscribers value every credit.',
  },
  {
    icon: '🔍',
    title: 'Per-device tracking',
    desc: 'Credits are tracked by MAC address — so each device on a subscriber\'s account has its own independent credit balance and history.',
  },
]

export default function CreditsWhyItMatters() {
  return (
    <section className="bg-[#ede8e0] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header — two-column on lg */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 sm:mb-16">
          <div className="lg:max-w-lg">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-violet-500 inline-block" />
              <span className="text-violet-600 text-xs font-bold tracking-widest uppercase">Why It Matters</span>
            </div>
            <h2 className="text-gray-900 font-extrabold leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Better for subscribers.<br />Better for your business.
            </h2>
          </div>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed lg:max-w-sm lg:pt-16">
            The credit system reduces churn, reduces support calls, and keeps your subscribers
            loyal — all without any manual work from your team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {cards.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
