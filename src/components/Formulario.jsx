import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';

const Formulario = ({ onSuccess, onError }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [conemail, setConEmail] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    setError(false);
    setEmailError(false);

    if (nombre === '' || apellido === '' || edad === '' || email === '' || conemail === '') {
      setError(true);
      onError("Todos los campos son obligatorios");
      return;
    }
    
    if (email !== conemail) {
      setEmailError(true);
      setError(true);
      onError("Los correos electrónicos no coinciden");
      return;
    }
    
    setNombre('');
    setApellido('');
    setEdad('');
    setEmail('');
    setConEmail('');
    onSuccess("Registro exitoso");
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <Alert variant="danger">Todos los campos son obligatorios</Alert>}
        {emailError && <Alert variant="danger">Los correos electrónicos no coinciden</Alert>}
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
        <div className="form-group">
          <label>Confirmar Email</label>
          <input
            type="text"
            name="conemail"
            className="form-control"
            onChange={(e) => setConEmail(e.target.value)}
            value={conemail}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <h1>Datos ingresados</h1>
      {nombre} - {apellido} - {edad} - {email} - {conemail}
    </>
  );
};

export default Formulario;
