const steps = [
  {
    n: 1, amber: true,
    title: 'Subscriber makes a payment',
    desc: 'The subscriber pays via M-Pesa STK push. As soon as Safaricom confirms the payment, the transaction is recorded and the credit process begins automatically.',
    badge: 'M-Pesa STK Push',
  },
  {
    n: 2, amber: true,
    title: 'Credits added to account',
    desc: "Credits are immediately added to the subscriber's device account (tracked by MAC address). No admin action needed — it's fully automatic.",
    badge: 'Instant · Auto',
  },
  {
    n: 3, amber: false,
    title: 'Package expires',
    desc: "When the subscriber's data or time package runs out, the system immediately checks whether they have available credits before disconnecting them.",
    badge: 'Smart expiry check',
  },
  {
    n: 4, amber: false,
    title: 'Credits consumed, service continues',
    desc: 'If credits are available, the system deducts them and the subscriber stays connected seamlessly — no disruption, no login screen, no support call.',
    badge: 'Zero interruption',
  },
  {
    n: 5, amber: true,
    title: 'Full ledger updated in real time',
    desc: 'Every credit earned and redeemed is logged with a timestamp and transaction reference. Your team sees current balance, total earned, and total redeemed — instantly.',
    badge: 'Real-time ledger',
  },
]

export default function CreditsHowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f5f0e8] py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">How Credits Work</span>
        </div>
        <h2 className="text-gray-900 font-extrabold leading-tight mb-14 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Five steps from payment<br />to uninterrupted service
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[2.15rem] top-10 bottom-10 w-px bg-gray-300" />

          <div className="flex flex-col gap-0">
            {steps.map(({ n, amber, title, desc, badge }, i) => (
              <div key={n} className="flex gap-6 relative pb-10 last:pb-0">
                {/* Circle */}
                <div className={`w-[4.3rem] shrink-0 flex justify-center`}>
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-lg z-10 relative ${
                    amber ? 'bg-amber-500 text-gray-900' : 'bg-gray-900 text-white'
                  }`}>
                    {n}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 pb-2">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{desc}</p>
                  <span className="inline-block border border-gray-300 text-gray-600 text-xs px-3 py-1.5 rounded-lg bg-white font-mono">
                    {badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
