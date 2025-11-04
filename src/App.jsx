import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Details from './components/Details'
import RSVP from './components/RSVP'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Countdown date="2025-06-21T17:00:00" />
      <Details />
      <RSVP />
      <footer className="border-t border-rose-100 bg-white/80 py-8 text-center text-sm text-gray-500 backdrop-blur">
        Made with love • Aisha & Daniel
      </footer>
    </div>
  )
}

export default App
