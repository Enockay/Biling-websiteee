const features = [
  {
    n: '01', icon: '🧾',
    title: 'Full audit trail',
    desc: 'Every M-Pesa payment is stamped with a Checkout ID, timestamp, amount, router, and M-Pesa confirmation code — nothing is ever lost.',
  },
  {
    n: '02', icon: '↺',
    title: 'One-click retry',
    desc: 'Failed transactions can be retried instantly from the dashboard. No need to ask the subscriber to pay again — the system handles it.',
  },
  {
    n: '03', icon: '🔍',
    title: 'Advanced filtering',
    desc: 'Filter by phone number, status, date range, or router. Find any transaction in seconds across your entire history.',
  },
  {
    n: '04', icon: '📊',
    title: 'Status tracking',
    desc: 'Completed, failed, pending, and unfinished — every transaction state is tracked and displayed clearly so your team always knows what needs attention.',
  },
  {
    n: '05', icon: '📱',
    title: 'M-Pesa native',
    desc: "Powered directly by the Safaricom Daraja API. STK push payments auto-match to subscriber accounts the moment they're confirmed.",
  },
  {
    n: '06', icon: '📥',
    title: 'Export to CSV',
    desc: 'Download your full transaction history as a CSV file for accounting, reconciliation, or reporting to your finance team.',
  },
]

export default function TransFeatures() {
  return (
    <section className="bg-[#111111] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">What's Included</span>
        </div>
        <h2 className="font-extrabold leading-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          <span className="text-white">Everything you need to</span><br />
          <span className="text-amber-500">track every shilling</span>
        </h2>

        {/* Grid */}
        <div className="border border-gray-700 rounded-2xl overflow-hidden divide-y divide-gray-700">
          {[features.slice(0, 3), features.slice(3, 6)].map((row, ri) => (
            <div
              key={ri}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-700"
            >
              {row.map(({ n, icon, title, desc }) => (
                <div key={n} className="p-7 sm:p-8 flex flex-col">
                  <span className="text-amber-500 text-xs font-bold font-mono mb-4">{n}</span>
                  <span className="text-2xl mb-5">{icon}</span>
                  <h3 className="text-white font-bold text-base sm:text-lg mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
