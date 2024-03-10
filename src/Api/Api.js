import axios from "axios";

const url = `https://api.themoviedb.org/3`;

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDdhMWI4MjAzMmRjMmZiZTgyZDNlODc5NDNhYWU2NiIsInN1YiI6IjY1ODQ3Y2ExOTc2YTIzMWFmY2EwNDJhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7v-g9fGLwsoueIPYdQKIwgi534ScdumahciLYWjYViA",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const trendingMovies = async () => {
  try {
    const { data } = await axios.get(
      "/trending/all/day?language=en-US",
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching trending movies", error);
    throw error;
  }
};

export const searchMovie = async (query) => {
  try {
    const { data } = await axios.get(
      `/search/movie?language=en-US&query=${query}`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error movies search", error);
    throw error;
  }
};

export const movieDetails = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}?language=en-US`, options);
    console.log("Revievs-details:", data);
    return data;
  } catch (error) {
    console.error("Error fetching movies details", error);
    throw error;
  }
};

export const movieCredits = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?language=en-US`,
      options
    );
    console.log("Revievs-credits:", data);
    return data;
  } catch (error) {
    console.error("Error fetching credits movies", error);
    throw error;
  }
};

export const movieReviews = async (id) => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?language=en-US`,
      options
    );
    console.log("Revievs-data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching reviews movies", error);
    throw error;
  }
};
