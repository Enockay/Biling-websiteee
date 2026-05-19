const stats = [
  { value: '35+', label: 'TRANSACTION TYPES' },
  { value: 'M-Pesa', label: 'STK PUSH NATIVE' },
  { value: '99.9%', label: 'PLATFORM UPTIME' },
  { value: 'Auto', label: 'ROUTER CONFIG' },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 mt-12 border-t border-gray-700">
      {stats.map(({ value, label }, i) => (
        <div
          key={label}
          className={`pt-6 pb-4 pr-6
            ${i % 2 === 1 ? 'pl-6 border-l border-gray-700' : ''}
            ${i < 2 ? 'border-b border-gray-700' : ''}
          `}
        >
          <p className="text-amber-500 font-bold text-2xl sm:text-3xl leading-tight">{value}</p>
          <p className="text-gray-400 text-xs tracking-widest mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}
