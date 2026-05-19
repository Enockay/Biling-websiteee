const invoices = [
  { id: 'INV-MP7RXUAX-670V', amount: 'KES 10', status: 'PAID',     statusClass: 'bg-green-500/20 text-green-400' },
  { id: 'INV-MNWPHKQZ-0APD', amount: 'KES 10', status: 'PAID',     statusClass: 'bg-green-500/20 text-green-400' },
  { id: 'INV-MM0ELBC1-B9X0', amount: 'KES 10', status: 'PAID',     statusClass: 'bg-green-500/20 text-green-400' },
  { id: 'INV-JUN2026-NEXT',  amount: 'KES 10', status: 'UPCOMING', statusClass: 'bg-amber-500/20 text-amber-400' },
]

export default function BillingHero({ onTrial }) {
  return (
    <section className="bg-[#faf9f7] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="inline-flex items-center border border-gray-300 rounded-lg px-4 py-1.5 mb-8">
              <span className="text-gray-600 text-xs font-bold tracking-widest uppercase">Vendor · Billing · Invoices · STK Push</span>
            </div>

            <h1 className="font-extrabold leading-tight mb-6 text-gray-900" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
              Platform billing<br />that<br />
              <span className="text-amber-500">never surprises</span><br />
              you
            </h1>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Monthly invoices, M-Pesa payments, sub-account management,
              and Safaricom Daraja STK push configuration — all under one
              roof. Know exactly what you owe and when.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={onTrial} className="px-7 py-3.5 bg-amber-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors">
                Start Free Trial
              </button>
              <button className="px-7 py-3.5 border border-gray-300 text-gray-700 font-medium text-sm rounded-xl hover:border-gray-400 transition-colors">
                Configure M-Pesa →
              </button>
            </div>
          </div>

          {/* Right — Billing card mockup */}
          <div className="flex-1 w-full">
            <div className="bg-[#111111] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-extrabold text-sm">B</span>
                  </div>
                  <span className="text-white font-bold text-base">Blackie Networks</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-400 font-medium">● Active</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-green-400 font-medium">Good standing</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-px bg-gray-800 border-b border-gray-800">
                {[
                  { label: 'PLAN',      value: 'Monthly',    valueClass: 'text-white' },
                  { label: 'AMOUNT',    value: 'KES\n10',    valueClass: 'text-amber-400' },
                  { label: 'NEXT DUE',  value: 'Jun 16,\n2026', valueClass: 'text-white' },
                  { label: 'DAYS LEFT', value: '28',         valueClass: 'text-green-400' },
                ].map(({ label, value, valueClass }) => (
                  <div key={label} className="bg-[#1a1a1a] px-4 py-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">{label}</p>
                    <p className={`font-bold text-lg leading-tight whitespace-pre-line ${valueClass}`}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Payment buttons */}
              <div className="grid grid-cols-2 gap-3 px-6 py-5 border-b border-gray-800">
                <button className="flex items-center justify-center gap-2 py-3 bg-amber-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors">
                  <span>📱</span> Pay with M-Pesa
                </button>
                <button className="flex items-center justify-center gap-2 py-3 bg-[#2a2a2a] border border-gray-700 text-gray-300 font-medium text-sm rounded-xl hover:bg-[#333] transition-colors">
                  <span>🧾</span> Manual Payment
                </button>
              </div>

              {/* Invoice table */}
              <div className="px-6 py-4">
                <div className="grid grid-cols-3 mb-3 px-1">
                  <span className="text-gray-500 text-xs uppercase tracking-wide">Invoice</span>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">Amount</span>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">Status</span>
                </div>
                <div className="space-y-1">
                  {invoices.map(({ id, amount, status, statusClass }) => (
                    <div key={id} className="grid grid-cols-3 items-center bg-[#1a1a1a] rounded-lg px-3 py-3">
                      <span className="text-gray-300 text-xs font-mono truncate pr-2">{id}</span>
                      <span className="text-gray-200 text-sm font-semibold">{amount}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded w-fit ${statusClass}`}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
