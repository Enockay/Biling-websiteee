const terminalLines = [
  { prefix: 'admin @ Kalundu :>', cmd: 'paste generated command', style: 'text-gray-300' },
  { check: true, color: 'text-cyan-400',   text: 'ip pool',      rest: ' created: hs-pool (192.168.3.0/23 · 510 addresses)' },
  { check: true, color: 'text-green-400',  text: 'dhcp-server',  rest: ' configured on ether1' },
  { check: true, color: 'text-amber-400',  text: 'hotspot',      rest: ' profile set: blackie-hs' },
  { check: true, color: 'text-green-400',  text: 'pppoe-server', rest: ' enabled on ether1' },
  { check: true, color: 'text-gray-400',   text: 'firewall',     rest: ' rules applied' },
  { check: true, color: 'text-gray-400',   text: 'api credentials', rest: ' stored securely' },
  { divider: true },
  { success: true, text: '✅ Router configured successfully' },
  { plain: true, text: 'Syncing with Blackie Networks…', style: 'text-gray-500' },
  { check: true, color: 'text-cyan-400',   text: 'Online',       rest: ' and ready to accept subscribers' },
]

const infoFields = [
  { label: 'ROUTER NAME', value: 'Kalundu',        valueClass: 'text-white' },
  { label: 'STATUS',      value: '● Online',        valueClass: 'text-green-400' },
  { label: 'IP POOL',     value: '192.168.3.0/23',  valueClass: 'text-cyan-400 font-mono' },
  { label: 'ADDRESSES',   value: '510 available',   valueClass: 'text-amber-400' },
]

export default function RoutersHero({ onTrial }) {
  return (
    <section className="bg-[#162840] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="inline-flex items-center gap-2 border border-cyan-700/50 bg-cyan-500/10 rounded-lg px-4 py-1.5 mb-8">
              <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">MikroTik · Auto-Configure · One Command</span>
            </div>

            <h1 className="font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}>
              <span className="text-white">Your MikroTik.</span><br />
              <span className="text-cyan-400">Fully managed.</span>
            </h1>

            <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Add a router, fill in two fields, copy one command. Paste it into your MikroTik
              terminal and the router configures itself — hotspot, PPPoE, DHCP, and IP pools
              all set up automatically.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={onTrial} className="px-7 py-3.5 bg-cyan-500 text-gray-900 font-bold text-sm rounded-xl hover:bg-cyan-400 transition-colors">
                Try Auto-Configure
              </button>
              <button className="px-7 py-3.5 border border-blue-600/60 text-white font-medium text-sm rounded-xl hover:border-blue-400 transition-colors">
                Next: Billing →
              </button>
            </div>
          </div>

          {/* Right — Terminal mockup */}
          <div className="flex-1 w-full">
            <div className="bg-[#0d1117] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-700/50">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs font-mono">MikroTik Terminal — Kalundu</span>
                <div className="w-16" />
              </div>

              {/* Terminal output */}
              <div className="px-5 py-4 font-mono text-xs space-y-1">
                {terminalLines.map((line, i) => {
                  if (line.divider) return <div key={i} className="border-t border-gray-700/50 my-2" />
                  if (line.prefix) return (
                    <p key={i} className="text-gray-300">
                      <span className="text-green-400">{line.prefix}</span>{' '}
                      <span className="text-gray-500">{line.cmd}</span>
                    </p>
                  )
                  if (line.success) return <p key={i} className="text-green-400 font-bold">{line.text}</p>
                  if (line.plain)   return <p key={i} className={line.style}>{line.text}</p>
                  return (
                    <p key={i} className="text-gray-400">
                      <span className="text-green-500 mr-1">✓</span>
                      <span className={`font-semibold ${line.color}`}>{line.text}</span>
                      <span className="text-gray-400">{line.rest}</span>
                    </p>
                  )
                })}
              </div>

              {/* Info fields */}
              <div className="grid grid-cols-2 gap-px bg-gray-700/30 border-t border-gray-700/50">
                {infoFields.map(({ label, value, valueClass }) => (
                  <div key={label} className="bg-[#0d1117] px-4 py-3">
                    <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{label}</p>
                    <p className={`text-sm font-semibold ${valueClass}`}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
