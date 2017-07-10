import React from 'react';

/*
  Aqui vemos algo nuevo, las props, sirven para pasar información de elementos
  padres a elementos hijos
  En este caso, cuando usemos title le pasaremos una propiedad text para definir
  su texto:

  <Title text="Aquí iría el texto" />
*/

class Title extends React.Component {

  // Creamos un método de la clase para hacer el código más limpio, luego
  // lo utilizaremos en el método render. Usamos || para definir un valor por defecto
  printText() {
    return this.props.text || "Ha surgido un error. No se ha recibido ningún mensaje"
  }

  render() {
    return (
      <h1 className="title">{this.printText()}</h1>
    );
  }
}

export default Title;
