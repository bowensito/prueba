import React from 'react';
const PeliculaItem = ({ pelicula, editarPelicula, eliminarPelicula }) => {
  return (
    <div className="pelicula-item">
      <img
        src={pelicula.portada}
        alt={`Portada de ${pelicula.titulo}`}
        className="portada"
      />
      <h3>{pelicula.titulo}</h3>
      <p>Fecha de Estreno: {pelicula.fechaEstreno}</p>
      <p>Productor: {pelicula.productor}</p>
      <button onClick={() => editarPelicula(pelicula)}>Editar</button>
      <button onClick={() => eliminarPelicula(pelicula.id)}>Borrar</button>
    </div>
  );
};
export default PeliculaItem;