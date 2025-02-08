import JsonData from '../data/data.json';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "../Figure/Cube";


export function Home() {
  const scrollToServices = () => {
    const servicesElement = document.getElementById('Services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="Home" className="w-full h-screen bg-gradient-to-r from-white to-blue-900 dark:from-gray-900 dark:to-black transition-colors duration-300 pt-20">
      
      {/* Contenedor principal con diseño responsive */}
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay container mx-auto px-4">
          {/* Contenedor flex en columna para pantallas pequeñas y en fila para pantallas grandes */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Sección de texto */}
            <div className="text-center md:text-left md:w-1/2">
              {/* Título */}
              <h1 className="text-[120px] sm:text-[100px] font-bold dark:text-gray-300 mb-4">
                {JsonData ? JsonData.Header.title : 'Loading'}
              </h1>

              {/* Descripción */}
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
                {JsonData ? JsonData.Header.paragraph : 'Loading'}
              </p>
            </div>

            {/* Sección del cubo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                  <ambientLight intensity={0.7} />
                  <pointLight position={[10, 10, 10]} />
                  <Cube />
                  <OrbitControls />
                </Canvas>
              </div>
            </div>

            


          </div>

          {/* Botón debajo del texto y del cubo en pantallas pequeñas */}
          <div className="flex justify-center mt-8 md:hidden">
            <button
              onClick={scrollToServices}
              className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600 mt-16"
            >
              <span
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></span>
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                    Más información
                  </span>
                  {/* Icono de flecha hacia abajo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >
                    <path
                      d="M12 16l4-4h-3V4h-2v8H8l4 4z"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>

          {/* Botón en su posición original en pantallas grandes */}
          <div className="hidden md:flex md:justify-center md:mt-8">
            <button
              onClick={scrollToServices}
              className=" relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600 mt-16"
            >
              <span
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></span>
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                    Más información
                  </span>
                  {/* Icono de flecha hacia abajo */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >
                    <path
                      d="M12 16l4-4h-3V4h-2v8H8l4 4z"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
