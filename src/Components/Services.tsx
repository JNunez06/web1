import { default as JsonData } from "../data/data.json";

export function Services() {
  return (
    <div id="Services" className="bg-white dark:bg-neutral-900 transition-colors duration-300 py-16 pt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
            DevPro ofrece servicios en desarrollo y diseño de aplicaciones web y móviles, marketing digital, diseño gráfico y más.
          </p>
        </div>

        {/* Lista de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {JsonData
            ? JsonData.Services.map((d, i) => (
                <div key={`${d.name}-${i}`} className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="service-desc">
                    <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-2">
                      {d.name}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                      {d.text}
                    </p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
}