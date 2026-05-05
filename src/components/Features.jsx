export default function Features() {
  const items = [
    {
      title: "Productos de Calidad",
      desc: "Seleccionamos lo mejor para ti.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" className="text-sky-500"/>
          <path d="M9 9L11 11L15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600"/>
          <path d="M10 15.5L8 21L12 19L16 21L14 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"/>
        </svg>
      )
    },
    {
      title: "Compra Segura",
      desc: "Tus datos siempre protegidos.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600"/>
        </svg>
      )
    },
    {
      title: "Envíos a todo el país",
      desc: "Rápidos y confiables.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3H15V16H1V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"/>
          <path d="M15 8H20L23 11V16H15V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"/>
          <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" className="text-sky-600"/>
          <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" className="text-sky-600"/>
        </svg>
      )
    },
    {
      title: "Atención Personalizada",
      desc: "Estamos para ayudarte.",
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11C21 16 17 20 12 20C10.5 20 9 19.5 8 18.5L3 21L4.5 16C3.5 14.5 3 13 3 11C3 6.5 7 3 12 3C17 3 21 6.5 21 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"/>
          <path d="M8 11H8.01M12 11H12.01M16 11H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group cursor-default">
            {/* Contenedor del icono con efecto suave al pasar el mouse */}
            <div className="flex-shrink-0 p-4 bg-sky-50 rounded-2xl transition-colors duration-300 group-hover:bg-sky-100">
              {item.icon}
            </div>
            <div>
              <h4 className="text-xs md:text-[13px] font-bold uppercase tracking-widest text-gray-800 transition-colors duration-300 group-hover:text-sky-600">
                {item.title}
              </h4>
              <p className="text-[13px] md:text-sm text-gray-500 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}