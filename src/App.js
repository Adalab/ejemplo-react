import React from 'react';

import brand from './images/brand.png';
import Title from './Title';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <img src={brand} className="brand" alt="Logotipo de Adalab" />
        <Title />
      </div>
    );
  }
}

export default App;
