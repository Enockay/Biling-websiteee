const accounts = [
  { mac: 'C2:9C:A8:EF:42:17', phone: '254707267523', current: 10,  earned: 412, redeemed: 402, util: 97.6 },
  { mac: '8C:85:90:4D:17:13', phone: '254796869402', current: 8,   earned: 178, redeemed: 170, util: 95.5 },
]

function UtilBar({ pct }) {
  return (
    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, background: 'linear-gradient(to right, #06b6d4, #22c55e, #f59e0b)' }}
      />
    </div>
  )
}

export default function CreditsHero({ onHowItWorks }) {
  const totalEarned   = accounts.reduce((s, a) => s + a.earned, 0)
  const totalRedeemed = accounts.reduce((s, a) => s + a.redeemed, 0)
  const totalAvail    = totalEarned - totalRedeemed

  return (
    <section className="bg-[#0d0d0d] py-14 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="inline-flex items-center gap-2 border border-amber-700/50 bg-amber-500/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">Finance · Subscriber Credits</span>
            </div>

            <h1 className="font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
              <span className="text-white">Pay once.</span><br />
              <span className="text-amber-500">Stay connected<br />longer.</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Every M-Pesa payment earns credits. When a subscriber's package expires,
              their credits kick in automatically — zero interruption, zero support calls,
              zero frustration.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onHowItWorks}
                className="px-7 py-3.5 bg-amber-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-amber-400 transition-colors"
              >
                See How It Works
              </button>
              <button className="px-7 py-3.5 border border-gray-600 text-white font-medium text-sm rounded-xl hover:border-gray-400 transition-colors">
                Next: Support →
              </button>
            </div>
          </div>

          {/* Right — Live View card */}
          <div className="flex-1 w-full">
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b border-gray-700">
                <span className="text-white font-bold text-base">Credit Accounts — Live View</span>
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-3">
                {accounts.map((acc) => (
                  <div key={acc.mac} className="bg-[#111111] border border-gray-700 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 text-xs font-mono">
                        {acc.mac} · {acc.phone}
                      </span>
                      <span className="text-green-400 text-xs font-semibold">Active</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Current</p>
                        <p className="text-amber-400 font-extrabold text-2xl">{acc.current}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Earned</p>
                        <p className="text-white font-extrabold text-2xl">{acc.earned}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Redeemed</p>
                        <p className="text-white font-extrabold text-2xl">{acc.redeemed}</p>
                      </div>
                    </div>
                    <UtilBar pct={acc.util} />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-gray-600 text-xs">Utilization</span>
                      <span className="text-gray-400 text-xs font-mono">{acc.util}%</span>
                    </div>
                  </div>
                ))}

                {/* Summary row */}
                <div className="bg-[#111111] border border-gray-700 rounded-xl px-4 py-3 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Total Earned</p>
                    <p className="text-amber-400 font-extrabold text-xl">{totalEarned}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Redeemed</p>
                    <p className="text-white font-extrabold text-xl">{totalRedeemed}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Available</p>
                    <p className="text-green-400 font-extrabold text-xl">{totalAvail}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
