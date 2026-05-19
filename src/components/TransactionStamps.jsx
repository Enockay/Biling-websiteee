const transactions = [
  { id: 'ws_2Xk9...mP3', phone: '07** *** 421', amount: 'Ksh 500',   package: 'Daily — 1GB',     status: 'completed', time: '2 min ago' },
  { id: 'ws_8Rn2...qL7', phone: '07** *** 803', amount: 'Ksh 1,000', package: 'Weekly — 5GB',    status: 'completed', time: '14 min ago' },
  { id: 'ws_4Hj6...wD1', phone: '07** *** 267', amount: 'Ksh 200',   package: 'Hourly — 500MB',  status: 'failed',    time: '31 min ago' },
  { id: 'ws_9Qm5...tF8', phone: '07** *** 614', amount: 'Ksh 2,000', package: 'Monthly — 20GB',  status: 'completed', time: '1 hr ago' },
  { id: 'ws_3Bv7...rK4', phone: '07** *** 058', amount: 'Ksh 500',   package: 'Daily — 1GB',     status: 'pending',   time: '2 hr ago' },
]

const statusStyle = {
  completed: 'bg-green-100 text-green-700',
  failed:    'bg-red-100   text-red-600',
  pending:   'bg-amber-100 text-amber-700',
}

const tabs = ['All', 'Completed', 'Failed', 'Pending']

export default function TransactionStamps() {
  return (
    <section id="transactions" className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
            Transaction Stamps
          </span>
        </div>

        <h2
          className="text-[#0d1b2e] font-extrabold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          Every payment, fully accounted
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mb-10 sm:mb-12 leading-relaxed">
          35 recorded transactions. Completed, failed, and unfinished — all filterable, all retryable.
        </p>

        {/* Table card */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">

          {/* Header bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 bg-[#0d1b2e]">
            <div className="flex gap-2 flex-wrap">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                    i === 0 ? 'bg-amber-500 text-gray-900' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="px-4 py-1.5 border border-gray-600 text-gray-300 text-xs rounded hover:border-gray-400 transition-colors self-start sm:self-auto">
              Export CSV
            </button>
          </div>

          {/* Table — scrolls horizontally on small screens */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {['Checkout ID', 'Phone', 'Amount', 'Package', 'Status', 'Time', ''].map((h) => (
                    <th key={h} className="text-left px-4 sm:px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 font-mono text-xs text-gray-600 whitespace-nowrap">{tx.id}</td>
                    <td className="px-4 sm:px-6 py-3.5 text-gray-700 whitespace-nowrap">{tx.phone}</td>
                    <td className="px-4 sm:px-6 py-3.5 font-semibold text-[#0d1b2e] whitespace-nowrap">{tx.amount}</td>
                    <td className="px-4 sm:px-6 py-3.5 text-gray-600 text-xs whitespace-nowrap">{tx.package}</td>
                    <td className="px-4 sm:px-6 py-3.5">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize whitespace-nowrap ${statusStyle[tx.status]}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 text-gray-400 text-xs whitespace-nowrap">{tx.time}</td>
                    <td className="px-4 sm:px-6 py-3.5">
                      {tx.status === 'failed' && (
                        <button className="text-xs text-amber-600 font-medium hover:text-amber-500 transition-colors whitespace-nowrap">
                          Retry
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between gap-4">
            <span className="text-xs text-gray-400">Showing 5 of 35 transactions</span>
            <button className="text-xs text-[#0d1b2e] font-semibold hover:text-amber-600 transition-colors whitespace-nowrap">
              View all →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
