import React from 'react';

const Alert = ({ message, type, onClose }) => {
  const alertStyles = {
    success: {
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
      color: '#155724',
    },
    error: {
      backgroundColor: '#f8d7da',
      borderColor: '#f5c6cb',
      color: '#721c24',
    },
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px',
        borderRadius: '5px',
        zIndex: 9999,
        ...alertStyles[type],
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          marginLeft: '20px',
          background: 'none',
          border: 'none',
          color: 'inherit',
          cursor: 'pointer',
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;