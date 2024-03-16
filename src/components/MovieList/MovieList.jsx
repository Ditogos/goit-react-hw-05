import { useLocation } from "react-router-dom";
import NotFindImage from "../pages/NotFoundPage/NotFoundPage";
import css from "./MovieList.module.css";

import { MovieElemState } from "../MovieElemState/MovieElemState";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      <ul className={css.movieList}>
        {movies.map(
          (movie) =>
            NotFindImage && (
              <MovieElemState key={movie.id} movie={movie} state={location} />
            )
        )}
      </ul>
    </>
  );
}
