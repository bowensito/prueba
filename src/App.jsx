import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ListaPeliculas from './components/ListaPeliculas';
import FormularioPelicula from './components/FormularioPelicula';

const App = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [nuevaPelicula, setNuevaPelicula] = useState({
    titulo: '',
    fechaEstreno: '',
    productor: '',
    portada: ''
  });
  const [peliculaEditar, setPeliculaEditar] = useState(null);

  const URL_PELICULAS = 'https://66fd5e87699369308954eeed.mockapi.io/api/v1/Pelicula';

  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const respuesta = await axios.get(URL_PELICULAS);
        setPeliculas(respuesta.data);
      } catch (error) {
        console.error('Error al obtener las películas', error);
      }
    };
    obtenerPeliculas();
  }, []);

  const cambio = (e) => {
    setNuevaPelicula({
      ...nuevaPelicula,
      [e.target.name]: e.target.value,
    });
  };

  const agregarPelicula = async () => {
    try {
      const respuesta = await axios.post(URL_PELICULAS, nuevaPelicula);
      setPeliculas([...peliculas, respuesta.data]);
      setNuevaPelicula({ titulo: '', fechaEstreno: '', productor: '', portada: '' });
    } catch (error) {
      console.error('Error al agregar la película', error);
    }
  };

  const editarPelicula = (pelicula) => {
    setPeliculaEditar(pelicula);
    setNuevaPelicula(pelicula);
  };

  const actualizarPelicula = async () => {
    try {
      const respuesta = await axios.put(`${URL_PELICULAS}/${peliculaEditar.id}`, nuevaPelicula);
      setPeliculas(peliculas.map((pelicula) =>
        pelicula.id === peliculaEditar.id ? respuesta.data : pelicula
      ));
      setPeliculaEditar(null);
      setNuevaPelicula({ titulo: '', fechaEstreno: '', productor: '', portada: '' });
    } catch (error) {
      console.error('Error al actualizar la película', error);
    }
  };

  const eliminarPelicula = async (id) => {
    try {
      await axios.delete(`${URL_PELICULAS}/${id}`);
      setPeliculas(peliculas.filter((pelicula) => pelicula.id !== id));
    } catch (error) {
      console.error('Error al eliminar la película', error);
    }
  };

  return (
    <div className="app">
      <h1>Lista de películas vistas</h1>
      <FormularioPelicula
        peliculaEditar={peliculaEditar}
        nuevaPelicula={nuevaPelicula}
        cambio={cambio}
        agregarPelicula={agregarPelicula}
        actualizarPelicula={actualizarPelicula}
      />
      <ListaPeliculas
        peliculas={peliculas}
        editarPelicula={editarPelicula}
        eliminarPelicula={eliminarPelicula}
      />
    </div>
  );
};

export default App;
