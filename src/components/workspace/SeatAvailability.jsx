import { useState } from 'react'

export function SeatAvailability({ initialStatus = 'AVAILABLE' }) {
  const [currentStatus, setCurrentStatus] = useState(initialStatus)

  const statesConfig = {
    AVAILABLE: {
      key: 'AVAILABLE',
      label: 'Desks Available',
      badgeClass: 'bg-[#C68642]/15 text-[#3E2A1F] border-[#C68642]/40',
      indicatorColor: 'bg-[#C68642]',
      heading: 'Seats currently open for quiet focus',
      description:
        'Desks in the WORKSPACE study hall are open for reserved member sessions. Inquire at the counter or reserve ahead to secure your seat.',
      detail: 'Open seating across morning and afternoon study blocks.',
      borderClass: 'border-[#C68642]/35 bg-[#FAF4EB]',
    },
    ALMOST_FULL: {
      key: 'ALMOST_FULL',
      label: 'Limited Desks',
      badgeClass: 'bg-[#B67C8A]/18 text-[#1F2D44] border-[#B67C8A]/40',
      indicatorColor: 'bg-[#B67C8A]',
      heading: 'A few desks remain for the current session',
      description:
        'The study hall is nearing capacity for the current reading block. Counter inquiries are recommended upon arrival to verify immediate seat placement.',
      detail: 'Individual oak desks are limited; upcoming block openings soon.',
      borderClass: 'border-[#B67C8A]/40 bg-[#FAF4EB]',
    },
    FULL: {
      key: 'FULL',
      label: 'Currently at Capacity',
      badgeClass: 'bg-[#1F2D44]/12 text-[#C68642] border-[#1F2D44]/28',
      indicatorColor: 'bg-[#1F2D44]',
      heading: 'Study hall is currently full',
      description:
        'All individual desks are occupied for the current focus session to preserve quiet concentration. Please visit the counter to register for the next available study block.',
      detail: 'Main café seating remains open and welcome to all guests.',
      borderClass: 'border-[#1F2D44]/22 bg-[#EFE2CF]',
    },
  }

  const activeConfig = statesConfig[currentStatus] || statesConfig.AVAILABLE

  return (
    <div
      className={`p-7 sm:p-9 rounded-[4px] border ${activeConfig.borderClass} shadow-sm transition-all duration-300 max-w-2xl mx-auto`}
      aria-live="polite"
    >
      {/* Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-[#3E2A1F]/12">
        <div className="flex items-center space-x-3">
          <span
            className={`inline-block w-3 h-3 rounded-full ${activeConfig.indicatorColor} flex-shrink-0`}
            aria-hidden="true"
          />
          <span
            className={`font-accent text-sm uppercase tracking-wider px-3 py-1.5 rounded-[2px] border ${activeConfig.badgeClass}`}
          >
            {activeConfig.label}
          </span>
        </div>
        <span className="font-mono text-sm text-[#3E2A1F]/55">
          Status: {activeConfig.key.replace('_', ' ')}
        </span>
      </div>

      {/* Main Message */}
      <h4 className="font-heading text-[1.25rem] sm:text-[1.4rem] text-[#1F2D44] font-medium mb-3 leading-snug">
        {activeConfig.heading}
      </h4>
      <p className="font-body text-[1rem] sm:text-[1.0625rem] text-[#3E2A1F]/85 leading-relaxed mb-5">
        {activeConfig.description}
      </p>

      {/* Supporting note */}
      <div className="p-3.5 bg-[#F4E7D3] rounded-[2px] border border-[#3E2A1F]/10 text-sm font-body text-[#3E2A1F]/75 italic mb-7">
        {activeConfig.detail}
      </div>

      {/* Development State Verification Switcher */}
      <div className="pt-4 border-t border-[#3E2A1F]/10 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-accent text-[#3E2A1F]/55 uppercase tracking-wider">
          Live Status Simulation:
        </span>
        <div className="flex items-center gap-1.5" role="group" aria-label="Seat state selector">
          <button
            type="button"
            onClick={() => setCurrentStatus('AVAILABLE')}
            className={`px-3 py-1.5 rounded-[2px] border text-xs font-accent tracking-wide transition-colors min-h-[36px] ${
              currentStatus === 'AVAILABLE'
                ? 'bg-[#C68642] text-[#F4E7D3] border-[#C68642] font-semibold'
                : 'bg-transparent text-[#3E2A1F]/65 border-[#3E2A1F]/20 hover:border-[#C68642] hover:text-[#C68642]'
            }`}
          >
            Available
          </button>
          <button
            type="button"
            onClick={() => setCurrentStatus('ALMOST_FULL')}
            className={`px-3 py-1.5 rounded-[2px] border text-xs font-accent tracking-wide transition-colors min-h-[36px] ${
              currentStatus === 'ALMOST_FULL'
                ? 'bg-[#B67C8A] text-[#FAF4EB] border-[#B67C8A] font-semibold'
                : 'bg-transparent text-[#3E2A1F]/65 border-[#3E2A1F]/20 hover:border-[#B67C8A] hover:text-[#B67C8A]'
            }`}
          >
            Almost Full
          </button>
          <button
            type="button"
            onClick={() => setCurrentStatus('FULL')}
            className={`px-3 py-1.5 rounded-[2px] border text-xs font-accent tracking-wide transition-colors min-h-[36px] ${
              currentStatus === 'FULL'
                ? 'bg-[#1F2D44] text-[#C68642] border-[#1F2D44] font-semibold'
                : 'bg-transparent text-[#3E2A1F]/65 border-[#3E2A1F]/20 hover:border-[#1F2D44] hover:text-[#1F2D44]'
            }`}
          >
            Full
          </button>
        </div>
      </div>
    </div>
  )
}
