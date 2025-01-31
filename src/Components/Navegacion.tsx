
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import JsonData from '../data/data.json';


export function Navegacion() {


  const [pageData, setPageData] = useState({});
    useEffect(() => {
      setPageData(JsonData);
    }, []);

  return (
    <>
    <Navbar  collapseOnSelect fixed = 'top' expand='sm' className='navbar navbar-expand-lg bg-body-tertiary '>
    <Container>
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
     
         </Nav>
         
        </Navbar.Collapse>
    
    </Container>
  </Navbar>
    </>
  );
}

