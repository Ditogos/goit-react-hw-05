import { Link, useLocation } from "react-router-dom";
import NotFindImage from "../pages/NotFoundPage";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.listImg}>
      {movies &&
        movies.map((movie) => (
          <li key={movie.id} className={css.listImg}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <img
                className={css.cardListImg}
                src={
                  movie.poster_path ? (
                    `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  ) : (
                    <NotFindImage />
                  )
                }
                alt={movies.title}
                width="250"
                height="300"
              />

              <p className={css.cardTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
    </ul>
  );
}
