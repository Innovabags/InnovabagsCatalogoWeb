import CategoryCard from './CategoryCard'

// Importamos las imágenes de los assets
import imgMochilas from '../assets/Mochilas.jpg'
import imgMorrales from '../assets/Morrales.jpg'
import imgCarteras from '../assets/Carteras.jpg'
import imgBolsos from '../assets/Bolsos.jpg'
import imgBilleteras from '../assets/Billeteras.jpg'

export default function Categories() {
  const cats = [
    { 
      id: 1, 
      title: 'Mochilas', 
      link: 'https://photos.google.com/share/LINK_MOCHILAS',
      image: imgMochilas
    },
    { 
      id: 2, 
      title: 'Morrales', 
      link: 'https://photos.google.com/share/LINK_MORRALES',
      image: imgMorrales
    },
    { 
      id: 3, 
      title: 'Carteras', 
      link: 'https://photos.google.com/share/LINK_CARTERAS',
      image: imgCarteras
    },
    { 
      id: 4, 
      title: 'Bolsos', 
      link: 'https://photos.google.com/share/LINK_BOLSOS',
      image: imgBolsos
    },
    { 
      id: 5, 
      title: 'Billeteras', 
      link: 'https://photos.google.com/share/LINK_BILLETERAS',
      image: imgBilleteras
    },
  ]

  return (
    <section className="py-12">
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
        <h2 className="text-sm md:text-base tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase font-bold text-center">
          Nuestras Categorías
        </h2>
        <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
      </div>

      {/* Volvemos a colocar todo en 5 columnas en la misma línea, aprovechando las proporciones más altas */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4">
        {cats.map(cat => (
          <div key={cat.id} className="w-full">
            <CategoryCard title={cat.title} link={cat.link} image={cat.image} />
          </div>
        ))}
      </div>
    </section>
  )
}