import { useEffect, useState } from 'react'

function getTimeRemaining(targetDate) {
  const total = Date.parse(targetDate) - Date.now()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

function TimeBox({ label, value }) {
  return (
    <div className="flex min-w-[72px] flex-col items-center rounded-xl bg-white/80 px-3 py-3 shadow-sm backdrop-blur">
      <div className="text-2xl font-bold text-gray-900">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  )
}

export default function Countdown({ date = '2025-06-21T17:00:00' }) {
  const [time, setTime] = useState(getTimeRemaining(date))

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeRemaining(date)), 1000)
    return () => clearInterval(timer)
  }, [date])

  return (
    <section className="relative mx-auto max-w-4xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Counting down to our big day</h2>
        <p className="mt-2 text-gray-600">We can’t wait to celebrate with you!</p>
      </div>

      <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
        <TimeBox label="Days" value={Math.max(0, time.days)} />
        <TimeBox label="Hours" value={Math.max(0, time.hours)} />
        <TimeBox label="Minutes" value={Math.max(0, time.minutes)} />
        <TimeBox label="Seconds" value={Math.max(0, time.seconds)} />
      </div>
    </section>
  )
}
