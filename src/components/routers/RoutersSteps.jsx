const steps = [
  {
    n: '01',
    topColor: 'bg-cyan-500',
    icon: '⚙️',
    title: 'Fill in the network settings',
    desc: "Enter your router's name and choose a client network range — from /24 (254 addresses) up to /19 (8,190+ addresses). That's all the info the system needs.",
  },
  {
    n: '02',
    topColor: 'bg-amber-500',
    icon: '⚡',
    title: 'Generate the command',
    desc: 'Click Generate Command. The system produces a single terminal command pre-configured with your hotspot profile, IP pool, DHCP server, PPPoE settings, and API credentials.',
  },
  {
    n: '03',
    topColor: 'bg-green-500',
    icon: '✅',
    title: 'Paste and go',
    desc: 'Open your MikroTik terminal via Winbox or SSH, paste the command, and press Enter. The router configures itself in seconds and appears live in your dashboard.',
  },
]

export default function RoutersSteps() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-green-600 inline-block" />
          <span className="text-green-700 text-xs font-bold tracking-widest uppercase">Auto-Configure · 3 Steps</span>
        </div>
        <h2 className="text-gray-900 font-extrabold leading-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          From box to billing<br />in under 5 minutes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {steps.map(({ n, topColor, icon, title, desc }) => (
            <div key={n} className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
              <div className={`h-1.5 w-full ${topColor}`} />
              <div className="p-7 flex flex-col flex-1">
                <span className="text-gray-300 font-extrabold text-5xl leading-none mb-6 select-none">{n}</span>
                <span className="text-3xl mb-5">{icon}</span>
                <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
