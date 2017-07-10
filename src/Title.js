import React from 'react';

/*
  Aqui vemos algo nuevo, las props, sirven para pasar información de elementos
  padres a elementos hijos
  En este caso, cuando usemos title le pasaremos una propiedad text para definir
  su texto:

  <Title text="Aquí iría el texto" />
*/

class Title extends React.Component {

  printText() {
    return this.props.text || "Ha surgido un error. No se ha recibido ningún mensaje";
  }

  // Creamos un método para que según la propiedad kind que se le pase muestre una
  // etiqueta u otra
  renderTitleTag() {
    if (this.props.kind === "title") {
      return <h1 className="title">{this.printText()}</h1>;
    } else if (this.props.kind === "subtitle") {
      return <h2 className="title">{this.printText()}</h2>;
    } else {
      return <h6 className="title">{this.printText()}</h6>;
    }
  }

  render() {
    return this.renderTitleTag();
  }
}

export default Title;
