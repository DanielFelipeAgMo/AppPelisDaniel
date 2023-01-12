import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimentions = Dimensions.get('screen');
const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [popularMovies, setPopularMovies] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        setError(err);
      });
    getPopularMovies()
      .then(movies => {
        setPopularMovies(movies);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <react.Fragment>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={moviesImages}
          dotStyle={styles.sliderStyle}
          sliderBoxHeight={dimentions.height / 1.5}
          autoplay={true}
          circleLoop={true}
        />
      </View>
      <View style={styles.carousel}>
        <FlatList
          data={popularMovies}
          horizontal={true}
          renderItem={({item}) => <Text>{item.title}</Text>}></FlatList>
      </View>
    </react.Fragment>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle: {
    height: 0,
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
