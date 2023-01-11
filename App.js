import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Nombre: {movie.original_title}</Text>
      <Text>Idioma: {movie.original_language}</Text>
      <Text>Fecha: {movie.release_date}</Text>
      {error && <Text style={{color: 'red'}}>Error en el servidor</Text>}
    </View>
  );
};

export default App;
