const superAdminPerms = [
  'Dashboard & Analytics',
  'Hotspot Subscribers',
  'PPPoE Users',
  'Transaction Stamps',
  'Sales & Cash Reports',
  'Credits Management',
  'Sub-Account Management',
  'Router Configuration',
  'Vendor Billing & Invoices',
]

const subAccountPerms = [
  { label: 'Dashboard',              level: 'View only',  type: 'view' },
  { label: 'Hotspot Subscribers',    level: 'Manage',     type: 'manage' },
  { label: 'PPPoE Users',            level: 'Manage',     type: 'manage' },
  { label: 'Chat Support',           level: 'Manage',     type: 'manage' },
  { label: 'Transaction Stamps',     level: 'View only',  type: 'view' },
  { label: 'Sales & Cash Reports',   level: 'Restricted', type: 'restricted' },
  { label: 'Sub-Account Management', level: 'Restricted', type: 'restricted' },
  { label: 'Router Configuration',   level: 'Restricted', type: 'restricted' },
  { label: 'Vendor Billing & Invoices', level: 'Restricted', type: 'restricted' },
]

function levelStyle(type) {
  if (type === 'restricted') return 'text-red-500'
  return 'text-green-600'
}

function levelIcon(type) {
  return type === 'restricted' ? '✕' : '✓'
}

export default function AdminRoles() {
  return (
    <section id="admin-roles" className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-0.5 bg-amber-500 inline-block" />
          <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">
            Admin Role System
          </span>
        </div>
        <h2
          className="text-[#0d1b2e] font-extrabold leading-tight mb-4"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
        >
          Controlled access at every level
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mb-10 sm:mb-12 leading-relaxed">
          Super admins see everything. Sub-accounts manage day-to-day
          operations — financial data stays locked away, always.
        </p>

        {/* Role cards — stacked on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

          {/* Super Admin */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-[#0d1b2e] px-5 sm:px-6 py-5 sm:py-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-800 border border-gray-600 flex items-center justify-center mb-4">
                <span className="text-amber-500 font-extrabold text-sm">SA</span>
              </div>
              <h3 className="text-white font-extrabold text-lg sm:text-xl mb-1">Super Admin</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Full platform ownership — revenue, configuration, sub-accounts, and all financial reporting.
              </p>
              <span className="inline-block bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold tracking-widest px-3 py-1 rounded">
                FULL ACCESS
              </span>
            </div>
            <div className="divide-y divide-gray-100">
              {superAdminPerms.map((label) => (
                <div key={label} className="flex items-center justify-between px-5 sm:px-6 py-3">
                  <span className="text-gray-700 text-sm">{label}</span>
                  <span className="text-green-600 text-sm font-medium shrink-0 ml-4">✓ Full</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Account */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden">
            <div className="bg-gray-50 px-5 sm:px-6 py-5 sm:py-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-4">
                <span className="text-gray-600 font-extrabold text-sm">SB</span>
              </div>
              <h3 className="text-[#0d1b2e] font-extrabold text-lg sm:text-xl mb-1">Sub-Account</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Operations & support staff — subscriber management without financial visibility.
              </p>
              <span className="inline-block bg-gray-200 text-gray-500 text-xs font-bold tracking-widest px-3 py-1 rounded">
                LIMITED ACCESS
              </span>
            </div>
            <div className="divide-y divide-gray-100">
              {subAccountPerms.map(({ label, level, type }) => (
                <div key={label} className="flex items-center justify-between px-5 sm:px-6 py-3">
                  <span className="text-gray-700 text-sm">{label}</span>
                  <span className={`text-sm font-medium shrink-0 ml-4 ${levelStyle(type)}`}>
                    {levelIcon(type)} {level}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
