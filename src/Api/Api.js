import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const KEY = "347a1b82032dc2fbe82d3e87943aae66";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDdhMWI4MjAzMmRjMmZiZTgyZDNlODc5NDNhYWU2NiIsInN1YiI6IjY1ODQ3Y2ExOTc2YTIzMWFmY2EwNDJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v-g9fGLwsoueIPYdQKIwgi534ScdumahciLYWjYViA",
  },
};

export async function trendingMovies() {
  const { data } = await axios.get(`/trending/movie/day`, options);
  return data.results;
}
export async function movieId(id) {
  const { data } = await axios.get(`/movie/${id}?language=en-US`, options);
  return data;
}
export async function movieCredits(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?language=en-US`,
    options
  );
  return data.cast;
}
export async function movieReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?language=en-US`,
    options
  );
  console.log("Revievs-data:", data);
  return data;
}
export async function searchMovie(search) {
  const { data } = await axios.get(
    `/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data.results;
}

// export const movieDetails = async (id) => {
//   try {
//     const { data } = await axios.get(
//       `${url}/movie/${id}?language=en-US${KEY}`,
//       options
//     );
//     console.log("Revievs-details:", data);
//     return data;
//   } catch (error) {
//     console.error("Error fetching movies details", error);
//     throw error;
//   }
// };
