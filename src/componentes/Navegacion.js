import React from 'react';

const Navegacion = (props) => {
     return ( 
          <div className="py-5">
               <button onClick={props.paginaAtras} type="button" className="btn btn-info mr-1">&larr; Atrás</button>
               <button onClick={props.paginaAdelante} type="button" className="btn btn-info">Adelante &rarr;</button>
          </div>
          );
}
 
export default Navegacion;