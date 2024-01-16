import axios from 'axios';

axios.defaults.params = { api_key: 'c3e93d2701a24d60026f1c10cdb5f49e' };
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieList() {
  const response = await axios.get(`trending/movie/day`);
  return response.data;
}

export async function fetchMovieSearch(searchQuery) {
  const response = await axios.get(`search/movie?query=${searchQuery}`);
  return response.data;
}

export const fetchImageById = async movieId => {
  const response = await axios.get(`/movie/${movieId}?&language=en-US`);
  return response.data;
};

export async function fetchImageCredits(movieId) {
  const response = await axios.get(`movie/${movieId}/credits`);
  return response.data;
}

export async function fetchImageReviews(movieId) {
  const response = await axios.get(`movie/${movieId}/reviews`);
  return response.data;
}
