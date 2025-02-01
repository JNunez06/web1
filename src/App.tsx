/*import './App.css'*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

/*import { Navbar } from './Components/Navbar' ;*/
import Navbar from './Components/Navbar';
import { Home } from './Components/Home';
import {Services} from './Components/Services';
import { Team } from './Components/Team';
import { Analytics } from "@vercel/analytics/react";  // Aquí importas el componente Analytics




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
      <div className="h-screen flex-col justify-center items-center dark:bg-neutral-900">
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
        <Home />
        <Services />
        <Team />
      </div>

      
      {/* Agregar Analytics aquí */}
      <Analytics />  {/* Este componente se coloca justo al final */}
      
      

    </>
  )
}

export default App
