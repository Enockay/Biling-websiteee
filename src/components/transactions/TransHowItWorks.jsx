const steps = [
  {
    n: '01',
    title: 'Subscriber pays',
    desc: 'The subscriber initiates an M-Pesa STK push from their phone. The payment is processed by Safaricom Daraja.',
    badge: 'STK Push',
  },
  {
    n: '02',
    title: 'Transaction stamped',
    desc: 'A Checkout ID, M-Pesa code, amount, and timestamp are recorded automatically. The transaction appears in your dashboard instantly.',
    badge: 'Auto-recorded',
  },
  {
    n: '03',
    title: 'Package activated',
    desc: "The subscriber's internet package is activated on the linked MikroTik router. Their credits are updated in the same transaction.",
    badge: 'Auto-activation',
  },
  {
    n: '04',
    title: 'Failed? Retry instantly',
    desc: 'If a payment fails, your team sees it immediately with a one-click Retry button — no manual re-entry, no subscriber friction.',
    badge: 'One-click retry',
  },
]

export default function TransHowItWorks() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-red-500 inline-block" />
          <span className="text-red-500 text-xs font-bold tracking-widest uppercase">How It Works</span>
        </div>
        <h2
          className="text-gray-900 font-extrabold leading-tight mb-12 sm:mb-16"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          From M-Pesa to your dashboard<br className="hidden sm:block" /> in seconds
        </h2>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map(({ n, title, desc, badge }) => (
            <div key={n} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col">
              <span className="text-gray-300 font-extrabold text-5xl leading-none mb-6 select-none">{n}</span>
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
              <div className="mt-5">
                <span className="inline-block border border-gray-300 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-50">
                  {badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
