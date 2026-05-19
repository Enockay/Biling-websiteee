import DashboardMockup from './DashboardMockup'
import Stats from './Stats'

export default function Hero({ onTrial, onDemo }) {
  return (
    <section className="bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 sm:pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

          {/* Left */}
          <div className="w-full lg:flex-1 lg:max-w-xl">
            <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block shrink-0" />
              <span className="text-gray-300 text-xs font-medium tracking-widest uppercase">
                ISP · HOTSPOT · PPPOE · MIKROTIK
              </span>
            </div>

            <h1
              className="text-white font-extrabold leading-tight mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}
            >
              The{' '}
              <span className="text-amber-500">billing<br />platform</span>
              <br />
              built for African
              <br />
              ISPs
            </h1>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-md">
              M-Pesa-native billing, subscriber credits, real-time analytics, and MikroTik
              auto-configuration — everything your ISP needs in one professional platform.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onTrial}
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-amber-500 text-gray-900 font-bold rounded-md hover:bg-amber-400 transition-colors text-sm"
              >
                Start Free Trial
              </button>
              <button
                onClick={onDemo}
                className="px-6 sm:px-7 py-3 sm:py-3.5 border border-gray-500 text-white font-medium rounded-md hover:border-white transition-colors text-sm"
              >
                Explore Features
              </button>
            </div>

            <Stats />
          </div>

          {/* Right */}
          <div className="w-full lg:flex-1 lg:pt-4">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  )
}
