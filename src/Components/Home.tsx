import JsonData from '../data/data.json';

export function Home() {
  return (
    <header id="Home" className="h-screen bg-blue-100 dark:bg-blue-900 transition-colors duration-300">
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
              {JsonData ? JsonData.Header.title : 'Loading'}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              {JsonData ? JsonData.Header.paragraph : 'Loading'}
            </p>
            <a
              href="#features"
              className="btn bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}