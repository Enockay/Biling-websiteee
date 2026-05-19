export default function CTA({ onTrial, onDemo }) {
  return (
    <section className="bg-[#0d1b2e] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">

        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-10 sm:w-14 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
            Get Started Today
          </span>
          <span className="w-10 sm:w-14 h-0.5 bg-amber-500 inline-block" />
        </div>

        <h2 className="font-extrabold leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <span className="text-white">One platform.</span>
          <br />
          <span className="text-amber-500">Complete control.</span>
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Join ISPs across Kenya running hotspot and PPPoE networks on Blackie Networks.
          Setup takes minutes, not days.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onTrial}
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-gray-900 font-bold text-base rounded-xl hover:bg-amber-400 transition-colors"
          >
            Start Free Trial
          </button>
          <button
            onClick={onDemo}
            className="w-full sm:w-auto px-8 py-4 border border-gray-500 text-white font-bold text-base rounded-xl hover:border-white transition-colors"
          >
            Book a Demo
          </button>
        </div>

      </div>
    </section>
  )
}
