import React from 'react';
import "./Alert.css"

const Alert = ({error}) => {
  return (
    <div className={`alert alert-${error.type} alert-${error.color}`} role="alert">
      {error.message}
    </div>
  );
};

export default Alert;
