const steps = [
  {
    n: 1,
    title: 'Subscriber makes a payment',
    desc: "M-Pesa STK push completes — credits are automatically added to the subscriber's account based on the amount paid.",
  },
  {
    n: 2,
    title: 'Package expires',
    desc: 'The system checks available credit balance automatically — no admin action required, no support call needed.',
  },
  {
    n: 3,
    title: 'Credits consumed, service continues',
    desc: 'Credits are deducted and the subscriber remains connected. The credit ledger is updated in real time with every transaction.',
  },
]

const accounts = [
  { mac: '92:7E:44:D0:C9:5C', phone: '254798754546', used: 0,  total: 335, remaining: 335 },
  { mac: 'C2:9C:A8:EF:42:17', phone: '254707267523', used: 10, total: 412, remaining: 402 },
  { mac: '8C:85:90:4D:17:13', phone: '254796869402', used: 8,  total: 178, remaining: 170 },
  { mac: '38:BA:F8:C2:EA:7A', phone: '254796869402', used: 10, total: 10,  remaining: 0   },
]

function Badge({ value, variant }) {
  let cls = ''
  if (variant === 'used') {
    cls = value === 0 ? 'border border-red-400 text-red-400' : 'border border-green-400 text-green-400'
  } else if (variant === 'total') {
    cls = 'border border-amber-400 text-amber-400'
  } else {
    cls = value === 0 ? 'text-gray-500' : 'border border-amber-400 text-amber-400'
  }
  return (
    <span className={`inline-block min-w-[2rem] text-center text-xs font-mono px-1.5 py-0.5 rounded ${cls}`}>
      {value}
    </span>
  )
}

export default function CreditsManagement() {
  const utilization = Math.round((907 / 917) * 100)

  return (
    <section id="credits" className="bg-[#0d1b2e] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="w-full lg:flex-1 lg:max-w-lg">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-amber-500 inline-block" />
              <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
                Credits Management
              </span>
            </div>
            <h2
              className="text-white font-extrabold leading-tight mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Pay once.<br />Stay connected longer.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10">
              Every payment earns credits. Credits bridge the gap when packages expire —
              keeping subscribers online without interruption.
            </p>

            {/* Steps */}
            <div className="flex flex-col">
              {steps.map(({ n, title, desc }, i) => (
                <div
                  key={n}
                  className={`flex gap-4 sm:gap-5 pb-8 ${
                    i < steps.length - 1 ? 'border-b border-gray-700 mb-8' : ''
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-lg bg-gray-800 border border-gray-600 flex items-center justify-center text-amber-500 font-bold text-sm">
                    {n}
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm sm:text-base mb-1">{title}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Credit Accounts card */}
          <div className="w-full lg:flex-1">
            <div className="bg-[#111e30] border border-gray-700 rounded-2xl overflow-hidden">
              {/* Card header */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-700">
                <span className="text-white font-bold text-base">Credit Accounts</span>
                <button className="px-3 sm:px-4 py-2 bg-amber-500 text-gray-900 text-xs sm:text-sm font-bold rounded-md hover:bg-amber-400 transition-colors">
                  + Add Bonus
                </button>
              </div>

              {/* Search bar */}
              <div className="px-4 sm:px-6 py-3 border-b border-gray-700">
                <div className="h-9 bg-white rounded-md w-full" />
              </div>

              {/* Table — horizontal scroll on mobile */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[360px]">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left px-4 sm:px-6 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wide">MAC</th>
                      <th className="text-left px-3 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wide">Phone</th>
                      <th className="px-2 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wide text-center">Used</th>
                      <th className="px-2 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wide text-center">Total</th>
                      <th className="px-2 py-2 text-gray-500 text-xs font-semibold uppercase tracking-wide text-center">Left</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {accounts.map((row) => (
                      <tr key={row.mac} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-4 sm:px-6 py-3 font-mono text-xs text-gray-300 whitespace-nowrap">{row.mac}</td>
                        <td className="px-3 py-3 text-gray-300 text-xs whitespace-nowrap">{row.phone}</td>
                        <td className="px-2 py-3 text-center"><Badge value={row.used} variant="used" /></td>
                        <td className="px-2 py-3 text-center"><Badge value={row.total} variant="total" /></td>
                        <td className="px-2 py-3 text-center"><Badge value={row.remaining} variant="remaining" /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="px-4 sm:px-6 py-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs font-mono mb-2">
                  Total utilization · 907 of 917 credits redeemed
                </p>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${utilization}%`, background: 'linear-gradient(to right, #3b82f6, #f59e0b)' }}
                  />
                </div>
                <p className="text-gray-500 text-xs font-mono mt-2">
                  {utilization}% redeemed across all accounts
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
