import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function RSVP() {
  const [form, setForm] = useState({ name: '', email: '', attending: 'Yes', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`RSVP from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nAttending: ${form.attending}\nMessage: ${form.message}`
    )
    window.location.href = `mailto:couple@example.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="rsvp" className="relative bg-gradient-to-b from-white to-rose-50 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Kindly RSVP</h2>
          <p className="mt-2 text-gray-600">Please let us know if you’ll be able to join us</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-rose-200 focus:ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-rose-200 focus:ring"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-gray-700">Will you attend?</label>
              <select
                name="attending"
                value={form.attending}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-rose-200 focus:ring"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Message (optional)</label>
              <input
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special notes"
                className="mt-1 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none ring-rose-200 focus:ring"
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 font-semibold text-white shadow-lg shadow-rose-600/30 transition-colors hover:bg-rose-700"
          >
            <Mail size={18} /> Send RSVP
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Prefer WhatsApp or call instead? Reach us at +1 (555) 123-4567
        </p>
      </div>
    </section>
  )
}
