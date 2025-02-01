import { useEffect, useState } from "react";
import JsonData from '../data/data.json';

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

  const [pageData, setPageData] = useState({});
  useEffect(() => {
    setPageData(JsonData);
  }, []);

  return (
    <nav className="fixed top-0 w-full shadow-md p-4 dark:bg-neutral-900 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold text-black dark:text-white">
          Mi Aplicación
        </span>

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
            className="block lg:inline-block text-gray-800 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#Services"
            className="block lg:inline-block text-gray-800 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </a>
          <a
            href="#Team"
            className="block lg:inline-block text-gray-800 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 py-2 lg:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </a>

          {/* Botón de cambio de tema */}
          <button
            className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 mt-2 lg:mt-0"
            onClick={handleChangeTheme}
          >
            {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
          </button>
        </div>
      </div>
    </nav>
  );
}