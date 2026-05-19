const conversations = [
  {
    id: 1,
    phone: '+254716071032',
    router: 'KituiMikrotik',
    preview: '✅ Package activated successfully',
    time: '03:23',
    active: true,
  },
  {
    id: 2,
    phone: '+254733604042',
    router: 'enockMikrotik',
    preview: 'Refund processed successfully',
    time: '11:42',
    active: false,
  },
]

const messages = [
  { from: 'subscriber', text: '0716071032', time: '03:20' },
  { from: 'agent', text: 'Hello! I can see your payment was received. Checking your session on KituiMikrotik now — one moment.', time: '03:21' },
  { from: 'agent', text: '✅ Package activated! Your session is live. Please disconnect and reconnect to the hotspot — you should be online within seconds.', time: '03:21' },
  { from: 'subscriber', text: 'Working perfectly now, thank you! 🙏', time: '03:23' },
]

export default function ChatSupport() {
  return (
    <section id="support" className="bg-[#f5f6f9] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">Chat Support</span>
        </div>
        <h2 className="text-[#0d1b2e] font-extrabold leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Support built into the platform
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mb-10 sm:mb-12 leading-relaxed">
          Subscribers message your team directly — conversations tied to their account, router,
          and payment history for instant context.
        </p>

        {/* Chat UI */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm flex flex-col md:flex-row min-h-[420px] sm:min-h-[500px]">

          {/* Sidebar */}
          <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col shrink-0">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-bold text-[#0d1b2e] text-base">Conversations</span>
              <span className="w-6 h-6 rounded-full bg-amber-500 text-gray-900 text-xs font-bold flex items-center justify-center">2</span>
            </div>
            {/* Search */}
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
                <span className="text-gray-400 text-sm">Search conversations...</span>
              </div>
            </div>
            {/* Conversation list */}
            <div className="flex flex-col divide-y divide-gray-100 overflow-y-auto">
              {conversations.map((c) => (
                <div
                  key={c.id}
                  className={`px-4 py-3.5 cursor-pointer transition-colors ${
                    c.active ? 'border-l-4 border-amber-500 bg-amber-50/50' : 'border-l-4 border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[#0d1b2e] font-semibold text-sm">{c.phone}</span>
                    <span className="text-gray-400 text-xs">{c.time}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-1">Router: {c.router}</p>
                  <p className="text-gray-600 text-xs truncate">{c.preview}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Chat header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0d1b2e] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  47
                </div>
                <div>
                  <p className="text-[#0d1b2e] font-bold text-sm">+254716071032</p>
                  <p className="text-gray-400 text-xs font-mono">Router: KituiMikrotik</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                <span className="text-green-600 text-sm font-medium">Online</span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 flex flex-col gap-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.from === 'agent' ? 'items-end' : 'items-start'}`}>
                  {msg.from === 'subscriber' ? (
                    <div className="bg-gray-100 border border-gray-200 rounded-xl px-4 py-2.5 max-w-[80%] sm:max-w-md">
                      <p className="text-gray-800 text-sm">{msg.text}</p>
                    </div>
                  ) : (
                    <div className="bg-[#0d1b2e] rounded-xl px-4 py-3 max-w-[80%] sm:max-w-md">
                      <p className="text-white text-sm leading-relaxed">{msg.text}</p>
                    </div>
                  )}
                  <span className="text-gray-400 text-xs mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 sm:px-5 py-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-400"
                />
                <button className="px-5 py-2.5 bg-[#0d1b2e] text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors shrink-0">
                  Send
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
