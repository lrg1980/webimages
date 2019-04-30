import React from 'react';

const Imagen = (props) => {
     const { largeImageURL, likes, previewURL, tags, views } = props.imagen; 
     return (
          <div className="col-6 col-sm-4 col-md-3 mb-3">
               <div className="card">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer"> 
                         <img className="card-img-top" src={previewURL} alt={tags} />
                    </a>
                    <div className="card-body">
                         <p className="card-text">{likes} Me gusta</p>
                         <p className="card-text">{views} Vistas</p>

                         <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-danger btn-block">Ver imagen</a>
                    </div>
               </div>
          </div>
     );
}

export default Imagen;