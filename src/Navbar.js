
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import Cartwidget from './cartwidget';
import logo from './MySneaker/img/logo.jpg';
import './index.css';


//<>
function Navbarr() {
  return (
    <Navbar className="navbar navbar-expand-sm navbar-white bg-white shadow-sm">
     
     <div class="container-fluid">
     <h2><img src={logo} alt="sneakerlogo" width="100" height="50" id='sneaker'/></h2>
     <select className="form select w-25 position-absolute top-50 start-50 translate-middle">
        <option selected> Jordan </option>
        <option value={1}>LeBron</option>
        <option value={2}>Nike</option>
        <option value={3}>Adidas</option>
      </select>
      <div className='collapse navbar-collapse w-20' id='NavbarContent'>
       <ul className='navbar-nav '> 
          <li className='nav-item'><a className='nav-link text-light href="#"'>Home</a></li>
          <li className='nav-item'><a className='nav-link text-light href="#"'>Hombre</a></li>
          <li className='nav-item'><a className='nav-link text-light href="#"'>Mujer</a></li>
          <li className='nav-item'><a className='nav-link text-light href="#"'>Unisex</a></li>
       </ul>
       <Cartwidget />
      </div>
      
     </div>
     </Navbar>
  );
}


export default Navbarr;