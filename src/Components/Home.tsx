import JsonData from '../data/data.json';
import Spline from "@splinetool/react-spline";

export function Home() {
  const rotation = { x: 10, y: 10 }; // Define the rotation variable

  return (
    <header id="Home" className="h-screen bg-blue-100 dark:bg-blue-900 transition-colors duration-300 pt-20">
      {/* Contenedor principal con diseño responsive */}
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Sección de texto */}
            <div className="text-center md:text-left md:w-1/2">
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

            {/* Sección de la imagen Spline */}
            <div className=" w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <Spline
                 scene="https://prod.spline.design/Z6d06hRTFd5be5Qb/scene.splinecode" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}