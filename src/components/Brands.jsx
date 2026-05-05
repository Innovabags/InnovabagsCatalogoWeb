import imgMiaRose from '../assets/MiaRose.jpg';
import imgJantell from '../assets/Jantell.jpg';

export default function Brands() {
  // Aquí puedes actualizar los links reales de tus álbumes
  const brandLinks = {
    miaRose: "https://photos.google.com/share/LINK_MORRALES",
    jantell: "https://photos.google.com/share/LINK_JANTELL"
  };

  return (
    <section className="py-12">
      {/* Título con líneas celestes distintivas de InnovaBags */}
      <div className="flex items-center justify-center gap-6 mb-10">
        <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
        <h2 className="text-sm md:text-base tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase font-bold text-center">
          Nuestras Marcas Principales
        </h2>
        <div className="h-[2px] w-28 bg-sky-400/80 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tarjeta MIA ROSE */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-50 flex flex-col justify-end p-8 md:p-10 shadow-md border border-gray-100">
          <img 
            src={imgMiaRose} 
            alt="Mia Rose" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Capa de gradiente oscuro solo en la parte inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
             <h3 className="font-sans text-3xl md:text-4xl tracking-widest text-white uppercase mb-2 drop-shadow-md">Mia Rose</h3>
             <p className="text-[10px] text-gray-200 uppercase tracking-[0.2em] leading-relaxed mb-6">
               Elegancia y estilo en cada detalle
             </p>
             <a 
               href={brandLinks.miaRose}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white/95 text-gray-900 text-[10px] font-bold inline-block uppercase tracking-widest px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all shadow-xl"
             >
               Ver Catálogo
             </a>
          </div>
        </div>

        {/* Tarjeta JANTELL */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-50 flex flex-col justify-end p-8 md:p-10 shadow-md border border-gray-100">
          <img 
            src={imgJantell} 
            alt="Jantell" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Capa de gradiente oscuro solo en la parte inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
             <h3 className="font-sans text-3xl md:text-4xl tracking-widest text-white uppercase mb-2 drop-shadow-md">Jantell</h3>
             <p className="text-[10px] text-gray-200 uppercase tracking-[0.2em] leading-relaxed mb-6">
               Diseños modernos para mujeres sofisticadas.
             </p>
             <a 
               href={brandLinks.jantell}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white/95 text-gray-900 text-[10px] font-bold inline-block uppercase tracking-widest px-8 py-3 rounded-full hover:bg-sky-500 hover:text-white transition-all shadow-xl"
             >
               Ver Catálogo
             </a>
          </div>
        </div>

      </div>
    </section>
  )
}