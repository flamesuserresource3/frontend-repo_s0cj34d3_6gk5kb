import { Calendar, MapPin, Clock, Gift } from 'lucide-react'

const items = [
  {
    icon: Calendar,
    title: 'Wedding Day',
    text: 'Saturday, June 21, 2025',
  },
  {
    icon: Clock,
    title: 'Ceremony & Reception',
    text: 'Ceremony 5:00 PM • Reception to follow',
  },
  {
    icon: MapPin,
    title: 'Location',
    text: 'Rosewood Garden, Malibu, CA',
  },
  {
    icon: Gift,
    title: 'Gifts',
    text: 'Your presence is the greatest gift! No boxed gifts please.',
  },
]

export default function Details() {
  return (
    <section id="details" className="relative bg-white/70 py-16 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Event Details</h2>
          <p className="mt-2 text-gray-600">Everything you need to know for the celebration</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-rose-600">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
