import React, { Component } from 'react';

class Navegacion extends Component {

     mostrarAtras = () => {
          const { pagina } = this.props;
          if (pagina === 1) return null;

          return (
               <button onClick={this.props.paginaAtras} type="button" className="btn btn-info mr-1">&larr; Atrás</button>
          )
     }

     mostrarAdelante = () => {
          const { pagina, totalPaginas } = this.props;
          if(pagina === totalPaginas) return null;
               
          return (
               <button onClick={this.props.paginaAdelante} type="button" className="btn btn-info">Adelante &rarr;</button>
          )
     }

     render() {
          return ( 
               <div className="py-5">
                    { this.mostrarAtras() }
                    { this.mostrarAdelante() }
               </div>
          );
     }
}
 
export default Navegacion;