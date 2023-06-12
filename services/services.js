/* eslint-disable prettier/prettier */
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=8c247ea0b4b56ed2ff7d41c9a833aa77';


export const getUpcomingMovies = async () => {
  const response = await axios.get(
    (`${apiUrl}/movie/upcoming?${apiKey}`)
  );
  return response.data.results;
};

 
export const getPopulargMovies = async () => {
  const response = await axios.get(
    ( `${apiUrl}/tv/popular?${apiKey}`)

  );
  return response.data.results;

  };
  export const getPopularTv= async () => {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=c0582cce7b165c72a6a5c0336a746595',
    );
  
  return response.data.results;
};


export const getFamilyMovies= async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=c0582cce7b165c72a6a5c0336a746595&with_genres=10751'
    );

return response.data.results;
};

export const getActionMovie= async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=c0582cce7b165c72a6a5c0336a746595&with_genres=28'
    );

return response.data.results;
};
export const getDocumentary= async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?api_key=c0582cce7b165c72a6a5c0336a746595&with_genres=99'
    );

return response.data.results;
};


export const getMovie = async (id) => {
  const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c0582cce7b165c72a6a5c0336a746595`);
  return resp.data;
};

export const search = async (query, type) => {
  const response = await axios.get(
    ( `${apiUrl}/search/${type}?${apiKey}&query=${query}`)
  );
  return response.data.results;

  };