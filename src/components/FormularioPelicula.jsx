import React from 'react';

const FormularioPelicula = ({ peliculaEditar, nuevaPelicula, cambio, agregarPelicula, actualizarPelicula }) => {

  // Función para manejar el envío del formulario
  const manejarSubmit = (e) => {
    e.preventDefault();  // Evita que se recargue la página
    if (peliculaEditar) {
      actualizarPelicula();
    } else {
      agregarPelicula();
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <h2>{peliculaEditar ? 'Editar Película' : 'Agregar Película'}</h2>
      
      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={nuevaPelicula.titulo}
        onChange={cambio}
        required  // Campo obligatorio
      />
      
      <input
        type="date"
        name="fechaEstreno"
        placeholder="Fecha de Estreno"
        value={nuevaPelicula.fechaEstreno}
        onChange={cambio}
        required  // Campo obligatorio
      />
      
      <input
        type="text"
        name="productor"
        placeholder="Productor"
        value={nuevaPelicula.productor}
        onChange={cambio}
        required  // Campo obligatorio
      />
      
      <input
        type="url"
        name="portada"
        placeholder="URL de la portada"
        value={nuevaPelicula.portada}
        onChange={cambio}
        required  // Campo obligatorio
      />
      
      <button type="submit">
        {peliculaEditar ? 'Actualizar Película' : 'Agregar Película'}
      </button>
    </form>
  );
};

export default FormularioPelicula;
