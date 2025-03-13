import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/ClienteList.css"; // Importa el archivo de estilos

// 
// Integrantes
// Rios David
// Torrez Marcelo
// Rivera Enrique
// 


// const borrarCliente = (id) => {
//   axios.delete(`http://localhost:3000/clientes/${id}`);
// };

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/clientes")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Error al obtener clientes", error));
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
              <td>
                <button onClick={() => borrarCliente(cliente.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClienteList;

                                                                                                                                                                                                                                                                                                                                   // Integrantes: Torrez Marcelo, Rivera Enrique, Rios David