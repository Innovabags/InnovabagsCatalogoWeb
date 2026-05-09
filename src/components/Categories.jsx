import CategoryCard from './CategoryCard'

// Importamos las imágenes de los assets
import imgMochilas from '../assets/Mochilas.jpg'
import imgMorrales from '../assets/Morrales.jpg'
import imgCarteras from '../assets/Carteras.jpg'
import imgBolsos from '../assets/Bolsos.jpg'
import imgBilleteras from '../assets/Billeteras.jpg'
import imgVanites from '../assets/Vanites.jpg'
import imgPanelMadre from '../assets/PanelMadre.jpg'

export default function Categories() {
  const cats = [
    { 
      id: 1, 
      title: 'Mochilas', 
      link: 'https://photos.app.goo.gl/JegAodp1wtqB19h16',
      image: imgMochilas
    },
    { 
      id: 2, 
      title: 'Morrales', 
      link: 'https://photos.app.goo.gl/KTZFF3Txn3Dx2s8C9',
      image: imgMorrales
    },
    { 
      id: 3, 
      title: 'Carteras', 
      link: 'https://photos.app.goo.gl/M2YmFD3JsfvCmPNi6',
      image: imgCarteras
    },
    { 
      id: 4, 
      title: 'Bolsos', 
      link: 'https://photos.app.goo.gl/18S4ao63KbCYs9aF8',
      image: imgBolsos
    },
    { 
      id: 5, 
      title: 'Billeteras', 
      link: 'https://photos.app.goo.gl/5CTJQFmoWff1CL66A',
      image: imgBilleteras
    },
    { 
      id: 6, 
      title: 'Vanites', 
      link: 'https://photos.app.goo.gl/bYqsTvUXEyzs2DDf7',
      image: imgVanites
    },
  ]

  return (
    <>
      {/* Panel Especial por el Día de la Madre */}
      <div className="w-full mb-6 md:mb-10">
        <div className="w-full rounded-3xl overflow-hidden shadow-md border border-gray-100 group">
          <img 
            src={imgPanelMadre} 
            alt="Feliz Día de la Madre - InnovaBags" 
            className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-700"
          />
        </div>
      </div>

      <section className="py-12">
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
          <h2 className="text-sm md:text-base tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase font-bold text-center">
            Nuestras Categorías
          </h2>
          <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
        </div>

        {/* Ajustamos a 3 columnas en tablet y 6 en pantallas grandes para que entren todas de forma armónica */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {cats.map(cat => (
            <div key={cat.id} className="w-full">
              <CategoryCard title={cat.title} link={cat.link} image={cat.image} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}