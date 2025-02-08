import { default as JsonData } from "../data/data.json";

export function Team() {
  return (
    <div
      id="Team"
      className="bg-red-100 dark:bg-red-900 transition-colors duration-300 py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Título y descripción */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4 animate-slide-in-up">
            CONOCE AL EQUIPO
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 animate-fade-in-delay">
            Profesionales en el desarrollo de software de confianza.
          </p>
        </div>

        {/* Lista de miembros del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {JsonData
            ? JsonData.Team.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="team bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in"
                >
                  <div className="thumbnail">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-48 object-cover rounded-lg mb-4 animate-zoom-in"
                    />
                    <div className="caption text-center">
                      <h4 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-2 animate-slide-in-up">
                        {d.name}
                      </h4>
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 animate-fade-in-delay">
                        {d.job}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
}
