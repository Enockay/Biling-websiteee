const actions = [
  {
    icon: '⚡',
    title: 'Activate Package',
    desc: 'Trigger a package activation directly from the chat — no switching screens.',
  },
  {
    icon: '🔄',
    title: 'Check Live Session',
    desc: "See the subscriber's current connection status on their router in real time.",
  },
  {
    icon: '🌐',
    title: 'Add Bonus Credits',
    desc: 'Reward a subscriber with bonus credits as a goodwill gesture — without leaving the chat.',
  },
  {
    icon: '💳',
    title: 'Send Payment Link',
    desc: "Send an M-Pesa STK push link directly to the subscriber's phone to trigger a payment.",
  },
  {
    icon: '📋',
    title: 'View Transactions',
    desc: "Jump to the subscriber's full transaction history with one click — no copy-pasting phone numbers.",
  },
]

export default function SupportActions() {
  return (
    <section className="bg-[#1e3a5f] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <h2 className="text-white font-extrabold leading-tight mb-3" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Actions right inside the chat
        </h2>
        <p className="text-blue-200/70 text-sm sm:text-base mb-12 sm:mb-14">
          Your support agents can resolve issues without leaving the conversation window.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {actions.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#16304f] border border-blue-800/50 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:border-cyan-600/50 hover:bg-[#1a3558] transition-colors"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-blue-200/60 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
