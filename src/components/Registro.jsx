import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import "./Registro.css"
import Alert from './Alert';

function Registro() {
  const [error, setError] = useState("Nothing"); // Estado para almacenar el mensaje de error

  const handleError = (error) => {
    // Lógica para mostrar la notificación de error en Registro
    console.error("Error:", error);
    setError("Error"); // Configurar el mensaje de error en el estado
  };

  const handleSuccess = (message) => {
    console.log("Éxito:", message);
    setError("Success"); // Limpiar el mensaje de error en caso de éxito
  };

  return (
    <div className='login'>
      <div className='social-section'>
      <SocialButton className="social-button" icon="fa-brands fa-facebook" />
      <SocialButton className="social-button" icon="fa-brands fa-square-twitter" />
      <SocialButton className="social-button" icon="fa-brands fa-github"/>
      </div>
      <p className='options-text'>O usa tu Email para registrarte.</p>
      <Formulario onSuccess={handleSuccess} onError={handleError} />
      {error ? (
        <Alert message={error} type="danger" color="danger"/>
      ) : (
        <Alert message={error} type="success" color="danger"/>
      )}
    </div>
  );
};

export default Registro;
