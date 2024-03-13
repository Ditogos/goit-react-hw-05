import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import { searchMovie } from "../../Api/Api";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [params] = useSearchParams();
  const moviesFilter = params.get("query") ?? "";

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await searchMovie(moviesFilter);
        setMovies(data);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [moviesFilter]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(moviesFilter.toLowerCase())
    );
  }, [moviesFilter, movies]);

  return (
    <>
      {isLoading && <div></div>}

      <MoviesFilter></MoviesFilter>
      <div>
        {filteredMovies.length > 0 && (
          <MovieList results={filteredMovies}></MovieList>
        )}
        {!filteredMovies.length && moviesFilter && (
          <p>After your query information is absent</p>
        )}
      </div>
    </>
  );
}
