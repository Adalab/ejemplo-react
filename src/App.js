import React from 'react';

// También importamos imágenes 😱
import brand from './images/brand.png';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={brand} className="brand" alt="Logotipo de Adalab" />
        <h1 className="title">Mi primera app con React. Con diseño original © 🎨</h1>
      </div>
    );
  }
}

// Esto no lo hemos visto. Sirve para exportar sería como el return de un archivo
export default App;
