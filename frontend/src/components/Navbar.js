import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de importar el archivo CSS

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/clientes">Clientes</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

