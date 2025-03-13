import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Contenedor de la tarjeta */}
      <div className="card">
        <h1>Bienvenido a la gestión de clientes</h1>
        <p>Administra tus clientes de forma eficiente y rápida.</p>
        <Link to="/clientes">
          <button>Ver Clientes</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;