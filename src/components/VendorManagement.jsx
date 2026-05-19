const billingStats = [
  { label: 'BILLING PLAN',   value: 'Monthly /mo',  style: 'text-[#0d1b2e] font-bold text-xl sm:text-2xl' },
  { label: 'MONTHLY AMOUNT', value: 'KES 10',        style: 'text-amber-500 font-bold text-xl sm:text-2xl' },
  { label: 'NEXT DUE DATE',  value: 'Jun 16, 2026',  sub: '28 days remaining', style: 'text-[#0d1b2e] font-bold text-xl sm:text-2xl' },
  { label: 'ACCOUNT STATUS', value: '● Active',       sub: 'Good standing',    style: 'text-green-600 font-bold text-xl sm:text-2xl' },
]

const invoices = [
  { id: 'INV-MP7RXUAX-670V', amount: 'KES 10', period: 'Apr 13 – May 16, 2026', status: 'PAID' },
  { id: 'INV-MNWPHKQZ-0APD', amount: 'KES 10', period: 'Mar 13 – Apr 13, 2026', status: 'PAID' },
  { id: 'INV-MM0ELBC1-B9X0', amount: 'KES 10', period: 'Feb 13 – Mar 13, 2026', status: 'PAID' },
  { id: 'INV-JAN2026-001',   amount: 'KES 10', period: 'Jan 13 – Feb 13, 2026', status: 'PAID' },
]

export default function VendorManagement() {
  return (
    <section id="billing" className="bg-[#f5f6f9] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Vendor Management</span>
        </div>
        <h2 className="text-[#0d1b2e] font-extrabold leading-tight mb-10 sm:mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Your platform billing,<br />always in order
        </h2>

        {/* Billing stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {billingStats.map(({ label, value, sub, style }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">{label}</p>
              <p className={style}>{value}</p>
              {sub && <p className="text-gray-400 text-xs mt-1">{sub}</p>}
            </div>
          ))}
        </div>

        {/* Bottom two columns */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Invoice History */}
          <div className="flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-100">
              <span className="text-[#0d1b2e] font-bold text-base">Invoice History</span>
              <button className="text-blue-500 text-sm hover:text-blue-600 transition-colors flex items-center gap-1">
                ↻ Refresh
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[340px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left px-5 sm:px-6 py-3 text-gray-400 text-xs font-semibold uppercase tracking-wide">Invoice</th>
                    <th className="text-left px-3 py-3 text-gray-400 text-xs font-semibold uppercase tracking-wide">Amount</th>
                    <th className="text-left px-3 py-3 text-gray-400 text-xs font-semibold uppercase tracking-wide hidden sm:table-cell">Period</th>
                    <th className="text-left px-3 py-3 text-gray-400 text-xs font-semibold uppercase tracking-wide">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 sm:px-6 py-3.5">
                        <span className="text-blue-500 text-xs font-mono hover:underline cursor-pointer">{inv.id}</span>
                      </td>
                      <td className="px-3 py-3.5 text-[#0d1b2e] font-medium text-sm whitespace-nowrap">{inv.amount}</td>
                      <td className="px-3 py-3.5 text-gray-500 text-xs whitespace-nowrap hidden sm:table-cell">{inv.period}</td>
                      <td className="px-3 py-3.5">
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                          {inv.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Payment */}
          <div className="w-full lg:w-80 shrink-0 bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-5">
            <h3 className="text-[#0d1b2e] font-bold text-base">Quick Payment</h3>

            {/* Due notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Next payment due{' '}
                <span className="text-amber-600 font-semibold">Jun 16, 2026</span>. Pay early to
                avoid any service interruptions. Your account is currently in good standing.
              </p>
            </div>

            {/* Pay button */}
            <button className="w-full py-3 bg-[#0d1b2e] text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              📱 Pay with M-Pesa STK Push
            </button>

            {/* Record manual */}
            <button className="w-full py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              🧾 Record Manual Payment
            </button>

            {/* Sub-accounts */}
            <div className="border-t border-gray-100 pt-5">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Sub-Accounts</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Create and manage sub-admin accounts with restricted access. Staff can manage
                subscribers without ever seeing your financial data or cash reports.
              </p>
              <button className="w-full py-2.5 bg-[#0d1b2e] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Manage Sub-Accounts
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
