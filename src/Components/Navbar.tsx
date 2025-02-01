import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react"; // Import icons

interface NavbarProps {
  theme: string;
  handleChangeTheme: () => void;
}

export default function Navbar({ theme, handleChangeTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú hamburguesa

  useEffect(() => {
    console.log("Cambiando tema a:", theme);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className={`fixed top-0 w-full shadow-md flex justify-center items-center p-4 ${theme === "light" ? "bg-white" : "dark:bg-neutral-900"}`}>

      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold  dark:text-blue-700 text-blue-500 ">
          DevPro
        </span>
        {/* Botón de cambio de tema */}
        <button
            className="px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 mt-2 lg:mt-0"
            onClick={handleChangeTheme}
          >
           {/* {theme === "light" ? "Noche" : "Día"}*/}
            <label className="switch">
                    {theme === "light" ? < IconMoon /> : <IconSun />}
                <span className="slider"></span>
            </label>
          </button>

        {/* Botón de menú hamburguesa (solo en móvil) */}
        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menú de navegación (oculto en móvil, visible en pantallas grandes) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-4`}
        >
          <a
            href="#Home"
            className="block lg:inline-block text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 lg:py-0 transition-all duration-300 ease-in-out transform hover:scale-105 no-underline"          >
            Inicio
          </a>
          <a
            href="#Services"
            className="block lg:inline-block text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 lg:py-0 transition-all duration-300 ease-in-out transform hover:scale-105 no-underline"          >
            Servicios
          </a>
          <a
            href="#Team"
             className="block lg:inline-block text-lg font-semibold text-gray-800 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 py-2 lg:py-0 transition-all duration-300 ease-in-out transform hover:scale-105 no-underline">
            Team
          </a>
          <a
            href="#Location"
             className="text-amber-300">
            Hubicacion
          </a>

        </div>
            
          
      </div>
    </nav>
  );
}