import { motion } from 'framer-motion'

function FloatingBlob({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        y: [0, -20, 0],
        x: [0, 10, 0],
        scale: [0.95, 1.05, 0.95],
      }}
      transition={{ duration: 10, repeat: Infinity, delay, ease: 'easeInOut' }}
      className={className}
    />
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100">
      {/* Animated soft blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <FloatingBlob
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-rose-300/30 blur-3xl"
          delay={0}
        />
        <FloatingBlob
          className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-pink-300/30 blur-3xl"
          delay={2}
        />
        <FloatingBlob
          className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl"
          delay={1}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-rose-600 shadow-sm backdrop-blur"
        >
          You are invited
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        >
          Aisha & Daniel
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl text-balance text-lg text-gray-600"
        >
          Join us as we begin our forever. An evening of love, laughter and happily ever after.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-gray-700"
        >
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="font-semibold">Saturday, June 21, 2025</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span>Rosewood Garden, Malibu</span>
          </div>
        </motion.div>

        <motion.a
          href="#rsvp"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-white shadow-lg shadow-rose-600/30 transition-colors hover:bg-rose-700"
        >
          RSVP Now
        </motion.a>
      </div>

      {/* Soft gradient overlay for depth */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
    </section>
  )
}
