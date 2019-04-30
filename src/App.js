import React, { Component } from 'react';
import imagen from './img/logo.jpg';
import Buscador from './componentes/Buscador';
import Resultado from "./componentes/Resultado";

class App extends Component {
  state = {
    termino: '',
    imagenes: []
  }

  consultarAPI = () => {
    // console.log('desde consultar API')
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=12352300-07f3f5b2aa7969ce6a39f317f&q=${termino}&per_page=30`;

    // console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}) )
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
        this.consultarAPI();   
    })
  }
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src={imagen} className="img-thumbnail" width="200px" alt="Logo" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="lead text-center"><b>Búscador de imágenes</b></p>
              <Buscador 
                datosBusqueda={this.datosBusqueda}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <Resultado
            imagenes={this.state.imagenes}
            
          />

        </div>
      </div>    
    );
  }
}

export default App;
