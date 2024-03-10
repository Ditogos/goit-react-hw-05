import { useState, useEffect } from "react";
import { trendingMovies } from "../Api/Api";
import MovieList from "../components/MovieList";
const HomePages = () => {
  const [films, setFilm] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const trendingFilms = await trendingMovies();
        setFilm(trendingFilms.results);
        setLoading(false);
      } catch (error) {
        console.error(error.massage);
      }
    };
    fetchFilms();
  }, []);
  console.log(films);
  return (
    <>
      <h1>Trending Movies</h1>
      {isLoading && <div>Loading....</div>}
      <MovieList movies={films} />
    </>
  );
};
export default HomePages;
