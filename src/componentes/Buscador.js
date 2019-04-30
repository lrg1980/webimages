import React, { Component } from 'react';

export default class Buscador extends Component {

   busquedaRef = React.createRef();

   obtenerDatos = (e) => {
      e.preventDefault();

      const termino = this.busquedaRef.current.value;

      // console.log(termino);
      this.props.datosBusqueda(termino);
   }

   render() {
      return (
         <form onSubmit={this.obtenerDatos}>
            <div className="row">
               <div className="form-group col-md-8">
                  <input ref={this.busquedaRef} className="form-control form-control-lg" type="text" placeholder="Busca tu imágen" />
               </div>
               <div className="form-group col-md-4">
                  <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
               </div>
            </div>
         </form>
      );
   }
}