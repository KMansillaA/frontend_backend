import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ClienteList.css';  // Importa el archivo de estilos

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clientes')
      .then((response) => setClientes(response.data))
      .catch((error) => console.error('Error al obtener clientes', error));
  }, []);

  const handleView = (id) => {
    console.log(id);
  };

  const handleEdit = (id) => {
    updateUser(id, {nombre: 'Updated'});
  };

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const updateUser = (id, data) => {
    axios.put(`http://localhost:3000/clientes/${id}`, data)
      .then(() => updateTable())
      .catch((error) => console.error('Error al editar cliente', error));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/clientes/${id}`)
      .then(() => updateTable())
      .catch((error) => console.error('Error al eliminar cliente', error));
  };

  const updateTable = () => {
    axios.get('http://localhost:3000/clientes')
      .then((response) => setClientes(response.data))
      .catch((error) => console.error('Error al obtener clientes', error));
  }

  return (
    <div className="table-container">
      <h2>Lista de Clientes</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Ver</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre}</td>
              <td>{cliente.correo}</td>
              <td><button onClick={() => handleView(cliente.id)}>Ver</button></td>
              <td><button onClick={() => handleEdit(cliente)}>Editar</button></td>
              <td><button onClick={() => handleDelete(cliente.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;
