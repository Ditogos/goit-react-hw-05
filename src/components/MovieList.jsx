import { Link, useLocation } from "react-router-dom";
import { MoviesItem } from "./MoviesItem";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ from: location }}>
                <MoviesItem dataFilm={movie} />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
