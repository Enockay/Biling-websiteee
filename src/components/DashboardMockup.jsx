const sidebarLinks = [
  { label: 'Dashboard', active: true },
  { label: 'Chat Rooms' },
  { label: 'Hotspot Users' },
  { label: 'Transactions' },
  { label: 'Credits' },
  { label: 'Analytics' },
  { label: 'PPPoE Users' },
  { label: 'Routers' },
  { label: 'Vouchers' },
]

const stats = [
  { label: 'TOTAL REVENUE', value: 'Ksh 10', sub: '↑ +18.4% today', subColor: 'text-green-500', valueColor: 'text-amber-500' },
  { label: 'TRANSACTIONS',  value: '35',     sub: '↑ 10 avg',       subColor: 'text-blue-500',  valueColor: 'text-blue-600' },
  { label: 'TOTAL CLIENTS', value: '1',      sub: '↑ +12.5% month', subColor: 'text-green-500', valueColor: 'text-gray-800' },
  { label: 'DAYS TO EXPIRY',value: '36',     sub: 'Good standing',  subColor: 'text-green-500', valueColor: 'text-amber-500' },
]

const chartBars = [
  { height: 30, color: 'bg-gray-300' },
  { height: 50, color: 'bg-gray-400' },
  { height: 40, color: 'bg-gray-300' },
  { height: 75, color: 'bg-amber-500' },
  { height: 45, color: 'bg-gray-400' },
  { height: 35, color: 'bg-gray-300' },
]

export default function DashboardMockup() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 text-xs">
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-gray-100 bg-gray-50 gap-2">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
        </div>
        <span className="text-gray-500 text-xs font-medium truncate text-center flex-1">
          Business Dashboard · Blackie Networks
        </span>
        <span className="text-gray-400 text-xs shrink-0 hidden sm:inline">enockaymwema</span>
      </div>

      {/* Body */}
      <div className="flex min-h-[280px] sm:min-h-[320px]">
        {/* Sidebar — hidden on xs, visible from sm */}
        <div className="hidden sm:flex w-28 md:w-32 bg-gray-900 flex-col py-3 shrink-0">
          {sidebarLinks.map(({ label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer ${
                active ? 'bg-gray-800' : 'hover:bg-gray-800'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${active ? 'bg-amber-500' : 'bg-gray-600'}`} />
              <span className={`text-xs truncate ${active ? 'text-white font-medium' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-2 sm:p-3 bg-white min-w-0">
          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            {stats.map(({ label, value, sub, subColor, valueColor }) => (
              <div key={label} className="border border-gray-100 rounded-lg p-2 sm:p-2.5 bg-white shadow-sm">
                <p className="text-gray-400 uppercase tracking-wide mb-1 text-[8px] sm:text-[9px]">{label}</p>
                <p className={`font-bold text-sm sm:text-base leading-tight ${valueColor}`}>{value}</p>
                <p className={`text-[10px] mt-0.5 ${subColor}`}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="border border-gray-100 rounded-lg p-2 sm:p-2.5 bg-white shadow-sm">
            <p className="text-gray-500 mb-2 text-[8px] sm:text-[9px]">Daily Income Trend (KES)</p>
            <div className="flex items-end gap-1 sm:gap-1.5 h-10 sm:h-14">
              {chartBars.map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${bar.color}`}
                  style={{ height: `${bar.height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
