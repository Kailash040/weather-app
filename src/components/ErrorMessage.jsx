import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <p>Error: {message}</p>
      <p>Please try another city name.</p>
    </div>
  );
};

export default ErrorMessage;