import React from 'react';

const SocialButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      <i className={`fab ${icon}`} /> {/* Utiliza "fab" para íconos de redes sociales */}
    </button>
  );
};

export default SocialButton;
