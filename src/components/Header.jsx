import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="relative pt-10 pb-20 md:pb-16 mb-8 border-b border-gray-300 flex flex-col items-center bg-white w-full rounded-b-3xl">
      {/* Contenedor del Logo */}
      <div className="mb-4">
        <img 
          src={logo} 
          alt="Innovabags logo" 
          className="w-16 h-16 object-contain"
        />
      </div>
      
      {/* Nombre con la primera letra en mayúscula y el resto en minúsculas */}
      <h1 className="text-5xl font-normal tracking-tight text-gray-700 font-sans">
        <span className="text-sky-500">Innova</span>bags
      </h1>
      
      {/* Etiqueta de Colección Exclusiva */}
      <div className="mt-4 border border-sky-500 bg-white/80 backdrop-blur-sm text-gray-700 text-[9px] md:text-[11px] font-sans font-bold tracking-[0.2em] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm cursor-default">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
        COLECCIÓN EXCLUSIVA 2026
      </div>

      {/* Contenedor flotante derecho: Redes Sociales y Dirección */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-10 flex flex-col items-end gap-3">
        {/* Redes */}
        <div className="flex gap-4">
          {/* Instagram */}
          <a href="https://www.instagram.com/innovabagscarteras/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-700 shadow-md flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          {/* Facebook */}
          <a href="https://web.facebook.com/innovabags/?locale=es_LA&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-700 shadow-md flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com/@innovabagscarteras" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-gray-700 shadow-md flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
          </a>
        </div>
        
        {/* Dirección */}
        <div className="border border-sky-500 bg-white/80 backdrop-blur-sm text-gray-500 text-[9px] md:text-[11px] font-medium tracking-wide px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm cursor-default">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Jirón Ayacucho 486, Cercado de Lima
        </div>
      </div>
    </header>
  )
}