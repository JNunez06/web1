import { useEffect } from "react";
import { useState } from 'react';
import JsonData from '../data/data.json';


interface NavbarProps {
  theme: string;
  handleChangeTheme: () => void;
}

export default function Navbar({ theme, handleChangeTheme }: NavbarProps) {
  // Asegúrate de que el tema se aplique al elemento <html>
  
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
    <nav className={`fixed top-0 w-full shadow-md flex justify-center items-center p-4 ${theme === "light" ? "bg-white" : "dark:bg-neutral-900"}`}>
 
      <div className="container mx-auto flex justify-between items-center">
        {/* Aplica el color del texto según el tema */}
        <span className="text-xl font-bold text-black dark:text-white">
          Mi Aplicación
        </span>
        <button
          className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={handleChangeTheme}
        >
          {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </button>
        <a href="#Home" className="text-gray-800 hover:text-blue-500">Inicio</a>
        <a href="#Services" className="text-gray-800 hover:text-blue-500">Servicios</a>
        <a href="#Team" className="text-gray-800 hover:text-blue-500">Team</a>



      </div>
    </nav>
  );
}