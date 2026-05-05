export default function CategoryCard({ title, link, image }) {
  return (
    <div className="flex flex-col items-center group">
      {/* Contenedor de la imagen (separado del texto) */}
      <div className="relative overflow-hidden rounded-3xl w-full aspect-[2/3] bg-gray-50 border border-gray-100 mb-5 shadow-md">
        
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 group-hover:text-sky-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
        )}
      </div>

      {/* Capa de texto y botón (ahora debajo de la imagen) */}
      <h3 className="text-gray-800 text-[12px] tracking-[0.2em] font-bold uppercase mb-3 group-hover:text-sky-500 transition-colors text-center">
        {title}
      </h3>
      
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 text-white text-[9px] uppercase tracking-[0.2em] px-5 py-2.5 rounded-full font-bold hover:bg-sky-500 hover:-translate-y-1 transition-all shadow-md"
      >
        Ver Catálogo
      </a>
    </div>
  )
}