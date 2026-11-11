import { OPENING_HOURS, getCurrentStatus } from '../../data/locationData'

export function OpeningHoursBlock() {
  const currentStatus = getCurrentStatus()
  const currentDayIndex = currentStatus.dayIndex

  return (
    <div className="card-parchment p-7 sm:p-10 md:p-12 border-2 border-[#3E2A1F]/15 bg-[#FAF4EB] shadow-[0_8px_30px_-6px_rgba(31,45,68,0.07)] max-w-4xl mx-auto">
      {/* Live Status Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 mb-6 border-b border-[#3E2A1F]/12">
        <div>
          <span className="font-accent text-[0.75rem] uppercase tracking-[0.22em] text-[#C68642] block mb-1.5">
            SCHEDULE & TIMINGS
          </span>
          <h3 className="font-heading text-[1.5rem] sm:text-[1.75rem] text-[#1F2D44] font-medium tracking-tight leading-snug">
            Come by when you have a little time.
          </h3>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span
            className={`inline-block w-2.5 h-2.5 rounded-full ${currentStatus.dotColor}`}
            aria-hidden="true"
          />
          <span
            className={`font-accent text-sm tracking-wider uppercase px-3.5 py-1.5 rounded-[2px] border ${currentStatus.badgeStyle}`}
          >
            {currentStatus.statusBadge}
          </span>
        </div>
      </div>

      <p className="font-body text-[1.0625rem] text-[#3E2A1F]/75 leading-relaxed mb-8 italic">
        &ldquo;Some days deserve a little longer. Saturdays stay open until 10.&rdquo;
      </p>

      {/* 7-Day Hours Table */}
      <div className="divide-y divide-[#3E2A1F]/08 font-body text-[1rem] sm:text-[1.0625rem]">
        {OPENING_HOURS.map((item) => {
          const isToday = item.dayIndex === currentDayIndex
          const isSaturday = item.dayIndex === 6

          return (
            <div
              key={item.dayName}
              className={`py-3.5 sm:py-4 px-3 sm:px-4 flex items-center justify-between transition-colors rounded-[3px] ${
                isToday
                  ? 'bg-[#C68642]/12 border-l-4 border-[#C68642] font-medium text-[#1F2D44]'
                  : 'text-[#3E2A1F]/88 hover:bg-[#F4E7D3]/70'
              }`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className={`w-28 sm:w-32 ${isToday ? 'font-semibold text-[#1F2D44]' : ''}`}>
                  {item.dayName}
                </span>
                {isToday && (
                  <span className="font-accent text-[11px] text-[#C68642] uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[#C68642]/18 border border-[#C68642]/35">
                    Today
                  </span>
                )}
                {isSaturday && !isToday && (
                  <span className="hidden sm:inline-flex font-accent text-[11px] text-[#B67C8A] uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-[#B67C8A]/12 border border-[#B67C8A]/28">
                    Extended Evening
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-right shrink-0">
                <span
                  className={`font-mono text-sm sm:text-[1rem] tracking-wide ${
                    isSaturday
                      ? 'text-[#C68642] font-semibold'
                      : isToday
                      ? 'text-[#1F2D44] font-semibold'
                      : 'text-[#3E2A1F]'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Supporting Notes Footer */}
      <div className="mt-8 pt-6 border-t border-[#3E2A1F]/12 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm font-body text-[#3E2A1F]/70">
        <div>
          <span className="font-accent text-[#C68642] uppercase tracking-wider text-[0.75rem] block mb-1">
            Mon – Fri
          </span>
          <span>Regular café hours from 9:00 AM to 9:00 PM.</span>
        </div>
        <div>
          <span className="font-accent text-[#C68642] uppercase tracking-wider text-[0.75rem] block mb-1">
            Saturday
          </span>
          <span>Extended evening hours until 10:00 PM for weekend reading.</span>
        </div>
        <div>
          <span className="font-accent text-[#C68642] uppercase tracking-wider text-[0.75rem] block mb-1">
            Sunday
          </span>
          <span>Slightly slower morning opening at 10:00 AM.</span>
        </div>
      </div>
    </div>
  )
}
