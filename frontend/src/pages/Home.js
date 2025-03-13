import React from 'react';
import '../styles/Home.css';  // Ruta correcta dentro de src/

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Bienvenido a la gestión de clientes</h1>
        <p className="subtitle">Administra tus clientes de forma eficiente y rápida.</p>
        <a href="/clientes" className="button">Ver Clientes</a>
      </div>
    </div>
  );
};

export default Home;