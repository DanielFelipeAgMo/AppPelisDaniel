npx react-native init AppPelisDaniel

crear cuenta en https://www.themoviedb.org/ y obtener el API Key

Clave de la API (v3 auth)
5e5d4986d46e005eba45fd98f8b0191b

Ejemplo de solicitud de API
https://api.themoviedb.org/3/movie/550?api_key=5e5d4986d46e005eba45fd98f8b0191b

Token de acceso de lectura a la API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTVkNDk4NmQ0NmUwMDVlYmE0NWZkOThmOGIwMTkxYiIsInN1YiI6IjYzYmUzNjlhZmE0MDQ2MDBlNjNjOWZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CUhSFLNBX0QMBpE54qE5wRjAPwZGc9o1QYerBaIkXVY

npx react-native run-android
To avoid blocks and to keep up with the course you may have to install the correct version of the package like the example that follows:



    npm install axios@0.21.1
    or
    yarn add axios@0.21.1


Make sure you check the following package.json to check the version we use in case you run into any incompatibility.


     "dependencies": {
        "@react-native-community/masked-view": "^0.1.10",
        "@react-navigation/native": "^5.9.4",
        "@react-navigation/stack": "^5.14.4",
        "axios": "^0.21.1",
        "dateformat": "^4.5.1",
        "prop-types": "^15.7.2",
        "react": "17.0.1",
        "react-hook-form": "^7.0.5",
        "react-native": "0.64.0",
        "react-native-gesture-handler": "^1.10.3",
        "react-native-image-slider-box": "^1.0.12",
        "react-native-linear-gradient": "^2.5.6",
        "react-native-reanimated": "^2.1.0",
        "react-native-safe-area-context": "^3.2.0",
        "react-native-screens": "^3.1.0",
        "react-native-star-rating": "^1.1.0",
        "react-native-toast-message": "^1.4.9",
        "react-native-vector-icons": "^8.1.0",
        "react-native-video": "^5.1.1",
        "react-native-video-controls": "^2.7.1"
      },
      "devDependencies": {
        "@babel/core": "^7.13.15",
        "@babel/runtime": "^7.13.10",
        "@react-native-community/eslint-config": "^2.0.0",
        "babel-jest": "^26.6.3",
        "eslint": "^7.23.0",
        "jest": "^26.6.3",
        "jest-styled-components": "^7.0.3",
        "metro-react-native-babel-preset": "^0.65.2",
        "react-test-renderer": "17.0.1"
      },