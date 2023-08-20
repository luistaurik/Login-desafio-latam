import React, { useState,useEffect } from "react";
import "./Registro.css"
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';


function Registro(props) {
//   const {
//     nombreError,
//     apellidoError,
//     edadError,
//     emailError,
//     conemailError,
//     generoError,
//     passwordError,
//     confirmPasswordError,
//     nombre,
//     apellido,
//     edad,
//     email,
//     conemail,
//     genero,
//     password,
//     confirmPassword,
//   } = props;

//   const allFieldsValid =
//     !nombreError &&
//     !apellidoError &&
//     !edadError &&
//     !emailError &&
//     !conemailError &&
//     !generoError &&
//     !passwordError &&
//     !confirmPasswordError &&
//     nombre &&
//     apellido &&
//     edad &&
//     email &&
//     conemail &&
//     genero &&
//     password &&
//     confirmPassword;

//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (allFieldsValid) {
//       setError("success");
//     } else if (
//       nombreError ||
//       apellidoError ||
//       edadError ||
//       emailError ||
//       conemailError ||
//       generoError ||
//       passwordError ||
//       confirmPasswordError
//     ) {
//       setError("error");
//     } else {
//       setError("");
//     }
//   }, [
//     allFieldsValid,
//     nombreError,
//     apellidoError,
//     edadError,
//     emailError,
//     conemailError,
//     generoError,
//     passwordError,
//     confirmPasswordError,
//   ]);

  return (
    <div className='login'>
      <div className='social-section'>
      <SocialButton className="social-button" icon="fa-brands fa-facebook" />
      <SocialButton className="social-button" icon="fa-brands fa-square-twitter" />
      <SocialButton className="social-button" icon="fa-brands fa-github"/>
      </div>
      <p className='options-text'>O usa tu Email para registrarte.</p>
      <Formulario />

    </div>
  );
};

export default Registro;
