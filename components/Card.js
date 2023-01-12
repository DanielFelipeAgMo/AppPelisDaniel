import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';

const placeholderImage = require('../assets/images/placeholder.jpg');

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={
            item.poster_path
              ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
              : placeholderImage
          }
        />
        {!item.poster_path && <Text style={style.movieName}>{item.title}</Text>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    movieName: {
        position: 'absolute',
        width: 100,
        textAlign: 'center',
        top: 10,
    },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',    
    height:200,
  },
});

export default Card;
