const API_KEY = "35660712025133370860d67e18847127";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const moviesData = await responce.json();
  return moviesData.results;

};

export const searchMovies = async (query) => {
  const responce = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const searchData = await responce.json();
  return searchData.results;
};
