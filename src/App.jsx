import Header from './components/Header'
import Categories from './components/Categories'
import Brands from './components/Brands'
import Features from './components/Features'
import Footer from './components/Footer' // Importar Footer
import Reveal from './components/Reveal' // Importar el nuevo animador

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[1400px] w-[92%] mx-auto px-4 lg:px-8">
        <Reveal>
          <Categories />
        </Reveal>
        <Reveal>
          <Brands />
        </Reveal>
        <Reveal>
          <Features />
        </Reveal>
      </div>
      <Footer /> {/* Footer al final */}
    </div>
  )
}

export default App