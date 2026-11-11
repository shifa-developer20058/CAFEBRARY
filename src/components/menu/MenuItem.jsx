export function MenuItem({ item }) {
  return (
    <article
      className="relative p-6 sm:p-7 rounded-[4px] transition-all duration-300 card-rose border border-[#B67C8A]/40 hover:border-[#B67C8A]/65"
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
        <h3 className="font-heading text-[1.25rem] sm:text-[1.375rem] text-[#3E2A1F] font-medium tracking-tight leading-snug">
          {item.name}
        </h3>
        <span className="font-accent text-sm sm:text-base text-[#3E2A1F] font-semibold whitespace-nowrap">
          ₹{item.price}
        </span>
      </div>

      {/* Description — improved to 15–16px range */}
      <p className="font-body text-[0.9375rem] sm:text-[1rem] text-[#3E2A1F]/88 leading-relaxed mb-3">
        {item.description}
      </p>

    </article>
  )
}
