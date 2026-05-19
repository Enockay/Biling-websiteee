const conversations = [
  { phone: '+254716071032', router: 'KituiMikrotik', preview: '✅ Package activated!', active: true },
  { phone: '+254733604042', router: 'enockMikrotik',  preview: 'Refund processed...',  active: false },
  { phone: '+254798754546', router: 'Kalundu',        preview: 'Thank you! 🙏',         active: false },
]

const messages = [
  { from: 'subscriber', text: "Hi, I paid KES 10 but my internet isn't connecting. Number is 0716071032." },
  { from: 'agent',      text: 'Hello! Payment confirmed. Checking your session on KituiMikrotik now…' },
  { from: 'system',     text: '✦ Session checked · Package activation triggered' },
  { from: 'agent',      text: '✅ Package activated! Disconnect and reconnect to the hotspot — you\'ll be online within seconds.' },
]

export default function SupportHero({ onDemo }) {
  return (
    <section className="bg-[#f5f0e8] py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="inline-flex items-center gap-2 border border-gray-300 bg-white rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              <span className="text-gray-600 text-xs font-semibold tracking-widest uppercase">Built-In · Real-Time · Logged</span>
            </div>

            <h1 className="text-gray-900 font-extrabold leading-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Support built<br />into the{' '}
              <span className="text-cyan-600">platform</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
              Your subscribers message your team directly — no WhatsApp groups, no
              third-party helpdesk. Every conversation is tied to their account, router,
              and payment history for instant context.
            </p>

            <div className="flex flex-wrap gap-3">
              <button onClick={onDemo} className="px-7 py-3.5 bg-cyan-700 text-white font-bold text-sm rounded-xl hover:bg-cyan-600 transition-colors">
                See Live Demo
              </button>
              <button className="px-7 py-3.5 border border-gray-400 text-gray-700 font-medium text-sm rounded-xl hover:border-gray-600 transition-colors">
                Next: Routers →
              </button>
            </div>
          </div>

          {/* Right — Chat window mockup */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              {/* macOS title bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-gray-500 text-xs font-medium">Chat Support — Blackie Networks</span>
                <span className="text-gray-400 text-xs hidden sm:block">enockaymwema</span>
              </div>

              <div className="flex" style={{ minHeight: '400px' }}>
                {/* Sidebar */}
                <div className="w-44 sm:w-52 border-r border-gray-100 flex flex-col shrink-0">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <span className="font-bold text-gray-900 text-sm">Chats</span>
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-gray-900 text-xs font-bold flex items-center justify-center">2</span>
                  </div>
                  {conversations.map((c, i) => (
                    <div key={i} className={`px-3 py-3 border-l-2 cursor-pointer ${c.active ? 'border-cyan-500 bg-cyan-50/50' : 'border-transparent hover:bg-gray-50'}`}>
                      <p className="text-gray-900 font-semibold text-xs">{c.phone}</p>
                      <p className="text-gray-400 text-xs mb-0.5">{c.router}</p>
                      <p className="text-gray-500 text-xs truncate">{c.preview}</p>
                    </div>
                  ))}
                </div>

                {/* Chat panel */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Chat header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-gray-900 font-bold text-xs shrink-0">47</div>
                      <div>
                        <p className="text-gray-900 font-bold text-xs">+254716071032</p>
                        <p className="text-gray-400 text-xs">KituiMikrotik · Hotspot</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-green-600 text-xs font-medium">Online</span>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 px-3 sm:px-4 py-3 flex flex-col gap-2.5 overflow-y-auto">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.from === 'agent' ? 'justify-end' : 'justify-start'}`}>
                        {msg.from === 'system' ? (
                          <div className="bg-cyan-50 border border-cyan-200 rounded-lg px-3 py-2 max-w-[85%]">
                            <p className="text-cyan-700 text-xs font-mono">{msg.text}</p>
                          </div>
                        ) : msg.from === 'agent' ? (
                          <div className="bg-[#1e3a5f] rounded-xl px-3 py-2.5 max-w-[85%]">
                            <p className="text-white text-xs leading-relaxed">{msg.text}</p>
                          </div>
                        ) : (
                          <div className="bg-gray-100 border border-gray-200 rounded-xl px-3 py-2.5 max-w-[85%]">
                            <p className="text-gray-800 text-xs leading-relaxed">{msg.text}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="px-3 sm:px-4 py-3 border-t border-gray-100 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                    />
                    <button className="px-4 py-2 bg-[#1e3a5f] text-white text-xs font-bold rounded-lg hover:bg-[#16304f] transition-colors shrink-0">
                      Send
                    </button>
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
