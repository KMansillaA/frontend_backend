import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ClienteList.css";

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [clienteEdit, setClienteEdit] = useState(null); 
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    axios
      .get("http://192.168.1.100:3000/clientes")
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Error al obtener clientes", error));
  }, []);

  const handleEdit = (cliente) => {
    setClienteEdit(cliente);
    setNombre(cliente.nombre);
    setCorreo(cliente.correo);
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    if (!clienteEdit) return;

    axios
      .put(`http://192.168.1.100:3000/clientes/${clienteEdit.id}`, {
        nombre,
        correo,
      })
      .then((response) => {
        setClientes(
          clientes.map((cliente) =>
            cliente.id === clienteEdit.id
              ? { ...cliente, nombre, correo }
              : cliente
          )
        );
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error al actualizar el cliente", error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://192.168.1.100:3000/clientes/${id}`)
      .then(() => {
        setClientes(clientes.filter((cliente) => cliente.id !== id));
      })
      .catch((error) => console.error("Error al eliminar el cliente", error));
  };

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
                <button onClick={() => handleEdit(cliente)}>Editar</button>
                <button onClick={() => handleDelete(cliente.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <h3>Editar Cliente</h3>
            <label>
              Nombre:
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </label>
            <label>
              Correo:
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </label>
            <div className="modal-buttons">
              <button onClick={handleUpdate}>Actualizar</button>
              <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClienteList;
