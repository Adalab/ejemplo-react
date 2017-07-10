import React from 'react';
import ReactDOM from 'react-dom';

// Importando estilos desde JavaScript 🤔
// Los estilos se compilan con Koala como hemos hecho hasta ahora
import './stylesheets/index.css';

// Metemos el estilo como lo haríamos eh HTML pero en vez de poner class usamos
// className
ReactDOM.render(<p className="greeting">Hello world!</p>, document.getElementById('root'));
