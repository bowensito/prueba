import React from 'react';
import PeliculaItem from './PeliculaItem';

const ListaPeliculas = ({ peliculas, editarPelicula, eliminarPelicula }) => {
  return (
    <div className="grid-peliculas">
      {peliculas.map((pelicula) => (
        <PeliculaItem 
          key={pelicula.id}
          pelicula={pelicula}
          editarPelicula={editarPelicula}
          eliminarPelicula={eliminarPelicula}
        />
      ))}
    </div>
  );
};

export default ListaPeliculas;
