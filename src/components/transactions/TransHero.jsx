const statCards = [
  { label: 'TOTAL TRANSACTIONS', value: '35',      sub: 'All time · all statuses',  valueClass: 'text-red-500' },
  { label: 'COMPLETED',          value: '15',      sub: '↑ 42.9% success rate',     valueClass: 'text-green-600' },
  { label: 'UNFINISHED',         value: '20',      sub: 'Requires attention',        valueClass: 'text-amber-500' },
  { label: 'COLLECTED',          value: 'KES 145', sub: 'Completed payments',        valueClass: 'text-teal-600' },
]

const tableRows = [
  { id: 'ws_CO_1605…9402', amount: 'KES 10', code: 'UEG5R4JWRW', status: 'COMPLETED', statusClass: 'bg-green-100 text-green-700' },
  { id: 'ws_CO_1304…9402', amount: 'KES 10', code: 'UDD5R056RC', status: 'COMPLETED', statusClass: 'bg-green-100 text-green-700' },
  { id: 'ws_CO_1302…9402', amount: 'KES 10', code: 'N/A',        status: 'FAILED',    statusClass: 'bg-red-100 text-red-600',   retry: true },
  { id: 'ws_CO_1302…9402', amount: 'KES 5',  code: 'UBD5R6N9BR', status: 'COMPLETED', statusClass: 'bg-green-100 text-green-700' },
  { id: 'ws_CO_1301…7523', amount: 'KES 20', code: 'Pending',    status: 'PENDING',   statusClass: 'bg-amber-100 text-amber-700', codeClass: 'text-amber-500 italic' },
]

export default function TransHero({ onDemo }) {
  return (
    <section className="bg-[#f5f0e8] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-300 bg-white rounded-full px-4 py-1.5 mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
              <span className="text-gray-600 text-xs font-semibold tracking-widest uppercase">Finance · Audit Trail</span>
            </div>

            {/* Heading */}
            <h1 className="text-gray-900 font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Every payment,<br />
              <span className="text-red-500">fully tracked</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Complete M-Pesa transaction history with real-time status, checkout IDs, and
              one-click retry for failed payments. No payment ever falls through the cracks.
            </p>

            {/* Status pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-medium">✓ Completed</span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-200 rounded-full text-red-600 text-xs font-medium">✕ Failed + Retry</span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-600 text-xs font-medium">⏳ Unfinished</span>
            </div>
            <div className="mb-8">
              <span className="px-3 py-1.5 border border-gray-300 rounded-full text-gray-600 text-xs font-mono bg-white">35 transaction types</span>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onDemo}
                className="px-6 py-3 bg-gray-900 text-white font-bold text-sm rounded-lg hover:bg-gray-700 transition-colors"
              >
                See Live Demo
              </button>
              <button className="px-6 py-3 border border-gray-400 text-gray-700 font-medium text-sm rounded-lg hover:border-gray-600 transition-colors">
                Next: Credits →
              </button>
            </div>
          </div>

          {/* Right — stat cards + table */}
          <div className="flex-1 w-full">
            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
              {statCards.map(({ label, value, sub, valueClass }) => (
                <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">{label}</p>
                  <p className={`font-extrabold text-2xl sm:text-3xl leading-tight mb-1 ${valueClass}`}>{value}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              ))}
            </div>

            {/* Mini table */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm min-w-[480px]">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      {['CHECKOUT ID', 'AMOUNT', 'M-PESA CODE', 'STATUS'].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-gray-400 tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {tableRows.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-mono text-xs text-gray-600">{row.id}</td>
                        <td className="px-4 py-3 font-bold text-gray-900 text-sm">{row.amount}</td>
                        <td className={`px-4 py-3 text-xs font-mono ${row.codeClass || 'text-blue-500'}`}>{row.code}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <span className={`px-2.5 py-1 rounded text-xs font-bold ${row.statusClass}`}>
                              • {row.status}
                            </span>
                            {row.retry && (
                              <button className="px-2 py-1 bg-gray-100 border border-gray-200 text-gray-600 text-xs rounded hover:bg-gray-200 transition-colors flex items-center gap-1">
                                ↺ Retry
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
