import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '5e5d4986d46e005eba45fd98f8b0191b';

//Get popular Movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?api_key=${apiKey}`);
  return resp.data.results;
};

//Get Upcoming Movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}`);
  return resp.data.results;
};

//Get popular TV
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?api_key=${apiKey}`);
  return resp.data.results;
};

//Get family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=10751`,
  );
  return resp.data.results;
};

//Get Documentary
export const getDocumentary = async () => {
  const resp = await axios.get(
    `${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=99`,
  );
  return resp.data.results;
};
