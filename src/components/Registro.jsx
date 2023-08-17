import React from 'react';
import SocialButton from './SocialButton'; // Ruta relativa desde Registro.jsx
import Formulario from './Formulario';   // Ruta relativa desde Registro.jsx
import Alert from './Alert';             // Ruta relativa desde Registro.jsx

const Registro = () => {
  return (
    <div>
      <SocialButton icon="fa-brands fa-facebook" />
      <SocialButton icon="fa-brands fa-square-twitter" />
     
      <Formulario />
   
    </div>
  );
};

export default Registro;
