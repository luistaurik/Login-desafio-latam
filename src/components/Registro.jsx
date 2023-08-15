import React from 'react';

import SocialButton from "./SocialButton";
import Formulario from "./Formulario"; // Corrige la ruta aquí
import Alert from "./Alert";

const Registro = () => {
  return (
    <div>
      <SocialButton icon="fa-brands fa-facebook" />
      <SocialButton icon="fa-brands fa-square-twitter" />
     
      <Formulario />
      <Alert message="Mensaje de alerta aquí" type="danger" />
    </div>
  );
};

export default Registro;
