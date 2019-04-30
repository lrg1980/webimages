import React, { Component } from 'react';
import imagen from './img/logo.jpg';
import Buscador from './componentes/Buscador';
import Resultado from "./componentes/Resultado";
import './App.css';

class App extends Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: '',
    cargando: false
  }

  consultarAPI = async () => {
    // console.log('desde consultar API')
    const termino = this.state.termino;
    const pagina = this.state.pagina;

    const url = `https://pixabay.com/api/?key=12352300-07f3f5b2aa7969ce6a39f317f&q=${termino}&per_page=30&page=${pagina}`;

    // console.log(url);
    await fetch(url)
      .then(respuesta => {
        this.setState({
          cargando: true
        });
        return respuesta.json()
      } )
      .then(resultado => {
        setTimeout(() => {
          this.setState({
            imagenes: resultado.hits,
            cargando: false
          })
        }, 1000);
      })
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino, 
      pagina: 1
    }, () => {
        this.consultarAPI();   
    })
  }

  paginaAtras = () => {
    // Leemos el state
    let pagina = this.state.pagina;
    
    // SI es la pagina 1, no se puede retroceder
    if (pagina === 1) return null;

    // Se resta a la pagina nro X
    pagina -= 1;
    
    // Agregar al state
    this.setState({
      pagina
    }, () => {
        this.consultarAPI();
        this.scroll();
    });
  }
  paginaAdelante = () => {
    let pagina = this.state.pagina;
    pagina += 1;
    
    this.setState({
      pagina
    }, () => {
        this.consultarAPI();
        this.scroll();
    });
  }
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }
  render() {
    const cargando = this.state.cargando;
    let resultado;
    if(cargando) {
      resultado = <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                  </div>
    } else {
      resultado = <Resultado
                    imagenes={this.state.imagenes}
                    paginaAtras={this.paginaAtras}
                    paginaAdelante={this.paginaAdelante}  
                  />

    }
      
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
        <div className="row justify-content-center">
          {resultado}
        </div>
      </div>    
    );
  }
}

export default App;
