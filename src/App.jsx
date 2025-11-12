import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Your Name — Available for opportunities
        </footer>
      </main>
    </div>
  )
}

export default App
