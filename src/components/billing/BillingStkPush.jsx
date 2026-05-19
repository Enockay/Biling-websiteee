const bullets = [
  { icon: '🏛️', text: 'Works with both Paybill and Till Number configurations' },
  { icon: '⚡', text: 'Payment-to-activation takes under 10 seconds end-to-end' },
  { icon: '🔒', text: 'Credentials encrypted at rest — never exposed to sub-admins' },
  { icon: '🔄', text: 'Failed STK push payments auto-recorded for easy retry' },
]

export default function BillingStkPush() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div className="w-full lg:max-w-md shrink-0">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-cyan-600 inline-block" />
              <span className="text-cyan-700 text-xs font-bold tracking-widest uppercase">M-Pesa · Daraja API</span>
            </div>
            <h2 className="text-gray-900 font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Configure STK Push<br />for your subscribers
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10">
              Connect your Safaricom Daraja API credentials once — and M-Pesa
              payments flow automatically for all your subscribers. STK push activates
              packages the moment payment is confirmed.
            </p>

            <ul className="space-y-4">
              {bullets.map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center shrink-0 text-base">{icon}</span>
                  <span className="text-gray-600 text-sm leading-relaxed pt-1.5">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — STK form card */}
          <div className="flex-1 w-full">
            <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-8 shadow-sm">
              <h3 className="text-gray-900 font-bold text-lg mb-7 flex items-center gap-2">
                <span>📱</span> STK Push Configuration
              </h3>

              <div className="space-y-5">
                {[
                  { label: 'BUSINESS SHORT CODE', placeholder: 'e.g. 174379 (Paybill or Till)' },
                  { label: 'M-PESA PASSKEY',       placeholder: 'Your Daraja API passkey' },
                  { label: 'CONSUMER KEY',          placeholder: 'Daraja consumer key' },
                  { label: 'CONSUMER SECRET',       placeholder: 'Daraja consumer secret' },
                  { label: 'CALLBACK URL',          placeholder: 'https://yourplatform.com/mpesa/callback' },
                ].map(({ label, placeholder }) => (
                  <div key={label}>
                    <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">{label}</label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full bg-[#f5f0e8] border-0 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>
                ))}
              </div>

              <button className="mt-7 w-full py-3.5 bg-gray-900 text-white font-bold text-sm rounded-xl hover:bg-gray-700 transition-colors">
                Save STK Configuration
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
