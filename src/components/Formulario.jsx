import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Formulario.css"

const Formulario = ({ onSuccess, onError }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [conemail, setConEmail] = useState("");

  const [nombreError, setNombreError] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [edadError, setEdadError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [conemailError, setConEmailError] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    setNombreError("");
    setApellidoError("");
    setEdadError("");
    setEmailError("");
    setConEmailError("");

    if (nombre === "") {
      setNombreError("El nombre es obligatorio");
    }
    if (apellido === "") {
      setApellidoError("El apellido es obligatorio");
    }
    if (edad === "") {
      setEdadError("La edad es obligatoria");
    } else {
      const edadNum = parseInt(edad);
      if (isNaN(edadNum) || edadNum < 18) {
        setEdadError("Debes tener al menos 18 años para registrarte");
      }
    }
    if (email === "") {
      setEmailError("El correo electrónico es obligatorio");
    }
    if (conemail === "") {
      setConEmailError("Confirma tu correo electrónico");
    } else if (email !== conemail) {
      setConEmailError("Los correos electrónicos no coinciden");
    }

    if (
      nombreError ||
      apellidoError ||
      edadError ||
      emailError ||
      conemailError
    ) {
      onError("Corrige los errores en el formulario");
      return;
    }

    onSuccess("Registro exitoso");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
          {nombreError && <p className="text-danger">{nombreError}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          {apellidoError && <p className="text-danger">{apellidoError}</p>}
        </div>
        <div className="form-group">
          <input
            type="number"
            name="edad"
            placeholder="Edad"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
            value={edad}
          />
          {edadError && <p className="text-danger">{edadError}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="conemail"
            placeholder="Confirmar Email"
            className="form-control"
            onChange={(e) => setConEmail(e.target.value)}
            value={conemail}
          />
          {conemailError && <p className="text-danger">{conemailError}</p>}
        </div>
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
