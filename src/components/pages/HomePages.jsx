import { useState, useEffect } from "react";
import { trendingMovies } from "../../Api/Api";
import MovieList from "../MovieList/MovieList";
const HomePages = () => {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        setFilm([]);
        const trendingFilms = await trendingMovies();
        setFilm(trendingFilms);
      } catch (error) {
        console.error(error.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <div>Loading....</div>}
      <MovieList movies={films} />
    </>
  );
};
export default HomePages;
