const features = [
  {
    icon: '💬',
    title: 'Real-time messaging',
    desc: 'Conversations appear instantly on both sides. No refresh needed — your team and subscribers are always in sync.',
  },
  {
    icon: '👤',
    title: 'Full subscriber context',
    desc: "See the subscriber's router, package, payment history, and credit balance right inside the conversation window.",
  },
  {
    icon: '📋',
    title: 'Conversation history',
    desc: 'Every message is logged and searchable. Your team picks up any conversation with full context — even if a different agent handled it before.',
  },
  {
    icon: '📝',
    title: 'Open · Resolved · Pending',
    desc: "Filter conversations by status. Know exactly what's open, what's resolved, and what needs a follow-up.",
  },
]

export default function SupportFeatures() {
  return (
    <section className="bg-[#ede8e0] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-cyan-600 inline-block" />
          <span className="text-cyan-700 text-xs font-bold tracking-widest uppercase">Features</span>
        </div>
        <h2 className="text-gray-900 font-extrabold leading-tight mb-10 sm:mb-12" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Everything your support team needs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-7 flex flex-col gap-4 hover:shadow-md transition-shadow">
              <span className="text-3xl">{icon}</span>
              <div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
