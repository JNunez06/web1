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

  // Función para hacer scroll hasta una sección
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={` z-50 fixed top-0 w-full shadow-md flex justify-center items-center p-0.1 ${theme === "light" ? "bg-gradient-to-r from-white to-blue-900" : " dark:from-gray-900 dark:to-black"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold dark:text-blue-700 text-blue-500">
          DevStudio
        </span>
        
        {/* Botón de cambio de tema */}
        <button
          className="px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 mt-2 lg:mt-0"
          onClick={handleChangeTheme}
        >
          <label className="switch">
            {theme === "light" ? <IconMoon /> : <IconSun />}
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
        <div className={`${isMenuOpen ? "block" : "hidden "} w-full md:block md:w-auto `}>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <li>
              <button
                onClick={() => handleScrollToSection("Home")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("Services")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("Team")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Equipo DP
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScrollToSection("Location")}
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Ubicación
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
