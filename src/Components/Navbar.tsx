import { useEffect } from "react";

interface NavbarProps {
  theme: string;
  handleChangeTheme: () => void;
}

export default function Navbar({ theme, handleChangeTheme }: NavbarProps) {
  // Asegúrate de que el tema se aplique al elemento <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-neutral-800 p-4 shadow-md">
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
      </div>
    </nav>
  );
}