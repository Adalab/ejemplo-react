// Librería de React para poder utilizar JSX y los componentes de React
import React from 'react';

// Librería de React que permite meter el JSX y toda la lógica de React directamente en una web
import ReactDOM from 'react-dom';

// `<p>Hello world!</p>` Html puro sin comillas y funciona bien 👏

// Con el segundo parámetro básicamente le decimos dentro de qué etiqueta queremos
// meter todo lo que se genere con React
ReactDOM.render(<p>Hello world!</p>, document.getElementById('root'));
