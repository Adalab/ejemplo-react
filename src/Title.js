import React from 'react';

/*
  Aqui vemos algo nuevo, las props, sirven para pasar información de elementos
  padres a elementos hijos
  En este caso, cuando usemos title le pasaremos una propiedad text para definir
  su texto:

  <Title text="Aquí iría el texto" />
*/

class Title extends React.Component {
  render() {
    return (
      <h1 className="title">{this.props.text}</h1>
    );
  }
}

// Al igual que hicimos con App, debemos exportar la clase Title que hemos creado
export default Title;
