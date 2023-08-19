import React, { useState } from 'react';
import SocialButton from './SocialButton';
import Formulario from './Formulario';
import "./Registro.css"
import Alert from './Alert';

const Registro = () => {
  const [error, setError] = useState(null); // Estado para almacenar el mensaje de error

  const handleSuccess = (message) => {
    // Lógica para mostrar la notificación de éxito en Registro
    console.log("Éxito:", message);
    setError(null); // Limpiar el mensaje de error en caso de éxito
  };

  const handleError = (error) => {
    // Lógica para mostrar la notificación de error en Registro
    console.error("Error:", error);
    setError(error); // Configurar el mensaje de error en el estado
  };

  return (
    <div>
      <SocialButton className="social-button" icon="fa-brands fa-facebook" />
      <SocialButton className="social-button" icon="fa-brands fa-square-twitter" />
      <SocialButton className="social-button" icon="fa-brands fa-github"/>
      <p className='options-text'>O usa tu Email para registrarte.</p>
      <Formulario onSuccess={handleSuccess} onError={handleError} />
      
      {error && <Alert message={error} type="danger" />} {/* Mostrar el mensaje de error si existe */}
    </div>
  );
};

export default Registro;
