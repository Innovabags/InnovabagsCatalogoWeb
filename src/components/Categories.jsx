import CategoryCard from './CategoryCard'

// Importamos las imágenes de los assets
import imgMochilas from '../assets/Mochilas.jpg'
import imgMorrales from '../assets/Morrales.jpg'
import imgCarteras from '../assets/Carteras.jpg'
import imgBolsos from '../assets/Bolsos.jpg'
import imgBilleteras from '../assets/Billeteras.jpg'
import imgVanites from '../assets/Vanites.jpg'

export default function Categories() {
  const cats = [
    { 
      id: 1, 
      title: 'Mochilas', 
      link: 'https://photos.app.goo.gl/nqAyeY5raty1Sg9o6',
      image: imgMochilas
    },
    { 
      id: 2, 
      title: 'Morrales', 
      link: 'https://photos.app.goo.gl/4fKHNvqnLdkfZ2si9',
      image: imgMorrales
    },
    { 
      id: 3, 
      title: 'Carteras', 
      link: 'https://photos.app.goo.gl/XdfQuC356wcHGy659',
      image: imgCarteras
    },
    { 
      id: 4, 
      title: 'Bolsos', 
      link: 'https://photos.app.goo.gl/Hzjs68sH4S28Sycd7',
      image: imgBolsos
    },
    { 
      id: 5, 
      title: 'Billeteras', 
      link: 'https://photos.google.com/share/LINK_BILLETERAS',
      image: imgBilleteras
    },
    { 
      id: 6, 
      title: 'Vanites', 
      link: 'https://photos.google.com/share/LINK_VANITES',
      image: imgVanites
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

      {/* Ajustamos a 3 columnas en tablet y 6 en pantallas grandes para que entren todas de forma armónica */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
        {cats.map(cat => (
          <div key={cat.id} className="w-full">
            <CategoryCard title={cat.title} link={cat.link} image={cat.image} />
          </div>
        ))}
      </div>
    </section>
  )
}