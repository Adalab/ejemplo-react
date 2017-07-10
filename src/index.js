import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

// Importamos el archivo (módulo) de App para poder usarlo
import App from './App';

// Usamos App directamente como si fuese una etiqueta sin cierre.
// Cuando ponemos <App /> basicamente estamos ejecutando App.render(); y metiendo
// el contenido de su return
ReactDOM.render(<App />, document.getElementById('root'));

// IMPORTANTE: Hay que poner la barra inclinada al final y el nombre en
// mayúsculas, de lo contrario no funciona
