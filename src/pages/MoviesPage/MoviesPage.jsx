import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import { getMoviesTitleSearch } from "../../Api/Api";
import Loader from "../../components/Loader/Loader";
import css from "./MoviesPage.module.css";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [params] = useSearchParams();
  const moviesTitle = params.get("query") ?? "";

  useEffect(() => {
    async function fetchDataMovie() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getMoviesTitleSearch(moviesTitle);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataMovie();
  }, [moviesTitle]);

  const handleSubmit = async (query) => {
    params.set("query", query);
  };
  return (
    <div className={css.containerStyles}>
      <MoviesFilter onSubmit={handleSubmit} />
      <div>
        {isLoading && <Loader />}
        {error && <p>Something went wrong...</p>}
        {movies.length === 0 && !isLoading && !error && moviesTitle && (
          <p>Please search for the correct movie :) </p>
        )}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
