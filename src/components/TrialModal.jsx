import { useState } from 'react'

export default function TrialModal({ onClose, onSwitchToDemo }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', password: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 w-full" />

        <div className="px-6 sm:px-8 py-7">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-amber-500 rounded-md flex items-center justify-center">
                  <span className="text-gray-900 font-extrabold text-xs">B</span>
                </div>
                <span className="text-gray-500 text-sm font-medium">Blackie Networks</span>
              </div>
              <h2 className="text-[#0d1b2e] font-extrabold text-2xl leading-tight">
                Start your free trial
              </h2>
              <p className="text-gray-400 text-sm mt-1">No credit card required. Up in minutes.</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors mt-1 shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[#0d1b2e] font-extrabold text-xl mb-2">You're in!</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Welcome to Blackie Networks, <strong>{form.name}</strong>. Check your email at{' '}
                <strong>{form.email}</strong> to activate your account.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-amber-500 text-gray-900 font-bold rounded-lg hover:bg-amber-400 transition-colors text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Kamau"
                    value={form.name}
                    onChange={set('name')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    ISP / Company Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kitui Fiber Networks"
                    value={form.company}
                    onChange={set('company')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set('email')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Phone (M-Pesa)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0712 345 678"
                    value={form.phone}
                    onChange={set('phone')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={set('password')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-amber-500 text-gray-900 font-bold text-sm rounded-lg hover:bg-amber-400 transition-colors mt-1"
              >
                Create Free Account →
              </button>

              <p className="text-center text-xs text-gray-400">
                Want a walkthrough first?{' '}
                <button
                  type="button"
                  onClick={onSwitchToDemo}
                  className="text-amber-600 font-semibold hover:text-amber-500 transition-colors"
                >
                  Book a demo instead
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
