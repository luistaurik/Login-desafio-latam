import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos el CSS de Bootstrap
import { Alert } from 'react-bootstrap'; // Importamos el componente de Alert de react-bootstrap

const Formulario = ({ onSuccess, onError }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (nombre === '' || apellido === '' || edad === '' || email === '') {
      setError(true);
      onError("Todos los campos son obligatorios");
      return;
    }
    setError(false);
    setNombre('');
    setApellido('');
    setEdad('');
    setEmail('');
    onSuccess("Registro exitoso"); // Enviamos un mensaje de éxito
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <Alert variant="danger">Todos los campos son obligatorios</Alert> : null}
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="text"
            name="edad"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <h1>Datos ingresados</h1>
      {nombre} - {apellido} - {edad} - {email}
    </>
  );
};

export default Formulario;
