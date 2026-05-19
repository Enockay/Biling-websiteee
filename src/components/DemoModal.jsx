import { useState } from 'react'

const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']

export default function DemoModal({ onClose, onSwitchToTrial }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', date: '', time: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value })
  const setTime = (t) => setForm({ ...form, time: t })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#0d1b2e] to-blue-800 w-full" />

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
              <h2 className="text-[#0d1b2e] font-extrabold text-2xl leading-tight">Book a Demo</h2>
              <p className="text-gray-400 text-sm mt-1">30-min live walkthrough with our team.</p>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-[#0d1b2e] font-extrabold text-xl mb-2">Demo booked!</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">
                Thanks, <strong>{form.name}</strong>. We've reserved{' '}
                <strong>{form.time}</strong> on <strong>{form.date}</strong> for you.
              </p>
              <p className="text-gray-400 text-sm mb-6">
                A confirmation has been sent to <strong>{form.email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#0d1b2e] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Full Name</label>
                <input
                  type="text" required placeholder="John Kamau"
                  value={form.name} onChange={set('name')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">ISP / Company Name</label>
                <input
                  type="text" required placeholder="e.g. Kitui Fiber Networks"
                  value={form.company} onChange={set('company')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Email</label>
                  <input
                    type="email" required placeholder="you@company.com"
                    value={form.email} onChange={set('email')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel" required placeholder="0712 345 678"
                    value={form.phone} onChange={set('phone')}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Preferred Date</label>
                <input
                  type="date" required
                  value={form.date} onChange={set('date')}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Preferred Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t} type="button"
                      onClick={() => setTime(t)}
                      className={`py-2 rounded-lg text-xs font-medium border transition-colors ${
                        form.time === t
                          ? 'bg-amber-500 border-amber-500 text-gray-900 font-bold'
                          : 'border-gray-200 text-gray-600 hover:border-amber-300 hover:bg-amber-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                  Anything specific? <span className="text-gray-400 normal-case font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3} placeholder="e.g. We have 3 MikroTik routers and 80 hotspot customers..."
                  value={form.message} onChange={set('message')}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#0d1b2e] text-white font-bold text-sm rounded-lg hover:bg-gray-800 transition-colors mt-1"
              >
                Confirm Demo Booking →
              </button>

              <p className="text-center text-xs text-gray-400">
                Ready to jump in?{' '}
                <button
                  type="button"
                  onClick={onSwitchToTrial}
                  className="text-amber-600 font-semibold hover:text-amber-500 transition-colors"
                >
                  Start a free trial instead
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
