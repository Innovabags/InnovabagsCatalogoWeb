export default function Footer() {
  return (
    <>
      <footer className="bg-[#1a1a1a] text-white py-12 mt-10 rounded-t-[3rem]">
        <div className="max-w-[1400px] w-[92%] mx-auto px-4 flex flex-col items-center gap-12">
          
          {/* Contenedor Superior: 2 Columnas (Estilo Editorial) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            
            {/* Izquierda: Texto Estratégico con línea de acento */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-xl">
              <h3 className="text-[11px] tracking-[0.4em] uppercase font-bold text-gray-500 mb-4 md:pl-5">
                Sobre InnovaBags
              </h3>
              <div className="md:border-l-2 md:border-sky-400 md:pl-5">
                <p className="text-[12px] md:text-[13px] text-gray-400 leading-relaxed font-light">
                  Tu tienda especializada en carteras, mochilas, morrales, vanites y bolsos de tendencia. Encuentra marcas exclusivas como <strong className="font-medium text-gray-200">Mia Rose</strong> y <strong className="font-medium text-gray-200">Jantell</strong> en el corazón de Lima, Perú. Realizamos envíos rápidos y seguros a todo el país.
                </p>
              </div>
            </div>

            {/* Derecha: Sección Síguenos */}
            <div className="flex flex-col items-center md:items-end gap-5">
              <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-gray-500">
                Síguenos
              </span>
              <div className="flex gap-5">
              {/* Instagram */}
              <a href="https://www.instagram.com/innovabagscarteras/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/innovabags/?locale=es_LA&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@innovabagscarteras" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
            </div>
          </div>
          </div>

          {/* Créditos del equipo */}
          <div className="flex flex-col items-center mt-2">
            <div className="border border-sky-400 rounded-full px-6 py-2.5 bg-sky-400/5">
              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">
                Desarrollado por <span className="text-sky-400 font-bold text-xs ml-1">INNOVABAGS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón Flotante de WhatsApp REALISTA */}
      <a 
        href="https://wa.me/51941696375?text=Hola%20InnovaBags,%20vengo%20de%20la%20página%20web%20y%20me%20gustaría%20más%20información." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 z-50 flex items-center justify-center group"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="35" 
          height="35" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
}