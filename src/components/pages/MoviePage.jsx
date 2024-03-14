import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import { getMoviesTitleSearch } from "../../Api/Api";
import Loader from "../Loader/Loader";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const moviesFilter = params.get("query") ?? "";

  useEffect(() => {
    async function getDataParams() {
      handleSubmit(moviesFilter);
    }

    getDataParams();
  }, [moviesFilter]);

  const handleSubmit = async (title) => {
    try {
      setMovies([]);
      setIsLoading(true);
      setError(null);
      const data = await getMoviesTitleSearch(title);

      setMovies(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MoviesFilter onSubmit={handleSubmit} />
      <div>
        {isLoading && <Loader />}
        {error && <p>Something wrong...</p>}
        {movies.length === 0 && !isLoading && !error && title && (
          <p>After your query information is absent</p>
        )}
      </div>
      <MovieList movies={movies} />
    </>
  );
}
