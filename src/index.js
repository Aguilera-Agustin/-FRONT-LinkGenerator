import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {
      alert('Este sitio es de prueba, por su seguridad no utilice datos reales.')
    }
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
