import JsonData from '../data/data.json';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cube } from "../Figure/Cube";

export function Home() {
  return (
    <header id="Home" className="h-screen bg-blue-100 dark:bg-blue-900 transition-colors duration-300 pt-20">
      {/* Contenedor principal con diseño responsive */}
      <div className="intro h-full flex items-center justify-center">
        <div className="overlay container mx-auto px-4">
          {/* Contenedor flex en columna para pantallas pequeñas y en fila para pantallas grandes */}
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
            </div>

            {/* Sección del cubo */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
              {/* shadow para sombrear bordes <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] shadow-lg"> */}
              <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
                <Canvas camera={{ position: [2, 2, 3], fov: 50 }}>
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
            <a
              href="#Services"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
            >
              Más información
            </a>
          </div>

          {/* Botón en su posición original en pantallas grandes */}
          <div className="hidden md:flex md:justify-center md:mt-8">
            <a
              href="#Services"
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