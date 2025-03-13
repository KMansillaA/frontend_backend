import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ClienteList.css';  // Importa el archivo de estilos

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const handleClienteDeleted = (clienteId) => {
    setClientes(clientes.filter(cliente => cliente.id !== clienteId));
  };

  const eliminarCliente = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/clientes/${id}`);
      if (response.status === 200) {
        alert('Usuario eliminado correctamente');
        handleClienteDeleted(id);
      }
    } catch (error) {
      console.error('Error al eliminar cliente', error);
    }
  }

  useEffect(() => {
    axios.get('http://localhost:3000/clientes')
      .then((response) => setClientes(response.data))
      .catch((error) => console.error('Error al obtener clientes', error));
  }, []);

  return (
    <div className="table-container">
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td><button onClick={(e) => eliminarCliente(cliente.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;
