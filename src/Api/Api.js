import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDdhMWI4MjAzMmRjMmZiZTgyZDNlODc5NDNhYWU2NiIsInN1YiI6IjY1ODQ3Y2ExOTc2YTIzMWFmY2EwNDJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v-g9fGLwsoueIPYdQKIwgi534ScdumahciLYWjYViA",
  },
};
export async function trendingMovies() {
  const { data } = await axios.get("/trending/movie/day", options);
  return data.results;
}

export async function getMovieId(id) {
  const { data } = await axios.get(`/movie/${id}`, options);
  return data;
}

export async function fetchMovieCredits(id) {
  const { data } = await axios.get(`/movie/${id}/credits`, options);
  return data.cast;
}

export async function movieReviews(id) {
  const { data } = await axios.get(`/movie/${id}/reviews`, options);
  return data.results;
}

export async function getMoviesTitleSearch(search) {
  const { data } = await axios.get(`/search/movie?query=${search}`, options);
  return data.results;
}
