import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './assets/styles/styles.css'; // Import your custom CSS

// Create a root element and render the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);