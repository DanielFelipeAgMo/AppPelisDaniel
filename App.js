import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const getPopularMovies = ()=>{
  const resp = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5e5d4986d46e005eba45fd98f8b0191b')
  console.log(resp);
}


const App = () => {
  return (
    getPopularMovies();
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hola HdlCm</Text>
    </View>
  );
};

export default App;
