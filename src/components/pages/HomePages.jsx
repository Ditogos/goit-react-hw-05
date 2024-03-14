import { useState, useEffect } from "react";
import { trendingMovies } from "../../Api/Api";
import MovieList from "../MovieList/MovieList";
import Loader from "../Loader/Loader";

const HomePages = () => {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchFilms() {
      try {
        setLoading(true);
        setFilm([]);
        const trendingFilms = await trendingMovies();
        setFilm(trendingFilms);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something wrong...</p>}
      <h1>Trending Movies</h1>
      {isLoading && <div>Loading....</div>}
      <MovieList movies={films} />
    </>
  );
};
export default HomePages;
