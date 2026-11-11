/**
 * CAFEBRARY — Finalized Location, Business & Schedule Details
 * Trichy · Heritage café concept
 */

export const CAFEBRARY_LOCATION = {
  brand: 'CAFEBRARY',
  tagline: "Between the pages and the pour, you're home!",
  area: 'Thillai Nagar · Trichy',
  conceptTag: 'Trichy · Heritage café concept',
  address: {
    name: 'CAFEBRARY',
    courtyard: 'No. 18, The Old Courtyard',
    street: '6th Cross Street, Thillai Nagar',
    cityStateZip: 'Tiruchirappalli, Tamil Nadu – 620018',
    fullFormatted:
      'CAFEBRARY\nNo. 18, The Old Courtyard,\n6th Cross Street, Thillai Nagar,\nTiruchirappalli, Tamil Nadu – 620018',
    singleLine:
      'CAFEBRARY, No. 18, The Old Courtyard, 6th Cross Street, Thillai Nagar, Tiruchirappalli, Tamil Nadu – 620018',
  },
  contact: {
    phone: '+91 431 400 2186',
    phoneTel: 'tel:+914314002186',
    email: 'hello@cafebrary.example',
    emailMailto: 'mailto:hello@cafebrary.example',
    emailDisclaimer:
      'Note: .example is a reserved illustrative domain for demonstration and sample display, not an operational public mailbox.',
    instagramHandle: '@cafebrary',
    instagramUrl: '#instagram-illustrative',
    instagramDisclaimer:
      'Note: Illustrative brand profile reference.',
  },
  maps: {
    googleMapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent(
        'CAFEBRARY, No. 18, The Old Courtyard, 6th Cross Street, Thillai Nagar, Tiruchirappalli, Tamil Nadu – 620018'
      ),
  },
}

export const OPENING_HOURS = [
  {
    dayIndex: 1,
    dayName: 'Monday',
    shortDay: 'Mon',
    hours: '9:00 AM – 9:00 PM',
    openMin: 9 * 60,
    closeMin: 21 * 60,
    note: 'Regular café hours',
    isSpecial: false,
  },
  {
    dayIndex: 2,
    dayName: 'Tuesday',
    shortDay: 'Tue',
    hours: '9:00 AM – 9:00 PM',
    openMin: 9 * 60,
    closeMin: 21 * 60,
    note: 'Regular café hours',
    isSpecial: false,
  },
  {
    dayIndex: 3,
    dayName: 'Wednesday',
    shortDay: 'Wed',
    hours: '9:00 AM – 9:00 PM',
    openMin: 9 * 60,
    closeMin: 21 * 60,
    note: 'Regular café hours',
    isSpecial: false,
  },
  {
    dayIndex: 4,
    dayName: 'Thursday',
    shortDay: 'Thu',
    hours: '9:00 AM – 9:00 PM',
    openMin: 9 * 60,
    closeMin: 21 * 60,
    note: 'Regular café hours',
    isSpecial: false,
  },
  {
    dayIndex: 5,
    dayName: 'Friday',
    shortDay: 'Fri',
    hours: '9:00 AM – 9:00 PM',
    openMin: 9 * 60,
    closeMin: 21 * 60,
    note: 'Regular café hours',
    isSpecial: false,
  },
  {
    dayIndex: 6,
    dayName: 'Saturday',
    shortDay: 'Sat',
    hours: '9:00 AM – 10:00 PM',
    openMin: 9 * 60,
    closeMin: 22 * 60,
    note: 'Extended evening hours until 10:00 PM',
    isSpecial: true,
  },
  {
    dayIndex: 0,
    dayName: 'Sunday',
    shortDay: 'Sun',
    hours: '10:00 AM – 9:00 PM',
    openMin: 10 * 60,
    closeMin: 21 * 60,
    note: 'Slightly slower morning opening at 10:00 AM',
    isSpecial: false,
  },
]

/**
 * Calculates current open status dynamically from schedule
 */
export function getCurrentStatus(date = new Date()) {
  const dayIndex = date.getDay()
  const currentMinutes = date.getHours() * 60 + date.getMinutes()
  const todaySchedule = OPENING_HOURS.find((item) => item.dayIndex === dayIndex)

  if (!todaySchedule) {
    return {
      isOpen: false,
      statusBadge: 'Closed',
      statusText: 'Closed',
      todaySchedule: null,
      dayIndex,
    }
  }

  const { openMin, closeMin, hours, dayName } = todaySchedule

  if (currentMinutes >= openMin && currentMinutes < closeMin) {
    const isClosingSoon = closeMin - currentMinutes <= 45
    return {
      isOpen: true,
      statusBadge: isClosingSoon ? 'Closing Soon' : 'Open Now',
      statusText: `Open Today until ${dayIndex === 6 ? '10:00 PM' : '9:00 PM'}`,
      badgeStyle: 'bg-[#C68642]/20 text-[#3E2A1F] border-[#C68642]/40',
      dotColor: 'bg-[#C68642]',
      todaySchedule,
      dayIndex,
    }
  }

  if (currentMinutes < openMin) {
    return {
      isOpen: false,
      statusBadge: 'Opens Today',
      statusText: `Opens today at ${dayIndex === 0 ? '10:00 AM' : '9:00 AM'}`,
      badgeStyle: 'bg-[#FAF4EB] text-[#3E2A1F]/70 border-[#3E2A1F]/20',
      dotColor: 'bg-[#3E2A1F]/40',
      todaySchedule,
      dayIndex,
    }
  }

  // After closing
  const tomorrowDayIndex = (dayIndex + 1) % 7
  const tomorrowOpenTime = tomorrowDayIndex === 0 ? '10:00 AM' : '9:00 AM'

  return {
    isOpen: false,
    statusBadge: 'Closed for the Evening',
    statusText: `Closed for today · Opens tomorrow at ${tomorrowOpenTime}`,
    badgeStyle: 'bg-[#FAF4EB] text-[#3E2A1F]/70 border-[#3E2A1F]/20',
    dotColor: 'bg-[#3E2A1F]/40',
    todaySchedule,
    dayIndex,
    hours,
    dayName,
  }
}
