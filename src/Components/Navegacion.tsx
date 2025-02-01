import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import JsonData from '../data/data.json';



export function Navegacion({ theme, handleChangeTheme }: any) {
  

  const [pageData, setPageData] = useState({});
    useEffect(() => {
      setPageData(JsonData);
    }, []);

  return (
    <>
    <Navbar  collapseOnSelect fixed = 'top' expand='sm' className='shadow-md flex justify-center items-center p-4  dark:bg-neutral-900'>
    <Container className="text-xl font-bold text-black dark:text-white">
        <Navbar.Brand >DevPro</Navbar.Brand>
        <Navbar.Toggle className='navbar-toggle' aria-controls ='responsive-navbar-nav' />

        <Navbar.Collapse id = 'responsive-navbar-nav'   className="justify-content-end" >
         <Nav defaultActiveKey="/" as="ul">
         <Nav.Item>
           <Nav.Link href="#Home" className="nav-links" >Inicio</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#Services" className="nav-links" >Servicios</Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href='#Team'  className="nav-links" >Team</Nav.Link>
         </Nav.Item>
         <button
          className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          onClick={handleChangeTheme}
        >
          {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
        </button>
         </Nav>
         
        </Navbar.Collapse>
    
    </Container>
  </Navbar>
    </>
  );
}