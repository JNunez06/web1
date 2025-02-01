import JsonData from '../data/data.json';

export function Home() {
  return (
    <header id="Home" className="h-screen bg-blue-100 dark:bg-blue-900 transition-colors duration-300 pt-20">
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay text-center">
          <div className="max-w-2xl mx-auto px-4">
            {/* Título */}
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              {JsonData ? JsonData.Header.title : 'Loading'}
            </h1>

            {/* Descripción */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
              {JsonData ? JsonData.Header.paragraph : 'Loading'}
            </p>

            {/* Botón */}
            <a
              href="#features"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}