const features = [
  {
    icon: '📄',
    title: 'Automatic invoicing',
    desc: 'Invoices are generated automatically every billing cycle. Download any invoice as a PDF for your accounting records.',
  },
  {
    icon: '📱',
    title: 'M-Pesa STK push',
    desc: 'Pay your platform bill directly via M-Pesa STK push — one tap from your dashboard. No bank transfer, no visiting an office.',
  },
  {
    icon: '🧾',
    title: 'Manual payment recording',
    desc: 'Prefer to pay via cash or bank transfer? Record the payment manually and it\'ll be reconciled against your invoice instantly.',
  },
  {
    icon: '👥',
    title: 'Sub-account management',
    desc: 'Create and manage sub-admin accounts from the Vendor dashboard. Control exactly what each sub-account can see and do.',
  },
  {
    icon: '🔒',
    title: 'Financial separation',
    desc: 'Sub-accounts never see billing, invoices, or financial data. Your revenue is visible only to super admins — always.',
  },
  {
    icon: '📊',
    title: 'Account standing',
    desc: 'See your account status, days until renewal, and payment history at a glance. Never miss a payment with clear due date visibility.',
  },
]

export default function BillingFeatures() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-600 text-xs font-bold tracking-widest uppercase">What's Included</span>
        </div>
        <h2 className="text-gray-900 font-extrabold leading-tight mb-12 sm:mb-16" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
          Everything in one billing module
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow">
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
