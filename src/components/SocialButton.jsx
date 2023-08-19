import React from 'react';
import "./SocialButton.css"

const SocialButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="social-button">
      <i className={`fab ${icon}`} /> {/* Utiliza "fab" para íconos de redes sociales */}
    </button>
  );
};

export default SocialButton;
