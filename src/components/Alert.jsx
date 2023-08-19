import React from 'react';
import "./Alert.css"

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
