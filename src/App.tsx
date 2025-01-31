/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'; // Asegúrate de importar el componente Navbar
import { useState } from 'react';





function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  return (
    <>
       <Navbar theme={theme} handleChangeTheme={handleChangeTheme} />
      <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
      </div>
      

    </>
  )
}

export default App
